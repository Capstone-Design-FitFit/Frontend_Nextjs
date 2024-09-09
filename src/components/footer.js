export default function Footer() {
    return (
        <div
            className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm dark:border-neutral-700 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
            <div><a className="flex items-center gap-2 text-black dark:text-white md:pt-1" href="/">
                <div
                    className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[30px] w-[30px] rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Acme Store logo" viewBox="0 0 32 32"
                         className="h-4 w-4 fill-black dark:fill-white h-[10px] w-[10px]">
                        <path d="M4 0H28V4H8V12H24V16H8V28H4V0Z"></path>
                        <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                    </svg>
                </div>
                <span className="uppercase">FITFIT</span></a></div>
            <nav>
                <ul>
                    <li><a
                        className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm"
                        href="/about-us">About Us</a></li>
                    <li><a
                        className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm"
                        href="/contact-us">Contact Information</a></li>
                </ul>
            </nav>
            <div className="md:ml-auto"><a aria-label="Github Repository"
                                           href="https://github.com/Capstone-Design-FitFit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     shape-rendering="geometricPrecision" className="h-6">
                    <path
                        d="M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21227 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21227 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C18.2072 23.1519 20.2773 21.5822 21.7438 19.4882C23.2103 17.3942 23.9994 14.8814 24 12.3035C24 5.50583 18.63 0 12 0Z"></path>
                </svg>
            </a></div>
        </div>
    )
}