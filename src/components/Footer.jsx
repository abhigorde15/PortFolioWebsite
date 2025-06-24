import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaGithub } from "react-icons/fa"
import "./FooterStyle.css"
const Footer = ()=>{
  return (
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome size={20} style={{color :"#fff", marginRight: "2rem"}}/>
              <div>
              <p>Behind Mumbai-Agra Road, Durganagar.</p>
              <p>Nashik,Maharashtra</p>
            </div>
            </div>
            <div className="phone">
              <h4>
              <FaPhone size={20} style={{color :"#fff", marginRight: "2rem"}}/>
              +91 8766631507
              </h4>
            </div>
            <div className="email">
              <h4>
              <FaMailBulk size={20} style={{color :"#fff", marginRight: "2rem"}}/>
              abhishekgorde777@gmail.com
              </h4>
            </div>
          </div>
          <div className="right">
            <h4>About me </h4>
            <p>This is just a wbsite for my information .I enjoy creating and designing  websites </p>
           <div className="social">
  <a href="#" target="_blank" rel="noopener noreferrer">
    <FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem" }} />
  </a>
  <a href="https://x.com/AbhishekGorde5" target="_blank" rel="noopener noreferrer">
    <FaTwitter size={20} style={{ color: "#fff", marginRight: "2rem" }} />
  </a>
  <a href="https://www.linkedin.com/in/abhishek-gorde-5b849b2a0" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
    
  </a>
  <a target="_blank" href="https://github.com/abhigorde15">
<FaGithub size={20}/>
  </a>
  
</div>

          </div>
        </div>
      </div>
  )
}
export default Footer