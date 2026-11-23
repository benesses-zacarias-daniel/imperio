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
import buscarProdutos from "../../utils/buscarProdutos";
import CardMensGeral from "../../components/cards/cardMensGeral/CardMensGeral";

const Produtos = () => {

    //Testes Usando o LocalStorage
    const [prodsImutaveis, setProdsImutaveis] = useState([]);
    const [inicio, setInicio] = useState(0);
    const [fim, setFim] = useState(3);
    const [dadosMostrar, setDadosMostrar] = useState([]);
    const [showDetalhes, setShowDetalhes] = useState(false);
    const [dadoDetalhes, setDadosDetalhes] = useState([]);
    const [msg, setMsg] = useState("");
    const [load, setLoad] = useState(false);

    const onChangeFiltros = (categoria) => {
        if (categoria !== "todas") {
            setDadosMostrar(prodsImutaveis.filter((iten) => iten.categorias === categoria));
        } else {
            setDadosMostrar(prodsImutaveis);
        }

        setInicio(0);
        setFim(3);
    };

    const onClickMostrarDetalhes = (id) => {
        const dadosDetalhes = prodsImutaveis.filter((Prod) => Prod.id === id);

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

            if (fim >= prodsImutaveis.length) {
                return;
            }

            setInicio(fim);
            setFim(fim + 3);
        }

        scrollCima()
    };

    const onClickFecharCardGeral = () => {
        setMsg("")
    };

    const produtosBusca = async () => {

        const { status, prod } = await buscarProdutos();
        console.log(prod);

        if (!status) {
            console.log("Não foi possível carregar os produtos. Usando dados de teste");
            setMsg("Não foi possível carregar os produtos. Usando Produtos de teste");

            const produtosDest = prod.filter((prodDest) => prodDest.primeiros === true);
            const produtosNorms = prod.filter((prodNormal) => prodNormal.primeiros === false);

            setProdsImutaveis([...produtosDest, ...produtosNorms]);
            setDadosMostrar(dividirGrupoProdutos([...produtosDest, ...produtosNorms], inicio, fim));
            setLoad(true);
            return;
        }

        const produtosDest = prod.filter((prodDest) => prodDest.primeiros === true);
        const produtosNorms = prod.filter((prodNormal) => prodNormal.primeiros === false);

        setProdsImutaveis([...produtosDest, ...produtosNorms]);
        setDadosMostrar(dividirGrupoProdutos([...produtosDest, ...produtosNorms], inicio, fim));
        setLoad(true);
    };

    useEffect(() => {
        produtosBusca();
    }, []);

    useEffect(() => {

        setDadosMostrar(
            dividirGrupoProdutos(prodsImutaveis, inicio, fim)
        );

    }, [prodsImutaveis, inicio, fim]);

    return (
        <>
            <ContainerDiv className={style.contianer_produtos}>
                <Filtros onChange={(cat) => { onChangeFiltros(cat) }} categorias={Categorias} nome={"filtrar_productos"} id={"filtrar_productos"} />
                <div className={style.container_area_prod}>
                    <div className={style.area_titulo_cont_prod}>
                        <h3 className={style.titulo_prods}>Catálogo <p className={style.foco_prod}>Imperial</p></h3>
                        <p className={style.total_prods}>Total {prodsImutaveis.length} itens</p>
                    </div>
                    <div className={style.area_produtos_pro}>
                        {load && (<CardProdutos dados={dadosMostrar} onClickDetalhes={(id) => { onClickMostrarDetalhes(id) }} />)}
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
            <CardMensGeral mens={msg} textoBtn={"Okay"} onClickFechar={() => { onClickFecharCardGeral() }} />
        </>
    )
}

export default Produtos;