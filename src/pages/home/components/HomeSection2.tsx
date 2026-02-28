import React from "react";
import img1 from "../../../assets/hero/figma-image9.png";
import img2 from "../../../assets/hero/figma-image10.png";
import img3 from "../../../assets/hero/figma-image5.png";
import img4 from "../../../assets/hero/figma-image4.png";
import img5 from "../../../assets/hero/figma-image15.png";
import useReveal from "../../../hooks/useReveal";

export default function HomeSection2() {
  const revealRef=useReveal("animate-fadeInUp")
  return (
    
    <section  className="section-main ref={revealRef} bg-[var(--color-bg-soft)]">
      <div ref={revealRef} className="container-main text-center">

        {/* HEADING */}
        <h2 ref={revealRef} className="heading-font heading-lg text-secondary leading-relaxed">
          EXPLORE AI TO CREATES <br />
          <span ref={revealRef} className="text-primary">
            YOUR PERFECT WEDDING
          </span>
          <br />
          PLAN NOW!
        </h2>

        <p ref={revealRef} className="text-muted mt-4">
          Find the perfect wedding professionals with AI's smart suggestions!
        </p>

        {/* IMAGE ROW */}
        <div ref={revealRef} className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          <img src={img1} className="w-full h-60 object-cover" />
          <img src={img2} className="w-full h-48 object-cover" />
          <img src={img3} className="w-full h-72 object-cover" />
          <img src={img4} className="w-full h-48 object-cover" />
          <img src={img5} className="w-full h-60 object-cover" />
        </div>

      </div>
    </section>
  );
}