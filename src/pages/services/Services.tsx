import Hero from "../../components/global/herosection/Hero1"
import ServicesSection from "./components/ServicesSection"
import img from "../../assets/hero/figma-image8.png";



function Services() {
  const heading = "Our Services"
  const para = "Nirava  is dedicated to giving people with disabilities, their families, and their caretakers in the Sydney areas individualised, custom-made help."

  

  return (
    <>
    <Hero heading={heading} para={para} bgImage={img}/>
    <ServicesSection/>
    </>
  )
}

export default Services
