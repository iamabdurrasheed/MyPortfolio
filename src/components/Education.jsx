import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import kmit from "../assets/educationImg/kmit.png";
import scjc from "../assets/educationImg/scjc.jpg";
import scts from "../assets/educationImg/scts.jpg";
import yisr from "../assets/educationImg/yisr.jpg";

const EducationCard = ({ title, school, date, points, index, logo }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='glass-effect p-10 rounded-3xl w-full mb-7 flex flex-row gap-10'
  >
    <div className='flex-shrink-0'>
      <img 
        src={logo} 
        alt={school} 
        className={`${
          school === "Yara International School, Riyadh"
            ? "w-[140px] h-[75px] rounded-md object-cover object-[center_42%] bg-transparent"
            : "w-[100px] h-[100px] rounded-full object-contain p-2"
        } ${
          school === "Keshav Memorial Institute Of Technology"
            ? "bg-white"
            : "bg-white/10"
        }`}
      />
    </div>
    <div className='flex-grow'>
      <h3 className='text-white font-bold text-[24px]'>{school}</h3>
      <p className='text-white font-semibold text-[16px]'>{title}</p>
      <p className='mt-2 text-secondary text-[14px]'>{date}</p>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {points.map((point, index) => (
          <li
            key={`point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const educationData = [
    {
      title: "Bachelor of Technology in CSE",
      school: "Keshav Memorial Institute Of Technology",
      date: "2022 - 2026",
      logo: kmit,
      points: [
        "Currently pursuing B.Tech with specialization in Computer Science Engineering.",
        "Maintaining a strong academic performance with CGPA of 8.67.",
        "Active participation in technical events.",
      ],
    },
    {
      title: "Intermediate Education (MPC)",
      school: "Sri Chaitanya Junior College",
      date: "2020 - 2022",
      logo: scjc,
      points: [
        "Completed Intermediate education with focus on Mathematics, Physics, and Chemistry.",
        "Secured 93.8% marks in TSBIE.",
        "Participated in various academic competitions and olympiads.",
      ],
    },
    {
      title: "Secondary School Education",
      school: "Sri Chaitanya Techno School",
      date: "2018 - 2020",
      logo: scts,
      points: [
        "Completed SSC with distinction.",
        "Secured 10 CGPA in board examinations.",
        "Active participation in extra-curricular activities.",
      ],
    },
    {
      title: "Primary and Secondary School Education",
      school: "Yara International School, Riyadh",
      date: "2008 - 2018",
      logo: yisr,
      points: [
        "Completed primary and secondary education.",
        "Participated in various extracurricular activities.",
        "Strong foundation in academics and overall development.",
      ],
    },
  ];

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My academic journey</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        {educationData.map((education, index) => (
          <EducationCard key={`education-${index}`} index={index} {...education} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");