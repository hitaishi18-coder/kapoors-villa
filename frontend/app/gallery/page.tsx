import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import {
    HeroReveal,
    FadeUp,
    Stagger,
    StaggerItem,
    ScaleIn,
} from "@/components/animations";

const gallery = [
    {
        title: "Royal Suite",
        category: "Rooms",
        image: "/gallery/room-1.jpg",
        height: "h-[420px]",
    },
    {
        title: "Infinity Pool",
        category: "Pool",
        image: "/gallery/pool.jpg",
        height: "h-[560px]",
    },
    {
        title: "Luxury Bedroom",
        category: "Rooms",
        image: "/gallery/room-2.jpg",
        height: "h-[360px]",
    },
    {
        title: "Outdoor Lounge",
        category: "Exterior",
        image: "/gallery/outdoor.webp",
        height: "h-[520px]",
    },
    {
        title: "Private Dining",
        category: "Dining",
        image: "/gallery/dining.jpg",
        height: "h-[380px]",
    },
    {
        title: "Bonfire Evening",
        category: "Experiences",
        image: "/gallery/bonfire.jpg",
        height: "h-[460px]",
    },
    {
        title: "Garden Walk",
        category: "Exterior",
        image: "/gallery/garden.webp",
        height: "h-[520px]",
    },
    {
        title: "Premium Suite",
        category: "Rooms",
        image: "/gallery/room-3.jpg",
        height: "h-[380px]",
    },
];

export default function GalleryPage() {
    return (
        <>
            <Navbar />

            <main>
                {/* Hero */}
                <section className="relative h-[75vh] overflow-hidden">
                    <Image
                        src="/gallery/gallery-hero.webp"
                        alt="Kapoor's Villa Gallery"
                        fill
                        priority
                        className="object-cover transition-transform duration-12000 hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/60" />

                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/80" />

                    <HeroReveal className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                        <p className="mb-4 text-xs uppercase tracking-[0.45em] text-amber-500">
                            EXQUISITE COLLECTION
                        </p>

                        <h1 className="font-serif text-5xl font-bold text-white md:text-7xl">
                            Visual Narrative
                        </h1>

                        <p className="mt-8 max-w-3xl leading-8 text-neutral-200">
                            Discover handcrafted luxury, breathtaking
                            architecture and unforgettable moments through our
                            curated visual collection.
                        </p>
                    </HeroReveal>
                </section>

                {/* GALLERY GRID */}

                <FadeUp>
                    <section className="container mx-auto px-6 pb-32">
                        <Stagger className="columns-1 gap-6 md:columns-2 xl:columns-3">
                            {gallery.map((item) => (
                                <StaggerItem key={item.title}>
                                    <ScaleIn>
                                        <Card
                                            className={`group relative mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-amber-500/10 bg-background/40 backdrop-blur transition-all duration-500 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 ${item.height}`}
                                        >
                                            {/* Image */}

                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-all duration-1800 group-hover:scale-110"
                                            />

                                            {/* Overlay */}

                                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                                            {/* Glow */}

                                            <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
                                                <div className="absolute inset-0 border border-amber-500/40" />

                                                <div className="absolute inset-0 bg-amber-500/5 backdrop-blur-[1px]" />
                                            </div>

                                            {/* Content */}

                                            <div className="absolute inset-x-0 bottom-0 p-8">
                                                <span className="text-xs uppercase tracking-[0.35em] text-amber-500">
                                                    {item.category}
                                                </span>

                                                <h3 className="mt-3 font-serif text-3xl font-bold text-white">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-4 max-w-xs translate-y-4 text-sm leading-7 text-neutral-300 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                                    Experience handcrafted
                                                    luxury, breathtaking
                                                    landscapes and timeless
                                                    hospitality in every
                                                    carefully curated corner of
                                                    Kapoor&apos;s Villa.
                                                </p>

                                                <Button
                                                    asChild
                                                    size="sm"
                                                    className="mt-6 translate-y-6 bg-amber-500 text-black opacity-0 transition-all duration-500 hover:bg-amber-400 group-hover:translate-y-0 group-hover:opacity-100"
                                                >
                                                    <Link href="/book">
                                                        Reserve Stay
                                                    </Link>
                                                </Button>
                                            </div>
                                        </Card>
                                    </ScaleIn>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </section>
                </FadeUp>

                {/* LUXURY QUOTE */}

                <FadeUp>
                    <section className="relative overflow-hidden border-y py-32">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.08),transparent_60%)]" />

                        <div className="container relative mx-auto max-w-5xl px-6 text-center">
                            <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                Timeless Luxury
                            </p>

                            <h2 className="mt-8 font-serif text-5xl leading-tight md:text-6xl">
                                Every photograph captures more than a
                                destination— it preserves moments of elegance,
                                comfort and unforgettable memories.
                            </h2>

                            <div className="mx-auto mt-12 h-px w-40 bg-amber-500/40" />

                            <p className="mx-auto mt-10 max-w-3xl leading-8 text-muted-foreground">
                                Every sunrise, every evening by the pool and
                                every carefully crafted space has been designed
                                to create experiences worth remembering.
                            </p>
                        </div>
                    </section>
                </FadeUp>

                {/* PREMIUM CTA */}

                <FadeUp>
                    <section className="container mx-auto px-6 py-32">
                        <Card className="relative overflow-hidden rounded-3xl border-amber-500/20">
                            <Image
                                src="/gallery/gallery-cta.jpg"
                                alt="Luxury Villa"
                                fill
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-black/75" />

                            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/55 to-black/30" />

                            <div className="relative flex min-h-125 flex-col items-center justify-center px-8 text-center">
                                <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                    Reserve Your Escape
                                </p>

                                <h2 className="mt-6 max-w-4xl font-serif text-5xl font-bold text-white md:text-6xl">
                                    Experience Luxury Beyond Imagination
                                </h2>

                                <p className="mt-8 max-w-2xl leading-8 text-neutral-300">
                                    Escape into breathtaking surroundings,
                                    elegant interiors and personalized
                                    hospitality crafted to make every stay
                                    unforgettable.
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
                                        <Link href="/contact">Contact Us</Link>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </section>
                </FadeUp>
                {/* Booking CTA */}

                <section className="container mx-auto px-6 py-24 md:py-32">
                    <Card className="overflow-hidden border-amber-500/20">
                        <div className="grid lg:grid-cols-2">
                            {/* Left */}

                            <div className="flex flex-col justify-center p-10 md:p-16">
                                <p className="text-xs uppercase tracking-[0.4em] text-amber-500">
                                    Reserve Your Escape
                                </p>

                                <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
                                    Luxury Awaits
                                </h2>

                                <p className="mt-6 leading-8 text-muted-foreground">
                                    Experience breathtaking views, curated
                                    interiors, personalized hospitality and
                                    unforgettable moments at Kapoor&apos;s
                                    Villa.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-4">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-amber-500 text-black hover:bg-amber-400"
                                    >
                                        <Link href="/book">Book Now</Link>
                                    </Button>

                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="border-amber-500/40 hover:border-amber-500"
                                    >
                                        <Link href="/contact">Contact Us</Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Right */}

                            <div className="relative min-h-105">
                                <Image
                                    src="/gallery/gallery-cta.jpg"
                                    alt="Luxury Villa"
                                    fill
                                    className="object-cover"
                                />

                                <div className="absolute inset-0 bg-linear-to-l from-transparent to-black/20" />
                            </div>
                        </div>
                    </Card>
                </section>
            </main>

            <Footer />
        </>
    );
}
