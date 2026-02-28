import { useEffect, useRef } from "react";

export default function useReveal(
  animationClass = "animate-fadeInUp"
) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Hide element initially
    element.style.opacity = "0";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = "1"; // make visible
          element.classList.add(animationClass); // add animation
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animationClass]);

  return ref;
}