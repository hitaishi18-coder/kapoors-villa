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

import {
    Wifi,
    Tv,
    Bath,
    Coffee,
    Waves,
    Car,
    Trees,
    UtensilsCrossed,
} from "lucide-react";

const rooms = [
    {
        title: "Royal Master Suite",
        image: "/room-1.jpg",
        size: "650 sq.ft",
        guests: "2-4 Guests",
        description:
            "An expansive suite with panoramic views, private balcony and handcrafted interiors designed for luxurious comfort.",
    },
    {
        title: "Executive Garden Suite",
        image: "/room-2.jpg",
        size: "500 sq.ft",
        guests: "2-3 Guests",
        description:
            "Elegant accommodation overlooking lush landscaped gardens with refined contemporary interiors.",
    },
    {
        title: "Azure Premium Room",
        image: "/room-3.jpg",
        size: "400 sq.ft",
        guests: "2 Guests",
        description:
            "Modern luxury blended with warm textures and premium amenities for an unforgettable stay.",
    },
];

const amenities = [
    { icon: Wifi, title: "High-Speed WiFi" },
    { icon: Tv, title: "Smart Entertainment" },
    { icon: Bath, title: "Luxury Bathrooms" },
    { icon: Coffee, title: "Premium Refreshments" },
    { icon: Waves, title: "Private Pool" },
    { icon: Car, title: "Private Parking" },
    { icon: Trees, title: "Scenic Outdoors" },
    { icon: UtensilsCrossed, title: "BBQ & Dining" },
];

export default function RoomsPage() {
    return (
        <>
            <Navbar />

            <main>
                {/* HERO */}

                <section className="relative h-[75vh] overflow-hidden">
                    <Image
                        src="/rooms-hero.jpg"
                        alt="Luxury Rooms"
                        fill
                        priority
                        className="object-cover transition-transform duration-12000 hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/60" />

                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/80" />

                    <HeroReveal className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                        <p className="mb-4 text-xs uppercase tracking-[0.45em] text-amber-500">
                            Luxury Accommodation
                        </p>

                        <h1 className="font-serif text-5xl font-bold text-white md:text-7xl">
                            Rooms & Suites
                        </h1>

                        <p className="mt-8 max-w-3xl leading-8 text-neutral-200">
                            Elegant interiors, breathtaking surroundings and
                            world-class comfort crafted for unforgettable stays.
                        </p>
                    </HeroReveal>
                </section>

                {/* ROOMS */}

                <FadeUp>
                    <section className="container mx-auto px-6 py-24 md:py-32">
                        <div className="text-center">
                            <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                Refined Comfort
                            </p>

                            <h2 className="mt-4 font-serif text-5xl font-bold">
                                Designed For Relaxation
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted-foreground">
                                Every suite has been thoughtfully designed with
                                timeless elegance and premium comfort.
                            </p>
                        </div>

                        <Stagger className="mt-20 grid gap-10 lg:grid-cols-3">
                            {rooms.map((room) => (
                                <StaggerItem key={room.title}>
                                    <ScaleIn>
                                        <Card className="group overflow-hidden border-amber-500/20 bg-background/70 backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10">
                                            <div className="relative h-96 overflow-hidden">
                                                <Image
                                                    src={room.image}
                                                    alt={room.title}
                                                    fill
                                                    className="object-cover transition-all duration-1800 group-hover:scale-110"
                                                />

                                                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

                                                <div className="absolute bottom-5 left-5 rounded-full bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white backdrop-blur">
                                                    {room.guests}
                                                </div>
                                            </div>

                                            <CardContent className="p-8">
                                                <h3 className="font-serif text-3xl font-bold">
                                                    {room.title}
                                                </h3>

                                                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-amber-500">
                                                    {room.size}
                                                </p>

                                                <p className="mt-6 leading-8 text-muted-foreground">
                                                    {room.description}
                                                </p>

                                                <Button
                                                    asChild
                                                    className="mt-8 w-full bg-amber-500 text-black hover:bg-amber-400"
                                                >
                                                    <Link href="/book">
                                                        Reserve Suite
                                                    </Link>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </ScaleIn>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </section>
                </FadeUp>
                {/* AMENITIES */}

                <FadeUp>
                    <section className="relative overflow-hidden border-y py-24 md:py-32">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.08),transparent_60%)]" />

                        <div className="container relative mx-auto px-6">
                            <div className="mb-16 text-center">
                                <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                    Included Amenities
                                </p>

                                <h2 className="mt-4 font-serif text-5xl font-bold">
                                    Everything You Need
                                </h2>

                                <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted-foreground">
                                    Experience luxury living with thoughtfully
                                    curated amenities designed for relaxation,
                                    entertainment and convenience.
                                </p>
                            </div>

                            <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {amenities.map((item) => (
                                    <StaggerItem key={item.title}>
                                        <ScaleIn>
                                            <Card className="group border-amber-500/20 bg-background/70 backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10">
                                                <CardContent className="flex flex-col items-center p-10 text-center">
                                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/10 transition-all duration-500 group-hover:bg-amber-500">
                                                        <item.icon className="h-10 w-10 text-amber-500 transition-all duration-500 group-hover:text-black" />
                                                    </div>

                                                    <h3 className="mt-8 font-serif text-xl">
                                                        {item.title}
                                                    </h3>
                                                </CardContent>
                                            </Card>
                                        </ScaleIn>
                                    </StaggerItem>
                                ))}
                            </Stagger>
                        </div>
                    </section>
                </FadeUp>

                {/* EXPERIENCE */}

                <FadeUp>
                    <section className="container mx-auto px-6 py-28">
                        <div className="grid items-center gap-20 lg:grid-cols-2">
                            <FadeLeft>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                        Beyond Accommodation
                                    </p>

                                    <h2 className="mt-4 font-serif text-5xl font-bold">
                                        A Complete Luxury Experience
                                    </h2>

                                    <p className="mt-8 leading-8 text-muted-foreground">
                                        Every stay extends far beyond elegant
                                        accommodation. Wake up to peaceful
                                        mornings, relax beside the private pool,
                                        enjoy outdoor dining and create lasting
                                        memories surrounded by breathtaking
                                        natural beauty.
                                    </p>

                                    <p className="mt-6 leading-8 text-muted-foreground">
                                        Whether you&apos;re planning a romantic
                                        getaway, family vacation or weekend
                                        retreat with friends, Kapoor&apos;s
                                        Villa offers the perfect balance of
                                        comfort, privacy and sophistication.
                                    </p>

                                    <Button
                                        asChild
                                        size="lg"
                                        className="mt-10 bg-amber-500 text-black hover:bg-amber-400"
                                    >
                                        <Link href="/book">Plan Your Stay</Link>
                                    </Button>
                                </div>
                            </FadeLeft>

                            <FadeRight>
                                <div className="group relative h-162.5 overflow-hidden rounded-3xl">
                                    <Image
                                        src="/room-experience.jpg"
                                        alt="Luxury Experience"
                                        fill
                                        className="object-cover transition-all duration-1800 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                                </div>
                            </FadeRight>
                        </div>
                    </section>
                </FadeUp>

                {/* CTA */}

                <FadeUp>
                    <section className="container mx-auto px-6 pb-32">
                        <Card className="relative overflow-hidden rounded-3xl border-amber-500/20">
                            <Image
                                src="/rooms-hero.jpg"
                                alt="Luxury Stay"
                                fill
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-black/75" />

                            <CardContent className="relative flex min-h-115 flex-col items-center justify-center p-12 text-center">
                                <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                    Reserve Your Escape
                                </p>

                                <h2 className="mt-6 max-w-4xl font-serif text-5xl font-bold text-white md:text-6xl">
                                    Experience The Finest Stay At Kapoor&apos;s
                                    Villa
                                </h2>

                                <p className="mt-8 max-w-2xl leading-8 text-neutral-300">
                                    Wake up to breathtaking views, unwind in
                                    elegant interiors and create unforgettable
                                    memories in a sanctuary designed for
                                    comfort, privacy and luxury.
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
