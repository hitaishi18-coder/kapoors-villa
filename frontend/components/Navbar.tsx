"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Rooms",
        href: "/rooms",
    },
    {
        title: "Gallery",
        href: "/gallery",
    },
    {
        title: "Menu",
        href: "/menu",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
            <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
                {/* Logo */}

                <Link href="/" className="shrink-0">
                    <h1 className="font-display text-2xl font-bold tracking-tight text-amber-500 md:text-4xl">
                        Kapoor&apos;s Villa
                    </h1>
                </Link>

                {/* Desktop Navigation */}

                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList className="gap-2">
                        {links.map((link) => {
                            const active = pathname === link.href;

                            return (
                                <NavigationMenuItem key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`group relative px-3 py-2 text-xs font-medium uppercase tracking-[0.25em] transition-colors duration-300 ${
                                            active
                                                ? "text-amber-500"
                                                : "text-muted-foreground hover:text-foreground"
                                        }`}
                                    >
                                        {link.title}

                                        <span
                                            className={`absolute bottom-0 left-0 h-px bg-amber-500 transition-all duration-300 ${
                                                active
                                                    ? "w-full"
                                                    : "w-0 group-hover:w-full"
                                            }`}
                                        />
                                    </Link>
                                </NavigationMenuItem>
                            );
                        })}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Right Actions */}

                <div className="hidden items-center gap-3 lg:flex">
                    {/* Theme Toggle Here */}

                    {/* <ModeToggle /> */}

                    <Button
                        asChild
                        variant="outline"
                        className="border-amber-500/60 bg-transparent text-amber-500 hover:border-amber-500 hover:bg-amber-500 hover:text-black"
                    >
                        <Link href="/book">Book Now</Link>
                    </Button>
                </div>

                {/* Mobile Menu */}

                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-[320px]">
                        <div className="mt-12 flex flex-col space-y-6">
                            {links.map((link) => {
                                const active = pathname === link.href;

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`text-sm uppercase tracking-[0.2em] transition-colors ${
                                            active
                                                ? "text-amber-500"
                                                : "text-muted-foreground hover:text-foreground"
                                        }`}
                                    >
                                        {link.title}
                                    </Link>
                                );
                            })}

                            <div className="pt-4">
                                <Button asChild className="w-full">
                                    <Link href="/book">Book Now</Link>
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
