import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
    HeroReveal,
    FadeUp,
    FadeLeft,
    FadeRight,
    ScaleIn,
    Stagger,
    StaggerItem,
} from "@/components/animations";

const bbqMenu = [
    {
        name: "Signature BBQ Platter",
        description:
            "A lavish assortment of grilled meats, seasonal vegetables and handcrafted sauces.",
        price: "₹2,499",
    },
    {
        name: "Smoked Chicken Supreme",
        description:
            "Slow-smoked chicken finished with herb butter and aromatic spices.",
        price: "₹1,499",
    },
    {
        name: "Charcoal Lamb Chops",
        description:
            "Tender lamb chops grilled over charcoal with rosemary glaze.",
        price: "₹2,199",
    },
];

const breakfast = [
    {
        name: "Continental Breakfast",
        description: "Fresh pastries, fruits, juices and artisan coffee.",
        price: "₹799",
    },
    {
        name: "Indian Breakfast",
        description:
            "Traditional regional breakfast with seasonal specialties.",
        price: "₹699",
    },
    {
        name: "Healthy Bowl",
        description: "Greek yogurt, granola, berries and organic honey.",
        price: "₹599",
    },
];

const beverages = [
    {
        name: "Fresh Fruit Mocktails",
        description: "Prepared using freshly squeezed seasonal fruits.",
        price: "₹349",
    },
    {
        name: "Premium Coffee Selection",
        description: "Single-origin coffees prepared by expert baristas.",
        price: "₹299",
    },
    {
        name: "Herbal Tea Collection",
        description: "Curated luxury teas sourced from premium estates.",
        price: "₹249",
    },
];

export default function MenuPage() {
    return (
        <>
            <Navbar />

            <main>
                {/* HERO */}

                <section className="relative h-[75vh] overflow-hidden">
                    <Image
                        src="/menu/menu-hero.jpg"
                        alt="Luxury Dining"
                        fill
                        priority
                        className="object-cover transition-transform duration-12000 hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/65" />

                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/80" />

                    <HeroReveal className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                        <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                            PRIVATE DINING EXPERIENCE
                        </p>

                        <h1 className="mt-6 font-serif text-5xl font-bold text-white md:text-7xl">
                            Curated Culinary Journey
                        </h1>

                        <p className="mt-8 max-w-3xl leading-8 text-neutral-200">
                            Every meal is thoughtfully crafted using seasonal
                            ingredients, refined culinary techniques and
                            exceptional hospitality.
                        </p>
                    </HeroReveal>
                </section>

                {/* CHEF'S SIGNATURE */}

                <FadeUp>
                    <section className="container mx-auto px-6 py-24">
                        <div className="text-center">
                            <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                Chef&apos;s Recommendation
                            </p>

                            <h2 className="mt-4 font-serif text-5xl font-bold">
                                Signature BBQ Collection
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted-foreground">
                                Experience handcrafted flavours prepared over
                                open flames using premium ingredients and
                                timeless culinary traditions.
                            </p>
                        </div>

                        <Stagger className="mt-20 grid gap-8 lg:grid-cols-3">
                            {bbqMenu.map((item) => (
                                <StaggerItem key={item.name}>
                                    <ScaleIn>
                                        <Card className="group border-amber-500/20 bg-background/70 backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10">
                                            <CardContent className="p-10">
                                                <div className="flex items-start justify-between gap-4">
                                                    <h3 className="font-serif text-2xl">
                                                        {item.name}
                                                    </h3>

                                                    <span className="rounded-full bg-amber-500/10 px-4 py-2 text-lg font-semibold text-amber-500">
                                                        {item.price}
                                                    </span>
                                                </div>

                                                <div className="my-8 h-px bg-border" />

                                                <p className="leading-8 text-muted-foreground">
                                                    {item.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </ScaleIn>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </section>
                </FadeUp>

                {/* MENU CATEGORIES */}

                <FadeUp>
                    <section className="relative overflow-hidden border-y py-24">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.08),transparent_60%)]" />

                        <div className="container relative mx-auto grid gap-20 px-6 lg:grid-cols-2">
                            {/* BREAKFAST */}

                            <FadeLeft>
                                <div>
                                    <div className="mb-12">
                                        <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                            Morning Delights
                                        </p>

                                        <h2 className="mt-4 font-serif text-5xl font-bold">
                                            Breakfast
                                        </h2>
                                    </div>

                                    <Stagger className="space-y-10">
                                        {breakfast.map((item) => (
                                            <StaggerItem key={item.name}>
                                                <div className="group">
                                                    <div className="flex items-start justify-between gap-6">
                                                        <div>
                                                            <h3 className="font-serif text-2xl transition-colors duration-300 group-hover:text-amber-500">
                                                                {item.name}
                                                            </h3>

                                                            <p className="mt-3 leading-8 text-muted-foreground">
                                                                {
                                                                    item.description
                                                                }
                                                            </p>
                                                        </div>

                                                        <span className="rounded-full bg-amber-500/10 px-4 py-2 text-lg font-semibold text-amber-500">
                                                            {item.price}
                                                        </span>
                                                    </div>

                                                    <div className="mt-8 h-px bg-border transition-colors group-hover:bg-amber-500/30" />
                                                </div>
                                            </StaggerItem>
                                        ))}
                                    </Stagger>
                                </div>
                            </FadeLeft>

                            {/* BEVERAGES */}

                            <FadeRight>
                                <div>
                                    <div className="mb-12">
                                        <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                            Refreshments
                                        </p>

                                        <h2 className="mt-4 font-serif text-5xl font-bold">
                                            Beverages
                                        </h2>
                                    </div>

                                    <Stagger className="space-y-10">
                                        {beverages.map((item) => (
                                            <StaggerItem key={item.name}>
                                                <div className="group">
                                                    <div className="flex items-start justify-between gap-6">
                                                        <div>
                                                            <h3 className="font-serif text-2xl transition-colors duration-300 group-hover:text-amber-500">
                                                                {item.name}
                                                            </h3>

                                                            <p className="mt-3 leading-8 text-muted-foreground">
                                                                {
                                                                    item.description
                                                                }
                                                            </p>
                                                        </div>

                                                        <span className="rounded-full bg-amber-500/10 px-4 py-2 text-lg font-semibold text-amber-500">
                                                            {item.price}
                                                        </span>
                                                    </div>

                                                    <div className="mt-8 h-px bg-border transition-colors group-hover:bg-amber-500/30" />
                                                </div>
                                            </StaggerItem>
                                        ))}
                                    </Stagger>
                                </div>
                            </FadeRight>
                        </div>
                    </section>
                </FadeUp>

                {/* DINING EXPERIENCE */}

                <FadeUp>
                    <section className="container mx-auto px-6 py-32">
                        <div className="grid items-center gap-20 lg:grid-cols-2">
                            <FadeLeft>
                                <div className="group relative h-162.5 overflow-hidden rounded-3xl">
                                    <Image
                                        src="/menu/private-dining.jpg"
                                        alt="Private Dining"
                                        fill
                                        className="object-cover transition-all duration-1800 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                                </div>
                            </FadeLeft>

                            <FadeRight>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                        Fine Dining
                                    </p>

                                    <h2 className="mt-5 font-serif text-5xl font-bold leading-tight">
                                        More Than A Meal
                                    </h2>

                                    <p className="mt-8 leading-8 text-muted-foreground">
                                        Dining at Kapoor&apos;s Villa is
                                        designed as an immersive culinary
                                        experience where exceptional cuisine
                                        meets breathtaking surroundings and
                                        personalized hospitality.
                                    </p>

                                    <p className="mt-6 leading-8 text-muted-foreground">
                                        Every dish is crafted using fresh
                                        seasonal ingredients, refined techniques
                                        and curated flavours to create lasting
                                        memories with every meal.
                                    </p>

                                    <div className="mt-12 grid gap-8 sm:grid-cols-2">
                                        <ScaleIn>
                                            <div>
                                                <h3 className="font-serif text-4xl text-amber-500">
                                                    100%
                                                </h3>

                                                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
                                                    Fresh Ingredients
                                                </p>
                                            </div>
                                        </ScaleIn>

                                        <ScaleIn>
                                            <div>
                                                <h3 className="font-serif text-4xl text-amber-500">
                                                    Private
                                                </h3>

                                                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
                                                    Dining
                                                </p>
                                            </div>
                                        </ScaleIn>

                                        <ScaleIn>
                                            <div>
                                                <h3 className="font-serif text-4xl text-amber-500">
                                                    Chef
                                                </h3>

                                                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
                                                    Curated Menus
                                                </p>
                                            </div>
                                        </ScaleIn>

                                        <ScaleIn>
                                            <div>
                                                <h3 className="font-serif text-4xl text-amber-500">
                                                    BBQ
                                                </h3>

                                                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
                                                    Outdoor Evenings
                                                </p>
                                            </div>
                                        </ScaleIn>
                                    </div>
                                </div>
                            </FadeRight>
                        </div>
                    </section>
                </FadeUp>

                {/* PREMIUM RESERVATION CTA */}

                <FadeUp>
                    <section className="relative overflow-hidden">
                        <Image
                            src="/menu/menu-cta.jpg"
                            alt="Luxury Dining Experience"
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-black/75" />

                        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30" />

                        <div className="relative container mx-auto flex min-h-140 items-center justify-center px-6 py-24">
                            <div className="max-w-4xl text-center">
                                <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                    Reserve Your Experience
                                </p>

                                <h2 className="mt-6 font-serif text-5xl font-bold text-white md:text-6xl">
                                    Every Celebration
                                    <br />
                                    Deserves Exceptional Dining
                                </h2>

                                <p className="mx-auto mt-8 max-w-2xl leading-8 text-neutral-300">
                                    Whether it&apaos;s an intimate dinner, a
                                    weekend barbecue or a family celebration,
                                    our curated culinary experiences promise
                                    unforgettable moments.
                                </p>

                                <div className="mt-12 flex flex-wrap justify-center gap-4">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-amber-500 px-8 text-black hover:bg-amber-400"
                                    >
                                        <Link href="/contact">
                                            Reserve A Table
                                        </Link>
                                    </Button>

                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="border-white/40 bg-transparent px-8 text-white hover:bg-white/10"
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

                {/* CLOSING QUOTE */}

                <FadeUp>
                    <section className="container mx-auto px-6 py-28">
                        <div className="mx-auto max-w-5xl text-center">
                            <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                The Kapoor&apos;s Villa Promise
                            </p>

                            <blockquote className="mt-8 font-serif text-4xl leading-tight md:text-6xl">
                                &quot;Luxury isn&apos;t simply about what you
                                eat— it&apos;s about the atmosphere, the company
                                and the memories created around the table.&quot;
                            </blockquote>

                            <div className="mx-auto mt-12 h-px w-40 bg-amber-500/40" />

                            <p className="mx-auto mt-10 max-w-3xl leading-8 text-muted-foreground">
                                Every meal is designed to bring people together,
                                celebrate life&apos;s special moments and create
                                unforgettable memories at Kapoor&apos;s Villa.
                            </p>
                        </div>
                    </section>
                </FadeUp>
            </main>

            <Footer />
        </>
    );
}
