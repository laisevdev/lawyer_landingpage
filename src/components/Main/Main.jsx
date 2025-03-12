import "./Main.css";
import imgprof from "../../Assets/douglas-perfil.png";

import { motion } from "framer-motion";
import "./Responsive.css";

const PICTURE = imgprof;


const Main = () => {
    
    return (
        <div id="inicio">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1.0, delay: 0.3 }}
            >
                <main className="main">
                    <div className="profile">
                        <div className="profile-img-mobile">
                            <img src={PICTURE} alt="profile" />
                        </div>

                        <h1>
                            Douglas{" "}
                            <span className="block"> Barbosa</span>
                        </h1>

                        <p>
                            Defendendo seus direitos com ética,<br /> compromisso 
                            e excelência jurídica. 
                        </p>

                        <ul className="button-container">
                            <li>
                                <a
                                  href="https://wa.me/5565981325263?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-button"
                                >
                                Entre em Contato
                                </a>
                            </li>
                        </ul>
                       
                    </div>


                    <div className="profile-img">
                        <img src={PICTURE} alt="profile" />
                    </div>
                </main>
            </motion.div>
        </div>
    );
};


export default Main;
