import style from "./Home.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Hero from "../../components/cards/Hero/Hero";
import ContainerDiv from "../../components/Common/container/ContainerDiv";
import scrollCima from "../../utils/scrollCima";
import CardProdutos from "../../components/cards/cardProduto/CardProduto";
//Ícones Categorias
import EstrelaVerify from "../../assets/icons/verificado.svg"
import CarroEntrega from "../../assets/icons/carroEntrega.svg"
import EscudoVerificado from "../../assets/icons/escudoVerificado.svg"
import Suporte from "../../assets/icons/suporte.svg"
import CardCategoria from "../../components/cards/cardCategoria/CardCategoria";
import ContactarGrupo from "../../components/home/ContactarGrupo";
import CardDetalhes from "../../components/cards/cardDetalhes/CardDetalhes";
//Dados
// import ProdutoDados from "../../components/data/ProdutosDados.json";
// import DepoimentosClientes from "../../components/data/DepoimentosClientes.json";
import CardDepoimentos from "../../components/cards/cardDepoimentos/CardDepoimentos";
import buscarProdutos from "../../utils/buscarProdutos";
import buscarDepoimentos from "../../utils/buscarDepoimentos";
import CardMensGeral from "../../components/cards/cardMensGeral/CardMensGeral";

const Home = () => {
    //Testes Usando o LocalStorage
    ///
    const [depsMostrar, setDepoimentos] = useState()
    const [produtosDestaque, setProdutosDestaque] = useState();

    const num1 = "258 84 975 4315";
    const linkWhatsApp1 = `https://wa.me/${num1}?text=Olá, tudo bem? Gostaria de saber mais sobre a Imperial Electronicos!`;

    const Categorias = [
        {
            "id": 1,
            "titulo": "A Experiência Imperial",
            "min_info": "",
            "categorias": [
                {
                    "id": 1,
                    "src": EstrelaVerify,
                    "alt": "Ícone de verificado",
                    "titulo": "Produtos Originais",
                    "desc": "Garantia absoluta de autenticidade em cada componente e acessório."
                },
                {
                    "id": 2,
                    "src": CarroEntrega,
                    "alt": "Ícone de Carro de entrega",
                    "titulo": "Entrega Segura",
                    "desc": "Logística premium com rastreamento em tempo real e seguro total."
                },
                {
                    "id": 3,
                    "src": EscudoVerificado,
                    "alt": "Ícone de Escudo",
                    "titulo": "Pagamento Seguro",
                    "desc": "AS mais modernas tecnologias de criptografia para sua total tranquilidade."
                }, {
                    "id": 4,
                    "src": Suporte,
                    "alt": "Ícone de pessoa com HadPhones",
                    "titulo": "Suporte 24/7",
                    "desc": "Concierge dedicado para resolver qualquer dúvida a qualquer momento."
                }
            ]
        }
    ];

    const [showDetalhes, setShowDetalhes] = useState(false);
    const [dadoDetalhes, setDadosDetalhes] = useState([]);
    const [load, setLoad] = useState(false);
    const [msg, setMsg] = useState("");

    const onClickMostrarDetalhes = (id) => {
        const dadosDetalhes = produtosDestaque.filter((Prod) => Prod.id === id);

        setDadosDetalhes(dadosDetalhes);
        setShowDetalhes(true);
    };

    const onClickOcultar = () => {
        setShowDetalhes(false);
    };
    const onClickFecharCardGeral = () => {
        setMsg("")
    };

    const buscarProds = async () => {

        const { prod, status } = await buscarProdutos();

        console.log(prod);

        if (!status) {

            console.log("Não foi possível carregar os produtos. Usando dados de teste");

            setMsg("Não foi possível carregar os produtos. Usando Produtos de teste!");

            const destaque = prod.filter((prodDest) => prodDest.primeiros === true);

            setProdutosDestaque(destaque);
            setLoad(true);
            return;
        }

        const destaque = prod.filter((prodDest) => prodDest.primeiros === true);

        setProdutosDestaque(destaque);
        setLoad(true);
    };

    const buscarDeps = async () => {

        const { dep, status } = await buscarDepoimentos();

        if (!status) {
            console.log("Não foi possível carregar os depoimentos. Usando dados de teste");
            const depsDest = dep.filter((deps) => deps.visivel === true);

            setDepoimentos(depsDest);
            return;
        }

        const depsDest = dep.filter((deps) => deps.visivel === true);

        setDepoimentos(depsDest);

    };

    useEffect(() => {
        buscarProds();
        buscarDeps();
    }, []);

    return (
        <>
            <ContainerDiv className={style.container_home}>
                <Hero foco={"Imperial"} marca={"Electrónicos"} minInfo={"A excelência em tecnologia. Descubra uma curadoria exclusiva do hardware mais avançado do mundo, onde o desempenho encontra o luxo absoluto."} textoProd={
                    <Link to={"/productos"} className={style.link_prods} onClick={() => { scrollCima(); }}>
                        Ver Productos
                    </Link>
                } textoCon={
                    <a href={linkWhatsApp1} className={style.link_con_hero}>
                        Contactar
                    </a>
                } classNameBtnProd={style.btn_prod} classNameBtnCon={style.btn_con} />
                <ContainerDiv className={style.container_produtos}>
                    <div className={style.area_produtos_home}>
                        <div className={style.destaque_prod}>
                            <div className={style.titulo_dest_prod}>
                                <h2>
                                    Produtos em Destaque
                                </h2>
                            </div>
                            <div className={style.area_btn_dest}>
                                <Link to={"/produtos"}>
                                    <Button onClick={() => {
                                        scrollCima();
                                    }} className={style.ver_todos_home} children={"Ver Todos"} />
                                </Link>
                            </div>
                        </div>
                        {load && (<ContainerDiv className={style.area_prods_home}
                            children={
                                <CardProdutos produtos={produtosDestaque} onClickDetalhes={(id) => { onClickMostrarDetalhes(id) }} />
                            } />)}
                        <CardCategoria dados={Categorias[0]} />
                    </div>
                </ContainerDiv>
                <CardDepoimentos depoimentos={depsMostrar} minInfoDep={"A confiança dos nossos parceiros é o nosso maior património."} tituloDep={"O que dizem os nossos clientes"} />
                <ContactarGrupo />
            </ContainerDiv>
            <CardDetalhes showDetalhes={showDetalhes} dados={dadoDetalhes} onClickOcult={() => { onClickOcultar() }} />
            <CardMensGeral mens={msg} textoBtn={"Okay"} onClickFechar={() => { onClickFecharCardGeral() }} />
        </>
    )
}



export default Home;