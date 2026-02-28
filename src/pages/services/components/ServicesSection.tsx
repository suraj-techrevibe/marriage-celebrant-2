import React from "react";
import img1 from "../../../assets/hero/figma-image16.png";
import img2 from "../../../assets/hero/figma-image15.png";
import img3 from "../../../assets/hero/figma-image17.png";
import img from "../../../assets/hero/figma-image21.png";

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Venue Sourcing",
      para: "As an authorised Civil Marriage Celebrant, I am here to make your special day not only memorable but also legally complete. Your wedding ceremony is a moment of love, commitment, and joy — and the Certificate of Marriage is the beautiful document that symbolises your union under Australian law.",
      image: img1,
    },
    {
      title: "Destination Weddings",
      para: "As your Marriage Celebrant, We’re delighted to travel to your chosen location and officiate your ceremony. Whether it’s a beach, vineyard, or private estate, We’ll ensure your destination wedding is legally compliant, beautifully crafted, and truly unforgettable.",
      image: img2,
    },
    {
      title: "Venue Styling",
      para: "Love only grows stronger with time — and there’s no better way to honour your journey together than by renewing your vows. Whether it’s your 5th, 10th, 25th, or 50th anniversary, a Vow Renewal Ceremony is a beautiful way to reaffirm your love and commitment in front of your family and friends.",
      image: img3,
    },
  ];

  return (
    <section className="w-full">

      {/* ================= SERVICES AREA ================= */}
      <div className="section-main bg-[var(--color-bg-soft)]">
        <div className="container-main text-center">

          {/* Heading */}
          <h2 className="heading-font heading-lg text-primary mb-4">
            Our Services
          </h2>

          <p className="text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            We don’t just plan events, we create experiences that live forever.
            <br />
            Your wedding or celebration is a chapter in your love story, and we
            ensure every detail reflects you.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[450px] object-cover rounded-[var(--radius-md)] shadow-md"
                />

                <h3 className="mt-6 text-lg font-medium text-secondary">
                  {service.title}
                </h3>

                <p className="text-muted mt-4 leading-relaxed">
                  {service.para}
                </p>

              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-12">
            <button className="btn-primary">
              Book Now
            </button>
          </div>

        </div>
      </div>

      {/* ================= CTA AREA ================= */}
      <div
        className="relative section-main text-center"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container-main relative z-10 flex flex-col items-center text-white">

          <h3 className="heading-font text-2xl md:text-4xl mb-4 leading-snug">
            Dreaming of a picture-perfect event?
          </h3>

          <p className="mb-8 text-white/80">
            We’ve got it covered.
          </p>

          <button className="btn-primary">
            CONTACT NOW
          </button>

        </div>
      </div>

    </section>
  );
};

export default ServicesSection;