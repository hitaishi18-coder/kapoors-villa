import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const filters = ["All", "Rooms", "Exterior", "Dining", "Pool", "Experiences"];

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
        image: "/gallery/outdoor.jpg",
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
        image: "/gallery/garden.jpg",
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

                <section className="relative h-[65vh] overflow-hidden">
                    <Image
                        src="/gallery/gallery-hero.jpg"
                        alt="Kapoor's Villa Gallery"
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/60" />

                    <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                        <p className="mb-4 text-xs uppercase tracking-[0.45em] text-amber-500">
                            EXQUISITE COLLECTION
                        </p>

                        <h1 className="font-serif text-5xl font-bold md:text-7xl">
                            Visual Narrative
                        </h1>

                        <p className="mt-6 max-w-2xl text-neutral-200">
                            Explore moments, architecture and curated luxury
                            through our visual collection.
                        </p>
                    </div>
                </section>

                {/* Filters */}

                <section className="container mx-auto px-6 py-14">
                    <div className="flex flex-wrap justify-center gap-4">
                        {filters.map((filter, index) => (
                            <Button
                                key={filter}
                                variant={index === 0 ? "default" : "outline"}
                                className={
                                    index === 0
                                        ? "bg-amber-500 text-black hover:bg-amber-400"
                                        : "border-amber-500/40 hover:border-amber-500"
                                }
                            >
                                {filter}
                            </Button>
                        ))}
                    </div>
                </section>

                {/* Gallery Grid */}

                <section className="container mx-auto px-6 pb-32">
                    <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
                        {gallery.map((item) => (
                            <Card
                                key={item.title}
                                className={`group relative mb-6 break-inside-avoid overflow-hidden border-0 ${item.height}`}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110"
                                />

                                {/* Dark Overlay */}

                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                                {/* Gold Glow */}

                                <div className="absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-amber-500/50" />

                                {/* Content */}

                                <div className="absolute inset-x-0 bottom-0 p-8">
                                    <span className="text-xs uppercase tracking-[0.35em] text-amber-500">
                                        {item.category}
                                    </span>

                                    <h3 className="mt-3 font-serif text-3xl font-bold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 max-w-xs text-sm text-neutral-300 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                        Experience handcrafted luxury and
                                        timeless elegance in every carefully
                                        curated corner of Kapoor&apos;s Villa.
                                    </p>

                                    <Button
                                        asChild
                                        size="sm"
                                        className="mt-6 translate-y-4 bg-amber-500 text-black opacity-0 transition-all duration-500 hover:bg-amber-400 group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <Link href="/book">
                                            Book This Experience
                                        </Link>
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Luxury Quote Section */}

                <section className="border-y py-28">
                    <div className="container mx-auto max-w-4xl px-6 text-center">
                        <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                            Timeless Luxury
                        </p>

                        <h2 className="mt-8 font-serif text-4xl leading-tight md:text-6xl">
                            Every photograph tells a story of comfort, elegance
                            and unforgettable memories.
                        </h2>

                        <div className="mx-auto mt-12 h-px w-32 bg-amber-500/40" />
                    </div>
                </section>
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
