"use client";

import { useState } from "react";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Schema structured data generated dynamically for AI search engines
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
    <section className="py-12 max-w-4xl mx-auto px-4">
      {/* Invisible Schema injected for ChatGPT, Gemini & Google AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left p-4 font-semibold flex justify-between items-center bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span>{faq.question}</span>
              <span className="text-xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
