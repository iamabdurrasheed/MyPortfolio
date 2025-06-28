import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  java,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  bootstrap,
  docker,
  starbucks,
  QuickScribe,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Project",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  // {
  //   title: "Web Developer",
  //   icon: web,
  // },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
 
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // }
  
  
  
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Project-Volt",
    description:
      "Built a full-stack platform for managing and reviewing student projects with secure Firebase-based role authentication (Admin & Student). Developed RESTful APIs in Express.js for handling users, submissions, and project workflows, with protected routes and session logic. Integrated GeminiAI for intelligent code explanations and implemented Cosine Similarity for plagiarism detection in student submissions.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "GeminiAI",
        color: "pink-text-gradient",
      },
      {
        name: "ApexCharts",
        color: "green-text-gradient",
      },
    ],
    source_code_link: "https://github.com/iamabdurrasheed/Project-Volt",
  },
  {
    name: "Employee Experience Tracker",
    description:
      "Built a secure employee management system with JWT-based authentication for Admin and Employee roles. Implemented a live experience tracker that recalculates current and total professional experience on each access. Included automatic age calculation from date of birth and dynamic formatting of experience in 'X years Y months Z days'.",
    tags: [
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML5",
        color: "orange-text-gradient",
      },
    ],
    source_code_link: "https://github.com/iamabdurrasheed/Employee-Management",
  },
  {
    name: "Invoice Management API",
    description:
      "Developed a robust RESTful API for invoice management with currency conversion capabilities. Created endpoints for CRUD operations, payment tracking, and real-time currency conversion using ExchangeRate-API. Implemented efficient pagination and comprehensive data filtering to enhance user experience.",
    tags: [
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "pink-text-gradient",
      },
      {
        name: "ExchangeRate-API",
        color: "orange-text-gradient",
      },
    ],
    source_code_link: "https://github.com/iamabdurrasheed/InvoiceManagement",
  },
  {
    name: "NexNews",
    description:
      "A modern news application that aggregates and displays the latest news from various sources. Features include real-time news updates, category-wise filtering, search functionality, and responsive design for seamless user experience across all devices.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "News API",
        color: "green-text-gradient",
      },
      {
        name: "Responsive",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/iamabdurrasheed/NexNews",
  },
  {
    name: "QuickScribe",
    description:
      "A comprehensive note-taking web application built with Node.js stack that enables users to create, manage, and organize notes efficiently. Features include advanced search functionality, importance marking system, dark mode toggle, and secure data storage with user authentication to ensure accessibility and data protection.",
    tags: [
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "EJS",
        color: "orange-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "Authentication",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/iamabdurrasheed/QuickScribe",
  },
];

export { services, technologies, experiences, testimonials, projects };
