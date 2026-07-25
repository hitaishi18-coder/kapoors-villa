import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
    HeroReveal,
    FadeUp,
    ScaleIn,
    Stagger,
    StaggerItem,
    FadeLeft,
    FadeRight,
} from "@/components/animations";
import {
    Waves,
    BedDouble,
    ChefHat,
    ChevronDown,
    Star,
    Trees,
    Car,
} from "lucide-react";

const amenities = [
    {
        title: "Private Pool",
        description: "Temperature controlled infinity pool overlooking the valley.",
        icon: Waves,
    },
    {
        title: "10,000 Sqft Garden",
        description: "Expansive, beautifully landscaped private green space for relaxation.",
        icon: Trees,
    },
    {
        title: "7-Car Parking",
        description: "Secure and spacious dedicated parking for you and your guests.",
        icon: Car,
    },
    {
        title: "Modern Kitchen",
        description: "Fully equipped chef-grade kitchen for culinary excellence.",
        icon: ChefHat,
    },
];

const testimonials = [
    {
        name: "Aman & Rhea Malhotra",
        text: `"An unparalleled sanctuary of privacy and luxury."`,
        date: "December 2023",
    },
    {
        name: "Dr. Vikram Singh",
        text: `"The concierge service was exceptional from arrival to departure."`,
        date: "January 2024",
    },
    {
        name: "Sonia D'Souza",
        text: `"Every corner reflects elegance and thoughtful hospitality."`,
        date: "February 2024",
    },
];

export default function HomePage() {
    return (
        <div className="dark:bg-black dark:text-[#FDFBF7] transition-colors duration-300">
            <Navbar />

            <main>
                {/* HERO */}
                <section className="relative min-h-screen overflow-hidden">
                    <Image
                        src="/outer/hero.webp"
                        alt="Villa"
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Neutral Dark Overlay */}
                    <div className="absolute inset-0 bg-black/55 dark:bg-black/60" />

                    {/* Neutral Luxury Gradient */}
                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/70 dark:from-black/40 dark:to-black/80" />

                    <HeroReveal className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
                        <p className="mb-9 text-xs font-medium uppercase tracking-[0.45em] text-[#fcd34d] md:text-sm">
                            Luxury • Comfort • Serenity
                        </p>

                        <h1 className="font-serif text-5xl font-bold leading-tight text-white dark:text-[#fcd34d] md:text-7xl lg:text-6xl">
                            Kapoor&apos;s Villa
                        </h1>

                        <p className="mt-5 text-lg uppercase tracking-[0.35em] text-neutral-200 dark:text-[#FDFBF7]/90 md:text-2xl">
                            A Perfect Holiday Home
                        </p>

                        <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-300 dark:text-[#FDFBF7]/80 md:text-lg">
                            Escape into timeless elegance where breathtaking
                            views, personalized hospitality and luxurious
                            comfort come together to create unforgettable
                            memories.
                        </p>

                        <div className="mt-12 flex flex-wrap justify-center gap-5">
                            <Button
                                asChild
                                size="lg"
                                className="bg-[#fcd34d] px-8 text-black transition-all duration-300 hover:scale-105 hover:bg-[#fcd34d]/80"
                            >
                                <Link href="/contact">Book Your Stay</Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-white/60 bg-transparent px-8 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#fcd34d] hover:bg-white/10 dark:border-[#fcd34d]/50 dark:text-[#fcd34d] dark:hover:bg-[#fcd34d]/10"
                            >
                                <Link href="/gallery">Explore Villa</Link>
                            </Button>
                        </div>

                        <div className="mt-20 grid w-full max-w-4xl grid-cols-3 gap-8 border-t border-white/20 dark:border-[#fcd34d]/20 pt-10">
                            <div>
                                <h3 className="font-serif text-3xl font-bold text-[#fcd34d]">500+</h3>
                                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-300 dark:text-[#FDFBF7]/70">Happy Guests</p>
                            </div>
                            <div>
                                <h3 className="font-serif text-3xl font-bold text-[#fcd34d]">10+</h3>
                                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-300 dark:text-[#FDFBF7]/70">Years Experience</p>
                            </div>
                            <div>
                                <h3 className="font-serif text-3xl font-bold text-[#fcd34d]">★ 4.9</h3>
                                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-300 dark:text-[#FDFBF7]/70">Guest Rating</p>
                            </div>
                        </div>

                        <div className="absolute bottom-10 flex flex-col items-center">
                            <p className="mb-2 text-[10px] uppercase tracking-[0.4em] text-neutral-300 dark:text-[#FDFBF7]/70">Scroll</p>
                            <ChevronDown className="h-8 w-8 animate-bounce text-[#fcd34d]" />
                        </div>
                    </HeroReveal>
                </section>

                {/* AMENITIES - Classy Editorial Layout */}
                <FadeUp>
                    <section className="container mx-auto px-6 py-24 md:py-32">
                        <div className="mb-16 text-center">
                            <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#fcd34d]">
                                World Class Amenities
                            </p>
                            <h2 className="mt-4 font-serif text-4xl font-light tracking-wide text-[#112A46] dark:text-[#FDFBF7]">
                                Curated Luxury Experience
                            </h2>
                            <div className="mx-auto mt-6 h-[1px] w-12 bg-[#fcd34d]/50" />
                            <p className="mx-auto mt-6 max-w-2xl font-light leading-loose text-[#112A46]/70 dark:text-[#FDFBF7]/60">
                                Every stay is thoughtfully designed to provide
                                comfort, elegance and unforgettable experiences.
                            </p>
                        </div>

                        <Stagger className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                            {amenities.map((item) => (
                                <StaggerItem key={item.title}>
                                    <ScaleIn>
                                        <div className="group flex h-full flex-col items-center justify-start text-center">
                                            {/* Refined Icon Ring */}
                                            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#fcd34d]/30 bg-transparent transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#fcd34d] group-hover:shadow-lg group-hover:shadow-[#fcd34d]/10">
                                                <item.icon className="h-6 w-6 stroke-[1.5] text-[#fcd34d]" />
                                            </div>

                                            <h3 className="font-serif text-2xl font-light text-[#112A46] dark:text-[#FDFBF7]">
                                                {item.title}
                                            </h3>

                                            <p className="mt-4 text-sm font-light leading-loose text-[#112A46]/70 dark:text-[#FDFBF7]/60">
                                                {item.description}
                                            </p>
                                        </div>
                                    </ScaleIn>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </section>
                </FadeUp>

                {/* TESTIMONIALS - Classy Editorial Layout */}
                <FadeUp>
                    <section className="relative overflow-hidden border-y border-[#fcd34d]/10 bg-gradient-to-b from-[#FDFBF7] to-[#fcd34d]/5 py-24 dark:from-black dark:to-neutral-950 md:py-32">
                        {/* Subtle glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#fcd34d]/10 via-transparent to-transparent" />

                        <div className="container relative z-10 mx-auto px-6">
                            <div className="mb-20 text-center">
                                <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#fcd34d]">
                                    Guest Reviews
                                </p>
                                <h2 className="mt-4 font-serif text-4xl font-light tracking-wide text-[#112A46] dark:text-[#FDFBF7]">
                                    Echoes of Excellence
                                </h2>
                                <div className="mx-auto mt-6 h-[1px] w-12 bg-[#fcd34d]/50" />
                            </div>

                            <Stagger className="grid gap-12 lg:grid-cols-3 lg:gap-8">
                                {testimonials.map((review) => (
                                    <StaggerItem key={review.name}>
                                        <ScaleIn>
                                            <div className="group flex h-full flex-col justify-between border-l border-[#fcd34d]/20 pl-8 transition-all duration-500 hover:border-[#fcd34d]">
                                                <div>
                                                    <div className="mb-6 flex gap-1.5 opacity-80 transition-opacity duration-500 group-hover:opacity-100">
                                                        {Array.from({ length: 5 }).map((_, index) => (
                                                            <Star
                                                                key={index}
                                                                className="h-4 w-4 fill-[#fcd34d] text-[#fcd34d]"
                                                            />
                                                        ))}
                                                    </div>

                                                    <p className="text-lg font-light italic leading-loose text-[#112A46]/80 dark:text-[#FDFBF7]/80">
                                                        {review.text}
                                                    </p>
                                                </div>

                                                <div className="mt-10">
                                                    <h4 className="font-serif text-xl tracking-wide text-[#112A46] dark:text-[#FDFBF7]">
                                                        {review.name}
                                                    </h4>
                                                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.3em] text-[#fcd34d]">
                                                        {review.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </ScaleIn>
                                    </StaggerItem>
                                ))}
                            </Stagger>
                        </div>
                    </section>
                </FadeUp>

                {/* FEATURED SPACES */}
                <FadeUp>
                    <section className="container mx-auto px-6 py-32">
                        <div className="mb-16 text-center">
                            <p className="text-xs uppercase tracking-[0.45em] text-[#fcd34d]">
                                Discover
                            </p>
                            <h2 className="mt-4 font-serif text-5xl font-bold dark:text-[#FDFBF7]">
                                Signature Experiences
                            </h2>
                            <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted-foreground dark:text-[#FDFBF7]/70">
                                From luxurious suites to breathtaking outdoor
                                spaces, every corner of Kapoor&apos;s Villa has
                                been thoughtfully designed to elevate your stay.
                            </p>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-2">
                            <FadeLeft>
                                <Link href="/room">
                                    <div className="group relative h-162.5 overflow-hidden rounded-3xl">
                                        <Image
                                            src="/gallery/room-1.jpg"
                                            alt="Luxury Suites"
                                            fill
                                            className="object-cover transition-all duration-1800 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent dark:from-black/80 dark:via-black/40" />
                                        <div className="absolute inset-0 flex flex-col justify-end p-10">
                                            <p className="text-xs uppercase tracking-[0.4em] text-[#fcd34d]">Stay</p>
                                            <h3 className="mt-3 font-serif text-5xl font-bold text-white">Luxury Suites</h3>
                                            <p className="mt-5 max-w-md leading-7 text-neutral-200 dark:text-[#FDFBF7]/90">
                                                Spacious interiors, elegant décor and panoramic views create a private sanctuary unlike any other.
                                            </p>
                                            <Button variant="secondary" className="mt-8 w-fit dark:bg-[#fcd34d] dark:text-black dark:border-none dark:hover:bg-[#fcd34d]/80">
                                                Explore Rooms
                                            </Button>
                                        </div>
                                    </div>
                                </Link>
                            </FadeLeft>

                            <FadeRight>
                                <Link href="/gallery">
                                    <div className="group relative h-162.5 overflow-hidden rounded-3xl">
                                        <Image
                                            src="/outer/suite.jpg"
                                            alt="Outdoor Spaces"
                                            fill
                                            className="object-cover transition-all duration-1800 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent dark:from-black/80 dark:via-black/40" />
                                        <div className="absolute inset-0 flex flex-col justify-end p-10">
                                            <p className="text-xs uppercase tracking-[0.4em] text-[#fcd34d]">Experience</p>
                                            <h3 className="mt-3 font-serif text-5xl font-bold text-white">Scenic Outdoors</h3>
                                            <p className="mt-5 max-w-md leading-7 text-neutral-200 dark:text-[#FDFBF7]/90">
                                                Infinity pool, lush gardens and peaceful open spaces designed for unforgettable moments.
                                            </p>
                                            <Button variant="secondary" className="mt-8 w-fit dark:bg-[#fcd34d] dark:text-black dark:border-none dark:hover:bg-[#fcd34d]/80">
                                                View Gallery
                                            </Button>
                                        </div>
                                    </div>
                                </Link>
                            </FadeRight>
                        </div>
                    </section>
                </FadeUp>
            </main>

            {/* FINAL CTA */}
            <FadeUp>
                <section className="relative overflow-hidden">
                    <Image
                        src="/extraas/cushions.png"
                        alt="Kapoor's Villa"
                        fill
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/60" />

                    <div className="relative container mx-auto flex min-h-125 flex-col items-center justify-center px-6 py-24 text-center">
                        <p className="text-xs uppercase tracking-[0.45em] text-[#fcd34d]">Escape Into Luxury</p>
                        <h2 className="mt-6 max-w-4xl font-serif text-5xl font-bold text-white dark:text-[#fcd34d] md:text-6xl">
                            Experience Timeless Comfort
                        </h2>
                        <p className="mt-8 max-w-2xl leading-8 text-neutral-200 dark:text-[#FDFBF7]/90">
                            Whether it&apos;s a weekend getaway, family vacation or special celebration, Kapoor&apos;s Villa promises unforgettable hospitality and luxury.
                        </p>
                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="bg-[#fcd34d] text-black hover:bg-[#fcd34d]/80">
                                <Link href="/contact">Plan Your Stay</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 dark:border-[#fcd34d]/50 dark:text-[#fcd34d] dark:hover:bg-[#fcd34d]/10">
                                <Link href="/gallery">Explore Gallery</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </FadeUp>

            <Footer />
        </div>
    );
}