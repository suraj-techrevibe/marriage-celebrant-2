import img from "../../../assets/hero/bride-groom-having.jpg";
import { useScrollAnimation } from "../../../components/global/animation/useScrollAnimation";

const WhoWeCareAre = () => {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 not-first-of-type: ">
      <div className="max-w-5xl   mx-auto flex flex-col-reverse  items-start md:flex-row  gap-16 justify-center">
        {/* Left Side: Content */}
        <div ref={ref} className="flex-1 space-y-4 text-left">
          {/* Pretitle */}
          <p
            className={`text-lg tracking-widest uppercase text-red-400 font-roboto font-light slide-fade ${
              visible ? "visible" : ""
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            Suraj Shrestha - Celebrant
          </p>

          {/* Title */}
          <h2 className="text-xl md:text-3xl pb-2 font-sans font-semibold text-gray-800 leading-tight">
            <span
              className={`inline-block slide-fade ${visible ? "visible" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              Sydney’s Marriage Celebrant
            </span>

            {/* underline grows after text */}
            <span
              className="block mt-3 h-[2px] bg-red-400"
              style={{
                width: visible ? "8rem" : "0",
                transition: "width 0.5s ease-out",
                transitionDelay: "0.6s",
              }}
            ></span>
          </h2>

          {/* Paragraph */}
          <div className={`text-gray-600 leading-relaxed max-w-xl`}>
            {[
              "I’m Suraj Shrestha, a Sydney-based marriage celebrant passionate about creating meaningful, modern, and heartfelt ceremonies.",
              "Whether you’re planning an intimate elopement or a joyful celebration, my goal is to make your ceremony memorable, authentic, and beautifully simple.",
            ].map((line, i) => (
              <p
                key={i}
                className={`text-sm md:text-base font-light slide-fade ${
                  visible ? "visible" : ""
                }`}
                style={{ transitionDelay: `${0.3 + i * 0.2}s` }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Footer */}
          <div
            className={`pt-4 border-t border-gray-100 flex items-center gap-3 text-sm text-gray-700 slide-fade ${
              visible ? "visible" : ""
            }`}
            style={{ transitionDelay: "0.7s" }}
          >
            <a
              href="/services"
              className="text-red-500 font-medium hover:underline"
            >
              Learn More
            </a>
            <span className="text-gray-300">|</span>
            <span>Contact</span>
            <a href="tel:1800371070" className="font-medium hover:underline">
              1800 371 070
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end pb-10">
          {/* Rotated outer rectangle */}
          <div className="relative ">
            <div className="absolute inset-0 border border-red-600 py-18  translate-x-8 translate-y-8" />

            {/* Counter-rotate content so image stays straight */}
            <div className="relative w-full ">
              <img
                src={img}
                alt="Student drawing"
                className="w-full h-[350px] object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeCareAre;
