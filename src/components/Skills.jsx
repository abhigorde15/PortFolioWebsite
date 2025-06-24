
import "./Skills.css";
import reactLogo from "../assets/expertiseIcons/react.png";
import htmlLogo from "../assets/expertiseIcons/html.png";
import jsLogo from "../assets/expertiseIcons/js.png";
import spring from "../assets/expertiseIcons/spring.png";
import css from "../assets/expertiseIcons/css.png";
import pandas from "../assets/expertiseIcons/pandas.png";
import numpy from "../assets/expertiseIcons/numpy.png";
import pythonLogo from "../assets/expertiseIcons/python.png";
import javaLogo from "../assets/expertiseIcons/java.png";
import springboot from "../assets/expertiseIcons/springboot.png";
import cppLogo from "../assets/expertiseIcons/cpp.png";
import mysql from "../assets/expertiseIcons/mysql.png";
import tensorflow from "../assets/expertiseIcons/tensorflow.png"
const Skills = () => {
  return (
    <section className="expertise-section">
      <h2 className="expertise-title">
        <span>Skills</span>
      </h2>
      {/* Mobile-friendly cards */}
<div className="mobile-skills">
  <div className="skill-card">
    <h3>Programming Languages</h3>
    <div className="card-skills">
      <div>
       <img src={javaLogo} alt="Java" />
       <p>Java</p>
      </div>
      <div>
        <img src={cppLogo} alt="C++" />
        <p>C++</p>
      </div>
      <div>
       <img src={pythonLogo} alt="Python" />
       <p>Python</p>
      </div>
      <div>
         <img src={jsLogo} alt="JavaScript" />
         <p>Javascript</p>
      </div>
     
    </div>
  </div>

  <div className="skill-card">
    <h3>Frontend</h3>
    <div className="card-skills">
      <div>
        <img src={reactLogo} alt="React" />
        <p>Rect.js</p>
      </div>
      <div>
        <img src={css} alt="CSS" />
        <p>CSS</p>
      </div>
      <div>
      <img src={htmlLogo} alt="HTML" />
      <p>HTML</p>
      </div>
      
    </div>
  </div>

  <div className="skill-card">
    <h3>Backend</h3>
    <div className="card-skills">
      <div>
        <img src={spring} alt="Spring" />
        <p>Spring</p>
      </div>
      
      <div>
         <img src={springboot} alt="Spring Boot" />
         <p>Spring Boot</p>
      </div>
     
    </div>
  </div>

  <div className="skill-card">
    <h3>AI / ML</h3>
    <div className="card-skills">
      <div>
         <img src={numpy} alt="NumPy" />
         <p>Numpy</p>
      </div>
      <div>
       <img src={pandas} alt="Pandas" />
       <p>Pandas</p>
      </div>
      <div>
       <img src={tensorflow} alt="tensorflow" />
       <p>Tensorflow</p>   
      </div>
      
    </div>
  </div>
  <div className="skill-card">
    <h3>Databases</h3>
    <div className="card-skills">
      <div>
         <img src={mysql} alt="mysql" />
         <p>MySql</p>
      </div>   
    </div>
  </div>
</div>

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
        <div className="circle css">
          <img src={css} alt="css" />
          <span>CSS</span>
        </div>
        <div className="circle spring">
          <img src={spring} alt="spring" />
          <span>Spring Framwork</span>
        </div>
        <div className="circle html">
          <img src={htmlLogo} alt="Node.js" />
          <span>HTML</span>
        </div>

        {/* Python Children */}
        <div className="circle numpy">
          <img src={numpy} alt="numpy" />
          <span>Numpy</span>
        </div>
        <div className="circle pandas">
          <img src={pandas} alt="pandas" />
          <span>Pandas</span>
        </div>

        {/* Java Children */}
        <div className="circle boot">
          <img src={springboot} alt="boot" />
          <span>Spring Boot</span>
        </div>
      </div>

     
    </section>
  );
};

export default Skills;
