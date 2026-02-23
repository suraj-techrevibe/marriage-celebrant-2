import  { useEffect, useState } from "react";
import img from "../../../assets/hero/header-wedding.jpg";

interface HeroProps {
  heading: string;
  para: string;
}
function Hero({ heading, para }:HeroProps) {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className=" relative w-full h-[500px] mt-24  flex flex-col items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute w-full inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
          url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: `center ${offsetY * 0.5}px`, // parallax effect
        }}
      >
        {/* Orange overlay */}
        {/* <div className="absolute inset-0 bg-red-900/60 mix-blend-multiply"></div> */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-gray-800 text-5xl md:text-5xl font-serif mb-6">
          {heading}
        </h1>
        <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto">
          {para}
        </p>
      </div>

      {/* SVG Wave Bottom */}
      {/* <div className="absolute bottom-0 left-0 w-full leading-none z-20">
        <svg
          className="relative block w-full h-[100px] md:h-[150px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V120H1200V0C1000,100 200,100 0,0Z"
            className="fill-white"
          ></path>
        </svg>
      </div> */}
    </section>
  );
}

export default Hero;
