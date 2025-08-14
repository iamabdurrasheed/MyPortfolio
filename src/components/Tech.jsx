import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const SkillCategory = ({ title, skills, delay }) => (
  <motion.div
    variants={fadeIn("up", "spring", delay, 0.75)}
    className='glass-effect p-6 rounded-2xl h-auto min-h-[160px] flex flex-col justify-between'
  >
    <div>
      <h3 className='text-white font-bold text-[18px] mb-4 border-b border-secondary/20 pb-2'>{title}</h3>
      <div className='flex flex-wrap gap-2'>
        {skills.map((skill, index) => (
          <span
            key={index}
            className='bg-gradient-to-r from-[#9e13ea]/20 to-[#8711d1]/20 text-white px-3 py-1.5 rounded-lg text-[13px] border border-[#9e13ea]/30 hover:border-[#9e13ea]/60 transition-colors duration-300'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Tech = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java (Advanced)", "JavaScript (Advanced)", "C/C++", "Python"]
    },
    {
      title: "Frontend Frameworks",
      skills: ["React.js", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "SQL", "MongoDB", "SQLite", "DBMS"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker"]
    },
    {
      title: "System Design & CS",
      skills: ["OOPS", "Operating Systems", "Computer Networks", "Data Structures", "Algorithms"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "REST APIs", "Postman", "VS Code", "Competitive Programming"]
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What I work with
        </p>
        <h2 className={styles.sectionHeadText}>
          Technologies & Skills.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I work with a variety of technologies in the web development world. 
        From Frontend to Backend, Database to DevOps, here are the tools and 
        technologies I use to build amazing digital experiences.
      </motion.p>

      {/* Interactive Technology Icons */}
      <motion.div 
        variants={fadeIn("up", "spring", 0.2, 1)}
        className='mt-8 flex flex-row flex-wrap justify-center gap-10'
      >
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </motion.div>

      {/* Skills Categories */}
      <motion.div variants={textVariant()} className='mt-6'>
        <h3 className={`${styles.sectionSubText} mb-4`}>
          Detailed Skills Breakdown
        </h3>
      </motion.div>

      <div className='mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr'>
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            skills={category.skills}
            delay={index * 0.1}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
