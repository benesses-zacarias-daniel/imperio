import { useEffect, useState } from "react";
import CardProdutos from "../../components/cards/CardProduto/CardProduto";
import ContainerDiv from "../../components/Common/container/ContainerDiv";
import Filtros from "../../components/productos/Filtros";
import style from "./Productos.module.css";
import Button from "../../components/button/Button";
import CardDetalhes from "../../components/cards/cardDetalhes/CardDetalhes";

//Dados
import ProductoDados from "../../components/data/ProductosDados.json";
import Categorias from "../../components/data/Categorias.json";
import dividirGrupoProdutos from "../../utils/dividirGrupoProductos";

const Productos = () => {

    const [inicio, setInicio] = useState(0);
    const [fim, setFim] = useState(3);
    const [dadosMostrar, setDadosMostrar] = useState(dividirGrupoProdutos(ProductoDados, inicio, fim));
    const [showDetalhes, setShowDetalhes] = useState(false);
    const [dadoDetalhes, setDadosDetalhes] = useState([]);

    const onChangeFiltros = (categoria) => {
        if (categoria !== "todas") {
            const novosDados = ProductoDados.filter((iten) => iten.categorias === categoria);
            setDadosMostrar(novosDados);

            return;
        }

        setDadosMostrar(ProductoDados);
    };

    const onClickMostrarDetalhes = (id) => {
        const dadosDetalhes = ProductoDados.filter((Prod) => Prod.id === id);

        setDadosDetalhes(dadosDetalhes);
        setShowDetalhes(true);
    }

    const onClickOcultar = () => {
        setShowDetalhes(false);
    }

    const onClickMudarGrupo = (tipo) => {
        if (tipo === 0) {
            if (inicio === 0) { return; }
            setFim(inicio);
            setInicio(inicio - 3);
        } else {
            if (fim >= ProductoDados.length) {
                return;
            }

            setInicio(fim);
            setFim(fim + 3);
        }
    }

    useEffect(() => {
        setDadosMostrar(
            dividirGrupoProdutos(ProductoDados, inicio, fim)
        );
    }, [inicio, fim]);

    return (
        <ContainerDiv className={style.contianer_produtos}>
            <Filtros onChange={(cat) => { onChangeFiltros(cat) }} categorias={Categorias} nome={"filtrar_productos"} id={"filtrar_productos"} />
            <div className={style.container_area_prod}>
                <div className={style.area_titulo_cont_prod}>
                    <h3 className={style.titulo_prods}>Catálogo <p className={style.foco_prod}>Imperial</p></h3>
                    <p className={style.total_prods}>{ProductoDados.length} total itens</p>
                </div>
                <div className={style.area_produtos_pro}>
                    <CardProdutos dados={dadosMostrar} onClickDetalhes={(id) => { onClickMostrarDetalhes(id) }} />
                </div>
            </div>
            <div className={style.area_contador}>
                <Button children={"<"} onClick={() => { onClickMudarGrupo(0) }} className={style.btn_cont} />
                <Button children={">"} onClick={() => { onClickMudarGrupo(1) }} className={style.btn_cont} />
            </div>
            {showDetalhes && (
                <CardDetalhes dados={dadoDetalhes} onClickOcult={() => { onClickOcultar() }} />
            )}
        </ContainerDiv>)
}

export default Productos;