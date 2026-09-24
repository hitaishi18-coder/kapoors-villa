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
  // { title: "Rooms", href: "/room" },
  { title: "Gallery", href: "/gallery" },
  { title: "Menu", href: "/menu" },
  { title: "Experience", href: "/experience" },
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/40 bg-background/75 shadow-xl backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div
        className="
                    container mx-auto
                    flex
                    h-20
                    items-center
                    justify-between
                    px-4
                    sm:h-22
                    sm:px-5
                    md:h-24
                    md:px-6
                "
      >
        {/* LOGO */}

        <Link href="/" className="min-w-0 shrink-0">
          <motion.h1
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className="
                            whitespace-nowrap
                            font-display
                            text-lg
                            font-bold
                            tracking-tight
                            text-[#fcd34d]
                            sm:text-xl
                            md:text-3xl
                        "
          >
            Kapoor&apos;s Villa
          </motion.h1>
        </Link>

        {/* DESKTOP NAVIGATION */}

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
                      className={`relative flex items-center px-4 py-2 text-xs uppercase tracking-[0.25em] transition-colors duration-300 ${
                        active
                          ? "font-bold text-black dark:font-bold dark:text-white"
                          : "font-semibold text-black/80 hover:text-black dark:font-medium dark:text-muted-foreground dark:hover:text-foreground"
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

        {/* DESKTOP RIGHT ACTIONS */}

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
              className="
                                bg-[#fcd34d]
                                px-7
                                text-black
                                shadow-lg
                                shadow-[#fcd34d]/20
                                transition-all
                                duration-300
                                hover:bg-[#fcd34d]/80
                                hover:shadow-xl
                                hover:shadow-[#fcd34d]/30
                            "
                        >
                            <Link href="https://wa.me/918355992830">
                                Book Now
                            </Link>
                        </Button>
                    </motion.div>
                </div>

        {/* MOBILE MENU */}

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="
                                h-10
                                w-10
                                shrink-0
                                rounded-full
                                hover:bg-[#fcd34d]/10
                                lg:hidden
                            "
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="
                            w-[min(88vw,360px)]
                            border-l
                            border-border/40
                            bg-background/95
                            p-0
                            backdrop-blur-2xl
                        "
          >
            {/* ACCESSIBILITY */}

            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <div className="flex h-full flex-col">
              {/* MOBILE MENU HEADER */}

              <div className="border-b border-border/40 px-6 pb-6 pt-8">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="inline-block"
                >
                  <motion.h2
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    className="
                                            whitespace-nowrap
                                            font-display
                                            text-xl
                                            font-bold
                                            tracking-tight
                                            text-[#fcd34d]
                                        "
                  >
                    Kapoor&apos;s Villa
                  </motion.h2>
                </Link>
              </div>

              {/* MOBILE LINKS */}

              <nav className="flex-1 overflow-y-auto px-5 py-6">
                <div className="flex flex-col gap-1">
                  {links.map((link, index) => {
                    const active = pathname === link.href;

                    return (
                      <motion.div
                        key={link.href}
                        initial={{
                          opacity: 0,
                          x: 20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.04,
                          duration: 0.25,
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={`block min-h-12 rounded-xl px-4 py-3 text-sm uppercase tracking-[0.2em] transition-all duration-300 ${
                            active
                              ? "bg-[#fcd34d]/10 font-semibold text-[#fcd34d]"
                              : "text-muted-foreground hover:bg-accent hover:text-foreground"
                          }`}
                        >
                          {link.title}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </nav>

              {/* MOBILE ACTIONS */}

              <div
                className="
                                    border-t
                                    border-border/40
                                    px-6
                                    pb-6
                                    pt-6
                                "
              >
                <div className="space-y-4">
                  {/* APPEARANCE */}

                  <div
                    className="
                                            flex
                                            min-h-12
                                            items-center
                                            justify-between
                                            rounded-xl
                                            bg-accent/40
                                            px-4
                                        "
                  >
                    <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      Appearance
                    </span>

                    <ModeToggle />
                  </div>

                  {/* BOOK BUTTON */}

                  <Button
                    asChild
                    size="lg"
                    className="
                                            h-12
                                            w-full
                                            rounded-full
                                            bg-[#fcd34d]
                                            font-medium
                                            text-black
                                            shadow-lg
                                            shadow-[#fcd34d]/20
                                            transition-all
                                            duration-300
                                            hover:bg-[#fcd34d]/80
                                        "
                  >
                    <Link href="https://wa.me/918355992830" onClick={() => setOpen(false)}>
                      Book Your Stay
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
