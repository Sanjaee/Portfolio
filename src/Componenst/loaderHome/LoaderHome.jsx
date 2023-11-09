import { motion } from "framer-motion";
import "./LoaderHome.css";

const Loader = () => {
  return (
    <motion.section
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: -1000,
        opacity: 1,
        transition: { duration: 1, delay: 2 },
      }}
      exit={{ y: window.innerWidth }}
      className="loader"
    >
      <div className="loader__container">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5 },
            transitionEnd: {
              display: "none",
            },
          }}
          className="loader__text"
        >
          Halo
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.8 },
            transitionEnd: {
              display: "none",
            },
          }}
          className="loader__text"
        >
          Hello
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.1 },
            transitionEnd: {
              display: "none",
            },
          }}
          className="loader__text"
        >
          مرحبًا
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4 },
            transitionEnd: {
              display: "none",
            },
          }}
          className="loader__text"
        >
          こんにちは
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.7 } }}
          className="loader__text"
        >
          Привет
        </motion.span>
      </div>
    </motion.section>
  );
};

export default Loader;
