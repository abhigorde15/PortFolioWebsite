import "./WorkCardStyle.css";
import { Link } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card fancy-fade">
      <div className="img-container">
        <img src={props.imgSrc} alt="project-screenshot" />
      </div>

      <div className="card-content">
        <h2 className="project-title">{props.title}</h2>
        <p className="project-text">{props.text}</p>

        <div className="skill-pill-container">
          {props.skills &&
            props.skills.map((skill, index) => (
              <span className="skill-pill" key={index}>
                {skill.name} — {skill.level}%
              </span>
            ))}
        </div>

        <div className="pro-btns">
          <Link to={props.view} className="btn">
            VIEW
          </Link>
          <Link to="https://github.com" className="btn">
            SOURCE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
