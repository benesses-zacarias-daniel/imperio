import { useState } from "react";
import CardProdutos from "../../components/cards/CardProduto/CardProduto";
import ContainerDiv from "../../components/Common/container/ContainerDiv";
import Filtros from "../../components/productos/Filtros";
import style from "./Productos.module.css";
import Button from "../../components/button/Button";
import CardDetalhes from "../../components/cards/cardDetalhes/CardDetalhes";

//Dados
import ProductoDados from "../../components/data/ProductosDados.json";
import Categorias from "../../components/data/Categorias.json";

const Productos = () => {

    const [dadosMostrar, setDadosMostrar] = useState(ProductoDados);
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

    return (
        <ContainerDiv className={style.contianer_produtos}>
            <Filtros onChange={(cat) => { onChangeFiltros(cat) }} categorias={Categorias} nome={"filtrar_productos"} id={"filtrar_productos"} />
            <div className={style.container_area_prod}>
                <div className={style.area_titulo_cont_prod}>
                    <h3 className={style.titulo_prods}>Catálogo <p className={style.foco_prod}>Imperial</p></h3>
                    <p className={style.total_prods}>{dadosMostrar.length} total itens</p>
                </div>
                <div className={style.area_produtos_pro}>
                    <CardProdutos dados={dadosMostrar} onClickDetalhes={(id) => { onClickMostrarDetalhes(id) }} />
                </div>
            </div>
            <div className={style.area_contador}>
                <div className={style.btn_contador}>{"<"}</div>
                <div className={style.contadores}>
                    <Button children={"1"} onClick={() => { }} className={style.btn_cont} />
                    <Button children={"2"} onClick={() => { }} className={style.btn_cont} />
                    <Button children={"3"} onClick={() => { }} className={style.btn_cont} />
                    <Button children={"4"} onClick={() => { }} className={style.btn_cont} />
                    <Button children={"5"} onClick={() => { }} className={style.btn_cont} />
                </div>
                <div className={style.btn_contador}>{">"}</div>
            </div>
            {showDetalhes && (
                <CardDetalhes dados={dadoDetalhes} onClickOcult={() => { onClickOcultar() }} />
            )}
        </ContainerDiv>)
}

export default Productos;