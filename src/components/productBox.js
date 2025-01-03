import Link from 'next/link';
import Image from 'next/image';

const ProductBox = ({ product }) => {

    return (
        <li key = {product.name} className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
            <Link className="relative h-full w-full" href={`/product/${product.name}`}>
                <div
                    className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-[#EAEAEA] hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                    <Image alt={product.displayName} loading="lazy" decoding="async" data-nimg="fill"
                         className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                         sizes="(min-width: 1024px) 25vw, (min-width: 768p  x) 33vw, 50vw"
                         width={100}
                           height={100}
                         src={product.imageUrl}
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
                            <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                                {product.name}
                            </h3>
                            <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                                {product.price}₩
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default ProductBox;
