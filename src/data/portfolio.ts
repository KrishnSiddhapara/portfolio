import type { Project, TimelineItem, Skill } from "../types"

export const projects: Project[] = [
  {
    id: "cryptoplace",
    title: "CryptoPlace",
    description: "A responsive cryptocurrency price tracker with real-time data and interactive charts.",
    longDescription:
      "Built a comprehensive crypto tracker using React.js with real-time data from CoinGecko API. Features include search functionality for any cryptocurrency with dynamic routing to detailed charts, integrated React Google Charts for historical price trends, and displays top 10 ranked cryptocurrencies with live updates.",
    technologies: ["React.js", "HTML", "CSS", "CoinGecko API", "React Google Charts"],
    image: "/cryptocurrency-dashboard-with-charts-and-price-dat.jpg",
    githubUrl: "https://github.com/krishnsiddhapara/cryptoplace",
    liveUrl: "https://cryptoplace-demo.netlify.app",
    features: [
      "Real-time cryptocurrency price tracking",
      "Search functionality for any cryptocurrency",
      "Interactive price charts with historical data",
      "Top 10 ranked cryptocurrencies display",
      "Multi-currency support (USD, INR, etc.)",
      "Responsive design for all devices",
    ],
    chartData: [
      ["Date", "Bitcoin", "Ethereum", "Cardano"],
      ["Jan", 45000, 3200, 1.2],
      ["Feb", 48000, 3500, 1.4],
      ["Mar", 52000, 3800, 1.6],
      ["Apr", 49000, 3600, 1.3],
      ["May", 51000, 3700, 1.5],
      ["Jun", 53000, 3900, 1.7],
    ],
  },
  {
    id: "todo-app",
    title: "Responsive To-Do List App",
    description: "A fully responsive and user-friendly task management application built with React.js.",
    longDescription:
      "Developed a comprehensive task management application using React.js with features like add, edit, delete tasks with dynamic UI updates. Implemented efficient state management using React hooks for real-time task management and focused on clean UI with enhanced UX.",
    technologies: ["React.js", "HTML", "CSS", "JavaScript"],
    image: "/modern-todo-list-app-interface-with-tasks-and-chec.jpg",
    githubUrl: "https://github.com/krishnsiddhapara/todo-app",
    liveUrl: "https://todo-app-krishn.netlify.app",
    features: [
      "Add, edit, and delete tasks",
      "Mark tasks as complete/incomplete",
      "Filter tasks by status",
      "Local storage persistence",
      "Responsive design",
      "Clean and intuitive UI",
    ],
  },
  {
    id: "employee-management",
    title: "MERN Employee Management System",
    description: "A full-stack employee management system built with the MERN stack.",
    longDescription:
      "Developed a comprehensive Employee Management System using MongoDB, Express.js, React.js, and Node.js. Features include RESTful API design for CRUD operations, MongoDB database schemas using Mongoose, responsive React.js front-end interfaces, and robust backend server with proper routing and middleware.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Mongoose"],
    image: "/employee-management-dashboard-with-user-profiles-a.jpg",
    githubUrl: "https://github.com/krishnsiddhapara/employee-management",
    features: [
      "Complete CRUD operations for employee data",
      "User authentication and authorization",
      "Employee profile management",
      "Department and role management",
      "Responsive dashboard interface",
      "RESTful API architecture",
    ],
    chartData: [
      ["Department", "Employees"],
      ["Engineering", 45],
      ["Marketing", 25],
      ["Sales", 30],
      ["HR", 15],
      ["Finance", 20],
    ],
  },
]

export const timelineData: TimelineItem[] = [
  {
    id: "current-education",
    title: "Computer Engineering",
    organization: "SAL Engineering and Technical Institute",
    location: "Ahmedabad, Gujarat, India",
    period: "Present",
    description:
      "Currently pursuing Computer Engineering with focus on software development, data structures, algorithms, and modern web technologies.",
    type: "education",
  },
  {
    id: "creart-internship",
    title: "MERN Stack Internship",
    organization: "CreArt Solutions Pvt. Ltd.",
    location: "Remote",
    period: "July 2025",
    description:
      "Developed a full-stack Employee Management System using the MERN stack. Gained hands-on experience in RESTful API design, MongoDB database schemas, and responsive React.js interfaces.",
    type: "experience",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Mongoose"],
  },
  {
    id: "ibm-internship",
    title: "AI Internship",
    organization: "CSRBOX IBM Skillsbuild",
    location: "Remote",
    period: "July 2025",
    description:
      "Completed industry-recognized virtual internship in Artificial Intelligence. Gained hands-on exposure to AI concepts including machine learning, neural networks, and natural language processing.",
    type: "experience",
    technologies: ["Python", "Machine Learning", "Neural Networks", "NLP"],
  },
  {
    id: "hsc-education",
    title: "Higher Secondary Certificate (H.S.C)",
    organization: "Krishna Science School",
    location: "Keshod, Gujarat, India",
    period: "May 2021",
    description:
      "Completed Higher Secondary education with focus on Science stream, building foundation in mathematics, physics, and chemistry.",
    type: "education",
  },
]

export const skills: Skill[] = [
  // Languages
  { name: "JavaScript", level: 90, category: "languages" },
  { name: "Python", level: 85, category: "languages" },
  { name: "Java", level: 80, category: "languages" },
  { name: "HTML", level: 95, category: "languages" },
  { name: "CSS", level: 90, category: "languages" },
  { name: "C", level: 75, category: "languages" },

  // Frameworks
  { name: "React.js", level: 90, category: "frameworks" },
  { name: "Node.js", level: 85, category: "frameworks" },
  { name: "Express.js", level: 85, category: "frameworks" },
  { name: "FastAPI", level: 70, category: "frameworks" },

  // Tools
  { name: "Git", level: 85, category: "tools" },
  { name: "GitHub", level: 85, category: "tools" },
  { name: "React Hook Form", level: 80, category: "tools" },
  { name: "React Redux", level: 75, category: "tools" },
  { name: "Mongoose", level: 80, category: "tools" },

  // Databases
  { name: "MongoDB", level: 85, category: "databases" },
  { name: "SQL", level: 80, category: "databases" },
]

export const personalInfo = {
  name: "Krishn Siddhapara",
  email: "siddhaparakishan@gmail.com",
  phone: "+918000228415",
  location: "Ahmedabad, Gujarat, India",
  github: "https://github.com/krishnsiddhapara",
  linkedin: "https://linkedin.com/in/krishn-siddhapara",
  resume: "/krishn-siddhapara-resume.pdf",
  bio: "Diligent and dedicated Computer Engineering student with a passion for pushing the boundaries of technology. Driven by a relentless work ethic and a commitment to excellence, I thrive in dynamic environments where challenges fuel innovation.",
  roles: [
    "Computer Engineering Student",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "AI Enthusiast",
  ],
}
