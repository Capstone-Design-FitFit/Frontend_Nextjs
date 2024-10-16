'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import Image from 'next/image'

// 예제 제품 데이터
const productData = [
    { id: 'pants', displayName: 'Stylish Pants', imageUrl: '/images/pants.jpg', price: '$20.00' },
    { id: 'shirt', displayName: 'Cool Shirt', imageUrl: '/images/shirt.jpg', price: '$15.00' },
    // 다른 제품 데이터...
];

const ProductPage = ({ product }) => {
    const router = useRouter();
    const pathname = usePathname();
    const productName = pathname.split('/')[2];
    const imageURL = `/images/${productName}.jpg`

    if (router.isFallback){
        return <Skeleton className="w-[100px] h-[20px] rounded-full" />;
    }

    return (
        <div className="mx-auto max-w-screen-2xl px-4">
            <div
                className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
                <div className="h-full w-full basis-full lg:basis-4/6">
                    <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
                        <img
                            alt={productName}
                            src={imageURL}
                            fetchPriority="high"
                            decoding="async"
                            data-nimg="fill"
                            className="h-full w-full object-contain"
                            sizes="(min-width: 1024px) 66vw, 100vw"
                            style={{
                                position: 'absolute',
                                height: '100%',
                                width: '100%',
                                inset: '0px',
                                color: 'transparent',
                            }}
                        />
                    </div>
                </div>
                <div className="basis-full lg:basis-2/6">
                    <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
                        <h1 className="mb-2 mt-4 text-5xl font-medium">
                            Lightweight Jacket
                        </h1>
                        <div className="mt-4 mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
                            <p>
                                249099
                                <span className="ml-1 inline">
                                    WON
                                </span>
                            </p>
                        </div>
                    </div>
                    <div
                        className="prose mx-auto max-w-6xl text-base leading-7 text-black prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-black prose-a:underline hover:prose-a:text-neutral-300 prose-strong:text-black prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6 dark:text-white dark:prose-headings:text-white dark:prose-a:text-white dark:prose-strong:text-white mb-6 text-sm leading-tight dark:text-white/[60%]">
                        <p>Add a little zing to your winter wardrobe with this vibrant Winter-breaker Jacket. With a
                            brushed fleece inside, and a relaxed unisex fit, this jacket is just the stuff of the
                            dreams, so be quick to grab yourself one!<br/><br/><span>Long sleeve ripstop jacket colorblocked in black. Rough pattern in obsidian black and brown printed throughout. Printed graphic in white throughout. Logo-woven webbing trim in white and black throughout. Bungee-style drawstring at hood featuring rubberized logo hardware. Zip closure at front. Rubberized logo appliqué at chest. Welt pockets and textile logo patch in orange at waist. Elasticized cuffs. Partially lined. Black hardware.</span>
                        </p>
                    </div>
                    <Link href = {{
                        pathname: '/camera-capture',
                        query: { clothId : "t-shirt"},}}
                        className="relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:bg-blue-500">
                        Start Try On!
                    </Link>
                </div>
            </div>
            <div className="py-8">
                <h2 className="mb-4 text-2xl font-bold">
                    Related Products
                </h2>
                <ul className="flex w-full gap-4 overflow-x-auto pt-1">
                    <li className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
                        <a className="relative h-full w-full" href="/purple-insulated-jacket">
                        <div
                            className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                            <img alt="Purple Insulated Jacket" loading="lazy" decoding="async" data-nimg="fill"
                                 className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                                 sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                                 src="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F112%2F376%2F202358M178120_2__20895.1598881141.jpg&amp;w=3840&amp;q=75"
                                 style={{
                                     position: 'absolute',
                                     height: '100%',
                                     width: '100%',
                                     inset: '0px',
                                     color: 'transparent',
                                 }}/>
                            <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                                <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                                    <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                                        Purple Insulated Jacket
                                    </h3>
                                    <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                                        $500.00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a></li>
                </ul>
            </div>
        </div>
    );
}

export default ProductPage;