"use client";

import { useState } from "react";
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

interface GalleryItem {
  title: string;
  category: string;
  image: string;
  height: string;
  description: string;
}

const gallery: GalleryItem[] = [
  {
    title: "Royal Suite",
    category: "Rooms",
    image: "/gallery/room-1.jpg",
    height: "h-[340px] sm:h-[420px]",
    description:
      "Immerse yourself in regal comfort featuring plush furnishings and panoramic views.",
  },
  {
    title: "Infinity Pool",
    category: "Pool",
    image: "/gallery/pool.jpg",
    height: "h-[380px] sm:h-[560px]",
    description:
      "Swim right to the edge with pristine water overlooking lush green hills.",
  },
  {
    title: "Luxury Bedroom",
    category: "Rooms",
    image: "/gallery/room-2.jpg",
    height: "h-[320px] sm:h-[360px]",
    description:
      "Elegantly styled interiors designed for maximum relaxation and peaceful sleep.",
  },
  {
    title: "Outdoor Lounge",
    category: "Exterior",
    image: "/gallery/outdoor.webp",
    height: "h-[360px] sm:h-[520px]",
    description:
      "Unwind under open skies with comfortable seating made for sunset conversations.",
  },
  {
    title: "Private Dining",
    category: "Dining",
    image: "/gallery/dining.jpg",
    height: "h-[320px] sm:h-[380px]",
    description:
      "Savor exquisite gourmet meals prepared by our in-house culinary masters.",
  },
  {
    title: "Bonfire Evening",
    category: "Experiences",
    image: "/gallery/bonfire.jpg",
    height: "h-[340px] sm:h-[460px]",
    description:
      "Warm up around a crackling fire under a starry sky with signature refreshments.",
  },
  {
    title: "Garden Walk",
    category: "Exterior",
    image: "/gallery/garden.webp",
    height: "h-[360px] sm:h-[520px]",
    description:
      "Stroll through manicured lawns and vibrant botanical pathways.",
  },
  {
    title: "Premium Suite",
    category: "Rooms",
    image: "/gallery/room-3.jpg",
    height: "h-[320px] sm:h-[380px]",
    description:
      "Sophisticated decor paired with modern amenities for a lavish stay.",
  },
  {
    title: "Rain Dance",
    category: "Exterior",
    image: "/extraas/rain-dance.png",
    height: "h-[340px] sm:h-[460px]",
    description:
      "Experience refreshing outdoor fun and music in our dedicated rain dance zone.",
  },
  {
    title: "Hill Top View",
    category: "Exterior",
    image: "/extraas/hill-top-view.jpeg",
    height: "h-[340px] sm:h-[420px]",
    description:
      "Breath-taking 360-degree views of surrounding valleys and distant mountain ranges.",
  },
  {
    title: "Pool Side Walk",
    category: "Pool",
    image: "/extraas/pool-side-walk.jpeg",
    height: "h-[380px] sm:h-[560px]",
    description:
      "A peaceful illuminated deck perfect for tranquil evening strolls.",
  },
  {
    title: "Roof Top View",
    category: "Exterior",
    image: "/extraas/roof-top-view.jpeg",
    height: "h-[320px] sm:h-[360px]",
    description:
      "Elevated vantage point to enjoy morning tea or stargazing at night.",
  },
  {
    title: "Sunrise View Pool Side",
    category: "Experiences",
    image: "/outdoor/sunrise-view-pool-side.jpg",
    height: "h-[320px] sm:h-[380px]",
    description:
      "Catch the golden hour light as day breaks over the serene poolside horizon.",
  },
 {
  title: "Dining View",
  category: "Interior",
  image: "/lawn/lawn-view.jpg",
  height: "h-[340px] sm:h-[460px]",
  description:
    "Elegant dining space designed for comfortable meals, gatherings, and memorable moments with family and friends.",
},
  {
    title: "Terrace View",
    category: "Rooms",
    image: "/outdoor/balcony-view.jpg",
    height: "h-[360px] sm:h-[520px]",
    description:
      "Step outside your bedroom onto a private balcony with serene landscape views.",
  },
  {
    title: "Balcony View ",
    category: "Rooms",
    image: "/outdoor/balcony-view-2.jpg",
    height: "h-[320px] sm:h-[380px]",
    description:
      "Another vantage point offering cozy seating and crisp mountain air.",
  },
  {
    title: "Dining Area for Dinner",
    category: "Dining",
    image: "/outdoor/dining-2.jpg",
    height: "h-[340px] sm:h-[460px]",
    description:
      "Ambient outdoor lighting creates a romantic dinner atmosphere under the stars.",
  },
  {
    title: "Dining Area",
    category: "Rooms",
    image: "/dining/dining7.jpg",
    height: "h-[340px] sm:h-[400px]",
    description:
      "A plush, stylish indoor living lounge designed for deep relaxation.",
  },
  {
    title: "Sunset View Pool Side",
    category: "Pool",
    image: "/outdoor/pool.jpg",
    height: "h-[360px] sm:h-[500px]",
    description:
      "Watch dusk paint the sky in shades of crimson and violet right by the water.",
  },
  {
    title: "Night View ",
    category: "Exterior",
    image: "/outer/night-view-villa.jpg",
    height: "h-[340px] sm:h-[480px]",
    description:
      "Dramatically lit architecture showcases the estate's beauty after sundown.",
  },
  {
    title: "Pool Side Chairs",
    category: "Pool",
    image: "/outer/pool-side-chairs.jpg",
    height: "h-[320px] sm:h-[380px]",
    description:
      "Relax on luxury loungers with personal service just a call away.",
  },
];

const roomGallery = [
  { src: "/rooms/room.jpg", title: "Suite Ambience" },
  { src: "/rooms/room-2.jpg", title: "Plush King Bed" },
  { src: "/rooms/room-3.jpg", title: "Elegant Interiors" },
  { src: "/rooms/room-4.jpg", title: "Scenic Window Views" },
  { src: "/rooms/room-5.jpg", title: "Spacious Layout" },
  { src: "/rooms/room-6.jpg", title: "Natural Light" },
  { src: "/rooms/room-7.jpg", title: "Cozy Seating Area" },
  { src: "/rooms/room-8.jpg", title: "Warm Lighting" },
  { src: "/rooms/room-9.jpg", title: "Evening Retreat" },
];

export default function GalleryPage() {
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);

  const goToPrevRoom = () => {
    setCurrentRoomIndex((prevIndex) =>
      prevIndex === 0 ? roomGallery.length - 1 : prevIndex - 1
    );
  };

  const goToNextRoom = () => {
    setCurrentRoomIndex((prevIndex) =>
      prevIndex === roomGallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Navbar />

      <main className="w-full min-w-0 overflow-x-hidden">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative h-[65svh] min-h-[450px] w-full overflow-hidden sm:h-[75svh]">
          <Image
            src="/outdoor/outdoor-3.webp"
            alt="Kapoor's Villa Gallery"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transition-transform duration-10000 hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />

          <HeroReveal className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center sm:px-6">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-amber-500 sm:mb-4 sm:tracking-[0.45em]">
              EXQUISITE COLLECTION
            </p>

            <h1 className="font-serif text-4xl font-bold text-white sm:text-6xl md:text-7xl">
              Visual Narrative
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-200 sm:mt-8 sm:max-w-3xl sm:text-base sm:leading-8">
              Discover handcrafted luxury, breathtaking architecture and
              unforgettable moments through our curated visual collection.
            </p>
          </HeroReveal>
        </section>


              {/* ================= ROOMS CAROUSEL (Light/Dark mode) ================= */}
        <section className="relative w-full bg-[#FDFBF7] dark:bg-black py-24 border-y border-[#112A46]/10 dark:border-white/10 transition-colors duration-300">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-16 md:px-24 flex flex-col items-center">
            
            {/* Heading */}
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#fcd34d]/90">
                Uncompromising Comfort
              </p>
              <h2 className="mt-3 font-serif text-4xl font-bold text-[#112A46] dark:text-white sm:text-5xl transition-colors duration-300">
                Our Luxury Suites
              </h2>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full flex items-center justify-center max-w-6xl mx-auto">
              
              {/* ================= OUTER NAVIGATION ARROWS ================= */}
              <button
                onClick={goToPrevRoom}
                className="absolute left-0 sm:-left-8 md:-left-12 top-1/2 -translate-y-1/2 bg-white hover:bg-slate-100 dark:hover:bg-neutral-200 text-black border border-slate-200 dark:border-transparent rounded-full p-3 sm:p-4 transition-transform hover:scale-105 z-10 shadow-lg"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNextRoom}
                className="absolute right-0 sm:-right-8 md:-right-12 top-1/2 -translate-y-1/2 bg-white hover:bg-slate-100 dark:hover:bg-neutral-200 text-black border border-slate-200 dark:border-transparent rounded-full p-3 sm:p-4 transition-transform hover:scale-105 z-10 shadow-lg"
                aria-label="Next image"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* ================= CENTRAL CONTAINER ================= */}
              <div className="w-full bg-white dark:bg-[#1A1B1E] border border-slate-200 dark:border-transparent rounded-2xl p-4 sm:p-6 flex flex-col gap-4 shadow-xl dark:shadow-2xl transition-colors duration-300">
                
                {/* Main Large Image */}
                <div className="relative w-full aspect-video sm:aspect-[21/9] bg-slate-100 dark:bg-[#0F0F11] rounded-xl overflow-hidden transition-colors duration-300">
                  <Image
                    src={roomGallery[currentRoomIndex].src}
                    alt={roomGallery[currentRoomIndex].title}
                    fill
                    className="object-contain transition-opacity duration-500"
                  />

                  {/* Bottom Left Caption Overlay */}
                  <div className="absolute bottom-3 left-4 text-slate-800 dark:text-white/90 text-sm md:text-base font-medium drop-shadow-sm dark:drop-shadow-lg bg-white/90 dark:bg-black/60 px-3 py-1.5 rounded-md backdrop-blur-sm border border-slate-200 dark:border-white/10 transition-colors duration-300">
                    {currentRoomIndex + 1}/{roomGallery.length} - {roomGallery[currentRoomIndex].title}
                  </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="relative w-full">
                  <div className="flex items-center gap-3 overflow-x-auto py-2 px-1 scrollbar-hide snap-x justify-start lg:justify-center">
                    {roomGallery.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentRoomIndex(index)}
                        className={`
                          relative flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 rounded-md overflow-hidden 
                          transition-all duration-200 snap-center
                          ${
                            currentRoomIndex === index
                              ? "ring-2 ring-[#112A46] dark:ring-white scale-[1.02] opacity-100" 
                              : "opacity-40 hover:opacity-100"
                          }
                        `}
                      >
                        <Image
                          src={img.src}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      

          {/* =========================================================
            LUXURY QUOTE
        ========================================================= */}
        <FadeUp>
          <section className="relative w-full overflow-hidden border-y border-amber-500/10 py-16 sm:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.08),transparent_60%)]" />

            <div className="container relative mx-auto w-full max-w-5xl px-4 text-center sm:px-6">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-500 sm:tracking-[0.45em]">
                Timeless Luxury
              </p>

              <h2 className="mt-4 font-serif text-2xl leading-snug sm:mt-8 sm:text-4xl sm:leading-tight md:text-6xl">
                Every photograph captures more than a destination—it preserves
                moments of elegance, comfort and unforgettable memories.
              </h2>

              <div className="mx-auto mt-8 h-px w-24 bg-amber-500/40 sm:mt-12 sm:w-40" />

              <p className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-muted-foreground sm:mt-10 sm:text-base sm:leading-8">
                Every sunrise, every evening by the pool and every carefully
                crafted space has been designed to create experiences worth
                remembering.
              </p>
            </div>
          </section>
        </FadeUp>




        {/* =========================================================
            GALLERY GRID
        ========================================================= */}
        <FadeUp>
          <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:py-24 xl:pb-32">
            <Stagger className="mx-auto w-full max-w-7xl columns-1 gap-4 sm:columns-2 sm:gap-6 xl:columns-3">
              {gallery.map((item) => (
                <StaggerItem key={item.title}>
                  <ScaleIn>
                    <Card
                      className={`group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-amber-500/10 bg-background/40 backdrop-blur transition-all duration-500 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 sm:mb-6 sm:rounded-3xl ${item.height}`}
                    >
                      {/* Image */}
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="
                          (max-width: 640px) 100vw,
                          (max-width: 1024px) 50vw,
                          (max-width: 1536px) 33vw,
                          400px
                        "
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent sm:via-black/20" />

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 hidden opacity-0 transition-all duration-500 group-hover:opacity-100 sm:block">
                        <div className="absolute inset-0 border border-amber-500/40" />
                        <div className="absolute inset-0 bg-amber-500/5 backdrop-blur-[1px]" />
                      </div>

                      {/* Content */}
                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-500 sm:text-xs sm:tracking-[0.35em]">
                          {item.category}
                        </span>

                        <h3 className="mt-1 font-serif text-2xl font-bold text-white sm:mt-3 sm:text-3xl">
                          {item.title}
                        </h3>

                        <p className="mt-2 max-w-xs text-xs text-neutral-300 sm:mt-4 sm:translate-y-4 sm:text-sm sm:leading-6 sm:opacity-0 sm:transition-all sm:duration-500 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                          {item.description}
                        </p>

                        <Button
                          asChild
                          size="sm"
                          className="mt-4 bg-amber-500 text-black hover:bg-amber-400 sm:mt-6 sm:translate-y-6 sm:opacity-0 sm:transition-all sm:duration-500 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
                        >
                          <Link href="/contact">Reserve Stay</Link>
                        </Button>
                      </div>
                    </Card>
                  </ScaleIn>
                </StaggerItem>
              ))}
            </Stagger>
          </section>
        </FadeUp>

    
        {/* =========================================================
            PRIMARY CTA
        ========================================================= */}
        <FadeUp>
          <section className="w-full px-4 py-16 sm:px-6 sm:py-32">
            <Card className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl border-amber-500/20 sm:rounded-3xl">
              <Image
                src="/gallery/gallery-cta.jpg"
                alt="Luxury Villa"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-black/40 sm:bg-black/10" />

              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

              <div className="relative flex min-h-[400px] flex-col items-center justify-center p-6 text-center sm:min-h-[500px] sm:p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-500 sm:tracking-[0.45em]">
                  Reserve Your Escape
                </p>

                <h2 className="mt-4 max-w-4xl font-serif text-3xl font-bold text-white sm:mt-6 sm:text-5xl md:text-6xl">
                  Experience Luxury Beyond Imagination
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-300 sm:mt-8 sm:text-base sm:leading-8">
                  Escape into breathtaking surroundings, elegant interiors and
                  personalized hospitality crafted to make every stay
                  unforgettable.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4 sm:mt-12">
                  <Button
                    asChild
                    size="lg"
                    className="bg-amber-500 px-8 text-black hover:bg-amber-400"
                  >
                    <Link href="/contact">Book Your Stay</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </section>
        </FadeUp>
      </main>

      <Footer />
    </>
  );
}