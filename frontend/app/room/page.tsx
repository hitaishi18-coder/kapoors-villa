import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
            "An expansive suite with panoramic views, private balcony, and handcrafted interiors.",
    },
    {
        title: "Executive Garden Suite",
        image: "/room-2.jpg",
        size: "500 sq.ft",
        guests: "2-3 Guests",
        description:
            "Elegant accommodation overlooking lush landscaped gardens.",
    },
    {
        title: "Azure Premium Room",
        image: "/room-3.jpg",
        size: "400 sq.ft",
        guests: "2 Guests",
        description: "Modern luxury with warm textures and premium comfort.",
    },
];

const amenities = [
    {
        icon: Wifi,
        title: "High-Speed WiFi",
    },
    {
        icon: Tv,
        title: "Smart Entertainment",
    },
    {
        icon: Bath,
        title: "Luxury Bathrooms",
    },
    {
        icon: Coffee,
        title: "Premium Refreshments",
    },
    {
        icon: Waves,
        title: "Private Pool",
    },
    {
        icon: Car,
        title: "Private Parking",
    },
    {
        icon: Trees,
        title: "Scenic Outdoors",
    },
    {
        icon: UtensilsCrossed,
        title: "BBQ & Dining",
    },
];

export default function RoomsPage() {
    return (
        <>
            <Navbar />

            <main>
                {/* Hero */}

                <section className="relative h-[70vh] overflow-hidden">
                    <Image
                        src="/rooms-hero.jpg"
                        alt="Luxury Rooms"
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/60" />

                    <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-500">
                            Luxury Accommodation
                        </p>

                        <h1 className="font-serif text-5xl font-bold md:text-7xl">
                            Rooms & Suites
                        </h1>
                    </div>
                </section>

                {/* Rooms Grid */}

                <section className="container mx-auto px-6 py-24 md:py-32">
                    <div className="text-center">
                        <p className="text-xs uppercase tracking-[0.4em] text-amber-500">
                            Refined Comfort
                        </p>

                        <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
                            Designed For Relaxation
                        </h2>
                    </div>

                    <div className="mt-16 grid gap-8 lg:grid-cols-3">
                        {rooms.map((room) => (
                            <Card
                                key={room.title}
                                className="overflow-hidden transition-all hover:border-amber-500"
                            >
                                <div className="relative h-80">
                                    <Image
                                        src={room.image}
                                        alt={room.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="font-serif text-2xl font-bold">
                                        {room.title}
                                    </h3>

                                    <div className="mt-2 flex gap-4 text-sm text-muted-foreground">
                                        <span>{room.size}</span>
                                        <span>•</span>
                                        <span>{room.guests}</span>
                                    </div>

                                    <p className="mt-4 text-muted-foreground">
                                        {room.description}
                                    </p>

                                    <Button asChild className="mt-6 w-full">
                                        <Link href="/book">Reserve Suite</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Amenities */}

                <section className="border-y py-24 md:py-32">
                    <div className="container mx-auto px-6">
                        <div className="text-center">
                            <p className="text-xs uppercase tracking-[0.4em] text-amber-500">
                                Included Amenities
                            </p>

                            <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
                                Everything You Need
                            </h2>
                        </div>

                        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {amenities.map((item) => (
                                <Card key={item.title}>
                                    <CardContent className="flex flex-col items-center p-8 text-center">
                                        <item.icon className="mb-4 h-10 w-10 text-amber-500" />

                                        <h3 className="font-medium">
                                            {item.title}
                                        </h3>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Experience Section */}

                <section className="container mx-auto px-6 py-24 md:py-32">
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="text-xs uppercase tracking-[0.4em] text-amber-500">
                                Beyond Accommodation
                            </p>

                            <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
                                A Complete Luxury Experience
                            </h2>

                            <p className="mt-8 leading-8 text-muted-foreground">
                                Our estate combines elegant accommodation with
                                curated experiences, scenic landscapes, private
                                dining, outdoor recreation, and personalized
                                hospitality.
                            </p>

                            <Button asChild size="lg" className="mt-8">
                                <Link href="/book">Plan Your Stay</Link>
                            </Button>
                        </div>

                        <div className="relative h-125 overflow-hidden rounded-xl">
                            <Image
                                src="/room-experience.jpg"
                                alt="Luxury Experience"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* CTA */}

                <section className="container mx-auto px-6 pb-24 md:pb-32">
                    <Card>
                        <CardContent className="flex flex-col items-center p-16 text-center">
                            <p className="text-xs uppercase tracking-[0.4em] text-amber-500">
                                Reserve Your Escape
                            </p>

                            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-bold md:text-5xl">
                                Experience The Finest Stay At Kapoor&apos;s
                                Villa
                            </h2>

                            <p className="mt-6 max-w-2xl text-muted-foreground">
                                Luxury, privacy, comfort, and unforgettable
                                hospitality await.
                            </p>

                            <Button asChild size="lg" className="mt-8">
                                <Link href="/book">Book Your Stay</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </section>
            </main>

            <Footer />
        </>
    );
}
