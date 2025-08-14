import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas} from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#9e13ea]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} canvas-text`}>
            Hi, I'm <span className="text-[#9e13ea]">Rasheed</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 canvas-text`}>
            A software developer who loves exploring <br className='sm:block hidden' />
            new technologies and building cool stuff.  
          </p>
        </div>
      </div>

      <div className="absolute inset-0 top-0 w-full h-full">
        <ComputersCanvas />
      </div>

      {/* Fallback background for mobile when 3D doesn't load */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary pointer-events-none"></div>

      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
