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
                {/* HERO */}

                <section className="relative h-[75vh] overflow-hidden">
                    <Image
                        src="/about-hero.jpg"
                        alt="Kapoor Villa Heritage"
                        fill
                        priority
                        className="object-cover transition-transform duration-12000 hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/60" />

                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/80" />

                    <HeroReveal className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                        <p className="mb-4 text-xs uppercase tracking-[0.45em] text-amber-500">
                            Our Heritage
                        </p>

                        <h1 className="font-serif text-5xl font-bold text-white md:text-7xl">
                            A Private Sanctuary
                        </h1>

                        <p className="mt-8 max-w-3xl leading-8 text-neutral-200">
                            Where timeless architecture, personalized
                            hospitality and natural beauty come together to
                            create unforgettable experiences.
                        </p>
                    </HeroReveal>
                </section>

                {/* STORY */}

                <FadeUp>
                    <section className="container mx-auto px-6 py-24 md:py-32">
                        <div className="grid items-center gap-20 lg:grid-cols-2">
                            <FadeLeft>
                                <div>
                                    <p className="mb-4 text-xs uppercase tracking-[0.45em] text-amber-500">
                                        Our Story
                                    </p>

                                    <h2 className="font-serif text-5xl font-bold leading-tight">
                                        Crafted For
                                        <br />
                                        Unforgettable Escapes
                                    </h2>

                                    <p className="mt-8 leading-8 text-muted-foreground">
                                        Kapoor&apos;s Villa was envisioned as
                                        more than a holiday destination. It was
                                        designed as a sanctuary where luxury,
                                        comfort and nature exist in perfect
                                        harmony.
                                    </p>

                                    <p className="mt-6 leading-8 text-muted-foreground">
                                        Every detail has been carefully curated,
                                        from timeless architecture to
                                        personalized hospitality, ensuring every
                                        guest enjoys an unforgettable stay.
                                    </p>

                                    <Button
                                        asChild
                                        className="mt-10 bg-amber-500 text-black hover:bg-amber-400"
                                    >
                                        <Link href="/rooms">Explore Rooms</Link>
                                    </Button>
                                </div>
                            </FadeLeft>

                            <FadeRight>
                                <div className="group relative h-600px overflow-hidden rounded-3xl">
                                    <Image
                                        src="/about-story.jpg"
                                        alt="Villa Interior"
                                        fill
                                        className="object-cover transition-all duration-1800 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                                </div>
                            </FadeRight>
                        </div>
                    </section>
                </FadeUp>

                {/* VISION & HERITAGE */}

                <FadeUp>
                    <section className="relative overflow-hidden border-y py-24 md:py-32">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.08),transparent_60%)]" />

                        <div className="container relative mx-auto px-6">
                            <div className="mb-16 text-center">
                                <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                    Our Philosophy
                                </p>

                                <h2 className="mt-4 font-serif text-5xl font-bold">
                                    Built Around Experiences
                                </h2>

                                <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted-foreground">
                                    Every corner of Kapoor&apos;s Villa has been
                                    designed to inspire comfort, elegance and
                                    unforgettable memories.
                                </p>
                            </div>

                            <Stagger className="grid gap-8 md:grid-cols-2">
                                <StaggerItem>
                                    <ScaleIn>
                                        <Card className="group h-full border-amber-500/20 bg-background/70 backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10">
                                            <CardContent className="p-10">
                                                <h3 className="font-serif text-3xl">
                                                    Our Vision
                                                </h3>

                                                <p className="mt-6 leading-8 text-muted-foreground">
                                                    To redefine luxury
                                                    hospitality through
                                                    thoughtful design,
                                                    personalized service and
                                                    memorable experiences that
                                                    guests cherish forever.
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </ScaleIn>
                                </StaggerItem>

                                <StaggerItem>
                                    <ScaleIn>
                                        <Card className="group h-full border-amber-500/20 bg-background/70 backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10">
                                            <CardContent className="p-10">
                                                <h3 className="font-serif text-3xl">
                                                    Our Heritage
                                                </h3>

                                                <p className="mt-6 leading-8 text-muted-foreground">
                                                    Inspired by timeless
                                                    architecture and refined
                                                    living, Kapoor&apos;s Villa
                                                    blends heritage aesthetics
                                                    with contemporary luxury.
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </ScaleIn>
                                </StaggerItem>
                            </Stagger>
                        </div>
                    </section>
                </FadeUp>

                {/* STATS */}

                <FadeUp>
                    <section className="container mx-auto px-6 py-28">
                        <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {stats.map((item) => (
                                <StaggerItem key={item.label}>
                                    <ScaleIn>
                                        <div className="rounded-2xl border border-border bg-background/60 p-8 text-center backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10">
                                            <h3 className="font-serif text-6xl font-bold text-amber-500">
                                                {item.value}
                                            </h3>

                                            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                                {item.label}
                                            </p>
                                        </div>
                                    </ScaleIn>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </section>
                </FadeUp>
                {/* CTA */}

                <FadeUp>
                    <section className="container mx-auto px-6 pb-32">
                        <Card className="relative overflow-hidden rounded-3xl border-amber-500/20">
                            <Image
                                src="/about-hero.jpg"
                                alt="Luxury Villa"
                                fill
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-black/75" />

                            <CardContent className="relative flex min-h-112.5 flex-col items-center justify-center p-12 text-center">
                                <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                    Experience Luxury
                                </p>

                                <h2 className="mt-6 max-w-4xl font-serif text-5xl font-bold text-white md:text-6xl">
                                    Your Perfect Escape Awaits
                                </h2>

                                <p className="mt-8 max-w-2xl leading-8 text-neutral-300">
                                    Whether you&apos;re planning a romantic
                                    retreat, family vacation or special
                                    celebration, Kapoor&apos;s Villa offers an
                                    unforgettable luxury experience surrounded
                                    by elegance, comfort and breathtaking
                                    scenery.
                                </p>

                                <div className="mt-12 flex flex-wrap justify-center gap-4">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-amber-500 px-8 text-black hover:bg-amber-400"
                                    >
                                        <Link href="/book">Book Your Stay</Link>
                                    </Button>

                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="border-white/40 bg-transparent px-8 text-white hover:bg-white/10"
                                    >
                                        <Link href="/gallery">
                                            Explore Gallery
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </FadeUp>
            </main>

            <Footer />
        </>
    );
}
