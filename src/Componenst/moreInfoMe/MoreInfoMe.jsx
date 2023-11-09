import { motion, useScroll, useTransform } from "framer-motion";

import "./MoreInfoMe.css";
import { Link } from "react-router-dom";

const MoreInfo = () => {
  const { scrollYProgress } = useScroll();
  const first = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const second = useTransform(scrollYProgress, [0, 1], [0, 400]);
  return (
    <section className="info">
      <div className="back__button">
        <Link to="/">
          <i className="uil uil-angle-left-b"></i>
        </Link>
      </div>
      <div className="info__container">
        <div className="info__me">
          <div className="info__more">
            <img className="info__picture" src="1.jpg" alt="" />
            <span>
              I am a AFRIZA using a JavaScript tech stack, namely MERN stack
              (MongoDB, Express JS, React JS, and Node JS). I also have an
              interest in user interface and user experience, have some
              experience in design and illustration.
            </span>
          </div>
          <a href="#info__contact">
            Feel free to contact me <i className="uil uil-arrow-up-right"></i>
          </a>
          <div className="info__sosmed">
            <span>Also available on</span>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://wa.me/6289618714018/?text=Hello%20Eja"
            >
              WhatsApp <i className="uil uil-arrow-up-right"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.instagram.com/ahmdfrizza/"
            >
              Instagram <i className="uil uil-arrow-up-right"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/ahmad-afriza-ez4-ab9173276/"
            >
              LinkedIn <i className="uil uil-arrow-up-right"></i>
            </a>
          </div>
        </div>
        <div className="info__achieve">
          <div className="info__item">
            <div className="info__detail">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/ahmad-afriza-ez4-ab9173276/"
              >
                TESTIMONI <i className="uil uil-arrow-up-right"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/ahmad-afriza-ez4-ab9173276/"
              >
                ABOUT <i className="uil uil-arrow-up-right"></i>
              </a>
            </div>
          </div>
          <div className="info__item">
            <h1>Experience</h1>
            <div className="info__detail">
              <a target="_blank" rel="noreferrer noopener" href="">
                JOKI MOBILE LEGENDS - WEB DEVELOPER{" "}
                <i className="uil uil-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="info__typography">
        <div className="typo__filled">
          <motion.h1
            initial={{ x: -1800 }}
            animate={{ x: 0, transition: { duration: 0.8 } }}
            style={{ x: first }}
            className="info__typo"
          >
            contact <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> -
          </motion.h1>
        </div>
        <div className="typo__filled">
          <motion.h1
            initial={{ x: -1800 }}
            animate={{ x: 0, transition: { duration: 0.8 } }}
            style={{ x: second }}
            className="info__typo"
          >
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
