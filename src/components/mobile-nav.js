"use client"

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Home, Package, Package2, PanelLeft, Users2 } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <div className="block flex-none md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="sm:hidden">
                        <PanelLeft className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href="/"
                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                            onClick={() => setOpen(false)} // 링크 클릭 시 Sheet 닫기
                        >
                            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                        </Link>
                        <Link
                            href="/"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                            onClick={() => setOpen(false)} // 링크 클릭 시 Sheet 닫기
                        >
                            <Home className="h-5 w-5" />
                            Home
                        </Link>
                        <Link
                            href="/search/clothing"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                            onClick={() => setOpen(false)} // 링크 클릭 시 Sheet 닫기
                        >
                            <Package className="h-5 w-5" />
                            Clothing
                        </Link>
                        <Link
                            href="/my-page"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                            onClick={() => setOpen(false)} // 링크 클릭 시 Sheet 닫기
                        >
                            <Users2 className="h-5 w-5" />
                            MyPage
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
}
