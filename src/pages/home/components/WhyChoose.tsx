import React from "react";
import { Award, Sparkles, Wand2 } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: <Award size={40} strokeWidth={1.5} />,
      title: "Authenticity at the Core",
      desc: "Each design is tailored to mirror your personal journey.",
    },
    {
      icon: <Wand2 size={40} strokeWidth={1.5} />,
      title: "Effortless Perfection",
      desc: "From concept to execution, we manage every detail seamlessly.",
    },
    {
      icon: <Sparkles size={40} strokeWidth={1.5} />,
      title: "Timeless Magic",
      desc: "Celebrations with depth, elegance, and a touch of grandeur.",
    },
  ];

  return (
    <section className="section-main bg-[var(--color-bg-soft)]">
      <div className="container-main text-center">

        {/* Heading */}
        <h2 className="heading-font heading-lg text-primary mb-6">
          Why Choose Nirvana?
        </h2>

        <p className="text-muted max-w-2xl mx-auto leading-relaxed mb-16">
          We don’t just plan events, we create experiences that live forever.
          Your wedding or celebration is a chapter in your love story, and we
          ensure every detail reflects you.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-[var(--radius-md)] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex justify-center text-primary mb-6">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-secondary mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}