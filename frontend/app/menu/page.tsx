import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
                {/* Hero */}

                <section className="relative h-[75vh] overflow-hidden">
                    <Image
                        src="/menu/menu-hero.jpg"
                        alt="Luxury Dining"
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/65" />

                    <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
                        <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                            PRIVATE DINING EXPERIENCE
                        </p>

                        <h1 className="mt-6 font-serif text-5xl font-bold md:text-7xl">
                            Curated Culinary Journey
                        </h1>

                        <p className="mt-8 max-w-3xl text-neutral-200 md:text-lg">
                            Every meal is thoughtfully crafted to complement the
                            luxury experience of Kapoor&apos;s Villa.
                        </p>
                    </div>
                </section>

                {/* BBQ Highlight */}

                <section className="container mx-auto px-6 py-24">
                    <div className="text-center">
                        <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                            Chef&apos;s Recommendation
                        </p>

                        <h2 className="mt-4 font-serif text-5xl font-bold">
                            Signature BBQ Collection
                        </h2>

                        <div className="mx-auto mt-8 h-px w-32 bg-amber-500/40" />
                    </div>

                    <div className="mt-16 grid gap-8 lg:grid-cols-3">
                        {bbqMenu.map((item) => (
                            <Card
                                key={item.name}
                                className="border-amber-500/20 transition-all duration-300 hover:border-amber-500"
                            >
                                <CardContent className="p-8">
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="font-serif text-2xl">
                                            {item.name}
                                        </h3>

                                        <span className="text-lg font-semibold text-amber-500">
                                            {item.price}
                                        </span>
                                    </div>

                                    <p className="mt-6 leading-7 text-muted-foreground">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Menu Categories */}

                <section className="border-y py-24">
                    <div className="container mx-auto grid gap-16 px-6 lg:grid-cols-2">
                        {/* Breakfast */}

                        <div>
                            <div className="mb-10">
                                <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                    Morning Delights
                                </p>

                                <h2 className="mt-3 font-serif text-4xl font-bold">
                                    Breakfast
                                </h2>
                            </div>

                            <div className="space-y-8">
                                {breakfast.map((item) => (
                                    <div key={item.name} className="group">
                                        <div className="flex items-start justify-between gap-6">
                                            <div>
                                                <h3 className="font-serif text-2xl transition-colors group-hover:text-amber-500">
                                                    {item.name}
                                                </h3>

                                                <p className="mt-3 leading-7 text-muted-foreground">
                                                    {item.description}
                                                </p>
                                            </div>

                                            <span className="shrink-0 text-lg font-semibold text-amber-500">
                                                {item.price}
                                            </span>
                                        </div>

                                        <div className="mt-6 h-px bg-border" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Beverages */}

                        <div>
                            <div className="mb-10">
                                <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                    Refreshments
                                </p>

                                <h2 className="mt-3 font-serif text-4xl font-bold">
                                    Beverages
                                </h2>
                            </div>

                            <div className="space-y-8">
                                {beverages.map((item) => (
                                    <div key={item.name} className="group">
                                        <div className="flex items-start justify-between gap-6">
                                            <div>
                                                <h3 className="font-serif text-2xl transition-colors group-hover:text-amber-500">
                                                    {item.name}
                                                </h3>

                                                <p className="mt-3 leading-7 text-muted-foreground">
                                                    {item.description}
                                                </p>
                                            </div>

                                            <span className="shrink-0 text-lg font-semibold text-amber-500">
                                                {item.price}
                                            </span>
                                        </div>

                                        <div className="mt-6 h-px bg-border" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dining Experience */}

                <section className="container mx-auto px-6 py-28">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        <div className="relative h-162.5 overflow-hidden rounded-2xl">
                            <Image
                                src="/menu/private-dining.jpg"
                                alt="Private Dining"
                                fill
                                className="object-cover transition duration-700 hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                Fine Dining
                            </p>

                            <h2 className="mt-5 font-serif text-5xl font-bold leading-tight">
                                More Than A Meal
                            </h2>

                            <p className="mt-8 leading-8 text-muted-foreground">
                                Dining at Kapoor&apos;s Villa is designed as an
                                immersive experience where exceptional cuisine
                                meets breathtaking surroundings.
                            </p>

                            <p className="mt-6 leading-8 text-muted-foreground">
                                Every dish is prepared using fresh seasonal
                                ingredients, handcrafted recipes and refined
                                culinary techniques to deliver memorable flavors
                                with every serving.
                            </p>

                            <div className="mt-12 grid gap-6 sm:grid-cols-2">
                                <div>
                                    <h3 className="font-serif text-3xl text-amber-500">
                                        100%
                                    </h3>

                                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                                        Fresh Ingredients
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-serif text-3xl text-amber-500">
                                        Private
                                    </h3>

                                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                                        Dining Experience
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-serif text-3xl text-amber-500">
                                        Chef
                                    </h3>

                                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                                        Curated Menus
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-serif text-3xl text-amber-500">
                                        BBQ
                                    </h3>

                                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                                        Outdoor Evenings
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reservation CTA */}

                <section className="relative overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/menu/menu-cta.jpg"
                            alt="Luxury Dining Experience"
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-black/75" />
                    </div>

                    <div className="relative container mx-auto flex min-h-137.5 items-center justify-center px-6 py-24">
                        <div className="max-w-3xl text-center">
                            <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                                Reserve Your Experience
                            </p>

                            <h2 className="mt-6 font-serif text-5xl font-bold md:text-6xl">
                                Every Celebration
                                <br />
                                Deserves Exceptional Dining
                            </h2>

                            <p className="mx-auto mt-8 max-w-2xl leading-8 text-neutral-300">
                                Whether it&apos;s an intimate dinner, a family
                                celebration, or a weekend barbecue under the
                                stars, our curated culinary experiences promise
                                unforgettable moments.
                            </p>

                            <div className="mt-12 flex flex-wrap justify-center gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-amber-500 text-black hover:bg-amber-400"
                                >
                                    <Link href="/book">Reserve A Table</Link>
                                </Button>

                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-amber-500/50 hover:border-amber-500"
                                >
                                    <Link href="/contact">
                                        Contact Concierge
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Closing Quote */}

                <section className="container mx-auto px-6 py-24">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-xs uppercase tracking-[0.45em] text-amber-500">
                            The Kapoor&apos;s Villa Promise
                        </p>

                        <blockquote className="mt-8 font-serif text-4xl leading-tight md:text-5xl">
                            &quot;Luxury isn&apos;t simply about what you eat—
                            it&apos;s about the atmosphere, the company, and the
                            memories created around the table.&quot;
                        </blockquote>

                        <div className="mx-auto mt-10 h-px w-28 bg-amber-500/40" />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
