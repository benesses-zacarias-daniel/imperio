import ContainerDiv from "../../components/Common/container/ContainerDiv";
import style from "./Sobre.module.css";
import Img from "../../components/img/Img";
import CardCategoria from "../../components/cards/CardCategoria/CardCategoria";
//Ícones Categorias
import Velocidade from "../../assets/icons/veloc.svg"
import Visao from "../../assets/icons/visao2.svg"
//Ícones Porques
import EstrelaCircular from "../../assets/icons/estrelaCircular.svg"
import Suporte from "../../assets/icons/suporte.svg"
import EstrelaVerificada from "../../assets/icons/estrelaVerif.svg"
import Eficiente from "../../assets/icons/eficiente.svg"
//
import Porque from "../../components/productos/escolha/Porque";

const Sobre = () => {
    const Categorias = [
        {
            "id": 1,
            "titulo": "",
            "min_info": "",
            "categorias": [
                {
                    "id": 1,
                    "src": Velocidade,
                    "alt": "Ícone de foguetão",
                    "titulo": "Missão",
                    "desc": "Promover hardware de ultra-performance com um design inigualável, elevando a experiência digital ao patamar do luxo absoluto."
                },
                {
                    "id": 2,
                    "src": Visao,
                    "alt": "Ícone de olho",
                    "titulo": "Vião",
                    "desc": "Ser reconhecida globalmente como o padrão ouro em electrónica premium, onde a tecnologia encontra a exclusividade."
                }
            ]
        }
    ];

    const PorqueDados = [
        {
            "id": 1,
            "titulo": "Porque escolher a Imperial?",
            "min_info": "A diferença está nos detalhes que os outros ignoram.",
            "porques": [
                {
                    "id": 1,
                    "src": EstrelaCircular,
                    "alt": "Ícone de estrela com círculo",
                    "titulo": "Curadoria de Elite",
                    "desc": "Não vendemos apenas componentes; selecionamos as melhores variantes de cada chip e placa para garantir estabilidade e longevidade superior."
                },
                {
                    "id": 2,
                    "src": Suporte,
                    "alt": "Ícone de pessoar com headphone",
                    "titulo": "Concierge Tecnológico",
                    "desc": "O nosso suporte não é automatizado. Cada cliente tem acesso a especialistas dedicados para otimizarção e consultoria técnica personalizada."
                },
                {
                    "id": 3,
                    "src": EstrelaVerificada,
                    "alt": "Ícone parecido com selo",
                    "titulo": "Garantia Imperial",
                    "desc": "Oferecemos periodos de garantia alargados e substituição prioritária em toda nossa gama premium."
                },
                {
                    "id": 4,
                    "src": Eficiente,
                    "alt": "Ícone de raio",
                    "titulo": "Performance Extrema",
                    "desc": "Sistemas pré-configurados com perfis de overclocking seguros e validados por especialistas para máxima eficiencia desde o primeiro segundo."
                }]
        }
    ];

    return (
        <ContainerDiv className={style.container_sobre}>
            <div className={style.container_conteudo}>
                <div className={style.area_hero_sobre}>
                    <Img src={"img/pc.jpg"} alt={"Imagem de sala de data center/tecnologia"} className={style.img_fundo_sobre} />
                    <div className={style.info_hero_sobre}>
                        <div className={style.foco_hero}>
                            <p className={style.jor_tit}>
                                A Nossa Essência
                            </p>
                        </div>
                        <div className={style.titulo_hero}>
                            <h4>A Excelência em cada Transistor</h4>
                        </div>
                        <div className={style.texto_sobre_hero}>
                            Desde a nossa fundação, a Imperial <br />Electrónicos redefine o conceito de luxo tecnológico, trazendo o fucturo para as mãos dos mais exigentes entusiastas de hardware.
                        </div>
                    </div>
                </div>
                <div className={style.historia}>
                    <div className={style.info_historia_sobre}>
                        <div className={style.area_historia}>
                            <div className={style.jornada}>
                                <h3>Uma Jornada de Inovação</h3>
                            </div>
                            <div className={style.texto_historia}>
                                <p>
                                    Fundada no coração do distrito tecnológico, a Imperial Electrónicos nasce de uma visão simples: <i> o hardware de alta performance não deve ser apenas funcional, deve ser uma obra de arte. Começámos como um pequeno atelier de personalizção para workstations de eleite.</i> <br />
                                    Hoje, somos referência mundial na curadoria de componentes exclusivos e na engenharia de sistemas que desafiam os limites da física. Cada peça que ostenta o selo Imperial passou por rigosos testes de qualidade e estética, garantindo que o prestígio acompanhe a performance.
                                </p>
                            </div>
                        </div>
                        {/* <div className={style.area_logo}>
                            <Img alt={"Logo da marca"} src={"./img/pc.jpg"} className={style.logo_historia} />
                        </div> */}
                    </div>
                </div>
                <CardCategoria classeCatItem={style.valor_missao} iconeCategoria={style.area_img_cat} areaInfoCat={style.areaInfoC} dados={Categorias[0]} />
                <Porque infosPorque={PorqueDados[0]} />
            </div>
        </ContainerDiv>
    )
}



export default Sobre;