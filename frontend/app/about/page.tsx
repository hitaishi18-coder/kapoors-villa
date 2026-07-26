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
import FAQSection from "@/components/FAQsection";
import LocationSection from "@/components/LocationSection";

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
        <div className="min-h-screen bg-[#FDFBF7] text-[#112A46] selection:bg-[#fcd34d] selection:text-[#112A46] dark:bg-[#1E1E1E] dark:text-white transition-colors duration-300">
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

                    {/* Sunset Dusk Overlay - Smoothed out for a classier fade */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#112A46]/90 via-[#112A46]/40 to-[#FDFBF7] dark:from-[#1E1E1E]/95 dark:via-[#1E1E1E]/60 dark:to-[#1E1E1E]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#fcd34d]/20 via-transparent to-transparent" />

                    <HeroReveal className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                        {/* Decorative Header Accent */}
                        <div className="mb-6 flex items-center justify-center gap-4 opacity-90">
                            <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#fcd34d]" />
                            <span className="text-xs font-serif uppercase tracking-[0.5em] text-[#fcd34d] font-medium">
                                Panchgani
                            </span>
                            <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#fcd34d]" />
                        </div>

                        {/* Gold Metallic Title */}
                        <h1 className="font-serif text-5xl font-light tracking-widest text-[#fcd34d] md:text-7xl drop-shadow-lg">
                            KAPOOR&apos;S VILLA
                        </h1>

                        <p className="mt-5 font-serif text-sm uppercase tracking-[0.4em] text-[#fcd34d]/80">
                            Luxury Sunset Sanctuary
                        </p>

                        <p className="mt-8 max-w-2xl text-sm font-light leading-loose text-[#FDFBF7]/90 md:text-base">
                            Where architectural grandeur meets the warmth of Panchgani sunsets. Enjoy 10,000 sq. ft. of lush lawns, private poolside indulgence, and unforgettable mountain vistas.
                        </p>
                    </HeroReveal>
                </section>

                {/* OUR STORY SECTION */}
                <FadeUp>
                    <section className="container mx-auto px-6 py-24 md:py-32">
                        <div className="grid items-center gap-16 lg:grid-cols-2">
                            <FadeLeft>
                                <div className="pr-4 lg:pr-8">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="h-[1px] w-8 bg-[#fcd34d]" />
                                        <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#fcd34d]">
                                            Our Heritage
                                        </p>
                                    </div>

                                    <h2 className="font-serif text-4xl font-light leading-tight tracking-wide text-[#112A46] dark:text-white md:text-5xl">
                                        Crafted For <br />
                                        <span className="font-medium text-[#fcd34d] italic">
                                            Golden Moments
                                        </span>
                                    </h2>

                                    <p className="mt-8 font-light leading-loose text-[#112A46]/70 dark:text-neutral-400">
                                        Kapoor&apos;s Villa Panchgani was envisioned as a haven where warm sunset hues meet refined luxury. Set against a 10,000 sq. ft. natural lawn with a private swimming pool and 4 grand suites, it provides an exquisite retreat for families and groups.
                                    </p>

                                    <p className="mt-5 font-light leading-loose text-[#112A46]/60 dark:text-neutral-400">
                                        Designed to comfortably host 8–12 guests, every feature—from evening bonfires and barbeques under the stars to indoor games—is tailored for seamless comfort.
                                    </p>

                                    <Button
                                        asChild
                                        className="mt-10 rounded-none border border-[#fcd34d] bg-transparent text-[#112A46] dark:text-[#fcd34d] uppercase tracking-[0.2em] hover:bg-[#fcd34d] hover:text-[#112A46] px-10 py-7 transition-all duration-500"
                                    >
                                        <Link href="/room">Explore Suites</Link>
                                    </Button>
                                </div>
                            </FadeLeft>

                            <FadeRight>
                                <div className="group relative mx-auto h-[420px] w-full max-w-md overflow-hidden rounded-t-full rounded-b-md border border-[#fcd34d]/20 bg-[#fcd34d]/5 p-2 dark:bg-[#fcd34d]/5 shadow-2xl shadow-[#112A46]/5">
                                    <div className="relative h-full w-full overflow-hidden rounded-t-full rounded-b-sm">
                                        <Image
                                            src="/outdoor/sunset-view.webp"
                                            alt="Kapoor Villa Sunset View"
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#112A46]/60 via-transparent to-transparent opacity-90 dark:from-[#1E1E1E]" />
                                    </div>
                                </div>
                            </FadeRight>
                        </div>
                    </section>
                </FadeUp>

                {/* VILLA HIGHLIGHTS / AMENITIES */}
                <FadeUp>
                    <section className="border-y border-[#fcd34d]/10 bg-gradient-to-b from-[#FDFBF7] to-[#fcd34d]/5 dark:from-[#1E1E1E] dark:to-neutral-900 py-24 md:py-32 relative">
                        <div className="container mx-auto px-6">
                            <div className="mb-16 text-center">
                                <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#fcd34d]">
                                    Exclusive Features
                                </p>
                                <h2 className="mt-4 font-serif text-4xl font-light tracking-wide text-[#112A46] dark:text-white">
                                    Villa Amenities
                                </h2>
                                <div className="mx-auto mt-6 h-[1px] w-12 bg-[#fcd34d]/50" />
                                <p className="mx-auto mt-6 max-w-md font-light text-[#112A46]/70 dark:text-neutral-400">
                                    Tailored amenities crafted for groups of 8 to 12 guests.
                                </p>
                            </div>

                            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                {mainAmenities.map((item) => (
                                    <StaggerItem key={item.label}>
                                        <ScaleIn>
                                            <Card className="group flex h-full cursor-default flex-col items-center justify-center gap-4 border-[#fcd34d]/10 bg-white/40 dark:bg-neutral-900/50 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#fcd34d]/30 hover:bg-white/80 hover:shadow-xl hover:shadow-[#fcd34d]/5 dark:hover:bg-neutral-900/80">
                                                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#fcd34d]/30 bg-transparent text-[#fcd34d] transition-colors duration-500 group-hover:bg-[#fcd34d] group-hover:text-[#112A46]">
                                                    <item.icon className="h-6 w-6 stroke-[1.5]" />
                                                </div>
                                                <span className="text-center text-sm font-light tracking-wide text-[#112A46] dark:text-white">
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
                    <section className="container mx-auto px-6 py-24 md:py-32">
                        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
                            
                            {/* Rules & Timings */}
                            <div className="flex flex-col">
                                <div className="mb-8 flex items-center gap-4 border-b border-[#fcd34d]/30 pb-4">
                                    <Clock className="h-5 w-5 stroke-[1.5] text-[#fcd34d]" />
                                    <h3 className="font-serif text-2xl font-light tracking-wide text-[#112A46] dark:text-white">
                                        Rules & Timings
                                    </h3>
                                </div>
                                <div className="space-y-4 text-sm font-light text-[#112A46]/80 dark:text-neutral-400">
                                    <div className="flex justify-between border-b border-[#112A46]/5 pb-3 dark:border-white/10">
                                        <span className="uppercase tracking-widest text-[#112A46]/60 dark:text-neutral-500 text-xs">Check-in</span>
                                        <span className="font-medium text-[#fcd34d]">2:00 PM</span>
                                    </div>
                                    <div className="flex justify-between border-b border-[#112A46]/5 pb-3 dark:border-white/10">
                                        <span className="uppercase tracking-widest text-[#112A46]/60 dark:text-neutral-500 text-xs">Check-out</span>
                                        <span className="font-medium text-[#fcd34d]">11:00 AM</span>
                                    </div>
                                    <div className="flex justify-between border-b border-[#112A46]/5 pb-3 dark:border-white/10">
                                        <span className="uppercase tracking-widest text-[#112A46]/60 dark:text-neutral-500 text-xs">Kitchen</span>
                                        <span className="font-medium text-[#112A46] dark:text-white">7:00 AM – 11:00 PM</span>
                                    </div>
                                    <div className="flex justify-between pb-1">
                                        <span className="uppercase tracking-widest text-[#112A46]/60 dark:text-neutral-500 text-xs">Support</span>
                                        <span className="font-medium text-[#112A46] dark:text-white">24 Hours Caretaker</span>
                                    </div>
                                </div>
                            </div>

                            {/* Extra Add-ons */}
                            <div className="flex flex-col">
                                <div className="mb-8 flex items-center gap-4 border-b border-[#fcd34d]/30 pb-4">
                                    <Flame className="h-5 w-5 stroke-[1.5] text-[#fcd34d]" />
                                    <h3 className="font-serif text-2xl font-light tracking-wide text-[#112A46] dark:text-white">
                                        Optional Services
                                    </h3>
                                </div>
                                <div className="space-y-4 text-sm font-light">
                                    {paidAddons.map((addon) => (
                                        <div key={addon.name} className="flex justify-between border-b border-[#112A46]/5 pb-3 text-[#112A46]/80 dark:border-white/10 dark:text-neutral-400">
                                            <span>{addon.name}</span>
                                            <span className="font-medium tracking-wide text-[#fcd34d]">{addon.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Activities */}
                            <div className="flex flex-col">
                                <div className="mb-8 flex items-center gap-4 border-b border-[#fcd34d]/30 pb-4">
                                    <Dices className="h-5 w-5 stroke-[1.5] text-[#fcd34d]" />
                                    <h3 className="font-serif text-2xl font-light tracking-wide text-[#112A46] dark:text-white">
                                        On-site Activities
                                    </h3>
                                </div>
                                <div className="flex flex-col space-y-6">
                                    <p className="text-sm font-light leading-relaxed text-[#112A46]/70 dark:text-neutral-400">
                                        Indoor & outdoor recreation options available on site for your entertainment:
                                    </p>
                                    <ul className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm font-light">
                                        {activities.map((act) => (
                                            <li key={act} className="flex items-center gap-3 text-[#112A46] dark:text-white">
                                                <span className="block h-[1px] w-3 shrink-0 bg-[#fcd34d]" /> 
                                                <span>{act}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </section>
                </FadeUp>

                {/* STATS SECTION */}
                <FadeUp>
                    <section className="container mx-auto px-6 pb-24 md:pb-32">
                        <div className="border-y border-[#fcd34d]/20 py-16 relative overflow-hidden">
                            {/* Subtle background glow for the stats */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#fcd34d]/5 via-transparent to-transparent" />
                            
                            <Stagger className="relative z-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x divide-[#fcd34d]/20">
                                {stats.map((item) => (
                                    <StaggerItem key={item.label}>
                                        <ScaleIn>
                                            <div className="flex flex-col items-center justify-center text-center">
                                                <h3 className="font-serif text-5xl font-light tracking-widest text-[#112A46] dark:text-white md:text-6xl">
                                                    {item.value}
                                                </h3>
                                                <div className="my-5 h-[1px] w-8 bg-[#fcd34d]" />
                                                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#fcd34d]">
                                                    {item.label}
                                                </p>
                                            </div>
                                        </ScaleIn>
                                    </StaggerItem>
                                ))}
                            </Stagger>
                        </div>
                    </section>
                </FadeUp>

              {/* CTA BANNER */}
                <FadeUp>
                    <section className="container mx-auto px-6 pb-32">
                        <div className="relative overflow-hidden rounded-sm shadow-2xl shadow-[#112A46]/10">
                            <div className="absolute inset-0">
                                <Image
                                    src="/outer/about-story.jpg"
                                    alt="Kapoor Villa Experience"
                                    fill
                                    className="object-cover"
                                />
                                {/* Reduced the opacity from /95 and /80 to /80 and /40 so the image is much more visible */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#112A46]/80 via-[#112A46]/40 to-transparent dark:from-[#1E1E1E]/90 dark:via-[#1E1E1E]/50" />
                            </div>

                            <div className="relative z-10 flex min-h-[450px] max-w-3xl flex-col items-start justify-center p-10 md:p-20">
                                <div className="mb-6 flex items-center gap-4 opacity-90">
                                    <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#fcd34d]" />
                                    <span className="text-xs font-serif uppercase tracking-[0.5em] text-[#fcd34d] font-medium">
                                        Reserve Your Dates
                                    </span>
                                </div>

                                <h2 className="font-serif text-4xl font-light leading-tight tracking-wide text-white md:text-5xl">
                                    Your Panchgani Gateway <br className="hidden md:block" />
                                    <span className="font-medium text-[#fcd34d] italic">Awaits</span>
                                </h2>

                                <p className="mt-6 text-sm font-light leading-loose text-[#FDFBF7]/90 md:text-base">
                                    Plan your luxury staycation or family celebration at Kapoor&apos;s Villa today. Escape into comfort and create timeless memories.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-5">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="rounded-none bg-[#fcd34d] px-10 py-6 uppercase tracking-[0.2em] text-[#112A46] transition-all duration-500 hover:bg-[#FDFBF7]"
                                    >
                                        <Link href="/contact">Book Your Stay</Link>
                                    </Button>

                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="rounded-none border-[#fcd34d]/40 bg-transparent px-10 py-6 uppercase tracking-[0.2em] text-[#fcd34d] transition-all duration-500 hover:bg-[#fcd34d]/10 hover:text-[#fcd34d]"
                                    >
                                        <Link href="/gallery">View Gallery</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeUp>
                <LocationSection />
                <FAQSection />
            </main>

            <Footer />
        </div>
    );
}