"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  HeroReveal,
  FadeUp,
  FadeLeft,
  FadeRight,
} from "@/components/animations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

const roomImages = [
  "/rooms/room.jpg",
  "/rooms/room-2.jpg",
  "/rooms/room-3.jpg",
  "/rooms/room-4.jpg",
  "/rooms/room-5.jpg",
  "/rooms/room-6.jpg",
  "/rooms/room-7.jpg",
  "/rooms/room-8.jpg",
  "/rooms/room-9.jpg",
];

const bathImages = [
  "/bathrooms/bathroom-2.jpg",
  "/bathrooms/bathroom-3.jpg",
  "/bathrooms/bathroom-4.jpg",
  "/bathrooms/bathroom-5.jpg",
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

const Carousel = ({ images }: { images: string[] }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);
  return (
    <div
      className="embla overflow-hidden rounded-2xl border border-[#fcd34d]/20 shadow-2xl shadow-[#112A46]/10"
      ref={emblaRef}
    >
      <div className="embla__container flex">
        {images.map((src, index) => (
          <div
            key={index}
            className="embla__slide flex-[0_0_100%] min-w-0 relative aspect-video md:aspect-[21/9]"
          >
            <Image
              src={src}
              alt="Gallery"
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#112A46]/40 via-transparent to-transparent opacity-70" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function RoomClient() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative h-[75vh] overflow-hidden">
          <Image
            src="/bedroom/room-hero.jpg"
            alt="Luxury Rooms"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <HeroReveal className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <h1 className="font-serif text-5xl font-bold text-white md:text-7xl">
              Rooms & Suites
            </h1>
          </HeroReveal>
        </section>

        {/* QUOTE SECTION */}
        <section className="py-20 px-6 text-center bg-neutral-300 dark:bg-[#1E1E1E]">
          <blockquote className="font-serif text-3xl italic text-neutral-800 dark:text-white max-w-3xl mx-auto">
            &quot;Luxury is the art of being perfectly at home while surrounded
            by the extraordinary.&quot;
          </blockquote>
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
              <TabsContent value="rooms" className="mt-0 outline-none">
                <Carousel images={roomImages} />
              </TabsContent>
              <TabsContent value="baths" className="mt-0 outline-none">
                <Carousel images={bathImages} />
              </TabsContent>
            </Tabs>
          </section>
        </FadeUp>

        {/* AMENITIES GRID */}
        <section className="container mx-auto px-6 py-16 border-t border-[#fcd34d]/20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4 text-[#112A46] dark:text-white">
              Room Amenities
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
              Every suite is thoughtfully equipped with premium facilities to
              ensure your stay is as comfortable as it is memorable.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {amenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <div className="flex flex-col items-center p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 hover:border-[#fcd34d]/50 transition-colors">
                    <Icon className="w-10 h-10 mb-4 text-[#fcd34d]" />
                    <h3 className="font-medium text-center text-[#112A46] dark:text-white">
                      {amenity.title}
                    </h3>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </section>

        {/* IN-DEPTH FEATURES WITH STATIC IMAGES */}
        <section className="container mx-auto px-6 py-24 overflow-hidden border-t border-[#fcd34d]/20">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
            <FadeLeft className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/rooms/room-2.jpg"
                  alt="Premium Comfort"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeLeft>
            <FadeRight className="w-full md:w-1/2">
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-[#112A46] dark:text-white">
                Uncompromising Comfort
              </h3>
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 mb-6">
                Sink into our plush, king-sized beds outfitted with the finest
                Egyptian cotton linens and premium duvets. The spacious layout
                of each suite provides a dedicated sitting area, allowing you to
                seamlessly transition from restful slumber to peaceful morning
                lounging.
              </p>
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                The rich textures and warm color palettes have been meticulously
                selected to create a calming ambiance, ensuring that every
                moment spent in your room is a peaceful retreat from the outside
                world.
              </p>
            </FadeRight>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 mb-24">
            <FadeRight className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/bathrooms/bathroom-3.jpg"
                  alt="Spa-like Bathrooms"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeRight>
            <FadeLeft className="w-full md:w-1/2">
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-[#112A46] dark:text-white">
                Spa-Inspired Sanctuaries
              </h3>
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 mb-6">
                Revitalize your senses in our expansive en-suite bathrooms,
                elegantly designed to mirror the tranquility of a private spa.
                Featuring deep soaking tubs, walk-in rain showers, and dual
                vanities, the space is crafted for ultimate relaxation.
              </p>
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                We provide exclusive, organic toiletries and oversized,
                ultra-soft towels to complete your daily wellness ritual. Let
                the warm water and sophisticated stone finishes melt your stress
                away.
              </p>
            </FadeLeft>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <FadeLeft className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/rooms/room-4.jpg"
                  alt="Breathtaking Views"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeLeft>
            <FadeRight className="w-full md:w-1/2">
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-[#112A46] dark:text-white">
                Spaces to Breathe
              </h3>
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 mb-6">
                Wake up to panoramic vistas right from your suite. Our
                meticulously designed floor plans maximize natural light, with
                expansive windows that bridge the gap between indoor luxury and
                outdoor beauty.
              </p>
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                Whether you are enjoying your morning coffee while gazing out at
                the scenic surroundings or unwinding in the evening twilight,
                the visual connection to nature enhances the serenity of your
                entire stay.
              </p>
            </FadeRight>
          </div>
        </section>

        {/* ELABORATION SECTION */}
        <section className="container mx-auto px-6 py-24 border-t border-neutral-200 dark:border-neutral-800">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">
                Designed for Discerning Guests
              </h2>
              <p className="text-lg leading-relaxed text-neutral-600 mb-6">
                Every detail in our suites has been meticulously curated to
                transcend the ordinary. From hand-selected linens to custom
                ambient lighting, we ensure that your environment reflects your
                standards of excellence.
              </p>
              <p className="text-lg leading-relaxed text-neutral-600">
                Whether escaping the hum of daily life or seeking a
                sophisticated base for exploration, our rooms provide a cocoon
                of serenity that promises unparalleled rejuvenation.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/bedroom/mirror.jpg"
                alt="Detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
