
import "./Expertise.css";
import reactLogo from "../assets/expertiseIcons/react.png";
import nodeLogo from "../assets/expertiseIcons/java.png";
import jsLogo from "../assets/expertiseIcons/js.png";
import expressLogo from "../assets/expertiseIcons/css.png";
import nextLogo from "../assets/expertiseIcons/html.png";
import flaskLogo from "../assets/expertiseIcons/python.png";
import djangoLogo from "../assets/expertiseIcons/js.png";
import pythonLogo from "../assets/expertiseIcons/react.png";
import javaLogo from "../assets/expertiseIcons/react.png";
import androidLogo from "../assets/expertiseIcons/react.png";
import cppLogo from "../assets/expertiseIcons/react.png";
import githubLogo from "../assets/expertiseIcons/react.png";
import gitLogo from "../assets/expertiseIcons/react.png";

const Expertise = () => {
  return (
    <section className="expertise-section">
      <h2 className="expertise-title">
        <span>Skills</span>
      </h2>

      <div className="graph-container">
        <div className="center-node">Skills</div>
        <svg className="lines-svg" >

  {/* From center to JavaScript */}
  <line x1="50%" y1="50%" x2="30%" y2="30%" />

  {/* JavaScript Children */}
  <line x1="30%" y1="30%" x2="25%" y2="44%" />  {/* React */}
  <line x1="30%" y1="30%" x2="15%" y2="25%" />  {/* Node.js */}
  <line x1="30%" y1="30%"  x2="30%" y2="18%" />  {/* Express */}
  <line x1="30%" y1="30%" x2="45%" y2="30%" />  {/* Next.js */}

  {/* From center to Python */}
  <line x1="50%" y1="50%" x2="65%" y2="40%" />

  {/* Python Children */}
  <line x1="65%" y1="40%" x2="67%" y2="25%" />  {/* Flask */}
  <line x1="65%" y1="40%" x2="75%" y2="55%" />  {/* Django */}

  {/* From center to Java */}
  <line x1="50%" y1="50%" x2="32%" y2="75%" />
  <line x1="35%" y1="75%" x2="25%" y2="89%" />  {/* Android */}
<line x1="33%" y1="75%" x2="45%" y2="89%" />
  {/* From center to C++ */}
  <line x1="50%" y1="50%" x2="62%" y2="69%" />

</svg>

        <div  />
        <div className="circle js">
          <img src={jsLogo} alt="JavaScript" />
          <span>JavaScript</span>
        </div>

        <div />
        <div className="circle python">
          <img src={pythonLogo} alt="Python" />
          <span>Python</span>
        </div>

        <div />
        <div className="circle java">
          <img src={javaLogo} alt="Java" />
          <span>Java</span>
        </div>

        <div  />
        <div className="circle cpp">
          <img src={cppLogo} alt="C++" />
          <span>C++</span>
        </div>

        {/* JS Children */}
        <div className="circle react">
          <img src={reactLogo} alt="React" />
          <span>React</span>
        </div>
        <div className="circle next">
          <img src={nextLogo} alt="Next.js" />
          <span>Next.js</span>
        </div>
        <div className="circle express">
          <img src={expressLogo} alt="Express" />
          <span>Express</span>
        </div>
        <div className="circle node">
          <img src={nodeLogo} alt="Node.js" />
          <span>Node.js</span>
        </div>

        {/* Python Children */}
        <div className="circle flask">
          <img src={flaskLogo} alt="Flask" />
          <span>Flask</span>
        </div>
        <div className="circle django">
          <img src={djangoLogo} alt="Django" />
          <span>Django</span>
        </div>

        {/* Java Children */}
        <div className="circle android">
          <img src={androidLogo} alt="Android" />
          <span>Android</span>
        </div>
      </div>

      <div className="other-expertise">
        <h3>Other Expertise:</h3>
        <div className="badge"><img src={githubLogo} alt="GitHub" /> GitHub</div>
        <div className="badge"><img src={gitLogo} alt="Git" /> Git</div>
      </div>
    </section>
  );
};

export default Expertise;
