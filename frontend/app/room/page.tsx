"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroReveal, FadeUp, ScaleIn, Stagger, StaggerItem } from "@/components/animations";
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
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);
  return (
    <div className="embla overflow-hidden rounded-3xl border border-amber-500/20" ref={emblaRef}>
      <div className="embla__container flex">
        {images.map((src, index) => (
          <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative aspect-video">
            <Image src={src} alt="Gallery" fill className="object-cover" priority={index === 0} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function RoomsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative h-[75vh] overflow-hidden">
          <Image src="/bedroom/room-hero.jpg" alt="Luxury Rooms" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <HeroReveal className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <h1 className="font-serif text-5xl font-bold text-white md:text-7xl">Rooms & Suites</h1>
          </HeroReveal>
        </section>

        {/* QUOTE SECTION */}
        <section className="py-20 px-6 text-center bg-neutral-50">
          <blockquote className="font-serif text-3xl italic text-neutral-800 max-w-3xl mx-auto">
            "Luxury is the art of being perfectly at home while surrounded by the extraordinary."
          </blockquote>
        </section>

        {/* TABBED GALLERY */}
        <section className="container mx-auto px-6 py-24">
          <Tabs defaultValue="rooms" className="w-full">
            <div className="text-center mb-12">
              <TabsList className="bg-neutral-900/10 p-1 rounded-full">
                <TabsTrigger value="rooms" className="rounded-full px-8">Suite Views</TabsTrigger>
                <TabsTrigger value="baths" className="rounded-full px-8">Bathroom Amenities</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="rooms"><Carousel images={roomImages} /></TabsContent>
            <TabsContent value="baths"><Carousel images={bathImages} /></TabsContent>
          </Tabs>
        </section>

        {/* AMENITIES */}
        <FadeUp>
          <section className="container mx-auto px-6 pb-24">
            <Stagger className="grid gap-8 md:grid-cols-4">
              {amenities.map((item) => (
                <StaggerItem key={item.title}>
                  <ScaleIn>
                    <div className="border border-amber-500/20 p-8 rounded-2xl text-center hover:border-amber-500 transition-colors">
                      <item.icon className="h-10 w-10 text-amber-500 mx-auto mb-4" />
                      <h3 className="font-serif text-xl">{item.title}</h3>
                    </div>
                  </ScaleIn>
                </StaggerItem>
              ))}
            </Stagger>
          </section>
        </FadeUp>

        {/* ELABORATION SECTION */}
        <section className="container mx-auto px-6 py-24 border-t">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Designed for Discerning Guests</h2>
              <p className="text-lg leading-relaxed text-neutral-600 mb-6">
                Every detail in our suites has been meticulously curated to transcend the ordinary. From hand-selected linens to custom ambient lighting, we ensure that your environment reflects your standards of excellence.
              </p>
              <p className="text-lg leading-relaxed text-neutral-600">
                Whether escaping the hum of daily life or seeking a sophisticated base for exploration, our rooms provide a cocoon of serenity that promises unparalleled rejuvenation.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/bedroom/mirror.jpg" alt="Detail" fill className="object-cover" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}