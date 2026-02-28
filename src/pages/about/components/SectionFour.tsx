
import { Link } from "react-router-dom";
import img from "../../../assets/hero/beautiful-bride-groom.jpg";
import ContentWrapper from "../../../components/global/ContentWrapper";

const SectionFour: React.FC = () => {
  return (
    <section
      className="section-main"
      style={{ background: "var(--color-bg-soft)" }}
    >
      <ContentWrapper>
        <div className="container-main grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="mb-6">
              Our Vision
            </h2>

            <p className="text-muted mb-10">
              My vision statement as a wedding celebrant is to offer a unique
              ceremony that reflects your love story. Through a personal and
              measured procedure I will support and assist you in realising your
              dream of uniting as a couple. I will stand by your side to ensure
              that your wedding day is the most authentic expression of who you
              are and why you wish to embark on this journey of life, together.
            </p>

            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>

          {/* Right Rounded Image */}
          <div className="flex justify-center md:justify-end">
            <div
              className="card w-[380px] h-[480px] overflow-hidden"
              style={{ borderRadius: "175px" }}
            >
              <img
                src={img}
                alt="Bride and groom sunset"
                className="w-full h-full object-cover"
              />

            
            </div>
          </div>

        </div>
      </ContentWrapper>
    </section>
  );
};

export default SectionFour;