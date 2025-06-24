
import contact from "../assets/contact_manager.png"
import dansetu from "../assets/dansetu.png"
import todo from "../assets/todo.png"
import student from "../assets/student.png"
import employee from "../assets/emploee.png"
import aiml from "/aiml.png"
const ProjectCardData = [
  {
    igmSrc: contact,
    title: "Smart Contact Manager",
    text: "Developed a full-stack contact management system using Spring Boot and MySQL. Implemented features like user authentication(OAuth & Jwt), profile management, image upload, CRUD for contacts, and custom login/register pages.",
    view: "https://github.com/abhigorde15/SmartContactManager",
    skills: [
  { name: "HTML", level: 50 },
  { name: "CSS", level: 75 },
  { name: "Java", level: 45 },
  { name: "Javascipt", level: 3 },
   { name: "CSS", level: 2 }
]
  },
  {
    igmSrc: dansetu,
    title: "Dansetu – Donation Management Platform",
    text: "Built a full-stack donation platform using React.js, Spring Boot, and MySQL which Connects Donor with Social Organization without direct money transfer via shopkeeper. Features include donor registration, institute/shopkeeper dashboards, Razorpay integration for payments, role-based authentication, filtered donations, and receipt generation.",
    view: "https://github.com/abhigorde15/Dansetu",
    skills: [
  { name: "Javascript", level: 60 },
  { name: "Java", level: 35 },
  { name: "Other", level: 5 },
 
]
  },
   {
    igmSrc: aiml,
    title: "My AIML Learning Journey",
    text: "A comprehensive repository documenting my entire AI/ML learning journey. It includes well-structured notebooks starting from data preprocessing using NumPy, Pandas, and Matplotlib, progressing through machine learning algorithms using Scikit-learn, and extending to deep learning concepts like ANN and CNN. Each notebook reflects hands-on implementation and conceptual clarity.",
    view: "https://github.com/abhigorde15/machine-learning-notebooks",
    skills: [
  { name: "Python", level: 100 },
]
  },
  {
    igmSrc: student,
    title: "Student Management System",
    text: "Created a web-based student management system using Spring Boot and Thymeleaf. Included features like  list view, update/delete operations, search functionality, and integrated database persistence with form validation.",
    view: "https://github.com/abhigorde15/Student-Management-System",
    skills: [
  { name: "HTML-CSS", level: 50 },
  { name: "Java", level: 50 },

]
  },
  {
    igmSrc: employee,
    title: "Employee Management System",
    text: "Built a full-stack employee management system with Spring Boot and React.js. Features include employee CRUD operations, REST API integration, responsive design, and client-server communication using Axios.",
    view: "https://github.com/abhigorde15/EmployeeManagementSystem",
    skills: [
  { name: "JavaScript", level: 55 },
  { name: "Java", level: 40 },
  { name: "HTML", level: 4 },
  { name: "CSS", level: 2 },
]
  },
  {
    igmSrc: todo,
    title: "Todo Management Website",
    text: "Developed a frontend-based Todo website using React.js. Implemented features like add, delete, update, and complete tasks, along with a responsive UI and local storage support.",
    view: "https://github.com/abhigorde15/TodoProjectVersion2",
    skills: [
  { name: "Javascript", level: 92 },
  { name: "HTML", level: 5 },
  { name: "CSS", level: 2 },
]
  }
];

export default ProjectCardData;
