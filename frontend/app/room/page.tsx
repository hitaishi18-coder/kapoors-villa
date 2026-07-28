import type { Metadata } from "next";
import RoomClient from "@/components/RoomClient";

export const metadata: Metadata = {
  title: "Rooms & Suites | Kapoor's Villa",
  description:
    "Luxury suites with private pool views, AC comfort, and stunning valley vistas. 4 bedrooms, 5 bathrooms, accommodates 8-12 guests in Panchgani near Mahabaleshwar.",
  keywords: [
    "Luxury Suites Panchgani",
    "Villa Rooms Mahabaleshwar",
    "AC Suites near Mapro Garden",
    "Private Pool Villa Rooms",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Luxury Rooms & Suites | Kapoor's Villa",
    description:
      "Spacious suites with valley views, private pool access, and modern amenities.",
    url: "https://kapoorsvilla.com/room",
    siteName: "Kapoor's Villa",
    images: [
      {
        url: "/bedroom/room-1.jpg",
        width: 1200,
        height: 630,
        alt: "Kapoor's Villa Luxury Suite with Pool View",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://kapoorsvilla.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Rooms",
      item: "https://kapoorsvilla.com/room",
    },
  ],
};

const roomJsonLd = {
  "@context": "https://schema.org",
  "@type": "HotelRoom",
  name: "Master Suite at Kapoor's Villa",
  description:
    "Spacious air-conditioned master suite featuring a king-sized bed, pool view, and luxury bathroom.",
  occupancy: {
    "@type": "QuantitativeValue",
    minValue: 1,
    maxValue: 3,
  },
  bed: {
    "@type": "BedDetails",
    numberOfBeds: 1,
    typeOfBed: "King Bed",
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Air Conditioning",
      value: true,
    },
    { "@type": "LocationFeatureSpecification", name: "Pool View", value: true },
  ],
};

export default function RoomsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(roomJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <RoomClient />
    </>
  );
}
