import "./WorkCardStyle.css"

import {Link} from "react-router-dom"
const WorkCard =(props)=>{
   return(
      <div className="project-card">
          <img src={props.imgSrc} alt="project-img" />
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
              <Link to ={props.view} className="btn" >VIEW</Link>
              <Link to ="url.com" className="btn" >Souree</Link>
            </div>
          </div>
      </div>
     
   )
}
export default WorkCard;