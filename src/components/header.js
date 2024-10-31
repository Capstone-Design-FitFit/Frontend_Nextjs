import Link from "next/link";
import UserMenu from "@/components/userMenu";
import MobileNav from "@/components/mobile-nav";

export default function Header() {

    return (
        <nav className="relative flex items-center justify-between p-4 lg:px-6">
            {/*모바일 화면에서 나오는 메뉴바*/}
            <MobileNav></MobileNav>
            <div className="flex w-full items-center">
                <div className="flex w-full md:w-1/3">
                    <div
                        className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
                        <a  href="/" className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Acme Store logo" viewBox="0 0 32 32"
                                 className="h-4 w-4 fill-black dark:fill-white h-[16px] w-[16px]">
                                <path d="M4 0H28V4H8V12H24V16H8V28H4V0Z"></path>
                                <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                            </svg>
                        </a>
                        <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">FitFit</div>
                    </div>
                    <ul className="hidden gap-6 text-sm md:flex md:items-center">
                        <li>
                            <a
                                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                                href="/search/clothing">
                                Clothing
                            </a>
                            <a
                                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300 m-6"
                                href="/my-page">
                                MyPage
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="hidden justify-center md:flex md:w-1/3">
                    <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
                        <input type="text"
                               placeholder="Search for products..."
                               autoComplete="off"
                               className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
                               name="search" value=""
                        />
                        <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="h-4">
                                <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                            </svg>
                        </div>
                    </form>
                </div>
                <div className="flex justify-end md:w-1/3">
                    <UserMenu></UserMenu>
                </div>
            </div>
        </nav>
    )
}