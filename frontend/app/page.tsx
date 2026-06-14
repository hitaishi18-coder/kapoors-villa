import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

                <section className="relative min-h-screen overflow-hidden">
                    <Image
                        src="/hero.jpg"
                        alt="Villa"
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/55" />

                    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
                        <h1 className="font-serif text-6xl md:text-8xl font-bold text-amber-400">
                            Kapoor&apos;s Villa
                        </h1>

                        <p className="mt-4 text-xl md:text-3xl uppercase tracking-[0.4em]">
                            A Perfect Holiday Home
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <Button
                                size="lg"
                                className="border border-amber-500 bg-transparent hover:bg-amber-500 hover:text-black"
                            >
                                Book Now
                            </Button>

                            <Button
                                variant="ghost"
                                size="lg"
                                className="text-white"
                            >
                                Explore Estate
                            </Button>
                        </div>

                        <ChevronDown className="absolute bottom-10 h-8 w-8 animate-bounce text-amber-500" />
                    </div>
                </section>

                {/* AMENITIES */}

                <section className="container mx-auto px-6 py-32">
                    <div className="text-center">
                        <p className="text-xs uppercase tracking-[0.4em] text-amber-500">
                            World Class Amenities
                        </p>

                        <h2 className="mt-4 font-serif text-5xl font-bold">
                            Curated Luxury Experience
                        </h2>
                    </div>

                    <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {amenities.map((item) => (
                            <Card
                                key={item.title}
                                className="border-amber-500/20 bg-background"
                            >
                                <CardContent className="p-8 text-center">
                                    <item.icon className="mx-auto mb-6 h-10 w-10 text-amber-500" />

                                    <h3 className="mb-3 font-serif text-2xl">
                                        {item.title}
                                    </h3>

                                    <p className="text-muted-foreground">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* TESTIMONIALS */}

                <section className="border-y py-32">
                    <div className="container mx-auto px-6">
                        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-500">
                            Guest Reviews
                        </p>

                        <h2 className="mb-16 font-serif text-5xl font-bold">
                            Echoes of Excellence
                        </h2>

                        <div className="grid gap-10 md:grid-cols-3">
                            {testimonials.map((review) => (
                                <div key={review.name}>
                                    <div className="mb-4 flex text-amber-500">
                                        {Array.from({ length: 5 }).map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-4 w-4 fill-current"
                                                />
                                            ),
                                        )}
                                    </div>

                                    <p className="mb-6 italic text-muted-foreground">
                                        {review.text}
                                    </p>

                                    <h4 className="font-semibold text-amber-500">
                                        {review.name}
                                    </h4>

                                    <p className="text-sm uppercase tracking-widest text-muted-foreground">
                                        {review.date}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FEATURED SPACES */}

                <section className="container mx-auto px-6 py-32">
                    <div className="grid gap-6 md:grid-cols-2">
                        <Link href="/rooms">
                            <div className="group relative h-125 overflow-hidden">
                                <Image
                                    src="/suite.jpg"
                                    alt="Suites"
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-black/40" />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="font-serif text-5xl uppercase tracking-widest">
                                        The Suites
                                    </h3>
                                </div>
                            </div>
                        </Link>

                        <Link href="/gallery">
                            <div className="group relative h-125 overflow-hidden">
                                <Image
                                    src="/outdoor.jpg"
                                    alt="Outdoors"
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-black/40" />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="font-serif text-5xl uppercase tracking-widest">
                                        The Outdoors
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
