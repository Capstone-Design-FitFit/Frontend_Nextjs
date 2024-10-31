## Stage 1: Build the Next.js app
#FROM node:18 AS builder
#
#WORKDIR /app
#
## Package.json과 package-lock.json을 복사
#COPY package*.json ./
#
## Next.js 의존성 설치
#RUN npm install
#
## Next.js 소스 코드 복사
#COPY . .
#
## Next.js 빌드
#RUN npm run build
#
## Stage 2: Set up Nginx
#FROM nginx:alpine
#
## 기본 nginx 설정 파일을 삭제한다. (custom 설정과 충돌 방지)
#RUN rm /etc/nginx/conf.d/default.conf
#
## Nginx 설정 복사 (config/nginx.conf 파일 위치는 직접 지정)
#COPY nginx/nginx.conf /etc/nginx/nginx.conf
#
## Next.js 빌드 파일을 Nginx로 복사
#COPY --from=builder /app/.next /usr/share/nginx/html
#
## Next.js의 static 파일 복사
#COPY --from=builder /app/public /usr/share/nginx/html/public
#
## 기본 Nginx 포트
#EXPOSE 80
#
#CMD ["nginx", "-g", "daemon off;"]

## Stage 1: Build the Next.js app
#FROM node:18 AS builder
#
#WORKDIR /app
#
## Package.json과 package-lock.json을 복사
#COPY package*.json ./
#
## Next.js 의존성 설치
#RUN npm install
#
## Next.js 소스 코드 복사
#COPY . .
#
## Next.js 빌드
#RUN npm run build
#
## Stage 2: Set up Node.js server for SSR
#FROM node:18-alpine AS runner
#
#WORKDIR /app
#
## 빌드된 Next.js 파일들을 복사
#COPY --from=builder /app/.next ./.next
#COPY --from=builder /app/public ./public
#COPY --from=builder /app/package.json ./package.json
#
## 프로덕션 모드에서 Next.js 실행
#ENV NODE_ENV production
#
## Next.js 서버 실행 포트
#EXPOSE 3000
#
## Next.js 서버 실행
#CMD ["npm", "start"]


FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED=1

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
# 아래거 서버 ip
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]