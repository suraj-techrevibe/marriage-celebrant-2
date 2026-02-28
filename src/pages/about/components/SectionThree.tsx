
import img1 from "../../../assets/hero/figma-image22.png";
import img2 from "../../../assets/hero/figma-image23.png";
import ContentWrapper from "../../../components/global/ContentWrapper";

const SectionThree: React.FC = () => {
  return (
    <section
      className="section-main"
      style={{ background: "var(--color-bg-soft)" }}
    >
      <ContentWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Images */}
          <div className="relative flex justify-center md:justify-start ml-8">

            {/* Main Image */}
            <div className="card w-4/5 sm:w-3/4 md:w-[280px] aspect-[4/5] overflow-hidden">
              <img
                src={img1}
                alt="Wedding hands"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Image */}
            <div
              className="
                card
                absolute
                w-3/5 sm:w-1/2 md:w-[260px]
                aspect-square
                bottom-[-60px] sm:bottom-[-80px] md:-bottom-24
                right-0 sm:right-4 md:left-40
                overflow-hidden
              "
            >
              <img
                src={img2}
                alt="Wedding table"
                className="w-full h-full object-cover object-bottom"
              />
            </div>

          </div>

          {/* Right Content */}
          <div>
            <h2 className="mt-16 md:mt-0 mb-6">
              Our Mission
            </h2>

            <p className="text-muted mb-6">
              Marriage is a significant life event where two people commit to a
              lifelong relationship.
            </p>

            <ul className="space-y-3 list-disc list-inside text-muted">
              <li>Provide an alternative to the registry office</li>
              <li>Getting to know you and your love story</li>
              <li>Creating an atmosphere for people to observe your marriage</li>
              <li>Including the element of humour and fun</li>
              <li>Lodgement of all the required documents</li>
            </ul>
          </div>

        </div>
      </ContentWrapper>
    </section>
  );
};

export default SectionThree;