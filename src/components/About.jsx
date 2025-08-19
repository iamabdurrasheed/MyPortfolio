import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className='xs:w-[250px] w-full'
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm Mohammed Abdur Rasheed, a motivated and detail-oriented Computer Science Engineer with a strong foundation in software engineering, full-stack development, and data structures & algorithms. Proficient in Java, JavaScript, React.js, and Node.js, with hands-on experience in building full-stack applications and working with databases like MongoDB and SQL. 
        <br /><br />
        I'm passionate about solving real-world problems, continuously learning new technologies, and contributing to scalable and impactful projects. With expertise in modern frameworks like React.js, Express.js, and cloud technologies like AWS and Docker, I'm actively seeking internships and full-time Software Engineering roles to collaborate with industry professionals and contribute to innovative projects.
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className='mt-8'
      >
        <a
          href="/Mohammed Abdur Rasheed Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#9e13ea] hover:bg-[#8711d1] text-white px-8 py-3 rounded-xl text-[16px] font-bold transition-colors duration-300 inline-flex items-center gap-3 shadow-md shadow-primary"
        >
          📄 View My Resume
        </a>
      </motion.div>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
