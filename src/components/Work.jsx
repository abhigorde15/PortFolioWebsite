import "./WorkCardStyle.css"

import WorkCard from "./WorkCard"
import ProjectCardData from "./WorkCardData"

const Work =()=>{
   return(
    <div className="work-container" style={{backgroundColor:"black"}}>
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((val,ind)=>{
          return(
            <WorkCard    key={ind} imgSrc ={val.igmsrc} title={val.title} text={val.text} view={val.view} />
          )
        })}
      </div>
    </div>
   )
}
export default Work;