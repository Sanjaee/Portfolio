import About from "../Componenst/about/About";
import Contact from "../Componenst/contact/Contact";
import Footer from "../Componenst/footer/Footer";
import Header from "../Componenst/header/Header";
import Loader from "../Componenst/loaderHome/LoaderHome";
import Navbar from "../Componenst/navbar/Navbar";
import Services from "../Componenst/service/Service";
import Work from "../Componenst/work/Worker.jsx";

export const Home = () => {
  return (
    <div>
      <Loader />
      <Navbar />
      <Header />
      <About />
      <Work />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};
