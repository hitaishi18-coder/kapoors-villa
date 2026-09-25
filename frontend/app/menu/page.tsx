"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Icon components for clean presentation
function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

const menuSections = [
  {
    id: "breakfast",
    title: "Breakfast",
    subtitle: "Fresh Morning Delights",
    badge: "Popular Morning Picks",
    gridClass: "md:col-span-2 lg:col-span-2",
    accent: "border-[#fcd34d]/30 bg-[#fcd34d]/5 dark:bg-[#fcd34d]/10",
    items: [
      { name: "Poha" },
      { name: "Upma" },
      { name: "Idli" },
      { name: "Aloo Paratha (Curd & Pickle)" },
      { name: "Gobhi Paratha" },
      { name: "Paneer Paratha" },
      { name: "Bread Butter / Jam" },
      { name: "Misal Pav" },
      { name: "Vada Pav" },
      { name: "Kanda / Batata Bhaji" },
      { name: "Paneer Pakoda" },
      { name: "Paneer Special Pakoda" },
      { name: "Puri Bhaji" },
      { name: "Maggi" },
    ],
  },
  {
    id: "sandwich",
    title: "Sandwiches",
    subtitle: "Quick Bites",
    badge: "Light & Crunchy",
    gridClass: "md:col-span-1 lg:col-span-1",
    accent: "border-[#fcd34d]/20 bg-white/70 dark:bg-neutral-900/70",
    items: [
      { name: "Veg Sandwich" },
      { name: "Veg Grill Sandwich" },
      { name: "French Toast" },
    ],
  },
  {
    id: "appetizers",
    title: "Appetizers",
    subtitle: "Starters",
    badge: "Crispy Starters",
    gridClass: "md:col-span-1 lg:col-span-1",
    accent: "border-[#fcd34d]/20 bg-white/70 dark:bg-neutral-900/70",
    items: [
      { name: "Plain Papad" },
      { name: "Masala Papad" },
      { name: "Peanut Chaat" },
    ],
  },
  {
    id: "main-course",
    title: "Main Course",
    subtitle: "Authentic Indian Delicacies",
    badge: "Chef Specialities",
    gridClass: "md:col-span-2 lg:col-span-3",
    accent: "border-[#fcd34d]/40 bg-gradient-to-br from-[#fcd34d]/10 via-white to-white dark:via-neutral-900 dark:to-neutral-900",
    isFeatured: true,
    items: [
      { name: "Dal Fry" },
      { name: "Dal Tadka" },
      { name: "Akha Masoor Dal" },
      { name: "Jeera / Shimla / Matar Aloo" },
      { name: "Bhindi Fry" },
      { name: "Baingan Masala / Bharta" },
      { name: "Gobhi Aloo / Mix Veg" },
      { name: "Veg Kolhapuri" },
      { name: "Matar Paneer" },
      { name: "Paneer Masala / Bhurji" },
      { name: "Palak Paneer" },
      { name: "Kaju Masala" },
    ],
  },
  {
    id: "bread",
    title: "Indian Bread",
    subtitle: "Freshly Made",
    badge: "Hot & Tandoori",
    gridClass: "md:col-span-1 lg:col-span-1",
    accent: "border-[#fcd34d]/20 bg-white/70 dark:bg-neutral-900/70",
    items: [
      { name: "Chapati" },
      { name: "Butter Chapati" },
      { name: "Bhakri (Rice)" },
      { name: "Bhakri (Jowar)" },
    ],
  },
  {
    id: "rice",
    title: "Rice Specialities",
    subtitle: "Aromatic Basmati & Regional",
    badge: "Flavourful",
    gridClass: "md:col-span-2 lg:col-span-2",
    accent: "border-[#fcd34d]/20 bg-white/70 dark:bg-neutral-900/70",
    items: [
      { name: "Indrani Rice" },
      { name: "Steam Rice" },
      { name: "Jeera Rice" },
      { name: "Dal Khichdi Tadka" },
      { name: "Veg Pulao" },
      { name: "Veg Biryani" },
    ],
  },
  {
    id: "barbeque",
    title: "Live Barbeque & Packages",
    subtitle: "Outdoor Specials",
    badge: "Featured Experience",
    gridClass: "md:col-span-2 lg:col-span-2",
    accent: "border-[#fcd34d]/50 bg-[#112A46] text-white shadow-xl dark:bg-neutral-800",
    isDark: true,
    items: [
      { name: "Veg Barbeque" },
      { name: "Non Veg Barbeque" },
    ],
    note: "Includes Masala Bhat / Pulao / Dal Khichdi",
  },
  {
    id: "thali",
    title: "Traditional Thali",
    subtitle: "Complete Meals",
    badge: "Traditional",
    gridClass: "md:col-span-1 lg:col-span-1",
    accent: "border-[#fcd34d]/20 bg-white/70 dark:bg-neutral-900/70",
    items: [
      { name: "Sadhi Veg Thali" },
      { name: "Pithale Bhakri Thali" },
      { name: "Veg Thali" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "Sweet Treats",
    badge: "Delightful Sweets",
    gridClass: "md:col-span-1 lg:col-span-1",
    accent: "border-[#fcd34d]/20 bg-white/70 dark:bg-neutral-900/70",
    items: [
      { name: "Sevai Kheer" },
      { name: "Gulab Jamun (2 Pcs)" },
      { name: "Gajar Halwa" },
      { name: "Sweet Sheera" },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    subtitle: "Hot & Cold Drinks",
    badge: "Refreshing",
    gridClass: "md:col-span-2 lg:col-span-2",
    accent: "border-[#fcd34d]/20 bg-white/70 dark:bg-neutral-900/70",
    items: [
      { name: "Tea / Black Tea / Black Coffee" },
      { name: "Coffee / Milk / Fresh Lime Water" },
      { name: "Bournvita" },
      { name: "Mineral Water" },
    ],
  },
];

// Kitchen gallery images
const galleryLayout = [
  { src: "/kitchen/kitchen.jpg", title: "Main Kitchen", classes: "md:col-span-2 md:row-span-2" }, 
  { src: "/dining/dining3.jpg", title: "Dining Setup", classes: "md:col-span-2 md:row-span-1" },  
  { src: "/kitchen/kitchen1.jpg", title: "Prep Area", classes: "md:col-span-1 md:row-span-1" },   
  { src: "/kitchen/kitchen2.jpg", title: "Cooking Station", classes: "md:col-span-1 md:row-span-1" }, 
  { src: "/dining/dining6.jpg", title: "Ambience", classes: "md:col-span-2 md:row-span-1" },      
  { src: "/kitchen/kitchen3.jpg", title: "Fresh Ingredients", classes: "md:col-span-1 md:row-span-1" }, 
  { src: "/dining/dining7.jpg", title: "Table View", classes: "md:col-span-1 md:row-span-1" },    
];

export default function MenuPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FDFBF7] text-[#112A46] selection:bg-[#fcd34d]/90 selection:text-[#112A46] dark:bg-[#1E1E1E] dark:text-white transition-colors duration-300">
        {/* ================= HERO ================= */}
        <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden">
          <Image
            src="/kitchen/kitchen-home.jpg"
            alt="Kapoor's Villa Dining"
            fill
            priority
            className="object-cover transition-transform duration-[12000ms] hover:scale-110"
          />

          {/* Adjusted overlays for better image visibility */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#fcd34d]/40 bg-[#fcd34d]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.35em] text-[#fcd34d]/90 backdrop-blur-md">
              <SparklesIcon className="h-4 w-4" /> PRIVATE DINING EXPERIENCE
            </span>

            <h1 className="mt-6 font-serif text-4xl font-bold text-white md:text-6xl">
              Our Food Menu
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-neutral-200">
              Freshly prepared delicacies crafted with premium ingredients,
              authentic Indian spices, and warm homely hospitality.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/10 px-7 text-white backdrop-blur-md hover:bg-white/20"
              >
                <Link href="#menu-bento">Explore Bento Menu</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ================= DOWNLOAD BANNER BAR ================= */}
        <section className="border-y border-[#fcd34d]/20 bg-[#fcd34d]/10 py-6 backdrop-blur-md">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fcd34d]/20 text-[#fcd34d]/90">
                <DownloadIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#112A46] dark:text-white">
                  Looking for a printable copy?
                </h3>
                <p className="text-base text-[#112A46]/70 dark:text-neutral-400">
                  Download our complete Pure Veg menu card in PDF format.
                </p>
              </div>
            </div>

            <a href="/kapoors_villa_menu.pdf" download="Kapoor_Villa_Menu.pdf">
              <Button
                variant="default"
                className="gap-2 bg-[#fcd34d]/90 text-black hover:bg-[#fcd34d] font-medium"
              >
                <DownloadIcon className="h-4 w-4" /> Download PDF (2 Pages)
              </Button>
            </a>
          </div>
        </section>

        {/* ================= BENTO GRID MENU SECTION ================= */}
        <section id="menu-bento" className="container mx-auto px-6 py-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#fcd34d]/90">
              OUR SPECIALITIES
            </p>

            <h2 className="mt-3 font-serif text-5xl font-bold md:text-6xl text-[#112A46] dark:text-white">
              Curated Menu
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base text-[#112A46]/70 dark:text-neutral-400">
              Browse through our structured menu options. Every dish is cooked
              fresh to order after your arrival confirmation.
            </p>
          </div>

          {/* BENTO GRID */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {menuSections.map((section) => (
              <Card
                key={section.id}
                className={`relative overflow-hidden rounded-3xl border transition-all duration-300 hover:shadow-xl hover:shadow-[#fcd34d]/5 ${section.gridClass} ${section.accent}`}
              >
                <CardContent className="p-7">
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-4 border-b border-[#112A46]/10 dark:border-white/10 pb-5">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#fcd34d]/90">
                        {section.subtitle}
                      </span>
                      <h3
                        className={`mt-1 font-serif text-3xl font-bold ${
                          section.isDark
                            ? "text-white"
                            : "text-[#112A46] dark:text-white"
                        }`}
                      >
                        {section.title}
                      </h3>
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                        section.isDark
                          ? "bg-[#fcd34d]/20 text-[#fcd34d]/90 border border-[#fcd34d]/30"
                          : "bg-[#fcd34d]/10 text-[#fcd34d]/90"
                      }`}
                    >
                      {section.badge}
                    </span>
                  </div>

                  {/* Food Items List */}
                  <div
                    className={`mt-6 gap-x-8 gap-y-4 ${
                      section.isFeatured
                        ? "grid grid-cols-1 md:grid-cols-2"
                        : "space-y-4"
                    }`}
                  >
                    {section.items.map((item) => (
                      <div
                        key={item.name}
                        className="group flex items-baseline justify-between gap-3 text-base"
                      >
                        <span
                          className={`font-medium transition-colors hover:text-[#fcd34d]/90 ${
                            section.isDark
                              ? "text-neutral-200"
                              : "text-[#112A46] dark:text-neutral-200"
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Special Note for BBQ or Featured Cards */}
                  {section.note && (
                    <div className="mt-6 rounded-xl border border-[#fcd34d]/30 bg-[#fcd34d]/10 p-3 text-sm text-[#fcd34d]/90 italic">
                      💡 {section.note}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ================= KITCHEN & DINING BENTO ================= */}
        <section className="w-full overflow-hidden border-t border-[#112A46]/10 py-24 dark:border-white/10">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            {/* Heading */}
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#fcd34d]/90">
                Behind Every Delicious Meal
              </p>

              <h2 className="mt-3 font-serif text-4xl font-bold text-[#112A46] dark:text-white sm:text-5xl">
                Our Kitchen & Dining
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#112A46]/70 dark:text-neutral-400 sm:text-base">
                Hygienic, freshly sourced ingredients prepared by experienced
                cooks in a sparkling clean environment.
              </p>
            </div>

            {/* ================= TRUE BENTO ================= */}
            <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4">
              {/* 01 — MAIN KITCHEN */}
              <div
                className="
          group relative overflow-hidden rounded-[2rem]
          border border-[#fcd34d]/20
          shadow-xl
          sm:col-span-2
          lg:col-span-2
          lg:row-span-2
          min-h-[420px]
        "
              >
                <Image
                  src="/kitchen/kitchen.jpg"
                  alt="Main Kitchen"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-7 sm:p-9">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#fcd34d]">
                    Kitchen
                  </span>

                  <h3 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
                    Main Kitchen
                  </h3>

                  <p className="mt-2 max-w-sm text-sm text-white/70">
                    Freshly prepared with care.
                  </p>
                </div>
              </div>

              {/* 02 — DINING SETUP / TALL */}
              <div
                className="
          group relative min-h-[360px] overflow-hidden rounded-[2rem]
          border border-[#fcd34d]/20
          shadow-xl
          sm:col-span-1
          lg:col-span-1
          lg:row-span-2
        "
              >
                <Image
                  src="/dining/dining3.jpg"
                  alt="Dining Setup"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-[#fcd34d]">
                    Dining
                  </span>

                  <h3 className="mt-2 font-serif text-2xl font-bold text-white">
                    Dining Setup
                  </h3>
                </div>
              </div>

              {/* 03 — PREP AREA */}
              <div
                className="
          group relative min-h-[220px] overflow-hidden rounded-[2rem]
          border border-[#fcd34d]/20
          shadow-lg
          lg:col-span-1
          lg:row-span-1
        "
              >
                <Image
                  src="/kitchen/kitchen1.jpg"
                  alt="Prep Area"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="font-serif text-xl font-bold text-white">
                    Prep Area
                  </h3>
                </div>
              </div>

              {/* 04 — COOKING STATION */}
              <div
                className="
          group relative min-h-[220px] overflow-hidden rounded-[2rem]
          border border-[#fcd34d]/20
          shadow-lg
          lg:col-span-1
          lg:row-span-1
        "
              >
                <Image
                  src="/kitchen/kitchen2.jpg"
                  alt="Cooking Station"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="font-serif text-xl font-bold text-white">
                    Cooking Station
                  </h3>
                </div>
              </div>

              {/* 05 — DINING AMBIENCE / WIDE */}
              <div
                className="
          group relative min-h-[260px] overflow-hidden rounded-[2rem]
          border border-[#fcd34d]/20
          shadow-xl
          sm:col-span-2
          lg:col-span-3
          lg:row-span-1
        "
              >
                <Image
                  src="/dining/dining6.jpg"
                  alt="Dining Ambience"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 75vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 sm:p-7">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-[#fcd34d]">
                    Experience
                  </span>

                  <h3 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                    Dining Ambience
                  </h3>
                </div>
              </div>

              {/* 06 — FRESH INGREDIENTS */}
              <div
                className="
          group relative min-h-[260px] overflow-hidden rounded-[2rem]
          border border-[#fcd34d]/20
          shadow-lg
          lg:col-span-1
          lg:row-span-1
        "
              >
                <Image
                  src="/kitchen/kitchen3.jpg"
                  alt="Fresh Ingredients"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="font-serif text-xl font-bold text-white">
                    Fresh Ingredients
                  </h3>
                </div>
              </div>

              {/* 07 — TABLE VIEW / WIDE */}
              <div
                className="
          group relative min-h-[300px] overflow-hidden rounded-[2rem]
          border border-[#fcd34d]/20
          shadow-xl
          sm:col-span-2
          lg:col-span-2
          lg:row-span-1
        "
              >
                <Image
                  src="/dining/dining7.jpg"
                  alt="Table View"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-[#fcd34d]">
                    Dining
                  </span>

                  <h3 className="mt-2 font-serif text-2xl font-bold text-white">
                    Table View
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= RESERVATION & PDF DOWNLOAD CTA ================= */}
        <section className="relative w-full overflow-hidden py-24">
          <Image
            src="/outdoor/dining-4.jpg"
            alt="Reserve Table"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />

          <div className="relative container mx-auto text-center px-6">
            <p className="text-sm uppercase tracking-[0.45em] text-[#fcd34d]/90">
              Kapoor&apos;s Villa Experience
            </p>
            <h2 className="mt-4 font-serif text-5xl font-bold text-white md:text-7xl">
              Good Food. Great Memories.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
              Download our menu or reach out to reserve your private dining
              dates for family gatherings, vacations, and celebrations.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/kapoors_villa_menu.pdf"
                download="Kapoor_Villa_Menu.pdf"
              >
                <Button
                  size="lg"
                  className="gap-2 bg-[#fcd34d]/90 text-black hover:bg-[#fcd34d] font-semibold px-8"
                >
                  <DownloadIcon className="h-4 w-4" /> Download PDF Menu
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}