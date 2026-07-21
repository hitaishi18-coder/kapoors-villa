import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    HeroReveal,
    FadeUp,
    ScaleIn,
    Stagger,
    StaggerItem,
} from "@/components/animations";

import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <Navbar />

            <main>
                {/* HERO */}
                <section className="relative h-[75vh] overflow-hidden">
                    <Image
                        src="/contact/contact-hero.jpg"
                        alt="Kapoor's Villa Contact"
                        fill
                        priority
                        className="object-cover transition-transform duration-12000 hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/65" />

                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/80" />

                    <HeroReveal className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                        <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                            GET IN TOUCH
                        </p>

                        <h1 className="mt-6 font-serif text-5xl font-bold text-white md:text-7xl">
                            Contact Us
                        </h1>

                        <p className="mt-8 max-w-3xl leading-8 text-neutral-200">
                            Whether you&apos;re planning a romantic getaway,
                            family vacation or celebration, our concierge team
                            is here to help.
                        </p>
                    </HeroReveal>
                </section>

                {/* CONTACT CARDS */}
                <FadeUp>
                    <section className="container mx-auto px-6 py-24">
                        <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            <StaggerItem>
                                <ScaleIn>
                                    <Card className="group border-amber-500/20 bg-background/70 backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10">
                                        <CardContent className="flex flex-col items-center p-10 text-center">
                                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/10 transition-all duration-500 group-hover:bg-amber-500">
                                                <Phone className="h-10 w-10 text-amber-500 transition-all duration-500 group-hover:text-black" />
                                            </div>

                                            <h3 className="mt-8 font-serif text-2xl">
                                                Phone
                                            </h3>

                                            <p className="mt-4 text-muted-foreground">
                                                +91 83559 92830
                                            </p>
                                        </CardContent>
                                    </Card>
                                </ScaleIn>
                            </StaggerItem>

                            <StaggerItem>
                                <ScaleIn>
                                    <Card className="group border-amber-500/20 bg-background/70 backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10">
                                        <CardContent className="flex flex-col items-center p-10 text-center">
                                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/10 transition-all duration-500 group-hover:bg-amber-500">
                                                <Mail className="h-10 w-10 text-amber-500 transition-all duration-500 group-hover:text-black" />
                                            </div>

                                            <h3 className="mt-8 font-serif text-2xl">
                                                Email
                                            </h3>

                                            <p className="mt-4 text-muted-foreground">
                                                kapoorsvillapanchgani@gmail.com
                                            </p>
                                        </CardContent>
                                    </Card>
                                </ScaleIn>
                            </StaggerItem>

                            <StaggerItem>
                                <ScaleIn>
                                    <Card className="group border-amber-500/20 bg-background/70 backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10">
                                        <CardContent className="flex flex-col items-center p-10 text-center">
                                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/10 transition-all duration-500 group-hover:bg-amber-500">
                                                <MapPin className="h-10 w-10 text-amber-500 transition-all duration-500 group-hover:text-black" />
                                            </div>

                                            <h3 className="mt-8 font-serif text-2xl">
                                                Location
                                            </h3>

                                            <p className="mt-4 text-muted-foreground">
                                                Panchgani, Maharashtra
                                            </p>
                                        </CardContent>
                                    </Card>
                                </ScaleIn>
                            </StaggerItem>

                            <StaggerItem>
                                <ScaleIn>
                                    <Card className="group border-amber-500/20 bg-background/70 backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10">
                                        <CardContent className="flex flex-col items-center p-10 text-center">
                                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/10 transition-all duration-500 group-hover:bg-amber-500">
                                                <Clock className="h-10 w-10 text-amber-500 transition-all duration-500 group-hover:text-black" />
                                            </div>

                                            <h3 className="mt-8 font-serif text-2xl">
                                                Support
                                            </h3>

                                            <p className="mt-4 text-muted-foreground">
                                                Available 24 × 7
                                            </p>
                                        </CardContent>
                                    </Card>
                                </ScaleIn>
                            </StaggerItem>
                        </Stagger>
                    </section>
                </FadeUp>

                {/* CONTACT FORM */}
                <FadeUp>
                    <section className="container mx-auto px-6 pb-32">
                        <div className="grid gap-20 lg:grid-cols-2">
                            {/* LEFT */}
                            <div>
                                <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                    Luxury Concierge
                                </p>

                                <h2 className="mt-4 font-serif text-5xl font-bold leading-tight">
                                    Let&apos;s Plan
                                    <br />
                                    Your Perfect Stay
                                </h2>

                                <p className="mt-8 leading-8 text-muted-foreground">
                                    Whether you&apos;re planning a romantic
                                    getaway, family vacation or weekend
                                    celebration, our hospitality team is here to
                                    create an unforgettable experience tailored
                                    just for you.
                                </p>

                                <div className="mt-12 space-y-10">
                                    <div className="flex gap-5">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10">
                                            <Phone className="h-6 w-6 text-amber-500" />
                                        </div>

                                        <div>
                                            <h4 className="font-serif text-2xl">
                                                Reservations
                                            </h4>

                                            <p className="mt-2 text-muted-foreground">
                                                +91 83559 92830
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-5">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10">
                                            <Mail className="h-6 w-6 text-amber-500" />
                                        </div>

                                        <div>
                                            <h4 className="font-serif text-2xl">
                                                Email
                                            </h4>

                                            <p className="mt-2 text-muted-foreground">
                                                kapoorsvillapanchgani@gmail.com
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-5">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10">
                                            <MapPin className="h-6 w-6 text-amber-500" />
                                        </div>

                                        <div>
                                            <h4 className="font-serif text-2xl">
                                                Address
                                            </h4>

                                            <p className="mt-2 text-muted-foreground">
                                                Panchgani, Maharashtra, India
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FORM */}
                            <ScaleIn>
                                <Card className="border-amber-500/20 bg-background/70 backdrop-blur">
                                    <CardContent className="p-10">
                                        <form className="space-y-6">
                                            <div className="grid gap-6 md:grid-cols-2">
                                                <Input
                                                    placeholder="Full Name"
                                                    className="h-12"
                                                />
                                                <Input
                                                    type="email"
                                                    placeholder="Email Address"
                                                    className="h-12"
                                                />
                                            </div>

                                            <div className="grid gap-6 md:grid-cols-2">
                                                <Input
                                                    placeholder="Phone Number"
                                                    className="h-12"
                                                />
                                                <Input
                                                    type="number"
                                                    placeholder="Guests"
                                                    className="h-12"
                                                />
                                            </div>

                                            <div className="grid gap-6 md:grid-cols-2">
                                                <Input
                                                    type="date"
                                                    className="h-12"
                                                />
                                                <Input
                                                    type="date"
                                                    className="h-12"
                                                />
                                            </div>

                                            <Textarea
                                                rows={6}
                                                placeholder="Tell us about your stay..."
                                            />

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
                            </ScaleIn>
                        </div>
                    </section>
                </FadeUp>

                {/* LOCATION */}
                <FadeUp>
                    <section className="relative overflow-hidden border-y">
                        <div className="grid lg:grid-cols-2">
                            {/* MAP */}
                            <div className="relative min-h-162.5">
                                <iframe
                                    title="Kapoor's Villa Location"
                                    src="https://www.google.com/maps?q=Kapoor's+Villa,+Panchgani,+Maharashtra&output=embed"
                                    className="absolute inset-0 h-full w-full border-0 grayscale transition duration-700 hover:grayscale-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            {/* DETAILS */}
                            <div className="flex items-center">
                                <div className="mx-auto max-w-xl px-8 py-24">
                                    <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                        Visit Kapoor&apos;s Villa
                                    </p>

                                    <h2 className="mt-5 font-serif text-5xl font-bold">
                                        Escape Into Luxury
                                    </h2>

                                    <p className="mt-8 leading-8 text-muted-foreground">
                                        Surrounded by lush greenery and peaceful
                                        landscapes, Kapoor&apos;s Villa offers a
                                        destination where comfort, elegance and
                                        unforgettable hospitality meet.
                                    </p>

                                    <div className="mt-12 grid gap-10 sm:grid-cols-2">
                                        <div>
                                            <h3 className="font-serif text-2xl">
                                                Address
                                            </h3>
                                            <p className="mt-3 leading-7 text-muted-foreground">
                                                Kapoor&apos;s Villa
                                                <br />
                                                Panchgani, Maharashtra
                                                <br />
                                                India
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="font-serif text-2xl">
                                                Distances
                                            </h3>
                                            <ul className="mt-3 leading-7 text-muted-foreground">
                                                <li>Nirwana - 2 km</li>
                                                <li>Bhillar - 12 km</li>
                                                <li>Mepro - 16 km</li>
                                                <li>Panchgani - 17 km</li>
                                                <li>Mahabaleshwar - 26 km</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-serif text-2xl">
                                                Reservation Hours
                                            </h3>
                                            <p className="mt-3 leading-7 text-muted-foreground">
                                                Monday – Sunday
                                                <br />
                                                Open 24 Hours
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="font-serif text-2xl">
                                                Concierge
                                            </h3>
                                            <p className="mt-3 leading-7 text-muted-foreground">
                                                Our concierge team is available
                                                around the clock to assist with
                                                reservations, itinerary planning
                                                and personalized experiences.
                                            </p>
                                        </div>
                                    </div>

                                    <Button
                                        asChild
                                        size="lg"
                                        className="mt-12 bg-amber-500 text-black hover:bg-amber-400"
                                    >
                                        <Link href="/contact">
                                            Contact Concierge
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeUp>

                {/* LUXURY CTA */}
                <FadeUp>
                    <section className="relative overflow-hidden">
                        <Image
                            src="/contact/contact-cta.jpg"
                            alt="Luxury Villa"
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-black/75" />

                        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30" />

                        <div className="relative container mx-auto flex min-h-140 items-center justify-center px-6">
                            <div className="max-w-4xl text-center">
                                <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                    Your Luxury Escape Begins Here
                                </p>

                                <h2 className="mt-6 font-serif text-5xl font-bold text-white md:text-6xl">
                                    Create Memories
                                    <br />
                                    That Last Forever
                                </h2>

                                <p className="mx-auto mt-8 max-w-2xl leading-8 text-neutral-300">
                                    Every stay at Kapoor&apos;s Villa is
                                    thoughtfully curated to provide privacy,
                                    comfort and personalized hospitality.
                                </p>

                                <div className="mt-12 flex flex-wrap justify-center gap-4">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-amber-500 px-8 text-black hover:bg-amber-400"
                                    >
                                        <a
                                            href="https://wa.me/918355992830"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Book on WhatsApp
                                        </a>
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
                            </div>
                        </div>
                    </section>
                </FadeUp>
            </main>

            <Footer />
        </>
    );
}