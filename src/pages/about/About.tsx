import WhoWeAre from "./components/WhoWeAre";
import img1 from "../../assets/hero/beautiful-bride-groom.jpg";
import img2 from "../../assets/hero/beautiful-couple.jpg";
import img3 from "../../assets/hero/bride-groom.jpg";
import Hero from "../../components/global/herosection/Hero";
import ContentWrapper from "../../components/global/ContentWrapper";

function About() {
  const heading = "About Us";
  const para =
    "Nirava  provides those who are marginalised and disadvantaged with practical assistance and support services.";
  return (

    <>
    

      {/* <Breadcrumb/> */}
      <Hero heading={heading} para={para} />
      <ContentWrapper>
      <WhoWeAre />
      {/* button section  */}
      <section className="w-full bg-linear-to-r from-[#d6e4f0] via-[#e2eaf4] to-[#d6e4f0] py-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto relative flex flex-col md:flex-row gap-6 py-16 mb-16">
          {/* Left tall image */}
          <div className="relative md:w-1/3 overflow-hidden hover:scale-105 transition-transform duration-500">
            <img
              src={img1}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-20 transition-opacity duration-300 "></div>
          </div>

          {/* Middle stacked images */}
          <div className="relative md:w-1/3 flex flex-col gap-6 ">
            <div className="relative overflow-hidden hover:scale-105 transition-transform duration-500">
              <img
                src={img2}
                alt="Image 2"
                className="w-full h-full md:h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-20 transition-opacity duration-300 "></div>
            </div>
            <div className="relative overflow-hidden   hover:scale-105 transition-transform duration-500">
              <img
                src={img3}
                alt="Image 3"
                className="w-full h-full md:h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Right image slightly offset */}
          <div className="relative md:w-1/3 overflow-hidden  hover:scale-105 transition-transform duration-500 md:-mt-16">
            <img
              src={img1}
              alt="Image 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-20 transition-opacity duration-300 "></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
          <h2 className="text-xl md:text-2xl font-bold text-gray-600 text-center md:text-left tracking-tight">
            Start Your Journey With Nirava
          </h2>
          <button className="bg-red-500 hover:bg-red-600] text-white font-bold py-3 px-10  shadow-lg transition-all duration-300 uppercase text-xs tracking-[0.15em] whitespace-nowrap border-2 border-transparent hover:border-red-300">
            Get Involved
          </button>
        </div>
       
      </section>
      </ContentWrapper>
      </>
   
  );
}

export default About;
