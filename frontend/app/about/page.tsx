import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
    HeroReveal,
    FadeUp,
    FadeLeft,
    FadeRight,
    ScaleIn,
    Stagger,
    StaggerItem,
} from "@/components/animations";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { 
    Clock, 
    Flame, 
    Utensils, 
    BedDouble, 
    Dices, 
    Wifi, 
    Car, 
    Trees, 
    Waves, 
    Sparkles,
    Users
} from "lucide-react";

const stats = [
    { value: "10+", label: "Years of Excellence" },
    { value: "500+", label: "Happy Guests" },
    { value: "4", label: "Bedrooms" },
    { value: "24/7", label: "Caretaker Support" },
];

const mainAmenities = [
    { icon: BedDouble, label: "4 Bedrooms & 5 Bathrooms" },
    { icon: Waves, label: "Private Swimming Pool" },
    { icon: Trees, label: "10,000 sq.ft Natural Lawn" },
    { icon: Utensils, label: "1 Hall with Dining & Kitchen" },
    { icon: Car, label: "7 Car Parking Spaces" },
    { icon: Wifi, label: "Free Wi-Fi & Common TV" },
    { icon: Sparkles, label: "3 Balconies & 1 Large Terrace" },
    { icon: Users, label: "Accommodates 8 to 12 Guests" },
];

const activities = ["Cricket", "Carrom Board", "Chess", "Ludo & Board Games"];

const paidAddons = [
    { name: "Sound System", price: "₹500 / day" },
    { name: "Bonfire Setup", price: "₹1,000" },
    { name: "Veg Barbeque (1 kg)", price: "₹1,800" },
    { name: "Non-Veg Barbeque (1 kg)", price: "₹2,000" },
    { name: "Extra Mattress Set", price: "₹1,000" },
    { name: "Meals (Veg / Non-Veg)", price: "As per Menu Card" },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#faf8f5] text-slate-800 selection:bg-amber-500 selection:text-slate-950 dark:bg-[#0a111e] dark:text-amber-50 transition-colors duration-300">
            <Navbar />

            <main>
                {/* HERO SECTION */}
                <section className="relative h-[85vh] overflow-hidden">
                    <Image
                        src="/outer/hero.webp"
                        alt="Kapoor's Villa Panchgani"
                        fill
                        priority
                        className="object-cover transition-transform duration-10000 hover:scale-105"
                    />

                    {/* Sunset Dusk Overlay adapted for Light & Dark Themes */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a111e]/80 via-[#0a111e]/60 to-[#faf8f5] dark:from-[#0a111e]/90 dark:via-[#0a111e]/50 dark:to-[#0a111e]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-600/30 via-amber-900/10 to-transparent" />

                    <HeroReveal className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                        {/* Decorative Header Accent */}
                        <div className="mb-4 flex items-center justify-center gap-3">
                            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-500 dark:to-amber-400" />
                            <span className="text-xs font-serif uppercase tracking-[0.4em] text-amber-500 dark:text-amber-400 font-semibold">
                                Panchgani
                            </span>
                            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-500 dark:to-amber-400" />
                        </div>

                        {/* Gold Metallic Title */}
                        <h1 className="font-serif text-4xl font-extrabold tracking-wide bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent md:text-6xl drop-shadow-md">
                            KAPOOR&apos;S VILLA
                        </h1>

                        <p className="mt-3 font-serif text-sm uppercase tracking-[0.3em] text-amber-300/90">
                            Luxury Sunset Sanctuary
                        </p>

                        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-amber-100/90 md:text-base">
                            Where architectural grandeur meets the warmth of Panchgani sunsets. Enjoy 10,000 sq. ft. of lush lawns, private poolside indulgence, and unforgettable mountain vistas.
                        </p>
                    </HeroReveal>
                </section>

                {/* OUR STORY SECTION */}
                <FadeUp>
                    <section className="container mx-auto px-6 py-20 md:py-28">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <FadeLeft>
                                <div>
                                    <div className="mb-3 flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-amber-500 dark:bg-amber-400" />
                                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600 dark:text-amber-400">
                                            Our Heritage
                                        </p>
                                    </div>

                                    <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
                                        Crafted For <br />
                                        <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 dark:from-amber-200 dark:via-amber-400 dark:to-amber-600 bg-clip-text text-transparent">
                                            Golden Moments
                                        </span>
                                    </h2>

                                    <p className="mt-6 leading-relaxed text-slate-600 dark:text-amber-100/70">
                                        Kapoor&apos;s Villa Panchgani was envisioned as a haven where warm sunset hues meet refined luxury. Set against a 10,000 sq. ft. natural lawn with a private swimming pool and 4 grand suites, it provides an exquisite retreat for families and groups.
                                    </p>

                                    <p className="mt-4 leading-relaxed text-slate-500 dark:text-amber-100/60">
                                        Designed to comfortably host 8–12 guests, every feature—from evening bonfires and barbeques under the stars to indoor games—is tailored for seamless comfort.
                                    </p>

                                    <Button
                                        asChild
                                        className="mt-8 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 dark:from-amber-400 dark:via-amber-500 dark:to-amber-600 text-white dark:text-slate-950 font-bold hover:brightness-110 shadow-lg shadow-amber-500/20 px-8 py-6 rounded-xl transition-all"
                                    >
                                        <Link href="/rooms">Explore Suites</Link>
                                    </Button>
                                </div>
                            </FadeLeft>

                            <FadeRight>
                                <div className="group relative h-[480px] overflow-hidden rounded-2xl border border-amber-500/30 p-2 bg-amber-500/5 dark:bg-gradient-to-b dark:from-amber-500/10 dark:to-transparent">
                                    <div className="relative h-full w-full overflow-hidden rounded-xl">
                                        <Image
                                            src="/about-story.jpg"
                                            alt="Kapoor Villa Sunset View"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent dark:from-[#0a111e] opacity-80" />
                                    </div>
                                </div>
                            </FadeRight>
                        </div>
                    </section>
                </FadeUp>

                {/* VILLA HIGHLIGHTS / AMENITIES */}
                <FadeUp>
                    <section className="border-y border-amber-500/20 bg-amber-500/5 dark:bg-[#070c16] py-20 md:py-28 relative">
                        <div className="container mx-auto px-6">
                            <div className="mb-14 text-center">
                                <p className="text-xs uppercase tracking-[0.35em] text-amber-600 dark:text-amber-400 font-semibold">
                                    Exclusive Features
                                </p>
                                <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 dark:bg-gradient-to-r dark:from-amber-100 dark:via-amber-300 dark:to-amber-500 dark:bg-clip-text dark:text-transparent md:text-4xl">
                                    Villa Amenities
                                </h2>
                                <p className="mx-auto mt-3 max-w-md text-slate-600 dark:text-amber-100/60 text-sm">
                                    Tailored amenities crafted for groups of 8 to 12 guests.
                                </p>
                            </div>

                            <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                {mainAmenities.map((item) => (
                                    <StaggerItem key={item.label}>
                                        <ScaleIn>
                                            <Card className="flex items-center gap-4 border-amber-500/20 bg-white/80 dark:bg-[#0f192c]/90 p-5 backdrop-blur transition-all duration-300 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 dark:hover:bg-[#132038]">
                                                <div className="rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 p-3 text-slate-950 shadow-md shadow-amber-500/20">
                                                    <item.icon className="h-5 w-5" />
                                                </div>
                                                <span className="font-medium text-slate-800 dark:text-amber-100 text-sm md:text-base">
                                                    {item.label}
                                                </span>
                                            </Card>
                                        </ScaleIn>
                                    </StaggerItem>
                                ))}
                            </Stagger>
                        </div>
                    </section>
                </FadeUp>

                {/* TIMINGS, ADD-ONS & ACTIVITIES */}
                <FadeUp>
                    <section className="container mx-auto px-6 py-20 md:py-28">
                        <div className="grid gap-8 lg:grid-cols-3">
                            
                            {/* Rules & Timings */}
                            <Card className="border-amber-500/20 bg-white/70 dark:bg-[#0f192c]/80 backdrop-blur rounded-2xl shadow-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 font-serif text-xl text-amber-600 dark:text-amber-300">
                                        <Clock className="h-5 w-5 text-amber-500 dark:text-amber-400" /> Rules & Timings
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-slate-700 dark:text-amber-100/80">
                                    <div className="flex justify-between border-b border-amber-500/10 pb-3">
                                        <span>Check-in:</span>
                                        <span className="text-amber-600 dark:text-amber-300 font-semibold">2:00 PM</span>
                                    </div>
                                    <div className="flex justify-between border-b border-amber-500/10 pb-3">
                                        <span>Check-out:</span>
                                        <span className="text-amber-600 dark:text-amber-300 font-semibold">11:00 AM</span>
                                    </div>
                                    <div className="flex justify-between border-b border-amber-500/10 pb-3">
                                        <span>Kitchen Timing:</span>
                                        <span>7:00 AM – 11:00 PM</span>
                                    </div>
                                    <div className="flex justify-between pb-1">
                                        <span>Support:</span>
                                        <span>24 Hours Caretaker</span>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Extra Add-ons */}
                            <Card className="border-amber-500/20 bg-white/70 dark:bg-[#0f192c]/80 backdrop-blur rounded-2xl shadow-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 font-serif text-xl text-amber-600 dark:text-amber-300">
                                        <Flame className="h-5 w-5 text-amber-500 dark:text-amber-400" /> Optional Services
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3 text-sm">
                                    {paidAddons.map((addon) => (
                                        <div key={addon.name} className="flex justify-between border-b border-amber-500/10 pb-2.5 text-slate-700 dark:text-amber-100/80">
                                            <span>{addon.name}</span>
                                            <span className="font-semibold text-amber-600 dark:text-amber-400">{addon.price}</span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* Activities */}
                            <Card className="border-amber-500/20 bg-white/70 dark:bg-[#0f192c]/80 backdrop-blur rounded-2xl shadow-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 font-serif text-xl text-amber-600 dark:text-amber-300">
                                        <Dices className="h-5 w-5 text-amber-500 dark:text-amber-400" /> On-site Activities
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-slate-500 dark:text-amber-100/60">
                                        Indoor & outdoor recreation options available on site:
                                    </p>
                                    <ul className="grid grid-cols-2 gap-3 text-sm">
                                        {activities.map((act) => (
                                            <li key={act} className="flex items-center gap-2 rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-2 text-amber-800 dark:text-amber-200 font-medium">
                                                <span className="text-amber-500 dark:text-amber-400">✦</span> {act}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                        </div>
                    </section>
                </FadeUp>

                {/* STATS SECTION */}
                <FadeUp>
                    <section className="container mx-auto px-6 pb-20">
                        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((item) => (
                                <StaggerItem key={item.label}>
                                    <ScaleIn>
                                        <div className="rounded-2xl border border-amber-500/20 bg-white/60 dark:bg-[#0f192c]/60 p-8 text-center backdrop-blur transition-all duration-300 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10">
                                            <h3 className="font-serif text-5xl font-bold bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 dark:from-amber-200 dark:via-amber-400 dark:to-amber-500 bg-clip-text text-transparent">
                                                {item.value}
                                            </h3>
                                            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-amber-200/60">
                                                {item.label}
                                            </p>
                                        </div>
                                    </ScaleIn>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </section>
                </FadeUp>

                {/* CTA BANNER */}
                <FadeUp>
                    <section className="container mx-auto px-6 pb-28">
                        <Card className="relative overflow-hidden rounded-3xl border border-amber-500/30">
                            <Image
                                src="/outer/about-story.jpg"
                                alt="Kapoor Villa Sunset"
                                fill
                                className="object-cover"
                            />

                            {/* Dark/Warm Gradient Overlay for High Readability */}
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-transparent dark:from-[#0a111e]/95 dark:via-[#0a111e]/85" />

                            <CardContent className="relative z-10 flex min-h-[400px] max-w-2xl flex-col items-start justify-center p-8 md:p-14">
                                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-400">
                                    Reserve Your Dates
                                </p>

                                <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-5xl">
                                    Your Panchgani Gateway Awaits
                                </h2>

                                <p className="mt-4 text-sm leading-relaxed text-amber-100/80 md:text-base">
                                    Plan your luxury staycation or family celebration at Kapoor&apos;s Villa today.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-gradient-to-r from-amber-400 to-amber-600 px-8 font-bold text-slate-950 shadow-xl shadow-amber-500/20 hover:brightness-110"
                                    >
                                        <Link href="/book">Book Your Stay</Link>
                                    </Button>

                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="border-amber-400/40 bg-black/40 px-8 text-amber-300 hover:bg-amber-400/10"
                                    >
                                        <Link href="/gallery">View Gallery</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </FadeUp>
            </main>

            <Footer />
        </div>
    );
}