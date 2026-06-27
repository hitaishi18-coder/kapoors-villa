import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <Navbar />

            <main>
                {/* Hero */}

                <section className="relative h-[65vh] overflow-hidden">
                    <Image
                        src="/contact/contact-hero.jpg"
                        alt="Kapoor's Villa Contact"
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/60" />

                    <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                        <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                            GET IN TOUCH
                        </p>

                        <h1 className="mt-6 font-serif text-5xl font-bold md:text-7xl">
                            Contact Us
                        </h1>

                        <p className="mt-8 max-w-2xl text-neutral-200">
                            We&apos;d love to help you plan your perfect stay at
                            Kapoor&apos;s Villa.
                        </p>
                    </div>
                </section>

                {/* Contact Cards */}

                <section className="container mx-auto px-6 py-24">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardContent className="p-8 text-center">
                                <Phone className="mx-auto h-10 w-10 text-amber-500" />

                                <h3 className="mt-6 font-serif text-2xl">
                                    Phone
                                </h3>

                                <p className="mt-4 text-muted-foreground">
                                    +91 98202 92830
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-8 text-center">
                                <Mail className="mx-auto h-10 w-10 text-amber-500" />

                                <h3 className="mt-6 font-serif text-2xl">
                                    Email
                                </h3>

                                <p className="mt-4 text-muted-foreground">
                                    reservations@kapoorvilla.com
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-8 text-center">
                                <MapPin className="mx-auto h-10 w-10 text-amber-500" />

                                <h3 className="mt-6 font-serif text-2xl">
                                    Location
                                </h3>

                                <p className="mt-4 text-muted-foreground">
                                    Lonavala, Maharashtra
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-8 text-center">
                                <Clock className="mx-auto h-10 w-10 text-amber-500" />

                                <h3 className="mt-6 font-serif text-2xl">
                                    Support
                                </h3>

                                <p className="mt-4 text-muted-foreground">
                                    Available 24 / 7
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Contact Form */}

                <section className="container mx-auto px-6 pb-24">
                    <div className="grid gap-16 lg:grid-cols-2">
                        {/* Left Side */}

                        <div>
                            <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                Send An Inquiry
                            </p>

                            <h2 className="mt-4 font-serif text-5xl font-bold">
                                Let&apos;s Plan
                                <br />
                                Your Stay
                            </h2>

                            <p className="mt-8 leading-8 text-muted-foreground">
                                Whether you&apos;re planning a family vacation,
                                a corporate retreat, or a weekend escape, our
                                hospitality team is here to curate an
                                unforgettable experience.
                            </p>

                            <div className="mt-12 space-y-8">
                                <div className="flex items-start gap-4">
                                    <Phone className="mt-1 h-6 w-6 text-amber-500" />

                                    <div>
                                        <h4 className="font-semibold">
                                            Reservations
                                        </h4>

                                        <p className="text-muted-foreground">
                                            +91 98202 92830
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="mt-1 h-6 w-6 text-amber-500" />

                                    <div>
                                        <h4 className="font-semibold">
                                            Email Us
                                        </h4>

                                        <p className="text-muted-foreground">
                                            reservations@kapoorvilla.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <MapPin className="mt-1 h-6 w-6 text-amber-500" />

                                    <div>
                                        <h4 className="font-semibold">
                                            Visit Us
                                        </h4>

                                        <p className="text-muted-foreground">
                                            Lonavala, Maharashtra, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}

                        <Card className="border-amber-500/20">
                            <CardContent className="p-8 md:p-10">
                                <form className="space-y-6">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">
                                                Full Name
                                            </label>

                                            <Input placeholder="John Doe" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">
                                                Email Address
                                            </label>

                                            <Input
                                                type="email"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">
                                                Phone Number
                                            </label>

                                            <Input placeholder="+91 9876543210" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">
                                                Number of Guests
                                            </label>

                                            <Input
                                                type="number"
                                                placeholder="2"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">
                                                Check-in Date
                                            </label>

                                            <Input type="date" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">
                                                Check-out Date
                                            </label>

                                            <Input type="date" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">
                                            Message
                                        </label>

                                        <Textarea
                                            rows={6}
                                            placeholder="Tell us about your stay, special requests, celebrations, or anything you'd like us to prepare..."
                                        />
                                    </div>

                                    <Button
                                        className="w-full bg-amber-500 text-black hover:bg-amber-400"
                                        size="lg"
                                    >
                                        Send Inquiry
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Location */}

                <section className="border-y">
                    <div className="container mx-auto grid lg:grid-cols-2">
                        {/* Map */}

                        <div className="relative min-h-125">
                            <iframe
                                title="Kapoor's Villa Location"
                                src="https://www.google.com/maps?q=Lonavala,+Maharashtra&output=embed"
                                className="absolute inset-0 h-full w-full border-0 grayscale"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* Details */}

                        <div className="flex flex-col justify-center px-8 py-16 md:px-16">
                            <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                Visit Kapoor&apos;s Villa
                            </p>

                            <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
                                Escape Into Luxury
                            </h2>

                            <p className="mt-8 leading-8 text-muted-foreground">
                                Nestled amidst lush landscapes, Kapoor&apos;s
                                Villa offers a peaceful retreat where luxury,
                                comfort and unforgettable hospitality come
                                together.
                            </p>

                            <div className="mt-12 space-y-8">
                                <div>
                                    <h3 className="font-serif text-2xl">
                                        Address
                                    </h3>

                                    <p className="mt-2 text-muted-foreground">
                                        Kapoor&apos;s Villa
                                        <br />
                                        Lonavala, Maharashtra
                                        <br />
                                        India
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-serif text-2xl">
                                        Reservation Hours
                                    </h3>

                                    <p className="mt-2 text-muted-foreground">
                                        Monday – Sunday
                                        <br />
                                        Open 24 Hours
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-serif text-2xl">
                                        Concierge
                                    </h3>

                                    <p className="mt-2 text-muted-foreground">
                                        Our team is available around the clock
                                        for reservations, itinerary planning and
                                        personalized assistance.
                                    </p>
                                </div>
                            </div>

                            <Button
                                asChild
                                size="lg"
                                className="mt-12 w-fit bg-amber-500 text-black hover:bg-amber-400"
                            >
                                <Link href="/book">Reserve Your Stay</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Luxury CTA */}

                <section className="relative overflow-hidden">
                    <Image
                        src="/contact/contact-cta.jpg"
                        alt="Luxury Villa"
                        fill
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/75" />

                    <div className="relative container mx-auto flex min-h-125 items-center justify-center px-6">
                        <div className="max-w-3xl text-center">
                            <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                Your Luxury Escape Begins Here
                            </p>

                            <h2 className="mt-6 font-serif text-5xl font-bold md:text-6xl">
                                Create Memories
                                <br />
                                That Last Forever
                            </h2>

                            <p className="mx-auto mt-8 max-w-2xl leading-8 text-neutral-300">
                                Every stay at Kapoor&apos;s Villa is
                                thoughtfully curated to provide exceptional
                                comfort, privacy and personalized hospitality.
                            </p>

                            <div className="mt-12 flex flex-wrap justify-center gap-4">
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
                                    <Link href="/gallery">Explore Gallery</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
