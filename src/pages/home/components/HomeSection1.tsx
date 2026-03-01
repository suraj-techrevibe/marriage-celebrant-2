import { useState } from "react";
import img from "../../../assets/hero/figma-image5.png";
import BookAppointmentModal from "../../../components/global/book-appointment/BookAppointmentModal";

export default function HomeSection1() {
  const [open, setOpen] = useState(false);
  return (
    <section className="section-main bg-bgSoft mt-24">
      <div className="container-main grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* ================= LEFT SIDE ================= */}
        <div className="flex flex-col justify-center text-center md:text-left">

          <p className="text-sm tracking-[0.4em] uppercase text-primary mb-6">
            Luxury Wedding Experience
          </p>

          <h1 className="heading-font text-4xl sm:text-5xl md:text-6xl leading-tight">
            Where Love Meets <br />
            <span className="text-primary">
              Timeless Elegance
            </span>
          </h1>

          <div className="w-20 h-px bg-primary my-8 mx-auto md:mx-0" />

          <p className="text-muted max-w-lg mx-auto md:mx-0 leading-relaxed">
            Crafting unforgettable weddings with elegance and precision.
            Every detail is thoughtfully designed to reflect your unique love story.
          </p>

          <div className="mt-10 flex justify-center md:justify-start">
            <button  onClick={() => setOpen(true)}  className="btn-primary px-8 py-3 tracking-wider">
              Start Your Journey
            </button>
            <BookAppointmentModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
          </div>

        </div>

        {/* ================= RIGHT SIDE IMAGE ================= */}
        <div className="relative">

          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <img
              src={img}
              alt="Wedding"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Floating Luxury Stats */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 bg-white shadow-xl rounded-xl px-8 py-6 flex gap-10">

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-textMain">50+</h3>
              <p className="text-xs tracking-widest text-muted">CLIENTS</p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-textMain">120+</h3>
              <p className="text-xs tracking-widest text-muted">EVENTS</p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-textMain">10+</h3>
              <p className="text-xs tracking-widest text-muted">AWARDS</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}