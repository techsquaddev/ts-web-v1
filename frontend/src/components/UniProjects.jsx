import { Code, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const UniProjects = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  return (
    <section id="tech" className="mt-7">
      <div className="p-5 bg-white dark:bg-primary rounded-3xl md:p-10">
        {/* Services Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp}>
            <div className="shadow-2xl border-0 bg-white dark:bg-secondary backdrop-blur-sm rounded-2xl">
              <div className="p-8 lg:p-12 space-y-8">
                <motion.h2
                  className="text-2xl text-gray-900 dark:text-white font-bold md:text-3xl"
                  whileHover={{ scale: 1.05 }}
                >
                  What We Offer
                </motion.h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: Code,
                      title: "Programming Projects",
                      description:
                        "Web development, mobile apps, desktop applications, and more",
                    },
                    {
                      icon: Users,
                      title: "Expert Guidance",
                      description:
                        "Professional developers and academic experts to guide you",
                    },
                    {
                      icon: CheckCircle,
                      title: "Quality Assurance",
                      description:
                        "High-quality deliverables that meet academic standards",
                    },
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                        <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="space-y-6" variants={fadeInUp}>
            <div className="grid gap-6">
              {[
                {
                  emoji: "✓",
                  color: "green",
                  title: "Academic Excellence",
                  description:
                    "Projects designed to help you learn and achieve top grades",
                },
                {
                  emoji: "⚡",
                  color: "blue",
                  title: "Timely Delivery",
                  description:
                    "Meet your deadlines with our efficient project completion",
                },
                {
                  emoji: "💡",
                  color: "purple",
                  title: "Learning Support",
                  description:
                    "Understand your project with detailed explanations",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white dark:bg-secondary backdrop-blur-sm rounded-xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div
                    className={`bg-${benefit.color}-100 dark:bg-${benefit.color}-900 w-16 h-16 rounded-full flex items-center justify-center`}
                  >
                    <span
                      className={`text-${benefit.color}-600 dark:text-${benefit.color}-400 font-bold text-2xl`}
                    >
                      {benefit.emoji}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-xl">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "95%", label: "Success Rate" },
            { number: "24/7", label: "Support Available" },
            { number: "100+", label: "Happy Students" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300 mt-2 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UniProjects;
