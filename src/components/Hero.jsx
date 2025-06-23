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
  <p>Hi, I am a passionate</p>
  <h1>Java Developer & AI Learner</h1>
     <div>
      <Link to="./projects" className="btn">
         Projects
      </Link>

      <a href="/Abhishek_resume_new.pdf.pdf" className="btn btn-light" download>
  Resume
</a>

     </div>
    </div>
    
   </div>
  )
}
export default Hero;