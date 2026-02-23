import React, { useState, useEffect } from "react";
import "../../globalcss/animation/animation.css";
import type { ImageSliderProps } from "../../../types/types";

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  imgTitle,
  interval = 3000,
  
}) => {
  const [index, setIndex] = useState<number>(0);

  // Auto-slide
  useEffect(() => {
    if (!images || images.length <= 1) return;

    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(slider);
  }, [images, interval]);

  // Preload next/prev images
  useEffect(() => {
    if (!images || images.length <= 1) return;

    const nextIndex = (index + 1) % images.length;
    const prevIndex = (index - 1 + images.length) % images.length;

    [nextIndex, prevIndex].forEach((i) => {
      const img = new Image();
      img.src = images[i];
    });
  }, [index, images]);

  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setIndex((prev) => (prev + 1) % images.length);

  if (!images || images.length === 0) return null; // nothing to render

  return (
    <div className={`relative w-full overflow-hidden rounded-4xl mx-auto`}>
      {/* Image Track */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img: string, i: number) => (
          <img
            key={i}
            src={img}
            loading={i === index ? "eager" : "lazy"}
            alt={imgTitle}
            className="h-full w-full object-cover"
          />
        ))}
      </div>

      {/* Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 w-10 h-10 rounded-full shadow flex items-center justify-center z-10"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 w-10 h-10 rounded-full shadow flex items-center justify-center z-10"
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i: number) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === index ? "bg-red-600" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
