import { motion } from "framer-motion";
import {
  About,
  Akuru,
  CallToAction,
  Contact,
  Header,
  Projects,
  Sliit360,
  TechStack,
  UniProjects,
} from "@/components";

// Animation variants for different effects
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className=""
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div
        initial={scaleIn.initial}
        whileInView={scaleIn.animate}
        transition={scaleIn.transition}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Header />
      </motion.div>

      {/* Fade in from bottom */}
      <motion.div
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        transition={fadeInUp.transition}
        viewport={{ once: true, amount: 0.3 }}
      >
        <About />
      </motion.div>

      {/* Scale in */}
      <motion.div
        initial={scaleIn.initial}
        whileInView={scaleIn.animate}
        transition={scaleIn.transition}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Projects />
      </motion.div>

      {/* Fade in from right */}
      <motion.div
        initial={fadeInRight.initial}
        whileInView={fadeInRight.animate}
        transition={fadeInRight.transition}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Sliit360 />
      </motion.div>

      {/* Fade in from bottom with delay */}
      <motion.div
        initial={fadeInLeft.initial}
        whileInView={fadeInLeft.animate}
        transition={fadeInLeft.transition}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Akuru />
      </motion.div>

      <motion.div
        initial={scaleIn.initial}
        whileInView={scaleIn.animate}
        transition={scaleIn.transition}
        viewport={{ once: true, amount: 0.3 }}
      >
        <TechStack />
      </motion.div>

      <UniProjects />
      <CallToAction />

      {/* Contact section - Fade in from bottom */}
      <motion.div
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        transition={fadeInUp.transition}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Contact />
      </motion.div>
    </motion.div>
  );
};

export default Home;
