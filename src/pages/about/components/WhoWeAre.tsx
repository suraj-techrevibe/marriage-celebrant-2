import { useState } from "react";
import img from "../../../assets/hero/bride-holding.jpg";
import { useScrollAnimation } from "../../../components/global/animation/useScrollAnimation";

const WhoWeAre = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [ref, visible] = useScrollAnimation();

  const tabs = [
    {
      name: "Why Choose Me as Your Celebrant",
      content: (
        <p className="mb-4">
          I create meaningful, personalized, and stress-free ceremonies that
          reflect your love story. I guide you through vows, readings, and
          rituals to make your day unforgettable.
        </p>
      ),
    },
    {
      name: "What Types of Ceremonies Do You Conduct?",
      content: (
        <p className="mb-4">
          I conduct weddings, vow renewals, elopements, and commitment ceremonies
          in Sydney and surrounding areas. Each ceremony is tailored to your
          unique style and preferences.
        </p>
      ),
    },
    {
      name: "How Do I Book a Consultation?",
      content: (
        <p className="mb-4">
          Simply contact me via phone or email to schedule a free consultation.
          We’ll discuss your vision, ceremony structure, and answer any questions
          you have.
        </p>
      ),
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-white font-sans text-slate-700">
      <div className="mb-32">
        <div ref={ref} className="relative">
          <img
            src={img}
            alt="Suraj Shrestha"
            className="float-none lg:float-right w-full lg:w-[480px] ml-0 lg:ml-10 mb-6 lg:mb-4"
          />
          <div className="space-y-6 text-left">
            <p
              className={`text-sm tracking-widest uppercase text-red-400 font-light slide-fade ${
                visible ? "visible" : ""
              }`}
              style={{ transitionDelay: "0.1s" }}
            >
              Suraj Shrestha - Celebrant
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 leading-tight">
              Sydney’s Marriage Celebrant
              <span
                className="block mt-3 h-[2px] bg-red-400"
                style={{
                  width: visible ? "8rem" : "0",
                  transition: "width 0.6s ease-out",
                  transitionDelay: "0.4s",
                }}
              />
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4 text-sm md:text-base font-light">
              <p>
                I’m Suraj Shrestha, a Sydney-based marriage celebrant passionate
                about creating meaningful, modern, and heartfelt ceremonies.
              </p>
              <p>
                Whether you’re planning an intimate elopement or a joyful
                celebration, my goal is to make your ceremony memorable,
                authentic, and beautifully simple.
              </p>
              <p>
                I want you to enjoy your wedding day as much as I enjoyed mine.
                I will guide you, help you, and provide as much advice as you
                need — from vows and readings to making your ceremony
                unforgettable.
              </p>
              <p>
                I’ve been a celebrant in Sydney since 2012 and absolutely love
                my job. Weddings should be the biggest party of your life — full
                of laughter, tears, warmth, and love.
              </p>
              <p>
                I will get to know YOU both. Your guests will think we’ve been
                friends for years.
              </p>
              <p>
                ‘I got you’, so you can relax and concentrate on looking
                fabulous and enjoying every moment.
              </p>
            </div>
            <div
              className={`pt-6 border-t border-gray-100 flex items-center gap-4 text-sm slide-fade ${
                visible ? "visible" : ""
              }`}
              style={{ transitionDelay: "0.6s" }}
            >
              <a
                href="/services"
                className="text-red-500 font-medium hover:underline"
              >
                Learn More
              </a>
              <span className="text-gray-300">|</span>
              <a href="tel:1800371070" className="font-medium hover:underline">
                1800 371 070
              </a>
            </div>
          </div>
          <div className="clear-both"></div>
        </div>
      </div>

      <div className="max-w-5xl items-start mt-16 space-y-6">
  {tabs.map((tab, index) => {
    const isActive = activeTab === tab.name;
    return (
      <div key={index} className="border-b border-gray-200 pb-4">
        <button
          onClick={() => setActiveTab(isActive ? null : tab.name)}
          className="w-full flex items-start justify-start gap-4 text-2xl font-semibold text-gray-800 group"
        >
          <span className="group-hover:text-red-500 mr-24 transition-colors duration-300">
            {tab.name}
          </span>
          <span
            className={`transition-transform duration-500 ${
              isActive ? "rotate-45 text-red-500" : ""
            }`}
          >
            +
          </span>
        </button>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isActive ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="text-gray-600 ml-8 leading-relaxed text-lg">
            {tab.content}
          </div>
        </div>
      </div>
    );
  })}
</div>
    </section>
  );
};

export default WhoWeAre;