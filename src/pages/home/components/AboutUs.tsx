import frame from "../../../assets/hero/rose.png";
import ContentWrapper from "../../../components/global/ContentWrapper";
import { useScrollAnimation } from "../../../components/global/animation/useScrollAnimation";

const AboutUs = () => {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="section-main bg-black justify-center relative overflow-hidden">
      <ContentWrapper>
        {/* Decorative PNG Frame */}
        <img
          src={frame}
          alt="decorative frame"
          className="absolute -bottom-5 -left-5 w-32 sm:w-40 md:w-44 lg:w-52 opacity-80 pointer-events-none select-none"
        />

        <div
          ref={ref}
          className={`relative flex flex-col md:flex-row transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* LEFT SIDE - TITLE */}
          <div className="md:w-2/3 w-full mb-10 md:mb-0 flex items-center justify-center md:justify-center text-center md:text-left">
            <h2 className="heading-font heading-lg text-white">
              About <br />
              <span className="text-primary text-5xl sm:text-6xl md:text-7xl">
                Nirava
              </span>
            </h2>
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="w-full md:pl-8 text-center md:text-left">
            <p className="text-white leading-relaxed mb-6 text-sm sm:text-base">
              A Nepalese-Australian Marriage Celebrant based in Sydney. We love
              conducting weddings and go above and beyond to make every couple’s
              special day truly memorable.
              <br />
              <br />
              My Celebrant Services are customised for each couple. We’ll help
              you with all the legal marriage registration in Sydney, arrange
              your ceremony, and be there on the wedding day to calm your nerves
              and ensure you receive the ceremony and atmosphere you want.
              <br />
              <br />
              Make your special day unforgettable with Celebrant Nirvana, a
              professional Marriage Celebrant in Sydney. We specialise in
              creating personalised and meaningful wedding ceremonies tailored
              to your love story.
              <br />
              <br />
              As a trusted Sydney Civil Marriage Celebrant, we ensure a
              stress-free and joyful experience.
            </p>

            <p className="text-white leading-relaxed mb-8 text-sm sm:text-base">
              Every detail is carefully crafted to reflect your love story and
              make your celebration timeless.
            </p>

            <div className="flex justify-center md:justify-start">
              <button className="btn-primary">Contact Us</button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default AboutUs;