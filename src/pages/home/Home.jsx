import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Hero from "../../components/cards/Hero/Hero";
import ContainerSessao from "../../components/Common/container/ContainerSessao";
import style from "./Home.module.css";
import scrollCima from "../../utils/scrollCima";
import CardProdutos from "../../components/cards/CardProduto/CardProduto";

const Home = () => {
    const Produtos = [
        {
            "id": 1,
            "nome": "Space X PC",
            "preco": 2500,
            "bagde": "Ultra Resistente",
            "limit": "MaxVision",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc.jpg",
            "alt": "Imagem de PC da Space X"
        },
        {
            "id": 2,
            "nome": "PC SolarUltra",
            "preco": 3000,
            "bagde": "VIP",
            "limit": "Limitado",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc.jpg",
            "alt": "Imagem de PC da Nasa"
        }, {
            "id": 3,
            "nome": "GamerZone PC",
            "preco": 6000,
            "bagde": "Excelência",
            "limit": "3 modelos",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc.jpg",
            "alt": "Imagem de PC Gamer"
        }
    ];

    const Categorias = [
        {
            "id": 1,
            "titulo": "Space X PC",
            "min_info": "",
            "categorias": [
                {
                    "id": 1,
                    "src": "",
                    "alt": "",
                    "titulo": "",
                    "desc": ""
                }
            ]
        }
    ];

    return (
        <ContainerSessao className={style.container_home}>
            <Hero foco={"Imperial"} marca={"Electrónicos"} minInfo={"A excelência em tecnologia. Descubra uma curadoria exclusiva do hardware mais avançado do mundo, onde o desempenho encontra o luxo absoluto."} textoProd={
                <Link to={"/productos"} className={style.link_prods}>
                    Ver Productos
                </Link>
            } textoCon={"Contactar"} classNameBtnProd={style.btn_prod} classNameBtnCon={style.btn_con} />
            <ContainerSessao className={style.container_produtos}>
                <div className={style.area_produtos_home}>
                    <div className={style.destaque_prod}>
                        <div className={style.titulo_dest_prod}>
                            <h2>
                                Produtos em Destaque
                            </h2>
                        </div>
                        <div className={style.area_btn_dest}>
                            <Link to={"/productos"}>
                                <Button onClick={() => {
                                    scrollCima();
                                }} className={style.ver_todos_home} children={"Ver Todos"} />
                            </Link>
                        </div>
                    </div>
                    <ContainerSessao className={style.area_produtos_home}
                        children={
                            <>
                                <CardProdutos dados={Produtos} />
                            </>
                        } />
                </div>
            </ContainerSessao>
        </ContainerSessao>
    )
}



export default Home;