import { motion } from "framer-motion";

import "./LoaderMe.css";

const LoaderMe = () => {
  return (
    <motion.section
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: -1000,
        opacity: 1,
        transition: { duration: 1, delay: 2 },
      }}
      exit={{ y: window.innerWidth }}
      className="loader__me"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.3 },
        }}
        className="loader__me-container"
      >
        <span>WAIT.....</span>
      </motion.div>
    </motion.section>
  );
};

export default LoaderMe;
