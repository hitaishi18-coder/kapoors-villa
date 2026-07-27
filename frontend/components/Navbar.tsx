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
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Rooms", href: "/room" },
  { title: "Gallery", href: "/gallery" },
  { title: "Menu", href: "/menu" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/40 bg-background/75 shadow-xl backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-24 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <motion.h1
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className="font-display text-xl font-bold tracking-tight text-[#fcd34d] md:text-3xl"
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
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className={`relative flex items-center px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] transition-colors duration-300 ${
                        active
                          ? "text-[#fcd34d]"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.title}

                      {active && (
                        <motion.span
                          layoutId="navbar-indicator"
                          className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#fcd34d]"
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
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.35 }}
          >
            <ModeToggle />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <Button
              asChild
              className="bg-[#fcd34d] px-7 text-black shadow-lg shadow-[#fcd34d]/20 transition-all duration-300 hover:bg-[#fcd34d]/80 hover:shadow-xl hover:shadow-[#fcd34d]/30"
            >
              <Link href="/contact">Book Now</Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[320px] border-l border-border/40 bg-background/95 p-4 backdrop-blur-2xl"
          >
            {/* Accessible title for screen readers */}
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <div className="mt-14 flex flex-col px-4">
              {links.map((link) => {
                const active = pathname === link.href;

                return (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-sm uppercase tracking-[0.25em] transition-all duration-300 ${
                        active
                          ? "bg-[#fcd34d]/10 text-[#fcd34d] font-semibold"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }`}
                    >
                      {link.title}
                    </Link>
                  </div>
                );
              })}

              <div className="mt-10 space-y-4 border-t border-border/40 pt-8">
                <div className="flex items-center justify-between px-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Appearance
                  </span>

                  <ModeToggle />
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full bg-[#fcd34d] font-medium text-black hover:bg-[#fcd34d]/80"
                >
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Book Your Stay
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
