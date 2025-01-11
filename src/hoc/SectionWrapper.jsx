import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section
        id={idName} // Apply the ID directly to the section element
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
