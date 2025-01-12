import React from 'react';
import { motion } from "framer-motion";

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';

const achievements = [
    {
      title: "1st Place, 2024 Health AI BIAS Datathon",
      organization: "Emory University",
      date: "August 2024",
      description: `
        Winner of the <a href="https://datathon.org" target="_blank" rel="noopener noreferrer" class="text-blue-400 underline hover:text-blue-300">Health AI BIAS Datathon</a> at Emory University. Conducted analysis of the CXR-Chest dataset, leveraging techniques including 
        Convolutional Neural Networks (CNNs), autoencoders, vector embeddings, and Social Determinants of Health (SDOH)-based subgroup 
        analysis. Successfully identified bias in diagnostic predictions, showcasing innovative solutions for enhancing fairness and accuracy in 
        healthcare AI.
      `,
    },
  ];
  

  const AchievementCard = ({ title, organization, date, description }) => {
    return (
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="bg-tertiary p-6 rounded-2xl shadow-lg"
      >
        <h3 className="text-white font-bold text-[20px]">{title}</h3>
        <p className="text-secondary text-[16px] mt-1">
          {organization} - {date}
        </p>
        <p
          className="text-secondary text-[14px] mt-4 leading-[22px]"
          dangerouslySetInnerHTML={{ __html: description }} // Correctly render HTML content
        />
      </motion.div>
    );
  };
  

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Accomplishments</p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col gap-7">
        {achievements.map((achievement, index) => (
          <AchievementCard key={`achievement-${index}`} {...achievement} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
