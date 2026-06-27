"use client";

import Link from "next/link";

import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

import { FaWhatsapp, FaInstagram } from "react-icons/fa6";

import { motion } from "motion/react";

const quickLinks = [
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

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t bg-background">
            {/* Background Glow */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.06),transparent_70%)]" />

            <div className="container relative mx-auto px-6 py-24">
                <div className="grid gap-16 lg:grid-cols-4">
                    {/* Brand */}

                    <div className="lg:col-span-2">
                        <motion.h2
                            whileHover={{
                                scale: 1.03,
                            }}
                            className="font-serif text-5xl font-bold text-amber-500"
                        >
                            Kapoor&apos;s Villa
                        </motion.h2>

                        <p className="mt-8 max-w-lg leading-8 text-muted-foreground">
                            Discover refined hospitality, elegant interiors,
                            breathtaking surroundings and personalized service
                            designed to make every stay unforgettable.
                        </p>

                        <div className="mt-10 flex gap-4">
                            <motion.a
                                whileHover={{ y: -5, scale: 1.1 }}
                                href="https://instagram.com/yourpage"
                                className="rounded-full border border-border p-3 hover:border-amber-500"
                            >
                                <FaInstagram className="h-5 w-5" />
                            </motion.a>

                            <motion.a
                                whileHover={{ y: -5, scale: 1.1 }}
                                href="https://wa.me/919820292830"
                                className="rounded-full border border-border p-3 hover:border-green-500"
                            >
                                <FaWhatsapp className="h-5 w-5 text-green-500" />
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}

                    <div>
                        <h3 className="font-serif text-2xl">Explore</h3>

                        <div className="mt-8 flex flex-col gap-5">
                            {quickLinks.map((link) => (
                                <motion.div
                                    key={link.href}
                                    whileHover={{
                                        x: 5,
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        className="group flex items-center justify-between text-muted-foreground transition-colors hover:text-amber-500"
                                    >
                                        {link.title}

                                        <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}

                    <div>
                        <h3 className="font-serif text-2xl">Contact</h3>

                        <div className="mt-8 space-y-6">
                            <motion.div
                                whileHover={{
                                    x: 5,
                                }}
                                className="flex items-start gap-4"
                            >
                                <MapPin className="mt-1 h-5 w-5 text-amber-500" />

                                <p className="leading-7 text-muted-foreground">
                                    Kapoor&apos;s Villa
                                    <br />
                                    Lonavala, Maharashtra
                                    <br />
                                    India
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{
                                    x: 5,
                                }}
                                className="flex items-center gap-4"
                            >
                                <Phone className="h-5 w-5 text-amber-500" />

                                <a
                                    href="tel:+919820292830"
                                    className="text-muted-foreground transition-colors hover:text-amber-500"
                                >
                                    +91 98202 92830
                                </a>
                            </motion.div>

                            <motion.div
                                whileHover={{
                                    x: 5,
                                }}
                                className="flex items-center gap-4"
                            >
                                <Mail className="h-5 w-5 text-amber-500" />

                                <a
                                    href="mailto:reservations@kapoorvilla.com"
                                    className="text-muted-foreground transition-colors hover:text-amber-500"
                                >
                                    reservations@kapoorvilla.com
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Divider */}

                <div className="my-16 h-px bg-border" />

                {/* Bottom */}

                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <p className="text-center text-sm text-muted-foreground md:text-left">
                        © {new Date().getFullYear()} Kapoor&apos;s Villa.
                        Crafted with elegance.
                    </p>

                    <motion.button
                        whileHover={{
                            y: -5,
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                        className="rounded-full border border-border px-6 py-3 text-sm uppercase tracking-[0.25em] transition-colors hover:border-amber-500 hover:text-amber-500"
                    >
                        Back to Top ↑
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
