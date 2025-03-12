import "./Project.css";
import imgbalanca from "../../Assets/balancajustica.png";
import InView from "../UseInView/InView";
import "./Responsive.css";

const BALANCA_JUSTICA = imgbalanca;



const Project = () => {
    return (
        <div id="projetos">
            <InView>
                <section className="container-project">
                    <div className="titleproj">
                        <h1>Áreas de Atuação</h1>
                    </div>

                    <section className="projects ">
                        <div className="card">
                                <a href="">
                                    <img src={BALANCA_JUSTICA} alt="Direito da Familia" />
                                </a>
                            
                            <div className="description">
                                <h1>Direito Civil</h1>
                                <p>
                                Como advogado especializado em Direito Civil, atuo na defesa dos direitos e interesses de pessoas físicas e jurídicas em diversas áreas, como contratos, responsabilidade civil, indenizações, direito do consumidor, posse e propriedade, obrigações e sucessões. Auxilio na elaboração e revisão de contratos, resolução de conflitos, cobrança de dívidas, ações de danos morais e materiais, entre outras demandas. Meu compromisso é oferecer assessoria jurídica eficiente e estratégica para garantir a melhor solução para cada caso.
                                </p>
                            </div>
                            
                        </div>
                        <div className="card">
                            <a href="">
                                <img src={BALANCA_JUSTICA} alt="Direito da Familia" />
                            </a>
                            
                            <div className="description">
                                <h1>Direito da Familia</h1>
                                <p>
                                Como advogado especializado em Direito de Família, atuo na resolução de questões familiares com sensibilidade e compromisso, sempre buscando soluções justas e equilibradas. Auxilio em processos de divórcio, guarda e regulamentação de visitas, pensão alimentícia, partilha de bens, reconhecimento e dissolução de união estável, adoção e interdição. Meu objetivo é garantir os direitos e o bem-estar dos meus clientes, oferecendo orientação jurídica para que possam tomar as melhores decisões em momentos delicados.
                                </p>
                            </div>
                        </div>

                        <div className="card">
                            <a href="">
                                <img src={BALANCA_JUSTICA} alt="Direito Administrativo" />
                            </a>
                            <div className="description">
                                <h1>Direito Administrativo</h1>
                                <p>
                                Como advogado especializado em Direito Administrativo, atuo na defesa dos interesses de pessoas físicas, empresas e órgãos públicos em questões relacionadas à Administração Pública. Auxilio na impugnação de licitações, na defesa em processos administrativos e disciplinares, na elaboração e revisão de contratos administrativos, na atuação em concursos públicos, na obtenção de licenças e autorizações, além de representar clientes em ações contra o Estado por atos ilegais ou abusivos
                                </p>
                            </div>

                        </div>
                    </section>
                </section>
            </InView>
        </div>
    );
};

export default Project;
