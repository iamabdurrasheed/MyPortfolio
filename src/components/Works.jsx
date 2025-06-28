import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className='glass-effect p-6 rounded-2xl sm:w-[360px] w-full h-[400px] flex flex-col'
      >
        <div className='flex justify-between items-start mb-4'>
          <h3 className='text-white font-bold text-[24px] leading-tight'>{name}</h3>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-700 transition-colors'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>

        <div className='flex-grow'>
          <p className='text-secondary text-[14px] leading-relaxed'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] ${tag.color} bg-black/20 px-2 py-1 rounded-md`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skills and experience through
          real-world examples of my work. Each project demonstrates my ability to build
          full-stack applications, work with modern technologies, and solve complex problems.
          From authentication systems to API development and AI integration, these projects
          reflect my journey as a software developer.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
