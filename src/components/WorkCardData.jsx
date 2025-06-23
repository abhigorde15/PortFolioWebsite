
import contact from "../assets/contact_manager.png"
import dansetu from "../assets/dansetu.png"
import todo from "../assets/todo.png"
import student from "../assets/student.png"
import employee from "../assets/emploee.png"

const ProjectCardData = [
  {
    igmSrc: contact,
    title: "Smart Contact Manager",
    text: "Developed a full-stack contact management system using Spring Boot and MySQL. Implemented features like user authentication(OAuth & Jwt), profile management, image upload, CRUD for contacts, and custom login/register pages.",
    view: "https://github.com/abhigorde15/SmartContactManager",
    skills: [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 75 },
  { name: "Java", level: 90 },
  { name: "React", level: 85 },
]
  },
  {
    igmSrc: dansetu,
    title: "Dansetu – Donation Management Platform",
    text: "Built a full-stack donation platform using React.js, Spring Boot, and MySQL which Connects Donor with Social Organization without direct money transfer via shopkeeper. Features include donor registration, institute/shopkeeper dashboards, Razorpay integration for payments, role-based authentication, filtered donations, and receipt generation.",
    view: "https://github.com/abhigorde15/DansetuProject",
    skills: [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 75 },
  { name: "Java", level: 90 },
  { name: "React", level: 85 },
]
  },
  {
    igmSrc: student,
    title: "Student Management System",
    text: "Created a web-based student management system using Spring Boot and Thymeleaf. Included features like  list view, update/delete operations, search functionality, and integrated database persistence with form validation.",
    view: "https://github.com/abhigorde15/Student-Management-System",
    skills: [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 75 },
  { name: "Java", level: 90 },
  { name: "React", level: 85 },
]
  },
  {
    igmSrc: employee,
    title: "Employee Management System",
    text: "Built a full-stack employee management system with Spring Boot and React.js. Features include employee CRUD operations, REST API integration, responsive design, and client-server communication using Axios.",
    view: "https://github.com/abhigorde15/EmployeeManagementSystem",
    skills: [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 75 },
  { name: "Java", level: 90 },
  { name: "React", level: 85 },
]
  },
  {
    igmSrc: todo,
    title: "Todo Management Website",
    text: "Developed a frontend-based Todo website using React.js. Implemented features like add, delete, update, and complete tasks, along with a responsive UI and local storage support.",
    view: "https://github.com/abhigorde15/TodoProjectVersion2",
    skills: [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 75 },
  { name: "Java", level: 90 },
  { name: "React", level: 85 },
]
  }
];

export default ProjectCardData;
