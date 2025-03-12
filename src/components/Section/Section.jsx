import "./Section.css";
import InView from "../UseInView/InView";
import "./Responsive.css";
import imgdouglas from "../../Assets/deusa.jpg";

const IMG_ADV = imgdouglas

const Section = () => {
    return (
        <div id="sobremim">
            <InView>
                <section className="section">
                    <section className="sobremim">
                    <img src={IMG_ADV} alt="Imagem Advogado" />                        
                    </section>

                    <section className="formacao">
                        <h1>Justiça bem conduzida, resultados que transformam vidas</h1>
                        <h2>
                        Douglas é pós graduado pela UFMT e atua no Estado de Mato Grosso há mais de 8 anos, sendo reconhecido por sua ética e excelência no Direito. Sempre em busca de aperfeiçoamento, segue se especializando e inovando para oferecer as melhores soluções jurídicas.
                        </h2>
                        
                    </section>
                </section>
            </InView>
        </div>
    );
};

export default Section;
