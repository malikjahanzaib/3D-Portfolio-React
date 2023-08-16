import React from 'react';
import { Tilt } from 'react-tilt';
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
            option={{
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
      I am a passionate and versatile software developer with a profound expertise in Python, JavaScript, and cutting-edge frameworks such as React and Django. With a strong foundation in software engineering, I specialize in crafting efficient and elegant solutions to complex problems. My journey in the world of technology has been enriched by my deep-rooted interest in machine learning, allowing me to seamlessly bridge the gap between software development and data-driven insights. As you explore my projects and accomplishments, you'll discover my commitment to creating impactful and innovative solutions that reflect both my technical prowess and creative vision. Together, we can breathe life into your concepts and make them a reality!
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