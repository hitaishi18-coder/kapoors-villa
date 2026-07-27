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
    title: "Lawn View",
    category: "Exterior",
    image: "/lawn/lawn-view.jpg",
    height: "h-[340px] sm:h-[460px]",
    description:
      "Expansive green spaces ideal for morning yoga, outdoor games, or events.",
  },
  {
    title: "Balcony View",
    category: "Rooms",
    image: "/outdoor/balcony-view.jpg",
    height: "h-[360px] sm:h-[520px]",
    description:
      "Step outside your bedroom onto a private balcony with serene landscape views.",
  },
  {
    title: "Balcony View 2",
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
    title: "Sofa Area",
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
    title: "Night View Villa",
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

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative h-[65vh] min-h-[450px] sm:h-[75vh] overflow-hidden">
          <Image
            src="/outdoor/outdoor-3.webp"
            alt="Kapoor's Villa Gallery"
            fill
            priority
            className="object-cover transition-transform duration-10000 hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />

          <HeroReveal className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6">
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

        {/* GALLERY GRID */}
        <FadeUp>
          <section className="container mx-auto px-4 py-12 sm:px-6 sm:pb-32">
            <Stagger className="columns-1 gap-4 sm:columns-2 sm:gap-6 xl:columns-3">
              {gallery.map((item) => (
                <StaggerItem key={item.title}>
                  <ScaleIn>
                    <Card
                      className={`group relative mb-4 sm:mb-6 break-inside-avoid overflow-hidden rounded-2xl sm:rounded-3xl border border-amber-500/10 bg-background/40 backdrop-blur transition-all duration-500 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 ${item.height}`}
                    >
                      {/* Image */}
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-all duration-700 group-hover:scale-105"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 sm:via-black/20 to-transparent" />

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100 hidden sm:block">
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

        {/* LUXURY QUOTE */}
        <FadeUp>
          <section className="relative overflow-hidden border-y border-amber-500/10 py-16 sm:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.08),transparent_60%)]" />

            <div className="container relative mx-auto max-w-5xl px-4 text-center sm:px-6">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-500 sm:tracking-[0.45em]">
                Timeless Luxury
              </p>

              <h2 className="mt-4 font-serif text-2xl leading-snug sm:mt-8 sm:text-4xl md:text-6xl sm:leading-tight">
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

        {/* PRIMARY CTA */}
        <FadeUp>
          <section className="container mx-auto px-4 py-16 sm:px-6 sm:py-32">
            <Card className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-amber-500/20">
              <Image
                src="/gallery/gallery-cta.jpg"
                alt="Luxury Villa"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40 sm:bg-black/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

              <div className="relative flex min-h-[400px] sm:min-h-[500px] flex-col items-center justify-center p-6 text-center sm:p-8">
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

        {/* SECONDARY BOOKING CTA */}
        <section className="container mx-auto px-4 pb-16 sm:px-6 sm:pb-32">
          <Card className="overflow-hidden border-amber-500/20">
            <div className="grid lg:grid-cols-2">
              {/* Left */}
              <div className="flex flex-col justify-center p-6 sm:p-10 md:p-16">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-500 sm:tracking-[0.4em]">
                  Reserve Your Escape
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold sm:mt-4 sm:text-4xl md:text-5xl">
                  Luxury Awaits
                </h2>

                <p className="mt-4 text-sm leading-6 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8">
                  Experience breathtaking views, curated interiors, personalized
                  hospitality and unforgettable moments at Kapoor&apos;s Villa.
                </p>

                <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
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
              <div className="relative min-h-[260px] sm:min-h-[420px]">
                <Image
                  src="/gallery/gallery-cta.jpg"
                  alt="Luxury Villa"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-black/20" />
              </div>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </>
  );
}
