import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "@/utils/motion";

const technologies = {
  languages: [
    {
      name: "Python",
      icon: "/assets/tech/python.png",
      link: "https://www.python.org/",
    },
    {
      name: "Go",
      icon: "/assets/tech/go.png",
      link: "https://golang.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.png",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C#",
      icon: "/assets/tech/csharp.png",
      link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.png",
      link: "https://www.java.com/",
    },
  ],
  fullstack: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.png",
      link: "https://nodejs.org/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/express.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Angular",
      icon: "/assets/tech/angular.png",
      link: "https://angular.io/",
    },
    {
      name: "React",
      icon: "/assets/tech/react.png",
      link: "https://reactjs.org/",
    },
    {
      name: "Flask",
      icon: "/assets/tech/flask.png",
      link: "https://flask.palletsprojects.com/",
    },
    {
      name: "FastAPI",
      icon: "/assets/tech/fastapi.png",
      link: "https://fastapi.tiangolo.com/",
    },
    {
      name: "Django",
      icon: "/assets/tech/django.png",
      link: "https://www.djangoproject.com/",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/mysql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org/",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.png",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.png",
      link: "https://firebase.google.com/",
    },
    {
      name: "Redis",
      icon: "/assets/tech/redis.png",
      link: "https://redis.io/",
    },
    {
      name: "Kafka",
      icon: "/assets/tech/kafka.png",
      link: "https://kafka.apache.org/",
    },
  ],
  devops: [
    {
      name: "AWS",
      icon: "/assets/tech/aws.png",
      link: "https://aws.amazon.com/",
    },
    {
      name: "Azure",
      icon: "/assets/tech/azure.png",
      link: "https://azure.microsoft.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.png",
      link: "https://www.docker.com/",
    },
    {
      name: "Kubernetes",
      icon: "/assets/tech/kubernetes.png",
      link: "https://kubernetes.io/",
    },
    {
      name: "Terraform",
      icon: "/assets/tech/terraform.png",
      link: "https://www.terraform.io/",
    },
    {
      name: "Jenkins",
      icon: "/assets/tech/jenkins.png",
      link: "https://www.jenkins.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.png",
      link: "https://git-scm.com/",
    },
    {
      name: "GitHub",
      icon: "/assets/tech/github.png",
      link: "https://github.com/",
    },
    {
      name: "VS Code",
      icon: "/assets/tech/vscode.png",
      link: "https://code.visualstudio.com/",
    },
    {
      name: "Visual Studio",
      icon: "/assets/tech/visualstudio.png",
      link: "https://visualstudio.microsoft.com/",
    },
    {
      name: "SSMS",
      icon: "/assets/tech/ssms.png",
      link: "https://docs.microsoft.com/en-us/sql/ssms/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.png",
      link: "https://www.postman.com/",
    },
  ],
};

const tech = [
  technologies.languages,
  technologies.fullstack,
  technologies.databases,
  technologies.devops,
  technologies.tools,
];

const techVariants = [
  "Programming Languages",
  "Full Stack Development",
  "Databases & Big Data",
  "Cloud & DevOps",
  "Development Tools",
];

function Tech() {
  const languages = tech.map((technology, index) => (
    <div className="w-full h-fit flex gap-2 md:flex-row flex-col" key={index}>
      <h3 className="md:hidden">{techVariants[index]}</h3>
      <motion.div
        className="w-full flex flex-row flex-wrap gap-2"
        variants={fadeIn("right", "spring", 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {technology.map((tech, index) => (
          <Link
            href={tech.link}
            key={tech.name}
            target="_blank"
            className="flex flex-row"
          >
            <div className="w-[40px] h-[40px] relative flex flex-row items-center group cursor-pointer">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={40}
                height={40}
                className="object-contain"
                priority={index < 4}
                unoptimized={true}
              />

              <div className="opacity-0 w-fit min-w-[80px] bg-bgPrimaryLight dark:bg-bgPrimaryDark text-ctnPrimaryLight dark:text-ctnPrimaryDark text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 px-3 -top-3/4 -left-1/3 pointer-events-none">
                {tech.name}
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  ));

  const techNames = techVariants.map((tech, index) => (
    <h3 className="h-[50px] md:flex items-center hidden" key={index}>
      {tech}
    </h3>
  ));

  return (
    <section className="w-full h-fit p-8 mt-20" id="skills">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mx-auto"
      >
        <p className={"sectionSubText"}>What I have learnt so far</p>
        <h2 className={"sectionHeadText"}>Skills.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-ctnSecondaryLight dark:bg-bgSecondaryDark bg-bgSecondaryLight text-[17px] md:w-fit md:min-w-[60%] w-full h-full leading-[30px] flex md:flex-row flex-col gap-4 p-8 md:px-16 mx-auto rounded-lg justify-between backdrop-filter backdrop-blur-xl bg-opacity-10 shadow-sm shadow-primary"
      >
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full gap-5"
        >
          {techNames}
        </motion.div>
        <div className="w-[2px] h-[400px] dark:bg-ctnSecondaryDark bg-ctnSecondaryLight rounded-lg md:flex hidden mx-8" />
        <div className="md:w-[80%] w-full pl-2 h-full flex flex-col gap-8">
          {languages}
        </div>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Tech, "tech");
