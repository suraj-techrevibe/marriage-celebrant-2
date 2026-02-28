"use client";

import img1 from "../../../assets/hero/rose.png";
import img2 from "../../../assets/hero/rose.png";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Forever, we will cherish our joyful and emotionally rich family photographs, treasuring each captured memory.",
    author: "Ram & Sita",
  },
  {
    quote:
      "Every frame tells a beautiful story. We couldn’t have asked for more heartfelt memories.",
    author: "Aarav & Meera",
  },
  {
    quote:
      "The photos truly captured the love and warmth of our special day.",
    author: "Rohan & Anika",
  },
];

export default function Section3() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="section-main   bg-[var(--color-bg-soft)] relative overflow-hidden">
      
      {/* Decorative Flowers */}
      <div className="absolute top-16 right-0 w-48 opacity-90">
        <img src={img1} className="-scale-y-100 -scale-x-100" />
      </div>

      <div className="absolute bottom-16 left-0 w-48 opacity-90">
        <img src={img2} />
      </div>

      <div className="container-main relative border border-primary p-16 text-center">

        {/* Quote Mark */}
        <div className="text-5xl text-primary mb-8 leading-none">“</div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="icon-btn-outline left-44"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="icon-btn-outline right-44"
        >
          <ChevronRight size={24} />
        </button>

        {/* Testimonial Quote */}
        <p className="text-xl md:text-2xl italic text-secondary leading-relaxed max-w-3xl mx-auto font-light">
          {testimonials[index].quote}
        </p>

        {/* Author */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-primary/50"></span>

          <p className="text-sm tracking-[0.3em] text-primary uppercase font-medium">
            {testimonials[index].author}
          </p>

          <span className="h-px w-10 bg-primary/50"></span>
        </div>

      </div>
    </section>
  );
}