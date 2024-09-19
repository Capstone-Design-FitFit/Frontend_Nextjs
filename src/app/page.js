import ProductBox from "@/components/productBox";
import Image from "next/image";

export default function Home() {
  return (
      <>
          <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
              <div className="md:col-span-4 md:row-span-2"><a className="relative block aspect-square h-full w-full"
                                                              href="/matte-black-magic-mug">
                  <div
                      className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                      <img alt="Lightweight Jacket" fetchPriority="high" decoding="async" data-nimg="fill"
                           className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                           sizes="(min-width: 768px) 66vw, 100vw"
                           src="/"
                           style={{
                               position: 'absolute',
                               height: '100%',
                               width: '100%',
                               inset: '0px',
                               color: 'transparent',
                           }}/>
                      <div
                          className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label lg:px-20 lg:pb-[35%]">
                          <div
                              className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Lightweight
                                  Jacket</h3><p
                              className="flex-none rounded-full bg-blue-600 p-2 text-white">$249.99<span
                              className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div>
                      </div>
                  </div>
              </a></div>
              <div className="md:col-span-2 md:row-span-1"><a className="relative block aspect-square h-full w-full"
                                                              href="/womens-joggers">
                  <div
                      className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                      <img alt="Next.js Joggers" fetchPriority="high" decoding="async" data-nimg="fill"
                           className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                           sizes="(min-width: 768px) 33vw, 100vw"
                           src="/"
                           style={{
                               position: 'absolute',
                               height: '100%',
                               width: '100%',
                               inset: '0px',
                               color: 'transparent',
                           }}/>
                      <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                          <div
                              className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Next.js
                                  Joggers</h3><p
                              className="flex-none rounded-full bg-blue-600 p-2 text-white">$54.00<span
                              className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div>
                      </div>
                  </div>
              </a></div>
              <div className="md:col-span-2 md:row-span-1"><a className="relative block aspect-square h-full w-full"
                                                              href="/purple-insulated-jacket">
                  <div
                      className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                      <img alt="Purple Insulated Jacket" loading="lazy" decoding="async" data-nimg="fill"
                           className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                           sizes="(min-width: 768px) 33vw, 100vw"
                           src="/"
                           style={{
                               position: 'absolute',
                               height: '100%',
                               width: '100%',
                               inset: '0px',
                               color: 'transparent',
                           }}
                      />
                      <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                          <div
                              className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Purple
                                  Insulated
                                  Jacket</h3><p
                              className="flex-none rounded-full bg-blue-600 p-2 text-white">$500.00<span
                              className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div>
                      </div>
                  </div>
              </a></div>
          </section>
          <div className=" w-full overflow-x-auto pb-6 pt-1">
              <ul className="flex snap-center gap-4">
                  <ProductBox></ProductBox>
                  <ProductBox></ProductBox>
                  <ProductBox></ProductBox>
                  <ProductBox></ProductBox>
                  <ProductBox></ProductBox>
                  <ProductBox></ProductBox>
              </ul>
          </div>
      </>
  );
}
