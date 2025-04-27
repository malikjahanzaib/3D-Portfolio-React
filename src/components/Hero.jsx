import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Typewriter } from 'react-simple-typewriter';
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={ `${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Jahanzaib</span></h1>
          <p className={`${styles.heroSubText} mt-4 text-[22px] text-gray-300 font-normal leading-snug`}>
            I build APIs, ship containers, and occasionally trick machines into thinking.
          </p>
          <div className="mt-2 pl-2 flex items-center font-mono text-[14px]">
            <span className="text-purple-400">$</span>
            <span className="ml-2 text-indigo-400 transition duration-300 ease-in-out hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]">
              <Typewriter
                words={['shipping features && squashing bugs && refactoring the universe']}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </span>
          </div>

        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero
