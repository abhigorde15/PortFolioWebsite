import Navbar from "../components/Navbar";
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";
const About = ()=>{
  return (
      <div >
        <Navbar />
        <Hero2 heading="ABOUT" text="Iam a Friendly Full stack Developer" />
        <AboutContent />
        <Footer/>
      </div>
  )
}
export default About;