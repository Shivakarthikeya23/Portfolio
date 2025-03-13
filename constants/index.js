import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Cloud & DevOps",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "Go",
      icon: "/assets/tech/go.svg",
      link: "https://golang.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C#",
      icon: "/assets/tech/csharp.svg",
      link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/",
    },
  ],
  frameworks: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Angular",
      icon: "/assets/tech/angular.svg",
      link: "https://angular.io/",
    },
    {
      name: "React.js",
      icon: "/assets/tech/react.svg",
      link: "https://reactjs.org/",
    },
    {
      name: "Flask",
      icon: "/assets/tech/flask.svg",
      link: "https://flask.palletsprojects.com/",
    },
    {
      name: "FastAPI",
      icon: "/assets/tech/fastapi.svg",
      link: "https://fastapi.tiangolo.com/",
    },
    {
      name: "Django",
      icon: "/assets/tech/django.svg",
      link: "https://www.djangoproject.com/",
    },
  ],
  libraries: [
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "Zustand",
      icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
      link: "https://zustand-demo.pmnd.rs",
    },
    {
      name: "Redux/Redux-toolkit",
      icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      link: "https://redux.js.org",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "AWS",
      icon: "/assets/tech/aws.svg",
      link: "https://aws.amazon.com/",
    },
    {
      name: "Azure",
      icon: "/assets/tech/azure.svg",
      link: "https://azure.microsoft.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
    {
      name: "Kubernetes",
      icon: "/assets/tech/kubernetes.svg",
      link: "https://kubernetes.io/",
    },
    {
      name: "Terraform",
      icon: "/assets/tech/terraform.svg",
      link: "https://www.terraform.io/",
    },
    {
      name: "Jenkins",
      icon: "/assets/tech/jenkins.svg",
      link: "https://www.jenkins.io/",
    },
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/mysql.svg",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org/",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "Redis",
      icon: "/assets/tech/redis.svg",
      link: "https://redis.io/",
    },
  ],
};

const experiences = [
  {
    title: "Software Development Engineer 1",
    company_name: "Ivanti",
    icon: "/assets/company/ivanti.png",
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Jul 2024",
    points: [
      "Developed and optimized ITSM service management libraries using C#, .NET, and Azure Functions, refactoring microservices architecture to improve API scalability by 40% and reduce system crashes by 25%.",
      "Diagnosed and resolved critical system bugs using Visual Studio debugging tools and Postman API testing, enhancing system stability and reducing incident reports by 30%.",
      "Engineered and deployed the Trusted Agent Feature, implementing SignalR for real-time data synchronization and JWT authentication for secure access control, reducing unauthorized access attempts by 35%.",
      "Automated infrastructure provisioning and CI/CD workflows using Terraform and Azure DevOps, enabling rapid deployment of system testing environments and cutting deployment setup time by 50%.",
      "Conducted comprehensive design and code reviews, optimizing database queries in PostgreSQL and Redis, improving query response times by 45% through advanced indexing and caching strategies.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "Ivanti",
    icon: "/assets/company/ivanti.png",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - July 2023",
    points: [
      "Developed an internal cost-saving tool using C#, .NET, and Azure Functions, optimizing cloud resource allocation through predictive workload analysis, reducing infrastructure costs by 25%.",
      "Implemented and debugged integration and system tests across Server Management Libraries, utilizing JUnit and Postman API testing, achieving 99.5% test reliability.",
      "Enhanced API performance and data flow in web-based applications, refactoring .NET Core microservices with asynchronous processing and optimized caching, reducing API latency by 40%.",
      "Strengthened application security by implementing JWT authentication and role-based access control (RBAC), reducing security vulnerabilities by 20%.",
      "Collaborated with cross-functional teams in an Agile environment, optimizing database transactions in PostgreSQL and Redis, reducing query execution times and enhancing system performance.",
    ],
  },
];

const projects = [
  {
    name: "Azure Utility Tool",
    description:
      "A scalable cloud monitoring tool built using Azure APIs and Terraform. The tool enables automated cost tracking and resource allocation optimization, featuring automated cloud infrastructure provisioning with Terraform scripting for enhanced deployment efficiency.",
    tags: [
      {
        name: "dotnet",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "green-text-gradient",
      },
      {
        name: "azure",
        color: "pink-text-gradient",
      },
      {
        name: "terraform",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/azureutility.png",
    source_code_link: "https://github.com/Shivakarthikeya23",
    deployed_link: "#",
  },
  {
    name: "Story Books",
    description:
      "A full-stack MERN web application with active CRUD operations and OAuth2-based secure authentication. Features refined MongoDB queries for improved response time and seamless scalability to handle high user traffic efficiently.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "oauth2",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/storybooks.png",
    source_code_link: "https://github.com/Shivakarthikeya23/StoryBooks",
    deployed_link: "#",
  },
  {
    name: "Parkinson's Disease Detection",
    description:
      "A machine learning web application using Python and Streamlit that achieves 92% model accuracy in analyzing medical data. Features advanced data preprocessing techniques that improved predictive efficiency by 15% through analysis of 5,000+ patient records.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "machine-learning",
        color: "pink-text-gradient",
      },
      {
        name: "data-analysis",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/parkinson.png",
    source_code_link: "https://github.com/Shivakarthikeya23/ParkinsonDetector",
    deployed_link: "#",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Shivakarthikeya23",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/shiva-karthik-rallabandi-006a701a5/",
  },
  {
    id: "email",
    icon: <InstagramIcon />,
    link: "mailto:shivakarthikeya5@gmail.com",
  },
  {
    id: "phone",
    icon: <XIcon />,
    link: "tel:+19899335575",
  },
];

const heroTexts = [
  "Software Developer",
  500,
  "Python Developer",
  500,
  "Backend Developer",
  500,
  "C# Developer",
  500,
  "Java Developer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  projects,
  socials,
  heroTexts,
};
