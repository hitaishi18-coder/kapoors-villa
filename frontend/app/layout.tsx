import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const siteUrl = "https://kapoorsvilla.com"; // Replace with your actual domain

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Kapoor's Villa | Luxury Stay in Panchgani & Mahabaleshwar",
    template: "%s | Kapoor's Villa",
  },
  description:
    "Experience luxury living at Kapoor's Villa near Panchgani & Mahabaleshwar. Located just 16 km from Mapro Garden and 12 km from Bhilar. Featuring a private pool and gourmet dining.",
  keywords: [
    "Kapoor's Villa",
    "Villa in Panchgani",
    "Villa in Mahabaleshwar",
    "Private Pool Villa near Mapro Garden",
    "Boutique Stay Bhilar Panchgani",
    "Homestay near Nirwana Panchgani",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Kapoor's Villa | Luxury Villa & Boutique Stay",
    description:
      "Discover luxury accommodation and fine dining at Kapoor's Villa.",
    url: siteUrl,
    siteName: "Kapoor's Villa",
    images: [
      {
        url: "/bedroom/room-1.jpg",
        width: 1200,
        height: 630,
        alt: "Kapoor's Villa Luxury Suite",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

//TODO: Hitaishi - Add details here...!!
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness", // Or 'Hotel' / 'VacationRental'
    name: "Kapoor's Villa",
    image: "https://kapoorsvilla.com/bedroom/room-1.jpg",
    "@id": "https://kapoorsvilla.com",
    url: "https://kapoorsvilla.com",
    telephone: "+91-XXXXXXXXXX", // Add actual phone number
    address: {
      "@type": "PostalAddress",
      streetAddress: "Panchgani-Mahabaleshwar Road",
      addressLocality: "Panchgani",
      addressRegion: "Satara, Maharashtra",
      postalCode: "412805",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.9216, // Panchgani coordinates
      longitude: 73.79,
    },
    priceRange: "$$$",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Private Pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Gourmet Dining",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "AC Suites",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free Wi-Fi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Lawn",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "24/7 Concierge",
        value: true,
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
