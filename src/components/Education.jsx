// Education.jsx
import './EducationStyle.css';

function Education() {
  const eduArr = [
    {
      institute: "K.K. Wagh Institute of Engineering Education and Research",
      grade: "9.13 CGPA (Till Now)",
      year: "2022 – 2026 (Pursuing)"
    },
    {
      institute: "K.M.P. College of Science",
      grade: "12th - 83%",
      year: "2020 – 2022"
    },
    {
      institute: "Shri Saraswati Bhuvan High School, Balanagar",
      grade: "10th - 89%",
      year: "2010 – 2020"
    }
  ];

  return (
    <div className='education-section'>
      <h1 className='edu-heading'>Education</h1>
      <div className="edu-container">
        {eduArr.map((item, index) => (
          <div className="edu-card" key={index}>
            <h2 className="institute">{item.institute}</h2>
            <p className="grade">{item.grade}</p>
            <p className="year">{item.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
