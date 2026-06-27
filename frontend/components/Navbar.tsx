"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { motion } from "motion/react";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { ModeToggle } from "./ModeToggle";

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
        href: "/room",
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

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{
                y: -80,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "border-b border-border/40 bg-background/75 shadow-xl backdrop-blur-2xl"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto flex h-24 items-center justify-between px-6">
                {/* Logo */}

                <Link href="/" className="shrink-0">
                    <motion.h1
                        whileHover={{
                            scale: 1.04,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="font-display text-2xl font-bold tracking-tight text-amber-500 md:text-4xl"
                    >
                        Kapoor&apos;s Villa
                    </motion.h1>
                </Link>

                {/* Desktop Navigation */}

                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList className="gap-3">
                        {links.map((link) => {
                            const active = pathname === link.href;

                            return (
                                <NavigationMenuItem key={link.href}>
                                    <motion.div
                                        whileHover={{
                                            y: -2,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`relative flex items-center px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] transition-colors duration-300 ${
                                                active
                                                    ? "text-amber-500"
                                                    : "text-muted-foreground hover:text-foreground"
                                            }`}
                                        >
                                            {link.title}

                                            {active && (
                                                <motion.span
                                                    layoutId="navbar-indicator"
                                                    className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-amber-500"
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 350,
                                                        damping: 30,
                                                    }}
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                </NavigationMenuItem>
                            );
                        })}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Right Actions */}

                <div className="hidden items-center gap-3 lg:flex">
                    <motion.div
                        whileHover={{
                            rotate: 180,
                        }}
                        transition={{
                            duration: 0.35,
                        }}
                    >
                        <ModeToggle />
                    </motion.div>

                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            y: -2,
                        }}
                        whileTap={{
                            scale: 0.96,
                        }}
                    >
                        <Button
                            asChild
                            className="rounded-full bg-amber-500 px-7 text-black shadow-lg shadow-amber-500/20 transition-all duration-300 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/30"
                        >
                            <Link href="/book">Book Now</Link>
                        </Button>
                    </motion.div>
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

                    <SheetContent
                        side="right"
                        className="w-[320px] border-l border-border/40 bg-background/95 backdrop-blur-2xl"
                    >
                        <motion.div
                            initial={{
                                x: 30,
                                opacity: 0,
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.45,
                            }}
                            className="mt-14 flex flex-col"
                        >
                            {links.map((link, index) => {
                                const active = pathname === link.href;

                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{
                                            x: 30,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            x: 0,
                                            opacity: 1,
                                        }}
                                        transition={{
                                            delay: index * 0.08,
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`block rounded-lg px-4 py-3 text-sm uppercase tracking-[0.25em] transition-all duration-300 ${
                                                active
                                                    ? "bg-amber-500/10 text-amber-500"
                                                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                                            }`}
                                        >
                                            {link.title}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            <div className="mt-10 space-y-4 border-t pt-8">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                        Appearance
                                    </span>

                                    <ModeToggle />
                                </div>

                                <motion.div
                                    whileHover={{
                                        scale: 1.02,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                >
                                    <Button
                                        asChild
                                        size="lg"
                                        className="w-full rounded-full bg-amber-500 text-black hover:bg-amber-400"
                                    >
                                        <Link href="/book">Book Your Stay</Link>
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </SheetContent>
                </Sheet>
            </div>
        </motion.header>
    );
}
