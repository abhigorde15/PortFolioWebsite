import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Footer from "../components/Footer"
import Work from "../components/Work"
import Education from '../components/Education'
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
const Home = ()=>{
  return (
      <div >
        <Navbar/>
        <Hero/>
        <Skills />
        <Education />
        <Work />
        <Certifications />
        <Footer/>
      </div>
  )
}
export default Home;