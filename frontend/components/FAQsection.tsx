"use client";

const faqs = [
  {
    question: "What are the check-in and check-out times at Kapoor's Villa?",
    answer:
      "Standard check-in time is 2:00 PM and check-out time is 11:00 AM. Early check-in or late check-out can be accommodated based on availability.",
  },
  {
    question: "Does Kapoor's Villa feature a private swimming pool?",
    answer:
      "Yes, guests at Kapoor's Villa enjoy access to our pristine outdoor swimming pool and relaxation area.",
  },
  {
    question: "Is dining or room service available?",
    answer:
      "Yes! We have an in-house food & beverage menu offering freshly cooked meals and private dining options.",
  },
  {
    question: "How can I book a suite or room at Kapoor's Villa?",
    answer:
      "You can make a reservation directly through our Contact page or by reaching out to us via phone or WhatsApp.",
  },
];

export default function FAQSection() {
  // FAQ structured data for search engines
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Heading */}
      <h2 className="mb-10 text-center font-serif text-4xl font-medium text-[#112A46] dark:text-white">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-black"
          >
            {/* Question */}
            <div className="bg-slate-50 px-6 py-5 dark:bg-neutral-900">
              <h3 className="font-serif text-lg font-semibold text-[#112A46] dark:text-white">
                {faq.question}
              </h3>
            </div>

            {/* Answer */}
            <div className="border-t border-slate-200 bg-white px-6 py-5 dark:border-neutral-800 dark:bg-black">
              <p className="text-sm leading-7 text-slate-600 dark:text-neutral-400">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}