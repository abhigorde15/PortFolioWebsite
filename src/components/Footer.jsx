import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
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
            <FaFacebook size={20} style={{color :"#fff", marginRight: "2rem"}}/>
            <FaTwitter size={20} style={{color :"#fff", marginRight: "2rem"}}/>
            <FaLinkedin size={20} style={{color :"#fff", marginRight: "2rem"}}/>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Footer