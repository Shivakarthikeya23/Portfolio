import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
import truncateText from "@/utils/truncate";
import SectionHeading from "./SectionHeading";
import Magnetic from "./Magnetic";
import GithubLogo from "./../public/assets/icons/github.svg";
import RocketLogo from "./../public/assets/icons/rocket.svg";

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployed_link,
}) {
  const CHAR_LIMIT = 280;
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!glowRef.current) return;
    const rect = glowRef.current.getBoundingClientRect();
    glowRef.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    glowRef.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div ref={glowRef} onMouseMove={handleMouseMove} className="relative group rounded-2xl">
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
          style={{
            background:
              "radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(0,191,255,0.18), transparent 45%)",
          }}
        />
        <Tilt
          tiltMaxAngleX="10"
          tiltMaxAngleY="10"
          className="dark:bg-bgSecondaryDark bg-bgSecondaryLight p-5 rounded-2xl sm:w-[370px] w-full h-fit min-h-[590px] shadow-sm shadow-primary"
        >
          <div className="relative w-full h-[254px]">
            <div className="h-6 rounded-t-xl flex items-center gap-1.5 px-3 dark:bg-[#12101f] bg-black/80">
              <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
              <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
              <span className="w-2 h-2 rounded-full bg-[#28c840]" />
            </div>
            <div className="w-full h-[230px] rounded-b-xl relative overflow-hidden">
              <Image
                src={image}
                alt="project_image"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                className="object-cover"
              />

              <div className="absolute inset-0 flex justify-start m-3 card-img_hover">
                <Magnetic strength={0.4}>
                  <div
                    onClick={() => window.open(deployed_link, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <RocketLogo className="w-1/2 h-1/2 mr-[2px] z-10" />
                  </div>
                </Magnetic>
              </div>
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <Magnetic strength={0.4}>
                  <div
                    onClick={() => window.open(source_code_link, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <GithubLogo className="w-2/3 h-2/3 z-10" />
                  </div>
                </Magnetic>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-bold text-[24px]">
              {name}
            </h3>
            <p className="mt-2 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[14px]">
              {truncateText(description, CHAR_LIMIT)}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </div>
    </motion.div>
  );
}

function Works() {
  return (
    <section className="xl:my-36 md:mx-36 p-8 " id="projects">
      <SectionHeading subtext="My work" title="Projects." />

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] max-w-3xl leading-[30px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          These projects showcase my practical skills and experience, each with
          descriptions and links to code repositories and live demos. They
          demonstrate my ability to handle complex challenges, adapt to
          different technologies, and oversee projects from start to finish.
        </motion.p>
      </div>

      <div className="md:mt-20 mt-10 flex justify-center flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Works;
