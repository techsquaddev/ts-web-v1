import { motion, useInView } from "framer-motion";
import {
  About,
  Header,
  Templates,
  Products,
  Contact,
  Sliit360,
  Akuru,
} from "../components";
import { useRef } from "react";

// Define animation variants for the sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  // Creating refs for each section to track its visibility
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const templatesRef = useRef(null);
  const productsRef = useRef(null);
  const sliit360Ref = useRef(null);
  const akuruRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  // Tracking whether each section is in view
  const aboutInView = useInView(aboutRef, { once: true });
  const templatesInView = useInView(templatesRef, { once: true });
  const productsInView = useInView(productsRef, { once: true });
  const sliit360InView = useInView(sliit360Ref, { once: true });
  const akuruInView = useInView(akuruRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });

  return (
    <div className="">
      <Header />

      <motion.div
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        variants={sectionVariants}
      >
        <About />
      </motion.div>

      <motion.div
        ref={templatesRef}
        initial="hidden"
        animate={templatesInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={sectionVariants}
      >
        <Templates />
      </motion.div>

      <motion.div
        ref={productsRef}
        initial="hidden"
        animate={productsInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.4 }}
        variants={sectionVariants}
      >
        <Products />
      </motion.div>

      <motion.div
        ref={sliit360Ref}
        initial="hidden"
        animate={sliit360InView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.6 }}
        variants={sectionVariants}
      >
        <Sliit360 />
      </motion.div>

      <motion.div
        ref={akuruRef}
        initial="hidden"
        animate={akuruInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.8 }}
        variants={sectionVariants}
      >
        <Akuru />
      </motion.div>

      <motion.div
        ref={contactRef}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 1.0 }}
        variants={sectionVariants}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default Home;
