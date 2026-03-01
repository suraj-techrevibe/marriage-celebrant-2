"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import img from "../../../assets/hero/bride-holding.jpg";
import ContentWrapper from "../../../components/global/ContentWrapper";

type FaqItem = {
  question: string;
  answer: string;
};

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-main bg-[var(--color-bg-soft)]">
      <ContentWrapper>
      <div className="container-main grid md:grid-cols-2 gap-16 items-start">

        {/* Image */}
        <div className="flex justify-center">
          <div className="card overflow-hidden max-w-md">
            <img
              src={img}
              alt="Wedding moment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Accordion */}
        {/* FAQ Content */}
        <div>
          <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4">
            Ready to get in touch?
          </p>

          <h2 className="heading-font text-3xl md:text-4xl text-secondary mb-16">
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
      </ContentWrapper>
    </section>
  );
}