"use client";

const nearbyLandmarks = [
  {
    name: "Mapro Garden",
    distance: "16 km",
    driveTime: "~25 mins",
    tag: "Must-Visit",
    image: "mapro.webp",
  },
  {
    name: "Panchgani Town",
    distance: "17 km",
    driveTime: "~30 mins",
    tag: "Hill Station",
    image: "panchgani.jpg",
  },
  {
    name: "Mahabaleshwar Market",
    distance: "26 km",
    driveTime: "~45 mins",
    tag: "Touristic Hub",
    image: "mahableshwar.jpg",
  },
  {
    name: "Kas Plateau",
    distance: "33 km",
    driveTime: "~1 hr",
    tag: "Valley of Flowers",
    image: "kas_plateau.jpg",
  },
  {
    name: "Bhilar",
    distance: "12 km",
    driveTime: "~20 mins",
    tag: "Cultural Hub",
    // Image removed to trigger the fallback block
  },
  {
    name: "Nirwana",
    distance: "2 km",
    driveTime: "~5 mins",
    tag: "Serene Spot",
    // Image removed to trigger the fallback block
  },
];

export default function LocationSection() {
  // Schema markup for Google Maps & AI engines
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Kapoor's Villa",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Panchgani",
      addressRegion: "Mahabaleshwar, Satara, Maharashtra",
      addressCountry: "IN",
    },
    areaServed: ["Panchgani", "Mahabaleshwar", "Bhilar"],
    knowsAbout: nearbyLandmarks.map(
      (item) => `${item.name} (${item.distance})`,
    ),
  };

  return (
    <section className="py-12 max-w-5xl mx-auto px-4">
      {/* AI Crawlers Read This */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(locationSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight dark:text-white">
          Prime Location & Proximity
        </h2>
        <p className="text-slate-600 dark:text-neutral-400 mt-2">
          Nestled peacefully between Panchgani and Mahabaleshwar with seamless
          access to key tourist spots.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {nearbyLandmarks.map((place, index) => (
          <div
            key={index}
            className="border border-slate-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-[#1E1E1E] shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
          >
            {/* Image Section with Conditional Fallback */}
            <div className="w-full h-48 relative bg-slate-50 dark:bg-neutral-800 border-b border-slate-100 dark:border-neutral-800">
              {place.image ? (
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                /* Map Pin Fallback block when no image exists */
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-300 dark:text-neutral-600">
                  <svg
                    className="w-12 h-12 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-xs font-medium uppercase tracking-widest text-slate-400 dark:text-neutral-500">
                    {place.name}
                  </span>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-1">
              <div className="mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-neutral-800 text-slate-700 dark:text-neutral-300">
                  {place.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold mt-1 dark:text-white">
                {place.name}
              </h3>
              
              {/* mt-auto pushes this footer to the bottom so cards align evenly */}
              <div className="flex justify-between items-center mt-auto text-sm text-slate-600 dark:text-neutral-400 border-t border-slate-100 dark:border-neutral-800 pt-3">
                <span className="font-semibold text-slate-900 dark:text-white">
                  {place.distance} away
                </span>
                <span>{place.driveTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}