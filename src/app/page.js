'use client'

import ProductBox from "@/components/productBox";
import Image from "next/image";
import * as clothes from "@/app/data";

export default function Home() {
    return (
        <>
            <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
                <div className="md:col-span-4 md:row-span-2">
                    <a className="relative block aspect-square h-full w-full" href={`/product/${clothes.one.name}`}>
                    <div
                        className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-[#EAEAEA] hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                        <img alt="Lightweight Jacket"
                             className="relative h-full w-full transition duration-300 ease-in-out scale-75 group-hover:scale-90"
                             sizes="(min-width: 768px) 66vw, 100vw"
                             src={clothes.one.imageUrl}
                             style={{
                                 position: 'absolute',
                                 height: '100%',
                                 width: '100%',
                                 inset: '0px',
                                 color: 'transparent',
                                 objectFit: 'cover',
                             }}
                        />
                        <div
                            className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label lg:px-20 lg:pb-[35%]">
                            <div
                                className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                                <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                                    {clothes.one.name}
                                </h3>
                                <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                                    {clothes.one.price}₩
                                </p>
                            </div>
                        </div>
                    </div>
                </a></div>
                <div className="md:col-span-2 md:row-span-1">
                    <a className="relative block aspect-square h-full w-full" href={`/product/${clothes.two.name}`}>
                    <div
                        className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-[#EAEAEA] hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                        <img alt="Next.js Joggers" fetchPriority="high" decoding="async" data-nimg="fill"
                             className="relative h-full w-full transition duration-300 ease-in-out scale-75 group-hover:scale-90"
                             sizes="(min-width: 768px) 33vw, 100vw"
                             src={clothes.two.imageUrl}
                             style={{
                                 position: 'absolute',
                                 height: '100%',
                                 width: '100%',
                                 inset: '0px',
                                 color: 'transparent',
                                 objectFit: 'cover',
                             }}
                        />
                        <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                            <div
                                className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                                <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                                    {clothes.two.name}
                                </h3>
                                <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                                    {clothes.two.price}₩
                                </p>
                            </div>
                        </div>
                    </div>
                </a></div>
                <div className="md:col-span-2 md:row-span-1">
                    <a className="relative block aspect-square h-full w-full" href={`/product/${clothes.three.name}`}>
                    <div
                        className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-[#EAEAEA] hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                        <img alt="Purple Insulated Jacket" loading="lazy" decoding="async" data-nimg="fill"
                             className="relative h-full w-full transition duration-300 ease-in-out scale-75 group-hover:scale-90"
                             sizes="(min-width: 768px) 33vw, 100vw"
                             src={clothes.three.imageUrl}
                             style={{
                                 position: 'absolute',
                                 height: '100%',
                                 width: '100%',
                                 inset: '0px',
                                 color: 'transparent',
                                 objectFit: 'cover',
                             }}
                        />
                        <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                            <div
                                className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                                <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                                    {clothes.three.name}
                                </h3>
                                <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                                    {clothes.three.price}₩
                                </p>
                            </div>
                        </div>
                    </div>
                </a></div>
            </section>
            <div className="w-full overflow-x-auto pb-6 pt-1">
                <ul className="flex gap-4">
                    <ProductBox product={clothes.four}></ProductBox>
                    <ProductBox product={clothes.five}></ProductBox>
                    <ProductBox product={clothes.six}></ProductBox>
                    <ProductBox product={clothes.seven}></ProductBox>
                    <ProductBox product={clothes.eight}></ProductBox>
                    <ProductBox product={clothes.nine}></ProductBox>
                    <ProductBox product={clothes.ten}></ProductBox>
                    <ProductBox product={clothes.eleven}></ProductBox>
                    <ProductBox product={clothes.twelve}></ProductBox>
                    <ProductBox product={clothes.thirteen}></ProductBox>
                    <ProductBox product={clothes.fourteen}></ProductBox>
                </ul>
            </div>
        </>
    );
}
