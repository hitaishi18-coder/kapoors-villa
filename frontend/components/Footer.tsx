"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";

const quickLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Rooms", href: "/rooms" },
    { title: "Gallery", href: "/gallery" },
    { title: "Menu", href: "/menu" },
    { title: "Contact", href: "/contact" },
];

const contactInfo = [
    {
        icon: MapPin,
        text: "Panchgani, Maharashtra, India",
        href: "https://maps.app.goo.gl/nM8soJnkyruvL1EF8?g_st=aw",
        target: "_blank",
    },
    {
        icon: Phone,
        text: "+91 83559 92830",
        href: "tel:+918355992830",
    },
    {
        icon: Mail,
        text: "kapoorsvillapanchgani@gmail.com",
        href: "mailto:kapoorsvillapanchgani@gmail.com",
    },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t bg-background">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.04),transparent_50%)]" />

            {/* Tightened Padding */}
            <div className="container relative mx-auto px-6 pt-10 pb-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    
                    {/* Brand */}
                    <div className="space-y-3 lg:col-span-2 lg:pr-12">
                        <motion.h2
                            whileHover={{ scale: 1.02, originX: 0 }}
                            className="font-serif text-2xl font-bold text-amber-500"
                        >
                            Kapoor&apos;s Villa
                        </motion.h2>

                        <p className="max-w-sm text-sm text-muted-foreground">
                            Discover refined hospitality, elegant interiors, and personalized service.
                        </p>

                        <div className="flex gap-2.5 pt-1">
                            <motion.a
                                whileHover={{ y: -2, scale: 1.1 }}
                                href="https://instagram.com/yourpage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-amber-500 hover:text-amber-500"
                            >
                                <FaInstagram className="h-3.5 w-3.5" />
                            </motion.a>

                            <motion.a
                                whileHover={{ y: -2, scale: 1.1 }}
                                href="https://wa.me/918355992830"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-green-500 hover:text-green-500"
                            >
                                <FaWhatsapp className="h-3.5 w-3.5" />
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Links - Now arranged in a 2-column grid to save vertical space */}
                    <div className="space-y-3">
                        <h3 className="font-serif text-lg tracking-wide">Explore</h3>
                        <ul className="grid grid-cols-2 gap-2.5">
                            {quickLinks.map((link) => (
                                <motion.li key={link.href} whileHover={{ x: 2 }}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-amber-500"
                                    >
                                        {link.title}
                                        <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-3">
                        <h3 className="font-serif text-lg tracking-wide">Contact</h3>
                        <ul className="flex flex-col gap-2.5">
                            {contactInfo.map((info, idx) => (
                                <motion.li 
                                    key={idx} 
                                    whileHover={{ x: 2 }}
                                    className="flex items-center gap-2"
                                >
                                    <info.icon className="h-4 w-4 shrink-0 text-amber-500" />
                                    <a
                                        href={info.href}
                                        target={info.target}
                                        rel={info.target ? "noopener noreferrer" : undefined}
                                        className="truncate text-sm text-muted-foreground transition-colors hover:text-amber-500"
                                    >
                                        {info.text}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider - Reduced margins */}
                <div className="my-6 h-px w-full bg-border/50" />

                {/* Bottom */}
                <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Kapoor&apos;s Villa. Crafted with elegance.
                    </p>

                    <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:border-amber-500 hover:text-amber-500"
                    >
                        Back to Top ↑
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}