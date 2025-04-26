import React from 'react';
// import { Tilt } from 'react-tilt';
import Tilt from "react-parallax-tilt"
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
              <img src={icon} alt={title} className='w-16 h-16 object-contain' />
              <h3 className='text-white text-[20] font-bold text-center'>{title}</h3>
            </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-17 max-w-3xl leading-[30px]'
      >
      I’m a software engineer who enjoys building reliable, thoughtful solutions across the full stack. With a background in Python, JavaScript, and frameworks like React and FastAPI, I focus on creating systems that are both practical and scalable.<br /><br />
      My experience spans backend development, cloud-native applications on AWS and Kubernetes, and integrating machine learning models into real-world software. Whether it’s designing secure APIs, improving user interfaces, or applying deep learning to uncover patterns in data, I approach each project with an emphasis on clarity, usability, and long-term maintainability.<br /><br />
      Technology is always evolving, and I enjoy working at the intersection of software engineering and applied AI — continuously learning, refining, and contributing where I can.<br /><br />
      Feel free to explore my work — every project reflects a commitment to thoughtful development and real-world impact.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")