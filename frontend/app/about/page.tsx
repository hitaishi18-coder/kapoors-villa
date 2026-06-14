import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
    {
        value: "10+",
        label: "Years of Excellence",
    },
    {
        value: "500+",
        label: "Happy Guests",
    },
    {
        value: "4",
        label: "Luxury Suites",
    },
    {
        value: "24/7",
        label: "Guest Support",
    },
];

export default function AboutPage() {
    return (
        <>
            <Navbar />

            <main>
                {/* Hero */}

                <section className="relative h-[70vh] overflow-hidden">
                    <Image
                        src="/about-hero.jpg"
                        alt="Kapoor Villa Heritage"
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/60" />

                    <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-500">
                            Our Heritage
                        </p>

                        <h1 className="font-serif text-5xl font-bold md:text-7xl">
                            A Private Sanctuary
                        </h1>
                    </div>
                </section>

                {/* Story */}

                <section className="container mx-auto px-6 py-24 md:py-32">
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-500">
                                Our Story
                            </p>

                            <h2 className="font-serif text-4xl font-bold md:text-5xl">
                                Crafted For Unforgettable Escapes
                            </h2>

                            <p className="mt-8 text-muted-foreground leading-8">
                                Kapoor&apos;s Villa was envisioned as more than
                                a holiday destination. It was designed as a
                                sanctuary where luxury, comfort, and nature
                                exist in perfect harmony.
                            </p>

                            <p className="mt-6 text-muted-foreground leading-8">
                                Every detail has been carefully curated, from
                                architectural elegance to personalized
                                hospitality, ensuring every guest experiences a
                                memorable stay.
                            </p>
                        </div>

                        <div className="relative h-125 overflow-hidden rounded-xl">
                            <Image
                                src="/about-story.jpg"
                                alt="Villa Interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Vision & Heritage */}

                <section className="border-y py-24 md:py-32">
                    <div className="container mx-auto px-6">
                        <div className="grid gap-8 md:grid-cols-2">
                            <Card>
                                <CardContent className="p-8">
                                    <h3 className="mb-4 font-serif text-3xl">
                                        Our Vision
                                    </h3>

                                    <p className="text-muted-foreground leading-8">
                                        To redefine luxury hospitality by
                                        creating meaningful, personalized
                                        experiences that leave lasting memories.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-8">
                                    <h3 className="mb-4 font-serif text-3xl">
                                        Our Heritage
                                    </h3>

                                    <p className="text-muted-foreground leading-8">
                                        Inspired by timeless elegance and modern
                                        comfort, Kapoor&apos;s Villa blends
                                        heritage aesthetics with contemporary
                                        luxury.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Stats */}

                <section className="container mx-auto px-6 py-24 md:py-32">
                    <div className="grid gap-8 text-center md:grid-cols-4">
                        {stats.map((item) => (
                            <div key={item.label}>
                                <h3 className="font-serif text-5xl font-bold text-amber-500">
                                    {item.value}
                                </h3>

                                <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}

                <section className="container mx-auto px-6 pb-24 md:pb-32">
                    <Card className="overflow-hidden">
                        <CardContent className="flex flex-col items-center justify-center p-16 text-center">
                            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-500">
                                Experience Luxury
                            </p>

                            <h2 className="max-w-3xl font-serif text-4xl font-bold md:text-5xl">
                                Your Perfect Escape Awaits
                            </h2>

                            <p className="mt-6 max-w-2xl text-muted-foreground">
                                Discover refined hospitality, breathtaking
                                views, and unforgettable moments at
                                Kapoor&apos;s Villa.
                            </p>

                            <Button asChild size="lg" className="mt-8">
                                <Link href="/book">Reserve Your Stay</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </section>
            </main>

            <Footer />
        </>
    );
}
