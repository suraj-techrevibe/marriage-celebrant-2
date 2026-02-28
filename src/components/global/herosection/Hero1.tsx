import { useEffect, useState } from "react";

interface HeroProps {
  heading: string;
  para: string;
  bgImage: string;
}

function Hero({ heading, para, bgImage }: HeroProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[850px] md:h-[600px] mt-24 overflow-hidden flex items-center justify-center">

      {/* Parallax Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[-20%] left-0 w-full h-[140%] bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url(${bgImage})`,
            transform: `translateY(${offsetY * -0.2}px)`
          }}
        />
      </div>

      {/* Overlay (Secondary = Black) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">

        <p className="uppercase tracking-widest mb-4 text-white/80">
          We bring dreams to life!
        </p>

        {/* Uses global h1 styling from index.css */}
        <h1 className="mb-6">
          {heading}
        </h1>

        <p className="text-white/90">
          {para}
        </p>

      </div>
    </section>
  );
}

export default Hero;