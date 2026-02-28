"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import img from "../../../assets/hero/bride-holding.jpg";

const faqs = [
  {
    question: "How long until we deliver your first blog post?",
    answer:
      "We typically deliver your first blog post within 5–7 business days after receiving all required details and assets.",
  },
  {
    question: "Do you offer custom wedding photography packages?",
    answer:
      "Yes! We offer fully customizable packages tailored to your event size, location, and preferences.",
  },
  {
    question: "How many edited photos will we receive?",
    answer:
      "You will receive approximately 300–600 professionally edited images depending on the package selected.",
  },
  {
    question: "Do you travel for destination weddings?",
    answer:
      "Absolutely! We love capturing destination weddings. Travel costs may vary depending on the location.",
  },
];

export default function Section4() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-main bg-[var(--color-bg-soft)]">
      <div className="container-main grid md:grid-cols-2 gap-16 items-start">

        {/* Left Image */}
        <div className="relative flex justify-center">
          <div
            className="w-[260px] sm:w-[320px] md:w-[480px] aspect-square 
            [clip-path:path('M190,70 C190,20 120,0 95,45 C70,0 0,20 0,70 C0,120 95,190 95,190 C95,190 190,120 190,70 Z')] 
            overflow-hidden shadow-xl"
          >
            <img
              src={img}
              alt="Wedding rings"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* FAQ Content */}
        <div>
          <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4">
            Ready to get in touch?
          </p>

          <h2 className="heading-font text-3xl md:text-4xl text-secondary mb-10">
            Frequently Ask Questions
          </h2>

          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-b border-primary/30 pb-5 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left group"
                  >
                    <span className="text-secondary font-medium text-base md:text-lg transition-colors duration-300 group-hover:text-primary">
                      {faq.question}
                    </span>

                    <div className="ml-4">
                      <Plus
                        size={20}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-45 text-primary" : "rotate-0 text-secondary"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Animated Answer */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-muted text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}