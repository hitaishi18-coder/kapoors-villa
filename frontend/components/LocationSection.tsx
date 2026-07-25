"use client";

const nearbyLandmarks = [
  {
    name: "Nirwana",
    distance: "2 km",
    driveTime: "~5 mins",
    tag: "Serene Spot",
  },
  {
    name: "Bhilar (Book Village)",
    distance: "12 km",
    driveTime: "~20 mins",
    tag: "Cultural Hub",
  },
  {
    name: "Mapro Garden",
    distance: "16 km",
    driveTime: "~25 mins",
    tag: "Must-Visit",
  },
  {
    name: "Panchgani Town",
    distance: "17 km",
    driveTime: "~30 mins",
    tag: "Hill Station",
  },
  {
    name: "Mahabaleshwar Market",
    distance: "26 km",
    driveTime: "~45 mins",
    tag: "Touristic Hub",
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
        <h2 className="text-3xl font-bold tracking-tight">
          Prime Location & Proximity
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Nestled peacefully between Panchgani and Mahabaleshwar with seamless
          access to key tourist spots.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {nearbyLandmarks.map((place, index) => (
          <div
            key={index}
            className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {place.tag}
            </span>
            <h3 className="text-lg font-bold mt-3">{place.name}</h3>
            <div className="flex justify-between items-center mt-4 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                {place.distance} away
              </span>
              <span>{place.driveTime}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
