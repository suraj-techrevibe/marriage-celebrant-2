import ContactSection from './components/ContactSection'
import Hero from '../../components/global/herosection/Hero1'
import img from "../../assets/hero/classic-white-gold-wedding-rings-red-bouquet.jpg";
import ContactForm from './components/ContactForm';


function Contact() {
  const heading = "Contact Us"
  const para = "Have a question or just want to get in touch? Message us below!"
  return (
    <>
    <Hero heading={heading} para={para} bgImage={img}/>
    
    <ContactSection/>
    
    </>
  )
}

export default Contact
