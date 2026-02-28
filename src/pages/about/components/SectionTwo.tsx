
import img1 from "../../../assets/hero/figma-image7.png";
import img2 from "../../../assets/hero/figma-image16.png";
import ContentWrapper from "../../../components/global/ContentWrapper";

const SectionTwo: React.FC = () => {
  return (
    <section className="section-main">
      <ContentWrapper>
              <div className="container-main grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>
          <div className="card hover-lift">
            <img
              src={img1}
              alt="Event setup"
              className="w-full object-cover"
            />
          </div>

          <div className="flex justify-between mt-8 text-center">
            <div>
              <h3>50+</h3>
              <p className="text-primary">CLIENTS</p>
            </div>

            <div>
              <h3>20+</h3>
              <p className="text-primary">EVENTS</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col">
          
          <div className="card hover-lift order-1 md:order-2">
            <img
              src={img2}
              alt="Wedding stage"
              className="w-full object-cover"
            />
          </div>

          <div className="order-2 md:order-1 flex justify-between mt-8 md:mb-8 md:mt-0 text-center">
            <div>
              <h3>10+</h3>
              <p className="text-primary">AWARDS</p>
            </div>

            <div>
              <h3>10+</h3>
              <p className="text-primary">AWARDS</p>
            </div>
          </div>

        </div>

      </div>
      </ContentWrapper>

    </section>
  );
};

export default SectionTwo;