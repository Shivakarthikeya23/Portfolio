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
    title: "Student Content Writer",
    company_name: "CBA Communications Department, Central Michigan University",
    icon: "/assets/company/cmu.jpg", // Replace with the CMU logo if available
    iconBg: "#F5F5F5",
    date: "Jan 2025 – Present",
    points: [
      "Develop and edit compelling content for digital and print platforms, including articles, newsletters, social media posts, and promotional materials.",
      "Conduct interviews with students, faculty, and industry professionals to craft engaging feature stories and testimonials.",
      "Collaborate with marketing and communications teams to strengthen brand presence and increase student engagement through strategic content initiatives.",
      "Manage content calendars to ensure timely publication and alignment with institutional messaging and academic priorities.",
      "Assist in photography and event media coverage, capturing visual content for use across various marketing campaigns.",
      "Support RSO (Registered Student Organization) collaborations by promoting student-led initiatives and success stories within the College of Business.",
    ],
  },
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
    name: "AI Recruiter Voice Agent",
    description:
      "A full-stack voice-enabled recruiter application that conducts dynamic interviews using Vapi. Built with Next.js, React, Supabase, and AI for intelligent prompt generation, it streamlines candidate screening and automates interview scheduling.",
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "supabase", color: "pink-text-gradient" },
      { name: "vapi", color: "orange-text-gradient" },
      { name: "ai", color: "purple-text-gradient" },
    ],
    image: "/assets/projects/ai-recruiter.png", // Make sure this image exists in your public/assets/projects folder
    source_code_link: "https://github.com/Shivakarthikeya23/Ai-Interview-Scheduler-Voice-Agent",
    deployed_link: "#",
  },
  {
    name: "Fitness Buddy",
    description:
      "A full-stack fitness web application that allows users to track workouts, connect with fitness buddies, and monitor their fitness journey. Features include personalized workout plans, social interactions, and real-time messaging for an engaging fitness experience.",
    tags: [
      { name: "react.js", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "express.js", color: "pink-text-gradient" },
      { name: "mongodb", color: "orange-text-gradient" },
      { name: "jwt", color: "purple-text-gradient" },
      { name: "tailwindcss", color: "blue-text-gradient" },
    ],
    image: "/assets/projects/fitnessbuddy.png", // Add this image to your public/assets/projects folder
    source_code_link: "https://github.com/Shivakarthikeya23/fitness-buddy", // Update if needed
    deployed_link: "#", // Add if deployed
  },
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
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/shivakarthikeya.sk/",
  },
  {
    id: "twitter",
    icon: <XIcon />,
    link: "https://x.com/sh1vakarthikeya",
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

const resume = `
Shiva Karthik Rallabandi
Mount Pleasant, MI | shivakarthikeya5@gmail.com | 
LinkedIn : https://www.linkedin.com/in/shiva-karthik-rallabandi-006a701a5/
GitHub : https://github.com/Shivakarthikeya23 
Portfolio : https://portfolio-git-main-shivakarthikeya23s-projects.vercel.app/

Education:
- MS in Information Systems, Central Michigan University (Aug 2024 – May 2026)
- BTech in IT, Keshav Memorial Institute of Technology (Aug 2019 – May 2023)

Experience:
Software Engineer 1, Ivanti (Jul 2023 – Jul 2024)
- Developed C# .NET Azure microservices improving API scalability by 40%
- Diagnosed bugs using Visual Studio and Postman, improving stability by 30%
- Implemented SignalR + JWT-based Trusted Agent Feature for secure real-time access
- Automated infra via Terraform + Azure DevOps, reducing deployment time by 50%
- Optimized PostgreSQL/Redis queries, improving performance by 45%

Software Engineer Intern, Ivanti (Jan 2023 – Jul 2023)
- Built cost-saving tool using .NET + Azure Functions, cut infra costs by 25%
- Refactored microservices with async processing, cut latency by 40%
- Implemented JWT and RBAC security, improved protection by 20%

Projects:
ProductiVision – AI productivity tool using Azure Face API + Next.js
Fitness Buddy – Full-stack fitness tracker with JWT auth & analytics
Azure Utility Tool – Cost automation with C#, Terraform, Azure APIs

Skills:
Languages: Java, Python, C#, C/C++, TypeScript, SQL
Frameworks: React, Node.js, Angular, Flask, FastAPI, .NET
Databases: MongoDB, MySQL, Firebase, PostgreSQL, Redis
Tools: Docker, Jenkins, Azure DevOps, Git, VS Code, PyCharm, Terraform
`;


export {
  navLinks,
  services,
  technologies,
  experiences,
  projects,
  socials,
  heroTexts,
  resume,
};
