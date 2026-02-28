import Hero from "../../components/global/herosection/Hero1";
import FaqAccordion from "./components/FaqAccordion";
import FaqCTA from "./components/FaqCTA";
import FaqIntro from "./components/FaqIntro";
import img from "../../assets/hero/newlyweds.jpg";
import ContentWrapper from "../../components/global/ContentWrapper";



const faqs = [
  {
    question: "How long until we deliver your first blog post?",
    answer:
      "We typically deliver your first blog post within 5–7 business days after receiving all required details and assets.",
  },
  {
    question: "Do you offer custom wedding photography packages?",
    answer:
      "Yes! We offer fully customizable packages tailored to your event size, location, and preferences.",
  },
  {
    question: "How many edited photos will we receive?",
    answer:
      "You will receive approximately 300–600 professionally edited images depending on the package selected.",
  },
  {
    question: "Do you travel for destination weddings?",
    answer:
      "Absolutely! We love capturing destination weddings. Travel costs may vary depending on the location.",
  },
];

export default function Faq() {
  return (
    <>
      <Hero
        heading="Frequently Asked Questions"
        para="Everything you need to know about our services and process."
        bgImage={img}
      />
 
      <FaqIntro />
      <FaqAccordion faqs={faqs} />
    
      <FaqCTA />
    </>
  );
}