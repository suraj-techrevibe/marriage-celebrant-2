import { useEffect, useRef, useState, type ChangeEvent } from "react";
import defaultImg from "../../../assets/hero/groom-putting-ring-bride-s-finger.jpg";

interface HeroProps {
  data: { heading: string; para: string; heroImage: string };
  setData: (data: { heading: string; para: string; heroImage: string }) => void;
  isEditing?: boolean;
}

export default function Hero({ data, setData, isEditing = false }: HeroProps) {
  const [offsetY, setOffsetY] = useState(0);
  const targetY = useRef(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      targetY.current = window.scrollY * 0.3;
    };

    const smoothUpdate = () => {
      setOffsetY((prev) => prev + (targetY.current - prev) * 0.3);
      raf.current = requestAnimationFrame(smoothUpdate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    raf.current = requestAnimationFrame(smoothUpdate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imgURL = URL.createObjectURL(e.target.files[0]);
      setData({ ...data, heroImage: imgURL });
    }
  };

  const heroImage = data.heroImage || defaultImg;

  return (
    <section className="relative overflow-hidden h-[800px] sm:h-[500px] md:h-[600px] lg:h-[700px] mt-24">
      {/* Parallax Image */}
      <img
        src={heroImage}
        alt="Hero"
        className="absolute top-0 left-0 w-full h-full object-cover object-center will-change-transform"
        style={{ transform: `translateY(${offsetY}px)` }}
      />

      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12">
        {isEditing && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4 text-sm sm:text-base md:text-lg text-gray-700 border border-gray-300 rounded p-2 bg-white/90"
          />
        )}

        {isEditing ? (
          <>
            <input
              value={data.heading ?? ""}
              onChange={(e) => setData({ ...data, heading: e.target.value })}
              className="
                text-[clamp(1.5rem,6vw,4rem)] sm:text-[clamp(2rem,6vw,5rem)] md:text-[clamp(2.5rem,5vw,6rem)]
                max-w-full sm:max-w-3xl
                break-words
                font-greatvibes
                text-gray-900
                bg-white/90
                leading-tight tracking-tight
                border border-gray-300
                rounded-lg
                p-4 sm:p-6 md:p-8
                text-center
                shadow-md
                focus:outline-none focus:ring-2 focus:ring-orange-500
              "
            />
            <textarea
              value={data.para ?? ""}
              onChange={(e) => setData({ ...data, para: e.target.value })}
              className="
                mt-4 sm:mt-6
                text-gray-900
                bg-white/90
                text-sm sm:text-base md:text-lg
                max-w-full sm:max-w-xl
                break-words
                leading-relaxed
                font-medium
                border border-gray-300
                rounded-lg
                p-3 sm:p-4
                shadow-md
                focus:outline-none focus:ring-2 focus:ring-orange-500
                text-center
              "
            />
          </>
        ) : (
          <>
            <h1
              className="
                text-[clamp(2rem,6vw,4rem)] sm:text-[clamp(2.5rem,6vw,5rem)] md:text-[clamp(3rem,5vw,6rem)]
                max-w-full sm:max-w-3xl
                break-words
                font-greatvibes
                text-white
                leading-tight tracking-tight
                border border-white
                drop-shadow-lg
                px-2 sm:px-4 md:px-6
                text-center
              "
            >
              {data.heading}
            </h1>
            <p
              className="
                mt-4 sm:mt-6
                text-white/90
                text-sm sm:text-base md:text-lg
                max-w-full sm:max-w-xl
                break-words
                leading-relaxed
                font-medium
                drop-shadow
                px-2 sm:px-4
                text-center
              "
            >
              {data.para}
            </p>
          </>
        )}
      </div>
    </section>
  );
}