
import img from "../../../assets/hero/newlyweds.jpg";
import ContentWrapper from "../../../components/global/ContentWrapper";

const SectionOne: React.FC = () => {
  return (
    <section
      className="section-main flex items-center justify-center text-center relative"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
<ContentWrapper>
      {/* Content */}
      <div className="relative z-10 container-main text-white">
        <h2>About Us</h2>

        <p>
          Nirava Wedding and Event Management, your partners in Crafting
          Unforgettable Moments. Welcome to Nirava Wedding and Event
          Management, where dreams come alive and memories are meticulously
          crafted.
          <br /><br />
          With over a decade of expertise, we have successfully orchestrated
          100+ events. Trust us to transform your vision into an extraordinary
          reality.
        </p>
      </div>
      </ContentWrapper>
    </section>
  );
};

export default SectionOne;