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
              <ul className="flex animate-carousel gap-4">
                  <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                      <a className="relative h-full w-full" href="/acme-rainbow-sticker">
                          <div
                              className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                              <img alt="Acme Rainbow Sticker" loading="lazy" decoding="async" data-nimg="fill"
                                   className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                   srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w"
                                   src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75"
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
                                      <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Acme
                                          Rainbow Sticker</h3><p
                                      className="flex-none rounded-full bg-blue-600 p-2 text-white">$4.00<span
                                      className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div>
                              </div>
                          </div>
                      </a>
                  </li>
                  <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                      <a className="relative h-full w-full" href="/matte-black-magic-mug">
                          <div
                              className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                              <img alt="Lightweight Jacket" loading="lazy" decoding="async" data-nimg="fill"
                                   className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                   srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=3840&amp;q=75 3840w"
                                   src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=3840&amp;q=75"
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
                                      <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Lightweight
                                          Jacket</h3><p
                                      className="flex-none rounded-full bg-blue-600 p-2 text-white">$249.99<span
                                      className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div>
                              </div>
                          </div>
                      </a>
                  </li>
                  <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                      <a className="relative h-full w-full" href="/womens-joggers">
                          <div
                              className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                              <img alt="Next.js Joggers" loading="lazy" decoding="async" data-nimg="fill"
                                   className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                   srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=3840&amp;q=75 3840w"
                                   src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=3840&amp;q=75"
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
                      </a>
                  </li>
                  <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                      <a className="relative h-full w-full" href="/unisex-fleece-hoodie">
                          <div
                              className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                              <img alt="Unisex Fleece Hoodie" loading="lazy" decoding="async" data-nimg="fill"
                                   className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                   srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=3840&amp;q=75 3840w"
                                   src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=3840&amp;q=75"
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
                                      <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Unisex
                                          Fleece Hoodie</h3><p
                                      className="flex-none rounded-full bg-blue-600 p-2 text-white">$41.50<span
                                      className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div>
                              </div>
                          </div>
                      </a>
                  </li>
                  <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                      <a className="relative h-full w-full" href="/short-sleeve-t-shirt">
                          <div
                              className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                              <img alt="Next.js Short sleeve t-shirt" loading="lazy" decoding="async" data-nimg="fill"
                                   className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                   srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=3840&amp;q=75 3840w"
                                   src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=3840&amp;q=75"
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
                                          Short sleeve t-shirt</h3><p
                                      className="flex-none rounded-full bg-blue-600 p-2 text-white">$26.00<span
                                      className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div>
                              </div>
                          </div>
                      </a>
                  </li>
                  <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                      <a className="relative h-full w-full" href="/unisex-joggers">
                          <div
                              className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                              <img alt="Unisex Joggers" loading="lazy" decoding="async" data-nimg="fill"
                                   className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                   srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=3840&amp;q=75 3840w"
                                   src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=3840&amp;q=75"
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
                                      <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Unisex
                                          Joggers</h3><p
                                      className="flex-none rounded-full bg-blue-600 p-2 text-white">$34.00<span
                                      className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div>
                              </div>
                          </div>
                      </a>
                  </li>
                  <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                      <a className="relative h-full w-full" href="/purple-insulated-jacket">
                          <div
                              className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                              <img alt="Purple Insulated Jacket" loading="lazy" decoding="async" data-nimg="fill"
                                   className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                   srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=3840&amp;q=75 3840w"
                                   src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=3840&amp;q=75"
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
                                      <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Purple
                                          Insulated Jacket</h3><p
                                      className="flex-none rounded-full bg-blue-600 p-2 text-white">$500.00<span
                                      className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div>
                              </div>
                          </div>
                      </a>
                  </li>
                  <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                      <a className="relative h-full w-full" href="/acme-rainbow-sticker">
                          <div
                              className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                              <img alt="Acme Rainbow Sticker" loading="lazy" decoding="async" data-nimg="fill"
                                   className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                   srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w"
                                   src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75"
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
                                      <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Acme
                                          Rainbow Sticker</h3><p
                                      className="flex-none rounded-full bg-blue-600 p-2 text-white">$4.00<span
                                      className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div>
                              </div>
                          </div>
                      </a>
                  </li>
                  <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                      <a className="relative h-full w-full" href="/matte-black-magic-mug">
                          <div
                              className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                              <img alt="Lightweight Jacket" loading="lazy" decoding="async" data-nimg="fill"
                                   className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                   srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=3840&amp;q=75 3840w"
                                   src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=3840&amp;q=75"
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
                                      <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Lightweight
                                          Jacket</h3><p
                                      className="flex-none rounded-full bg-blue-600 p-2 text-white">$249.99<span
                                      className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div>
                              </div>
                          </div>
                      </a>
                  </li>
                  <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                      <a className="relative h-full w-full" href="/womens-joggers">
                          <div
                              className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                              <img alt="Next.js Joggers" loading="lazy" decoding="async" data-nimg="fill"
                                   className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                   srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=3840&amp;q=75 3840w"
                                   src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=3840&amp;q=75"
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
                      </a>
                  </li>
                  <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                      <a className="relative h-full w-full" href="/unisex-fleece-hoodie">
                          <div
                              className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                              <img alt="Unisex Fleece Hoodie" loading="lazy" decoding="async" data-nimg="fill"
                                   className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                   srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=3840&amp;q=75 3840w"
                                   src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=3840&amp;q=75"
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
                                      <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Unisex
                                          Fleece Hoodie</h3><p
                                      className="flex-none rounded-full bg-blue-600 p-2 text-white">$41.50<span
                                      className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div>
                              </div>
                          </div>
                      </a>
                  </li>
                  <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                      <a className="relative h-full w-full" href="/short-sleeve-t-shirt">
                          <div
                              className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                              <img alt="Next.js Short sleeve t-shirt" loading="lazy" decoding="async" data-nimg="fill"
                                   className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                   srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=3840&amp;q=75 3840w"
                                   src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F115%2F408%2Fmockup-8ffbef51__62574__20303.1684861378.png&amp;w=3840&amp;q=75"
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
                                          Short sleeve t-shirt</h3><p
                                      className="flex-none rounded-full bg-blue-600 p-2 text-white">$26.00<span
                                      className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div>
                              </div>
                          </div>
                      </a>
                  </li>
                  <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                      <a className="relative h-full w-full" href="/unisex-joggers">
                          <div
                              className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                              <img alt="Unisex Joggers" loading="lazy" decoding="async" data-nimg="fill"
                                   className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                   srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=3840&amp;q=75 3840w"
                                   src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F114%2F384%2Fmockup-9fc4c1cf__88683__75745.1684861377.png&amp;w=3840&amp;q=75"
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
                                      <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Unisex
                                          Joggers</h3><p
                                      className="flex-none rounded-full bg-blue-600 p-2 text-white">$34.00<span
                                      className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div>
                              </div>
                          </div>
                      </a>
                  </li>
                  <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                      <a className="relative h-full w-full" href="/purple-insulated-jacket">
                          <div
                              className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                              <img alt="Purple Insulated Jacket" loading="lazy" decoding="async" data-nimg="fill"
                                   className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                   srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=3840&amp;q=75 3840w"
                                   src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=3840&amp;q=75"
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
                                      <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Purple
                                          Insulated Jacket</h3><p
                                      className="flex-none rounded-full bg-blue-600 p-2 text-white">$500.00<span
                                      className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div>
                              </div>
                          </div>
                      </a>
                  </li>
                  <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                      <a className="relative h-full w-full" href="/acme-rainbow-sticker">
                          <div
                              className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                              <img alt="Acme Rainbow Sticker" loading="lazy" decoding="async" data-nimg="fill"
                                   className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                   srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w"
                                   src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75"
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
                                      <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Acme
                                          Rainbow Sticker</h3><p
                                      className="flex-none rounded-full bg-blue-600 p-2 text-white">$4.00<span
                                      className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div>
                              </div>
                          </div>
                      </a>
                  </li>
                  <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                      <a className="relative h-full w-full" href="/matte-black-magic-mug">
                          <div
                              className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                              <img alt="Lightweight Jacket" loading="lazy" decoding="async" data-nimg="fill"
                                   className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                   srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=3840&amp;q=75 3840w"
                                   src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F126%2F409%2FMen-Jacket-Front-Black__15466__96550.1684861378.png&amp;w=3840&amp;q=75"
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
                                      <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Lightweight
                                          Jacket</h3><p
                                      className="flex-none rounded-full bg-blue-600 p-2 text-white">$249.99<span
                                      className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div>
                              </div>
                          </div>
                      </a>
                  </li>
                  <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                      <a className="relative h-full w-full" href="/womens-joggers">
                          <div
                              className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                              <img alt="Next.js Joggers" loading="lazy" decoding="async" data-nimg="fill"
                                   className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                   srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=3840&amp;q=75 3840w"
                                   src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F125%2F383%2Fmockup-d4159f04__53247__61311.1684861377.png&amp;w=3840&amp;q=75"
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
                      </a>
                  </li>
                  <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                      <a className="relative h-full w-full" href="/unisex-fleece-hoodie">
                          <div
                              className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                              <img alt="Unisex Fleece Hoodie" loading="lazy" decoding="async" data-nimg="fill"
                                   className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                   sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                   srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=3840&amp;q=75 3840w"
                                   src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F124%2F398%2Fmockup-408c7cb0__30956__93507.1684861376.png&amp;w=3840&amp;q=75"
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
                                      <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Unisex
                                          Fleece Hoodie</h3><p
                                      className="flex-none rounded-full bg-blue-600 p-2 text-white">$41.50<span
                                      className="ml-1 inline hidden @[275px]/label:inline">USD</span></p></div>
                              </div>
                          </div>
                      </a>
                  </li>
              </ul>
          </div>
      </>
  );
}
