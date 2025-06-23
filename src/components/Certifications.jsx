import './Certifications.css';

const certifications = [
  {
    title: 'Java Development Mastery',
    date: 'Octomber 2024',
    description: 'Completed Java  course on Infoys Springboard.',
    imageUrl: '/infoys_java.png'
  },
  {
    title: 'AI & Machine Learning',
    date: 'June 2024',
    description: 'Completed Complete AI/ML Course on Udemy by Kirill Eremenko',
    imageUrl: '/udemy_aiml.jpg'
  },
  {
    title: 'Leetcode 100 Days Badge',
    date: 'April 2024',
    description: 'Completed 100 days on leetcode in 2025',
    imageUrl: '/leetcode_badge_100.png'
  },
   {
    title: 'Database Management System Part I',
    date: 'May 2025',
    description: 'Completed Infoys Spring Board DBMS Course Part I',
    imageUrl: '/infoys_dbms_1.png'
  },
   {
    title: 'Database Management System Part II',
    date: 'May 2025',
    description: 'Completed Infoys Spring Board DBMS Course Part II',
    imageUrl: '/infoys_dbms_2.png'
  },
   {
    title: 'SQl Basics Certification on HackerRank',
    date: 'March 2025',
    description: 'Earned SQL Basic certification on HackerRank',
    imageUrl: '/sql_basic.png'
  },
   {
    title: 'IIT Bombay Spoken Tutorial JAVA Certificate',
    date: 'January 2025',
    description: 'Earned Java IIT Bombay Spoken Tutorial Certificate ',
    imageUrl: '/java_iit_bombay.jpg'
  },
   {
    title: 'IIT Bombay Spoken Tutorial CPP Certificate',
    date: 'May 2024',
    description: 'Earned Cpp IIT Bombay Spoken Tutorial Certificate ',
    imageUrl: '/cpp_iit_bombay.jpg'
  },
];

const Certifications = () => {
  return (
    <section className="certifications-section">
      <h2 className="certifications-title"><span>Certificates</span></h2>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card" onClick={() => window.open(cert.imageUrl, '_blank')}>
            <img src={cert.imageUrl} alt={cert.title} />
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p className="cert-date">{cert.date}</p>
              <p>{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
