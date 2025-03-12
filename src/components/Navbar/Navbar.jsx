import "./Navbar.css";
import imglogo from "../../Assets/Logotipo.png";
import "./Responsive.css";

const Navbar = () => {
    const LOGO = imglogo;

    const navBarLinks = [
     /* { name: "Início", link: "#inicio" }, */
        { name: "Sobre mim", link: "#sobremim" },
        { name: "Áreas de Atuação", link: "#areasatuacao" },
        { name: "Nossa Localização", link: "#localizacao" },
        { name: "Contato", link: "#contato" },
    ];

    return (
        <>
            <nav className="navbar">
                <div className="logotipo">
                <a href="#" onClick={(e) => { e.preventDefault(); window.location.reload(); }}>
                    <img className="image" src={LOGO} alt="Logotipo" />
                </a>
                </div>

                <ul className="menu">
                    {navBarLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
