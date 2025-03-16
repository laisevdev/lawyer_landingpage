import { useEffect, useState, useRef } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import "./Menu.css";

const MenuMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleResize = () => {
    if (window.innerWidth > 768 && menuOpen) {
      setMenuOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  const handleMenuItemClick = (event, sectionId) => {
    event.preventDefault();
    setMenuOpen(false);

    setTimeout(() => {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300); 
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar-mobile">
      <div className="open-mobile" role="button" aria-label="Abrir Menu" onClick={toggleMenu}>
        {menuOpen ? <IoCloseSharp color="white" size="26px" /> : <TiThMenu color="white" size="35px" />}
      </div>
      {menuOpen && (
        <div className="mobile-menu" ref={menuRef}>
          <div className="close-mobile" role="button" aria-label="Fechar Menu" onClick={toggleMenu}>
            <IoCloseSharp color="white" size="26px" />
          </div>
          <ul>
            <li>
              <a href="#sobremim" onClick={(e) => handleMenuItemClick(e, "#sobremim")}>Sobre Mim</a>
            </li>
            <li>
              <a href="#areasatuacao" onClick={(e) => handleMenuItemClick(e, "#areasatuacao")}>Áreas de Atuação</a>
            </li>
            <li>
              <a href="#nossalocalizacao" onClick={(e) => handleMenuItemClick(e, "#nossalocalizacao")}>Nossa Localização</a>
            </li>
            <li className="contato">
              <a href="#contato" onClick={(e) => handleMenuItemClick(e, "#contato")}>Contato</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MenuMobile;
