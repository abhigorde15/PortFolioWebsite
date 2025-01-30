import Navbar from "../components/Navbar";
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";
import Form from "../components/Form"
const Contact = ()=>{
  return (
      <div>
        <Navbar />
        <Hero2 heading="CONTACT ME" text="Let's Have a chat" />
        <Form />
        <Footer/>
      </div>
  )
}
export default Contact;