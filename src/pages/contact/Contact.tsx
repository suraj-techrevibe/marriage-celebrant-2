import Form from './components/Form'
import Hero from '../../components/global/herosection/Hero'
import ContactInfo from './components/ContactInfo'

function Contact() {
  const heading = "Contact Us"
  const para = "Have a question or just want to get in touch? Message us below!"
  return (
    <>
    <Hero heading={heading} para={para}/>
    <ContactInfo/>
    <Form/>
    </>
  )
}

export default Contact
