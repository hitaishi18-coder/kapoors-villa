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
      { name: "Poha", price: "₹80" },
      { name: "Upma", price: "₹70" },
      { name: "Idli", price: "₹100" },
      { name: "Aloo Paratha (Curd & Pickle)", price: "₹130" },
      { name: "Gobhi Paratha", price: "₹130" },
      { name: "Paneer Paratha", price: "₹150" },
      { name: "Bread Butter / Jam", price: "₹60" },
      { name: "Misal Pav", price: "₹110" },
      { name: "Vada Pav", price: "₹30" },
      { name: "Kanda / Batata Bhaji", price: "₹90" },
      { name: "Paneer Pakoda", price: "₹130" },
      { name: "Paneer Special Pakoda", price: "₹150" },
      { name: "Puri Bhaji", price: "₹160" },
      { name: "Maggi", price: "₹60" },
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
      { name: "Veg Sandwich", price: "₹80" },
      { name: "Veg Grill Sandwich", price: "₹120" },
      { name: "French Toast", price: "₹100" },
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
      { name: "Plain Papad", price: "₹35" },
      { name: "Masala Papad", price: "₹60" },
      { name: "Peanut Chaat", price: "₹110" },
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
      { name: "Dal Fry", price: "₹150" },
      { name: "Dal Tadka", price: "₹170" },
      { name: "Akha Masoor Dal", price: "₹170" },
      { name: "Jeera / Shimla / Matar Aloo", price: "₹220" },
      { name: "Bhindi Fry", price: "₹220" },
      { name: "Baingan Masala / Bharta", price: "₹220" },
      { name: "Gobhi Aloo / Mix Veg", price: "₹240" },
      { name: "Veg Kolhapuri", price: "₹240" },
      { name: "Matar Paneer", price: "₹240" },
      { name: "Paneer Masala / Bhurji", price: "₹270" },
      { name: "Palak Paneer", price: "₹270" },
      { name: "Kaju Masala", price: "₹270" },
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
      { name: "Chapati", price: "₹25" },
      { name: "Butter Chapati", price: "₹30" },
      { name: "Bhakri (Rice)", price: "₹35" },
      { name: "Bhakri (Jowar)", price: "₹35" },
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
      { name: "Indrani Rice", price: "₹160" },
      { name: "Steam Rice", price: "₹170" },
      { name: "Jeera Rice", price: "₹180" },
      { name: "Dal Khichdi Tadka", price: "₹220" },
      { name: "Veg Pulao", price: "₹270" },
      { name: "Veg Biryani", price: "₹320" },
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
      { name: "BBQ Veg (Per Person)", price: "₹600" },
      { name: "BBQ Veg (Per Kg)", price: "₹1750" },
      { name: "3 Course Meal Veg (Per Person)", price: "₹1500" },
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
      { name: "Sadhi Veg Thali", price: "₹220" },
      { name: "Pithale Bhakri Thali", price: "₹230" },
      { name: "Veg Thali", price: "₹270" },
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
      { name: "Sevai Kheer", price: "₹45" },
      { name: "Gulab Jamun (2 Pcs)", price: "₹65" },
      { name: "Gajar Halwa", price: "₹85" },
      { name: "Sweet Sheera", price: "₹85" },
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
      { name: "Tea / Black Tea / Black Coffee", price: "₹25 - ₹30" },
      { name: "Coffee / Milk / Fresh Lime Water", price: "₹50" },
      { name: "Bournvita", price: "₹60" },
      { name: "Mineral Water", price: "₹25" },
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
            <span className="inline-flex items-center gap-2 rounded-full border border-[#fcd34d]/40 bg-[#fcd34d]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-[#fcd34d]/90 backdrop-blur-md">
              <SparklesIcon className="h-3.5 w-3.5" /> PRIVATE DINING EXPERIENCE
            </span>

            <h1 className="mt-6 font-serif text-3xl font-bold text-white md:text-5xl">
              Our Food Menu
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-200">
              Freshly prepared 100% Pure Veg delicacies crafted with premium
              ingredients, authentic Indian spices, and warm homely hospitality.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {/* <a href="/kapoors_villa_menu.pdf" download="Kapoor_Villa_Menu.pdf">
                <Button size="lg" className="gap-2.5 bg-[#fcd34d]/90 text-black hover:bg-[#fcd34d] font-semibold px-7 shadow-lg shadow-[#fcd34d]/20">
                  <DownloadIcon className="h-4 w-4" /> Download PDF Menu
                </Button>
              </a> */}

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
                <h3 className="font-serif text-lg font-bold text-[#112A46] dark:text-white">Looking for a printable copy?</h3>
                <p className="text-sm text-[#112A46]/70 dark:text-neutral-400">Download our complete Pure Veg menu card in PDF format.</p>
              </div>
            </div>

            <a href="/kapoors_villa_menu.pdf" download="Kapoor_Villa_Menu.pdf">
              <Button variant="default" className="gap-2 bg-[#fcd34d]/90 text-black hover:bg-[#fcd34d] font-medium">
                <DownloadIcon className="h-4 w-4" /> Download PDF (2 Pages)
              </Button>
            </a>
          </div>
        </section>

        {/* ================= BENTO GRID MENU SECTION ================= */}
        <section id="menu-bento" className="container mx-auto px-6 py-24">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#fcd34d]/90">
              OUR SPECIALITIES
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl text-[#112A46] dark:text-white">
              Curated Menu
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#112A46]/70 dark:text-neutral-400">
              Browse through our structured menu options. Every dish is cooked fresh to order after your arrival confirmation.
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
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#fcd34d]/90">
                        {section.subtitle}
                      </span>
                      <h3
                        className={`mt-1 font-serif text-2xl font-bold ${
                          section.isDark ? "text-white" : "text-[#112A46] dark:text-white"
                        }`}
                      >
                        {section.title}
                      </h3>
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
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
                        className="group flex items-baseline justify-between gap-3 text-sm"
                      >
                        <span
                          className={`font-medium transition-colors hover:text-[#fcd34d]/90 ${
                            section.isDark ? "text-neutral-200" : "text-[#112A46] dark:text-neutral-200"
                          }`}
                        >
                          {item.name}
                        </span>

                        <span className="grow border-b border-dotted border-[#112A46]/20 dark:border-white/20" />

                        <span
                          className={`font-bold font-mono text-[#fcd34d]/90`}
                        >
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Special Note for BBQ or Featured Cards */}
                  {section.note && (
                    <div className="mt-6 rounded-xl border border-[#fcd34d]/30 bg-[#fcd34d]/10 p-3 text-xs text-[#fcd34d]/90 italic">
                      💡 {section.note}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ================= BENTO GALLERY SECTION ================= */}
        <section className="container mx-auto px-6 py-20 border-t border-[#112A46]/10 dark:border-white/10">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.45em] text-[#fcd34d]/90">
              Behind Every Delicious Meal
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-[#112A46] dark:text-white">Our Kitchen & Dining</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#112A46]/70 dark:text-neutral-400">
              Hygienic, freshly sourced ingredients prepared by experienced cooks in a sparkling clean environment.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
            {galleryLayout.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-[#fcd34d]/20 shadow-md ${image.classes}`}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-5 left-5">
                  <h3 className="font-serif text-xl font-bold text-white">
                    {image.title}
                  </h3>
                  <p className="text-xs text-neutral-300 tracking-wider">Fresh • Hygienic • Pure</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= DINING INFORMATION (Redesigned Split Layout) ================= */}
        <section className="relative overflow-hidden border-y border-[#112A46]/10 dark:border-white/10 py-24 bg-[#fcd34d]/5 dark:bg-[#1E1E1E]">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              
              {/* Left Side: Content & Cards */}
              <div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-[0.45em] text-[#fcd34d]/90">
                    Dining Guidelines
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-bold text-[#112A46] dark:text-white md:text-5xl">
                    Important Information
                  </h2>
                  <p className="mt-6 text-sm leading-relaxed text-[#112A46]/70 dark:text-neutral-400">
                    Experience seamless dining with our dedicated culinary team. We prioritize your health, taste, and overall satisfaction by ensuring every meal meets our highest standards.
                  </p>
                </div>

                <div className="mt-10 flex flex-col gap-6">
                  <div className="rounded-2xl border border-[#fcd34d]/20 bg-white/60 dark:bg-neutral-900/60 p-6 shadow-sm backdrop-blur">
                    <h3 className="font-serif text-xl font-bold text-[#fcd34d]/90">
                      👨‍🍳 Fresh Preparation
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#112A46]/70 dark:text-neutral-400">
                      All meals are cooked fresh after confirmation to guarantee maximum flavor, warmth, and high nutrition.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#fcd34d]/20 bg-white/60 dark:bg-neutral-900/60 p-6 shadow-sm backdrop-blur">
                    <h3 className="font-serif text-xl font-bold text-[#fcd34d]/90">
                      📅 Advance Confirmation
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#112A46]/70 dark:text-neutral-400">
                      Kindly share your menu selections 1 day prior to arrival to allow us to source fresh ingredients.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Chef Image */}
              <div className="relative h-[450px] w-full overflow-hidden rounded-3xl shadow-2xl shadow-[#112A46]/10 border border-[#fcd34d]/20">
                <Image
                  src="/extraas/chef.png"
                  alt="Our Chef"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />
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
            <p className="text-xs uppercase tracking-[0.45em] text-[#fcd34d]/90">
              Kapoor's Villa Experience
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-white md:text-6xl">
              Good Food. Great Memories.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-neutral-300">
              Download our menu or reach out to reserve your private dining dates for family gatherings, vacations, and celebrations.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="/kapoors_villa_menu.pdf" download="Kapoor_Villa_Menu.pdf">
                <Button size="lg" className="gap-2 bg-[#fcd34d]/90 text-black hover:bg-[#fcd34d] font-semibold px-8">
                  <DownloadIcon className="h-4 w-4" /> Download PDF Menu
                </Button>
              </a>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/40 bg-transparent px-8 text-white hover:bg-white/10"
              >
                <Link href="/contact">Reserve Your Table</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}