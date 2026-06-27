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
    Gift,
    ChevronDown,
    Star,
} from "lucide-react";

const amenities = [
    {
        title: "Private Pool",
        description:
            "Temperature controlled infinity pool overlooking the valley.",
        icon: Waves,
    },
    {
        title: "BBQ Grill",
        description: "Outdoor gourmet grilling station perfect for evenings.",
        icon: ChefHat,
    },
    {
        title: "Luxury Rooms",
        description: "Spacious suites featuring premium interiors.",
        icon: BedDouble,
    },
    {
        title: "Modern Kitchen",
        description: "Fully equipped chef-grade kitchen.",
        icon: Gift,
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
        <>
            <Navbar />

            <main>
                {/* HERO */}

                {/* HERO */}

                <section className="relative min-h-screen overflow-hidden">
                    {/* Background Image */}

                    <Image
                        src="/hero.jpg"
                        alt="Kapoor's Villa"
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Dark Overlay */}

                    <div className="absolute inset-0 bg-black/55" />

                    {/* Luxury Gradient */}

                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/70" />

                    {/* Hero Content */}

                    <HeroReveal className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.45em] text-amber-500 md:text-sm">
                            Luxury • Comfort • Serenity
                        </p>

                        <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
                            Kapoor&apos;s Villa
                        </h1>

                        <p className="mt-5 text-lg uppercase tracking-[0.35em] text-neutral-200 md:text-2xl">
                            A Perfect Holiday Home
                        </p>

                        <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-300 md:text-lg">
                            Escape into timeless elegance where breathtaking
                            views, personalized hospitality and luxurious
                            comfort come together to create unforgettable
                            memories.
                        </p>

                        {/* Buttons */}

                        <div className="mt-12 flex flex-wrap justify-center gap-5">
                            <Button
                                size="lg"
                                className="bg-amber-500 px-8 text-black transition-all duration-300 hover:scale-105 hover:bg-amber-400"
                            >
                                Book Your Stay
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white/60 bg-transparent px-8 text-white backdrop-blur-sm transition-all duration-300 hover:border-amber-500 hover:bg-white/10"
                            >
                                Explore Villa
                            </Button>
                        </div>

                        {/* Stats */}

                        <div className="mt-20 grid w-full max-w-4xl grid-cols-3 gap-8 border-t border-white/20 pt-10">
                            <div>
                                <h3 className="font-serif text-3xl font-bold text-amber-500">
                                    500+
                                </h3>

                                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-300">
                                    Happy Guests
                                </p>
                            </div>

                            <div>
                                <h3 className="font-serif text-3xl font-bold text-amber-500">
                                    10+
                                </h3>

                                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-300">
                                    Years Experience
                                </p>
                            </div>

                            <div>
                                <h3 className="font-serif text-3xl font-bold text-amber-500">
                                    ★ 4.9
                                </h3>

                                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-300">
                                    Guest Rating
                                </p>
                            </div>
                        </div>

                        {/* Scroll Indicator */}

                        <div className="absolute bottom-10 flex flex-col items-center">
                            <p className="mb-2 text-[10px] uppercase tracking-[0.4em] text-neutral-300">
                                Scroll
                            </p>

                            <ChevronDown className="h-8 w-8 animate-bounce text-amber-500" />
                        </div>
                    </HeroReveal>
                </section>

                {/* AMENITIES */}
                <FadeUp>
                    <section className="container mx-auto px-6 py-32">
                        <div className="text-center">
                            <p className="text-xs uppercase tracking-[0.4em] text-amber-500">
                                World Class Amenities
                            </p>

                            <h2 className="mt-4 font-serif text-5xl font-bold">
                                Curated Luxury Experience
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
                                Every stay is thoughtfully designed to provide
                                comfort, elegance and unforgettable experiences.
                            </p>
                        </div>

                        <Stagger className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {amenities.map((item) => (
                                <StaggerItem key={item.title}>
                                    <ScaleIn>
                                        <Card className="group h-full border-amber-500/20 bg-background/70 backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10">
                                            <CardContent className="p-8 text-center">
                                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/10 transition-all duration-500 group-hover:bg-amber-500">
                                                    <item.icon className="h-10 w-10 text-amber-500 transition-all duration-500 group-hover:text-black" />
                                                </div>

                                                <h3 className="mt-8 font-serif text-2xl">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-4 leading-7 text-muted-foreground">
                                                    {item.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </ScaleIn>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </section>
                </FadeUp>

                {/* TESTIMONIALS */}

                <FadeUp>
                    <section className="relative overflow-hidden border-y py-32">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.08),transparent_60%)]" />

                        <div className="container relative mx-auto px-6">
                            <div className="text-center">
                                <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                    Guest Reviews
                                </p>

                                <h2 className="mt-4 font-serif text-5xl font-bold">
                                    Echoes of Excellence
                                </h2>

                                <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted-foreground">
                                    Every stay leaves behind cherished memories
                                    and unforgettable experiences.
                                </p>
                            </div>

                            <Stagger className="mt-20 grid gap-8 lg:grid-cols-3">
                                {testimonials.map((review) => (
                                    <StaggerItem key={review.name}>
                                        <ScaleIn>
                                            <Card className="group h-full border-amber-500/20 bg-background/60 backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10">
                                                <CardContent className="flex h-full flex-col p-8">
                                                    {/* Stars */}

                                                    <div className="mb-6 flex gap-1">
                                                        {Array.from({
                                                            length: 5,
                                                        }).map((_, index) => (
                                                            <Star
                                                                key={index}
                                                                className="h-5 w-5 fill-amber-500 text-amber-500"
                                                            />
                                                        ))}
                                                    </div>

                                                    {/* Quote */}

                                                    <p className="flex-1 text-lg italic leading-8 text-muted-foreground">
                                                        {review.text}
                                                    </p>

                                                    <div className="mt-8 border-t border-border pt-6">
                                                        <h4 className="font-serif text-xl text-amber-500">
                                                            {review.name}
                                                        </h4>

                                                        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                                            {review.date}
                                                        </p>
                                                    </div>
                                                </CardContent>
                                            </Card>
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
                            <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                Discover
                            </p>

                            <h2 className="mt-4 font-serif text-5xl font-bold">
                                Signature Experiences
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted-foreground">
                                From luxurious suites to breathtaking outdoor
                                spaces, every corner of Kapoor&apos;s Villa has
                                been thoughtfully designed to elevate your stay.
                            </p>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-2">
                            {/* Suites */}

                            <FadeLeft>
                                <Link href="/rooms">
                                    <div className="group relative h-162.5 overflow-hidden rounded-3xl">
                                        <Image
                                            src="/suite.jpg"
                                            alt="Luxury Suites"
                                            fill
                                            className="object-cover transition-all duration-1800 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

                                        <div className="absolute inset-0 flex flex-col justify-end p-10">
                                            <p className="text-xs uppercase tracking-[0.4em] text-amber-500">
                                                Stay
                                            </p>

                                            <h3 className="mt-3 font-serif text-5xl font-bold text-white">
                                                Luxury Suites
                                            </h3>

                                            <p className="mt-5 max-w-md leading-7 text-neutral-200">
                                                Spacious interiors, elegant
                                                décor and panoramic views create
                                                a private sanctuary unlike any
                                                other.
                                            </p>

                                            <Button
                                                variant="secondary"
                                                className="mt-8 w-fit"
                                            >
                                                Explore Rooms
                                            </Button>
                                        </div>
                                    </div>
                                </Link>
                            </FadeLeft>

                            {/* Outdoors */}

                            <FadeRight>
                                <Link href="/gallery">
                                    <div className="group relative h-162.5 overflow-hidden rounded-3xl">
                                        <Image
                                            src="/outdoor.jpg"
                                            alt="Outdoor Spaces"
                                            fill
                                            className="object-cover transition-all duration-1800 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

                                        <div className="absolute inset-0 flex flex-col justify-end p-10">
                                            <p className="text-xs uppercase tracking-[0.4em] text-amber-500">
                                                Experience
                                            </p>

                                            <h3 className="mt-3 font-serif text-5xl font-bold text-white">
                                                Scenic Outdoors
                                            </h3>

                                            <p className="mt-5 max-w-md leading-7 text-neutral-200">
                                                Infinity pool, lush gardens and
                                                peaceful open spaces designed
                                                for unforgettable moments.
                                            </p>

                                            <Button
                                                variant="secondary"
                                                className="mt-8 w-fit"
                                            >
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
                        src="/hero.jpg"
                        alt="Kapoor's Villa"
                        fill
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/75" />

                    <div className="relative container mx-auto flex min-h-125 flex-col items-center justify-center px-6 py-24 text-center">
                        <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                            Escape Into Luxury
                        </p>

                        <h2 className="mt-6 max-w-4xl font-serif text-5xl font-bold md:text-6xl">
                            Experience Timeless Comfort
                        </h2>

                        <p className="mt-8 max-w-2xl leading-8 text-neutral-300">
                            Whether it&apos;s a weekend getaway, family vacation
                            or special celebration, Kapoor&apos;s Villa promises
                            unforgettable hospitality and luxury.
                        </p>

                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-amber-500 text-black hover:bg-amber-400"
                            >
                                <Link href="/contact">Plan Your Stay</Link>
                            </Button>

                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-white/40 text-black dark:text-white hover:bg-white/10"
                            >
                                <Link href="/gallery">Explore Gallery</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </FadeUp>

            <Footer />
        </>
    );
}
