import "./Work.css";

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="work__title">
        <div className="work__typography">
          <h2>work</h2>
          <h2>work</h2>
          <h2>work</h2>
        </div>
        <span>Featured Projects</span>
      </div>
      <div className="work__container">
        <div className="work__menu">
          <div className="work__item">
            <img className="work__image" src="2.jpg" alt="outfit online shop" />
            <div className="work__button">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://wa.me/6289618714018/?text=Hello%20Eja"
              >
                <i className="uil uil-arrow-up-left"></i>
                <span>CLICK TO ORDER JOKI</span>
              </a>
            </div>
          </div>
          <div className="work__text">
            <span className="title__link">01.</span>
            <div className="work__subtitle">
              <span className="title__link">JOKI MOBILE LEGENDS</span>
              <p>Web Application</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
