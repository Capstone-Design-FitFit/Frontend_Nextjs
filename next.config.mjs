/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['photo-clothing-result-s3.s3.amazonaws.com'], // S3 버킷 도메인 추가
    },
    output:'standalone',
};

export default nextConfig;
