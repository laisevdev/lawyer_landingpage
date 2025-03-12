import "./App.css";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import Section from "../Section/Section";
import Projects from "../Projects/Project";
import Footer from "../Footer/Footer";
import MenuMobile from "../MobileMenu/Menu";
import Localization from "../Localization/Localization";
import whatsapp from "../../Assets/whatsapp.png";

const IMG_WPP = whatsapp;
const App = () => {
  return (
    <>
      <div className="navbar-wpp">
        <div className="navbar-content">
          <a
            href="https://wa.me/5565981325263?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!"
            target="_blank"
            rel="noopener noreferrer"
            title="Fale conosco no Whatsapp"
            className="whatsapp-link"
          >
            <img src={IMG_WPP} alt="WhatsApp" />
          </a>
        </div>
      </div>
      <div className="style-mobile">
        <MenuMobile />
      </div>
      <Navbar />
      <Main />
      <Section />
      <Projects />
      <Localization />
      <Footer />
    </>
  );
};

export default App;
