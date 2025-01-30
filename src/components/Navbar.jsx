import { Link } from "react-router-dom";
import {FaBars,FaTimes} from 'react-icons/fa'
import './NavbarStyle.css'
import { useState } from "react";
const Navbar = ()=>{
  const [clicked,setClicked] = useState(false);
  const handleClickedBtn=()=>{
    setClicked(!clicked);
  }
  const [color,setColor] = useState(false);
  const changeColor = ()=>{
    if(window.scrollY >=100){
      setColor(true);
    }
    else{
      setColor(false)
    }
  }
  window.addEventListener("scroll",changeColor);
  return (
      <div className={color ? "header header-bg" : "header"} >
        <Link to='/' >
          <h1  >PortFolio</h1>
        </Link>
        <ul className={clicked ? "header-links active" : "header-links"} > 
          <li >
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to ="/about">About</Link>
          </li>
          <li>
            <Link to ="/projects">Projects</Link>
          </li>
          <li>
            <Link to ="/contact">Contact</Link>
          </li>
        </ul>
       
        <div className="threeLine" onClick={handleClickedBtn}>
          {clicked ? (<FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars size={20} style={{color:"#fff"}}/>)} 
          
          
        </div>
      </div>

  )
}
export default Navbar;