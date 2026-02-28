import React from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import Hero1 from "../../components/global/herosection/Hero1";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import ContentWrapper from "../../components/global/ContentWrapper";
import img from '../../assets/hero/figma-image8.png'



const About: React.FC = () => {

  
  return (

    <>    <Hero1 heading={"About Us"} para={"Start Planning Your Wedding"} bgImage={img}/>
    <div className="w-full">
      
      <SectionOne />
      <SectionTwo />
      <SectionThree/>
      <SectionFour/>
    </div>
    </>

  );
};

export default About;