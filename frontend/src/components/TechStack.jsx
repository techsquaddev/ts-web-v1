import {
  chatgpt,
  claude,
  css,
  deepseek,
  html,
  javascript,
  mongo,
  node,
  python,
  react,
  tailwindcss,
  typescript,
  v0,
  vite,
} from "@/assets";
import { motion } from "framer-motion";

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React.js",
    icon: react,
  },
  {
    name: "Vite.js",
    icon: vite,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcss,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node.js",
    icon: node,
  },
  {
    name: "MongoDB",
    icon: mongo,
  },
  {
    name: "ChatGPT",
    icon: chatgpt,
  },
  {
    name: "Claude",
    icon: claude,
  },
  {
    name: "DeepSeek",
    icon: deepseek,
  },
  {
    name: "V0",
    icon: v0,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const TechStack = () => {
  return (
    <section id="tech" className="mt-7">
      <div className="p-5 bg-white dark:bg-primary rounded-3xl md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl text-black dark:text-white font-bold text-center mb-8 md:text-3xl">
            Our Tech Stack
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-10 gap-8 justify-items-center"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.2,
              }}
              className=""
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-white dark:bg-secondary rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer`}
              >
                <img src={tech.icon} className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
