import Hero from '../../components/global/herosection/Hero'
import Form from './components/Form'

function ReferralForm() {
  const heading = "Referral Form"
  const para = "Nirava  is dedicated to giving people with disabilities, their families, and their caretakers in the Sydney areas individualised, custom-made help."
  return (
   <>
   <Hero heading={heading} para={para}/>
  
   <Form/>
   </>
  )
}

export default ReferralForm
