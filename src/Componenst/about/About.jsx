import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__typography">
          <span>about me</span>
          <span>about me</span>
          <span>about me</span>
        </div>
        <div className="about__text">
          <span>
            Hello! I afriza, I am passionate about
            <span className="about__outline">
              {" "}
              developing applications
            </span>{" "}
            both <span className="about__outline"> user interface</span> and
            joki <span className="about__outline"> game</span>
          </span>
          <span className="about__button">
            <Link to="/me">
              CLICK TO MY INFO <i className="uil uil-arrow-up-right"></i>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
