import { useEffect, useRef, useState, type ChangeEvent } from "react";
import defaultImg from "../../../assets/hero/groom-putting-ring-bride-s-finger.jpg";

interface HeroProps {
  data: { heading: string; para: string; heroImage: string };
  setData: (data: { heading: string; para: string; heroImage: string }) => void;
  isEditing?: boolean;
  fileRef?: React.MutableRefObject<File | null>;
}

export default function Hero({ data, setData, isEditing = false, fileRef }: HeroProps) {
  const [offsetY, setOffsetY] = useState(0);
  const targetY = useRef(0);
  const raf = useRef<number>(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => (targetY.current = window.scrollY * 0.3);
    const smoothUpdate = () => {
      setOffsetY((prev) => prev + (targetY.current - prev) * 0.3);
      raf.current = requestAnimationFrame(smoothUpdate);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    raf.current = requestAnimationFrame(smoothUpdate);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imgURL = URL.createObjectURL(e.target.files[0]);
      setData({ ...data, heroImage: imgURL });
      if (fileRef) fileRef.current = e.target.files[0]; // pass file back to Home
    }
  };

  const heroImage = data.heroImage || defaultImg;

  return (
    <section className="relative overflow-hidden h-[800px] sm:h-[500px] md:h-[600px] lg:h-[700px] mt-24">
      <img
        src={heroImage}
        alt="Hero"
        className="absolute top-0 left-0 w-full h-full object-cover object-center will-change-transform"
        style={{ transform: `translateY(${offsetY}px)` }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12">
        {isEditing && (
          <input
            ref={fileInputRef}
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
              className="mb-2 p-4 rounded border focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              value={data.para ?? ""}
              onChange={(e) => setData({ ...data, para: e.target.value })}
              className="mb-2 p-4 rounded border focus:ring-2 focus:ring-orange-500"
            />
          </>
        ) : (
          <>
            <h1 className="text-[clamp(2rem,6vw,4rem)] sm:text-[clamp(2.5rem,6vw,5rem)] md:text-[clamp(3rem,5vw,6rem)] max-w-full sm:max-w-3xl break-words font-greatvibes text-white leading-tight tracking-tight border border-white drop-shadow-lg px-2 sm:px-4 md:px-6 text-center">
              {data.heading}
            </h1>
            <p className="mt-4 sm:mt-6 text-white/90 text-sm sm:text-base md:text-lg max-w-full sm:max-w-xl break-words leading-relaxed font-medium drop-shadow px-2 sm:px-4 text-center">
              {data.para}
            </p>
          </>
        )}
      </div>
    </section>
  );
}