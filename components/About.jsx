import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn } from "../utils/motion";
import SectionHeading from "./SectionHeading";
import Magnetic from "./Magnetic";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
      id="about"
    >
      <SectionHeading subtext="Introduction" title="Overview." />
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        <div>
          <p>
            I&apos;m Shiva Karthik Rallabandi, a Full Stack Developer who builds
            across the whole stack — Python, Go, TypeScript, C#, and Java —
            with hands-on experience shipping cloud infrastructure and
            production services.
          </p>
          <p className="mt-4">Let&apos;s collaborate to bring your ideas to life!</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            "MS Info Systems @ CMU",
            "BTech IT @ KMIT",
            "SDE @ Ivanti",
            "AWS · Azure · Docker · K8s · Terraform",
          ].map((item) => (
            <span
              key={item}
              className="text-[13px] px-3 py-1.5 rounded-full border dark:border-white/10 border-black/10 backdrop-filter backdrop-blur-xl bg-opacity-10 dark:bg-white/5 bg-black/5"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="w-fit break-words">
          <Link
            href="mailto:shivakarthikeya5@gmail.com"
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="hover:text-primary w-full transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break hover:-translate-y-2"
          >
            <EmailIcon className="w-[30px] h-[30px]" />
            shivakarthikeya5@gmail.com
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          {socials.map((social) => (
            <Magnetic key={social.id} strength={0.4}>
              <Link
                href={social.link}
                target="_blank"
                className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
              >
                {social.icon}
              </Link>
            </Magnetic>
          ))}
        </div>
        <Magnetic strength={0.3}>
          <Link
            href="document/ShivaKarthikResume.pdf"
            target="_blank"
            rel="noreferrer"
            className="w-fit"
          >
            <div className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
              <div className="original bg-primary text-white px-7 py-2">
                Resume
              </div>
              <div className="letters">
                <span>R</span>
                <span>e</span>
                <span>s</span>
                <span>u</span>
                <span>m</span>
                <span>e</span>
              </div>
            </div>
          </Link>
        </Magnetic>
      </motion.div>
    </section>
  );
}

export default About;
