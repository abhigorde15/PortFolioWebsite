import './HeroStyles.css'
import firstImg from '../assets/intro_img.jpg'
import { Link } from 'react-router-dom';
function Hero(){
  return(
   <div className='hero'>
    <div className='hero-img'>
      <img className='start-img' src={firstImg} alt='IntroImg' />
    </div>
    <div className='content'>
      <p>Hi,I am a Aspiring Software Enginner.</p>
      <h1>Java Developer</h1>
     <div>
      <Link to="./projects" className="btn">
         Projects
      </Link>

      <Link to="./contact" className="btn btn-light">
         Contact
      </Link>
     </div>
    </div>
    
   </div>
  )
}
export default Hero;