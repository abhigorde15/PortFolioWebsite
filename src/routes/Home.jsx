import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Footer from "../components/Footer"
import Work from "../components/Work"
import Education from '../components/Education'
import Expertise from "../components/Expertise";
const Home = ()=>{
  return (
      <div>
        <Navbar/>
        <Hero/>
        <Expertise />
        <Education />
        <Work />
        <Footer/>
      </div>
  )
}
export default Home;