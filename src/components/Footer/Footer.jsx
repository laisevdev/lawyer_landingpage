import "./Footer.css";
import "./Responsive.css";
import imglinkedin from "../../Assets/linkedin.png";
import telefone from "../../Assets/telefone.png";
import endereco from "../../Assets/endereco.png";
import email from "../../Assets/email.png";

import InView from "../UseInView/InView";

const LINKEDIN = imglinkedin;
const TELEFONE_PIC = telefone;
const ENDERECO_PIC = endereco;
const EMAIL_PIC = email;

const LINKEDIN_LINK = "https://www.linkedin.com/in/douglas-s-barbosa/";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div id="contato">
            <InView>
                <section className="footer">
                    <div className="titlefooter">
                        <h1>Douglas Barbosa</h1>
                        <h2>OAB-MT 23.271</h2>
                        <h3>
                            Siga-me nas Redes Sociais
                        </h3>
                        <div className="social">
                            <ul>
                                <li>
                                    <a href={LINKEDIN_LINK} target="blank_" title="Me Siga no Linkedin" >
                                        <img src={LINKEDIN} alt="LINKEDIN" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="chatme">
                        <h1>
                            MM Advocacia
                        </h1>
                        <h3>
                        <a  href="https://www.google.com/maps?q=Rua+Topázio,+183+-+Bosque+da+Saúde,+Cuiabá+-+Mato+Grosso,+CEP:+78050-080"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Clique para ver no Google Maps">
                            <img src={ENDERECO_PIC} alt="Endereço Douglas"/> 
                        </a>
                            Rua Topázio, 183 - Bosque da Saúde, <br /> Cuiabá - Mato Grosso, CEP: 78050-080
                        </h3>

                        <h3>
                            <a href="tel:+556530526721" title="Clique para ligar" target="_blank"
                            rel="noopener noreferrer">
                                <img src={TELEFONE_PIC} alt="Telefone Fixo Douglas"/> 
                            </a>                       
                            (65)3052-6721
                        </h3>

                        <h3>
                        <a  href="mailto:douglasbarbosa.adv@outlook.com" title="Clique para enviar um e-mail" target="_blank"
                        rel="noopener noreferrer">
                            <img src={EMAIL_PIC} alt="Telefone Fixo Douglas"/>
                        </a>   
                            douglasbarbosa.adv@outlook.com
                        </h3>               
                    
                    </div>

                    <div className="desenvolvedora">
                    <h2>Desenvolvido por <a href={LINKEDIN_LINK} target="blank_">Laíse Vieira </a>💜{currentYear}</h2>
                    </div>
                </section>
            </InView>
        </div>
    );
};

export default Footer;
