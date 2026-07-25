"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroReveal, FadeUp, FadeLeft, FadeRight, ScaleIn, Stagger, StaggerItem } from "@/components/animations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wifi, Tv, Bath, Coffee, Waves, Car, Trees, UtensilsCrossed } from "lucide-react";

const roomImages = [
    "/rooms/room.jpg", "/rooms/room-2.jpg", "/rooms/room-3.jpg",
    "/rooms/room-4.jpg", "/rooms/room-5.jpg", "/rooms/room-6.jpg",
    "/rooms/room-7.jpg", "/rooms/room-8.jpg", "/rooms/room-9.jpg"
];

const bathImages = [
    "/bathrooms/bathroom-2.jpg",
    "/bathrooms/bathroom-3.jpg", "/bathrooms/bathroom-4.jpg", "/bathrooms/bathroom-5.jpg"
];

const amenities = [
    { icon: Wifi, title: "High-Speed WiFi" }, { icon: Tv, title: "Smart Entertainment" },
    { icon: Bath, title: "Luxury Bathrooms" }, { icon: Coffee, title: "Premium Refreshments" },
    { icon: Waves, title: "Private Pool" }, { icon: Car, title: "Private Parking" },
    { icon: Trees, title: "Scenic Outdoors" }, { icon: UtensilsCrossed, title: "BBQ & Dining" },
];

const Carousel = ({ images }: { images: string[] }) => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);
    return (
        <div className="embla overflow-hidden rounded-2xl border border-[#fcd34d]/20 shadow-2xl shadow-[#112A46]/10" ref={emblaRef}>
            <div className="embla__container flex">
                {images.map((src, index) => (
                    <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative aspect-video md:aspect-[21/9]">
                        <Image src={src} alt="Gallery" fill className="object-cover" priority={index === 0} />
                        {/* Elegant fade at the bottom of the carousel images */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#112A46]/40 via-transparent to-transparent opacity-70" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function RoomsPage() {
    return (
        <div className="min-h-screen bg-[#FDFBF7] text-[#112A46] selection:bg-[#fcd34d] selection:text-[#112A46] dark:bg-[#112A46] dark:text-[#FDFBF7] transition-colors duration-300">
            <Navbar />
            <main>
                {/* HERO SECTION */}
                <section className="relative h-[75vh] overflow-hidden">
                    <Image src="/bedroom/room-hero.jpg" alt="Luxury Rooms" fill priority className="object-cover transition-transform duration-10000 hover:scale-105" />
                    
                    {/* Sophisticated dual-gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#112A46]/90 via-[#112A46]/40 to-[#FDFBF7] dark:from-[#112A46]/95 dark:via-[#112A46]/60 dark:to-[#112A46]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#fcd34d]/20 via-transparent to-transparent" />

                    <HeroReveal className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                        <div className="mb-6 flex items-center justify-center gap-4 opacity-90">
                            <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#fcd34d]" />
                            <span className="text-xs font-serif uppercase tracking-[0.5em] text-[#fcd34d] font-medium">Sanctuary</span>
                            <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#fcd34d]" />
                        </div>
                        <h1 className="font-serif text-5xl font-light tracking-widest text-[#fcd34d] md:text-7xl drop-shadow-lg">
                            ROOMS & SUITES
                        </h1>
                    </HeroReveal>
                </section>

                {/* QUOTE SECTION */}
                <section className="relative py-24 px-6 text-center border-b border-[#fcd34d]/10 bg-gradient-to-b from-[#FDFBF7] to-[#fcd34d]/5 dark:from-[#112A46] dark:to-[#0C1E33]">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#fcd34d]/5 via-transparent to-transparent" />
                    <blockquote className="relative z-10 font-serif text-3xl font-light italic leading-loose text-[#112A46]/80 dark:text-[#FDFBF7]/80 max-w-4xl mx-auto">
                        "Luxury is the art of being perfectly at home while surrounded by the extraordinary."
                    </blockquote>
                    <div className="relative z-10 mx-auto mt-10 h-[1px] w-12 bg-[#fcd34d]/50" />
                </section>

                {/* TABBED GALLERY */}
                <FadeUp>
                    <section className="container mx-auto px-6 py-24 md:py-32">
                        <Tabs defaultValue="rooms" className="w-full">
                            <div className="text-center mb-16">
                                <TabsList className="bg-transparent border border-[#fcd34d]/30 p-1.5 rounded-full h-auto backdrop-blur-md">
                                    <TabsTrigger 
                                        value="rooms" 
                                        className="rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#112A46]/70 dark:text-[#FDFBF7]/70 data-[state=active]:bg-[#fcd34d] data-[state=active]:text-[#112A46] transition-all duration-500"
                                    >
                                        Suite Views
                                    </TabsTrigger>
                                    <TabsTrigger 
                                        value="baths" 
                                        className="rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#112A46]/70 dark:text-[#FDFBF7]/70 data-[state=active]:bg-[#fcd34d] data-[state=active]:text-[#112A46] transition-all duration-500"
                                    >
                                        Bathroom Amenities
                                    </TabsTrigger>
                                </TabsList>
                            </div>
                            <TabsContent value="rooms" className="mt-0 outline-none"><Carousel images={roomImages} /></TabsContent>
                            <TabsContent value="baths" className="mt-0 outline-none"><Carousel images={bathImages} /></TabsContent>
                        </Tabs>
                    </section>
                </FadeUp>

                {/* AMENITIES */}
                <FadeUp>
                    <section className="container mx-auto px-6 pb-24 md:pb-32">
                        <div className="mb-16 text-center">
                            <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#fcd34d]">Room Comforts</p>
                            <h2 className="mt-4 font-serif text-4xl font-light tracking-wide text-[#112A46] dark:text-[#FDFBF7]">Premium Amenities</h2>
                            <div className="mx-auto mt-6 h-[1px] w-12 bg-[#fcd34d]/50" />
                        </div>
                        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {amenities.map((item) => (
                                <StaggerItem key={item.title}>
                                    <ScaleIn>
                                        <div className="group flex h-full cursor-default flex-col items-center justify-center gap-4 border border-[#fcd34d]/10 bg-white/40 dark:bg-[#173454]/40 p-8 rounded-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#fcd34d]/30 hover:bg-white/80 hover:shadow-xl hover:shadow-[#fcd34d]/5 dark:hover:bg-[#173454]/80">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#fcd34d]/30 bg-transparent text-[#fcd34d] transition-colors duration-500 group-hover:bg-[#fcd34d] group-hover:text-[#112A46]">
                                                <item.icon className="h-6 w-6 stroke-[1.5]" />
                                            </div>
                                            <span className="text-center text-sm font-light tracking-wide text-[#112A46] dark:text-[#FDFBF7]">
                                                {item.title}
                                            </span>
                                        </div>
                                    </ScaleIn>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </section>
                </FadeUp>

                {/* ELABORATION SECTION */}
                <FadeUp>
                    <section className="container mx-auto px-6 py-24 md:py-32 border-t border-[#fcd34d]/10">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <FadeLeft>
                                <div className="pr-4 lg:pr-8">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="h-[1px] w-8 bg-[#fcd34d]" />
                                        <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#fcd34d]">Exquisite Detail</p>
                                    </div>
                                    <h2 className="font-serif text-4xl font-light leading-tight tracking-wide text-[#112A46] dark:text-[#FDFBF7] md:text-5xl">
                                        Designed for <br />
                                        <span className="font-medium text-[#fcd34d] italic">Discerning Guests</span>
                                    </h2>
                                    <p className="mt-8 font-light leading-loose text-[#112A46]/70 dark:text-[#FDFBF7]/70">
                                        Every detail in our suites has been meticulously curated to transcend the ordinary. From hand-selected linens to custom ambient lighting, we ensure that your environment reflects your standards of excellence.
                                    </p>
                                    <p className="mt-5 font-light leading-loose text-[#112A46]/60 dark:text-[#FDFBF7]/60">
                                        Whether escaping the hum of daily life or seeking a sophisticated base for exploration, our rooms provide a cocoon of serenity that promises unparalleled rejuvenation.
                                    </p>
                                </div>
                            </FadeLeft>
                            <FadeRight>
                                <div className="group relative mx-auto h-[480px] w-full max-w-md overflow-hidden rounded-t-full rounded-b-md border border-[#fcd34d]/20 bg-[#fcd34d]/5 p-2 dark:bg-[#fcd34d]/5 shadow-2xl shadow-[#112A46]/5">
                                    <div className="relative h-full w-full overflow-hidden rounded-t-full rounded-b-sm">
                                        <Image src="/bedroom/mirror.jpg" alt="Detail" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#112A46]/60 via-transparent to-transparent opacity-90 dark:from-[#112A46]" />
                                    </div>
                                </div>
                            </FadeRight>
                        </div>
                    </section>
                </FadeUp>
            </main>
            <Footer />
        </div>
    );
}