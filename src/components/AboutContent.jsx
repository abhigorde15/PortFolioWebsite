import { Link } from "react-router-dom";
import "./AboutContentStyle.css"
import react from "../assets/react.jpg"
import java from "../assets/java.jpg"

const AboutContent = ()=>{
  return(
  <div style={{backgroundColor : "black"}}>
    <div className="about" >
       <div className="left">
        <h1>Who Am I ?</h1>
        <p>I am a Information Technology Student in Second Year and Aspiring Full Stack Developer </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
       </div>
       <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={java} className="img" alt="true" />
          </div>
        </div>

       </div>
    </div>
  </div>
  )
}
export default AboutContent;