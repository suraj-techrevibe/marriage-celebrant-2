"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import img from "../../../assets/hero/bride-holding.jpg";

const faqs = [
  {
    question: "What does a marriage celebrant do?",
    answer:
      "A marriage celebrant officiates and conducts your wedding ceremony, ensuring all legal requirements are met while creating a meaningful and personalised ceremony that reflects your relationship.",
  },
  {
    question: "How far in advance should we book our celebrant?",
    answer:
      "It is recommended to book your celebrant as early as possible, especially during popular wedding seasons. Many couples book 6–12 months in advance to secure their preferred date.",
  },
  {
    question: "Do you help with the legal paperwork?",
    answer:
      "Yes. Your celebrant will guide you through all the necessary legal documents and ensure everything is completed correctly before and after the ceremony.",
  },
  {
    question: "Can we personalise our wedding ceremony?",
    answer:
      "Absolutely. Your ceremony can be tailored to reflect your story, values, and traditions. You can include personal vows, readings, cultural rituals, or any meaningful elements.",
  },
  {
    question: "Can you perform small or elopement ceremonies?",
    answer:
      "Yes. Celebrants can conduct everything from intimate elopements with just two witnesses to larger traditional wedding ceremonies.",
  },
  {
    question: "Do you travel to different locations for ceremonies?",
    answer:
      "Yes, ceremonies can be performed at a variety of locations including beaches, parks, private venues, and homes. Travel arrangements may apply depending on the distance.",
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
            className="w-[380px] sm:w-[320px] md:w-[480px] aspect-square 
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
        <div className="px-8 md:px-0">
          <p className="text-sm  tracking-[0.3em] text-primary uppercase mb-4">
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