import {
  css,
  html,
  javascript,
  mongo,
  node,
  python,
  react,
  tailwindcss,
  typescript,
  vite,
} from "@/assets";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Zap,
  FileCode,
  Atom,
  ArrowRight,
  Database,
  Server,
} from "lucide-react";

const technologies = [
  {
    name: "HTML",
    icon: html,
    color: "from-orange-400 to-orange-600",
  },
  {
    name: "CSS",
    icon: css,
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "JavaScript",
    icon: javascript,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    name: "TypeScript",
    icon: typescript,
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "React.js",
    icon: react,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    name: "Vite.js",
    icon: vite,
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcss,
    color: "from-teal-400 to-teal-600",
  },
  {
    name: "Python",
    icon: python,
    color: "from-green-400 to-blue-500",
  },
  {
    name: "Node.js",
    icon: node,
    color: "from-green-500 to-green-700",
  },
  {
    name: "MongoDB",
    icon: mongo,
    color: "from-green-600 to-green-800",
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
              className="group relative"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-20 h-20 bg-white dark:bg-secondary rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer`}
              >
                <img src={tech.icon} className="w-12 h-12 text-white" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
