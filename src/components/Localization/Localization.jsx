import "./Localization.css";
import InView from "../UseInView/InView";
import "./Responsive.css";
import imgmapa from "../../Assets/mapa.png";

const localizacao = imgmapa

const Section = () => {
    const cidades = ["Cuiabá", "Primavera do Leste", "Barra do Bugres", "Tangará da Serra", "Juína", "Colniza"];

    return (
       
            <InView>
                <section className="localizacao">
                   
                    <section className="localizacao-matogrosso">
                        <h1>Onde Atuamos</h1>
                        <ul className="cidade-lista">
                            {cidades.map((cidade, index) => (
                            <li key={index} className="cidade-item">
                                {cidade}
                            </li>
                            ))}
                        </ul>
                                            
                    </section>

                    <section className="mapa">
                        <img src={localizacao} alt="Onde Atuamos, nossa localização" />                        
                    </section>

                </section>
            </InView>
    );
};

export default Section;
