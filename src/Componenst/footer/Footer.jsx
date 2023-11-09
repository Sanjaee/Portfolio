import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__title">
            <img src="1.jpg" alt="Fachrur Rizhky" />
            <h1>CLICK HERE TO MORE INFO !</h1>
          </div>
          <div className="footer__button">
            <Link to="/me">CLICK HERE</Link>
          </div>
          <div className="footer__contact">
            <a href="mailto:afrizaahmad18@gmail.com">afrizaahmad18@gmail.com</a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://wa.me/6289618714018/?text=Hello%20Eja"
            >
              +62 896 1871 4018
            </a>
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__section">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.instagram.com/ahmdfrizza/"
            >
              Instagram
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.youtube.com/channel/UCGI119S5iGHHMgBXRCKVG8g"
            >
              YouTube
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/Sanjaee/"
            >
              GitHub
            </a>
          </div>
          <div className="footer__section">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/ahmad-afriza-ez4-ab9173276/"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.tiktok.com/@ahmadafriza25"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
