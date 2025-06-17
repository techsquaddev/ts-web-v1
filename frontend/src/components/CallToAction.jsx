import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  const handleContactRedirect = () => {
    window.open("https://forms.gle/NB19ZdYpZhXpmdVNA", "_blank");
  };

  return (
    <section
      id="get-started"
      className="my-7 p-12 bg-white dark:bg-primary rounded-3xl"
    >
      <div className="text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Contact us today to discuss your project requirements and take the
          first step towards academic success. Fill out the form by clicking the
          button below and we will contact you within 24 hours.
        </p>
        <motion.div
          {...scaleOnHover}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center"
        >
          <button
            onClick={handleContactRedirect}
            className="flex items-center px-8 py-3 w-fit bg-accent text-black text-lg font-semibold rounded-xl hover:bg-primary dark:hover:bg-secondary hover:text-white transition-colors duration-300"
          >
            Fill Out The Form
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
              }}
            >
              <ArrowRight className="w-6 h-6 ml-3" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
