import style from "./Produtos.module.css";
import { useEffect, useState } from "react";
import CardProdutos from "../../components/cards/cardProduto/CardProduto";
import ContainerDiv from "../../components/Common/container/ContainerDiv";
import Filtros from "../../components/productos/Filtros";
import Button from "../../components/button/Button";
import CardDetalhes from "../../components/cards/cardDetalhes/CardDetalhes";
import Img from "../../components/img/Img";
//Ícones
import SetaCima from "../../assets/icons/setaCim.svg";
import SetaBaixo from "../../assets/icons/setaBaix.svg";
//Dados
// import ProdutoDados from "../../components/data/ProdutosDados.json";
import Categorias from "../../components/data/Categorias.json";
import dividirGrupoProdutos from "../../utils/dividirGrupoProductos";
import scrollCima from "../../utils/scrollCima";

const Produtos = () => {

    //Testes Usando o LocalStorage
    const produtosTeste = localStorage.getItem("produtosBanco");
    const Prods = produtosTeste ? JSON.parse(produtosTeste) : [
        {
            "id": 0,
            "nome": "Ainda Sem Produtos",
            "preco": 0,
            "badge": "Sem badge",
            "primeiros": false,
            "desc": "",
            "src": "",
            "alt": "",
            "categorias": "",
            "detalhes": {
                "srcDetalhes": [
                    {
                        "id": 1,
                        "srcDet": "",
                        "srcThumb": "",
                        "alt": "",
                        "badge": ""
                    }],
                "especificacoes": []
            }
        }
    ];
    //Pequena alteração pra fazer o push
    const [inicio, setInicio] = useState(0);
    const [fim, setFim] = useState(3);
    const produtosDestaque = Prods.filter((prodFiltrado) => prodFiltrado.primeiros === true);
    const [dadosFiltrados, setDadosFiltrados] = useState([...produtosDestaque, ...Prods]);
    const [dadosMostrar, setDadosMostrar] = useState([]);
    const [showDetalhes, setShowDetalhes] = useState(false);
    const [dadoDetalhes, setDadosDetalhes] = useState([]);

    const onChangeFiltros = (categoria) => {
        if (categoria !== "todas") {
            setDadosFiltrados(Prods.filter((iten) => iten.categorias === categoria));
        } else {
            setDadosFiltrados(Prods);
        }

        setInicio(0);
        setFim(3);
    };

    const onClickMostrarDetalhes = (id) => {
        const dadosDetalhes = Prods.filter((Prod) => Prod.id === id);

        setDadosDetalhes(dadosDetalhes);
        setShowDetalhes(true);
    }

    const onClickOcultar = () => {
        setShowDetalhes(false);
    }

    const onClickMudarGrupo = (tipo) => {

        if (tipo === 0) {

            if (inicio <= 0) {
                return;
            }

            setFim(inicio);
            setInicio(inicio - 3);

        } else {

            if (fim >= dadosFiltrados.length) {
                return;
            }

            setInicio(fim);
            setFim(fim + 3);
        }

        scrollCima()
    }

    useEffect(() => {

        setDadosMostrar(
            dividirGrupoProdutos(dadosFiltrados, inicio, fim)
        );

    }, [dadosFiltrados, inicio, fim]);

    return (
        <>
            <ContainerDiv className={style.contianer_produtos}>
                <Filtros onChange={(cat) => { onChangeFiltros(cat) }} categorias={Categorias} nome={"filtrar_productos"} id={"filtrar_productos"} />
                <div className={style.container_area_prod}>
                    <div className={style.area_titulo_cont_prod}>
                        <h3 className={style.titulo_prods}>Catálogo <p className={style.foco_prod}>Imperial</p></h3>
                        <p className={style.total_prods}>{dadosFiltrados.length} total itens</p>
                    </div>
                    <div className={style.area_produtos_pro}>
                        <CardProdutos dados={dadosMostrar} onClickDetalhes={(id) => { onClickMostrarDetalhes(id) }} />
                    </div>
                </div>
            </ContainerDiv>
            <div className={style.area_coltrol_exib}>
                <Button children={
                    <Img src={SetaCima} alt={"Ícone de seta par cima"} className={style.icones_btn_control} />
                } onClick={() => { onClickMudarGrupo(0) }} className={style.btn_cont} />
                <Button children={
                    <Img src={SetaBaixo} alt={"Ícone de seta par baixo"} className={style.icones_btn_control} />
                } onClick={() => { onClickMudarGrupo(1) }} className={style.btn_cont} />
            </div>
            <CardDetalhes showDetalhes={showDetalhes} dados={dadoDetalhes} onClickOcult={() => { onClickOcultar() }} />
        </>
    )
}

export default Produtos;