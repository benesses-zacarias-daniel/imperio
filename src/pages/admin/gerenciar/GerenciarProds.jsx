import style from './GerenciarProds.module.css';
import { useEffect, useState } from 'react';
import CardFormProds from "../../../components/cards/cardFormAdmin/cardFormProds/CardFormProds"
import CardProdGeren from '../../../components/cards/cardProdGeren/CardProdGeren';
import ContainerDiv from '../../../components/Common/container/ContainerDiv';
import Filtros from "../../../components/productos/Filtros";
import Categorias from "../../../components/data/Categorias.json";
import CardAct from '../../../components/cards/cardFormAdmin/cardAct/CardAct';
import CardMsg from '../../../components/cards/cardMsg/CardMsg';
import CardMensGeral from '../../../components/cards/cardMensGeral/CardMensGeral';
import buscarProdutos from '../../../utils/buscarProdutos';
import atualizarProduto from '../../../utils/atualizarProduto';
import eliminarProduto from '../../../utils/eliminarProduto';

const GerenciarProds = () => {

    const [modalAberto, setModalAberto] = useState(false);
    const [showCardMsg, setShowCardMsg] = useState(false);
    const [dadosModal, setDadosModal] = useState([]);
    const [dadosMsg, setDadosMsg] = useState([]);
    const [msg, setMsg] = useState("");
    const [dadosImutaveis, setDadosImutaveis] = useState([]);
    const [load, setLoad] = useState(false);

    const [dadosFiltrados, setDadosFiltrados] = useState(dadosImutaveis);

    const onClickControlModal = (val) => {
        setModalAberto(val);
    };

    const onClickMostrarModal = (idProd) => {
        setDadosModal(dadosImutaveis.find((Prod) => Prod.id === idProd));
        onClickControlModal(true);
    };

    const onChangeFiltros = (categoria) => {
        if (categoria !== "todas") {
            setDadosFiltrados(dadosImutaveis.filter((iten) => iten.categorias === categoria));
        } else {
            setDadosFiltrados(dadosImutaveis);
        }
    };

    const onClickPrimeiros = (id, tipo) => {
        if (tipo === 0) {
            onClickRemoverPrimeiros(id);
            return;
        }

        onClickAdicionarPrimeiros(id);
    }

    const onClickRemoverPrimeiros = async (id) => {
        const listaPrimeiros = dadosImutaveis.filter((prim) => prim.primeiros === true);
        if (listaPrimeiros.length < 2) {
            setMsg("Limite mínimo de 1 produto em destaque atingido.Pelo menus tenha produto em destaque!");
            return;
        }

        await atualizarProduto({ "primeiros": false }, id);

        await buscarProdGeren();

    };

    const onClickAdicionarPrimeiros = async (id) => {

        const prod = dadosImutaveis.find((prod) => prod.id === id);

        if (!prod) {
            return;
        };

        const listaPrimeiros = dadosImutaveis.filter((prim) => prim.primeiros === true);

        if (!prod.primeiros && listaPrimeiros.length >= 3) {
            setMsg("Limite máximo de 3 produtos em destaque atingido. Remova um primeiro!");
            return;
        }

        await atualizarProduto({ "primeiros": true }, id);

        await buscarProdGeren();
    };

    const onClickFiltrar = (id) => {
        const prims = dadosImutaveis.filter((visivel) => visivel.primeiros === true);

        if (prims.length < 2) {
            setMsg("Pra eliminar o último produto em destaque. Primeiro destaque um outro produto no lugar dele.");

            return;
        };

        const dadosEliminar = dadosImutaveis.filter((dados) => dados.id === id);
        setDadosMsg(dadosEliminar);
        setShowCardMsg(true);
    };

    const onClickEliminarProd = async () => {

        await eliminarProduto(dadosMsg[0]?.id)

        await buscarProdGeren();

        setShowCardMsg(false);
    };

    const onClickFechar = () => {
        setMsg("")
    };

    const buscarProdGeren = async () => {

        const { prod, status } = await buscarProdutos();

        if (!status) {
            console.log("Erro ao buscar Produtos....Preenchendo com produtos de teste!");
            setMsg("Erro ao buscar Produtos....Preenchendo com produtos de teste!")
            setDadosImutaveis(prod);
            setDadosFiltrados(prod);
            setLoad(true);
            return;
        }

        console.log(prod);

        setDadosImutaveis(prod);
        setDadosFiltrados(prod);
        setLoad(true);

    };

    useEffect(() => {

        buscarProdGeren();

    }, []);

    return (
        <>
            <h2 className={style.titulo_geren}>Gerir produtos</h2>
            <Filtros onChange={(cat) => { onChangeFiltros(cat) }} categorias={Categorias} nome={"filtrar_itens_geren"} id={"filtrar_itens_geren"} />
            <ContainerDiv className={style.area_cont_geren}>
                <div className={style.area_scroll}>
                    {load && (<CardProdGeren ItensGeren={dadosFiltrados} onClickMostrarModal={(idProd) => { onClickMostrarModal(idProd) }} onClickPrimeiros={(id, tipo) => { onClickPrimeiros(id, tipo) }} onClickApagarProd={(id) => { onClickFiltrar(id) }} />)}
                </div>
                <CardAct showModal={modalAberto} onClickControlModal={(val) => { onClickControlModal(val) }} children={<CardFormProds tipo={true} dadosAct={dadosModal} onClickFecharCard={() => { onClickControlModal(false) }} />} />
                <CardMsg dadosProd={dadosMsg} showCardMsg={showCardMsg} onClickOcultarCadMsg={() => { setShowCardMsg(false) }} onClickEliminar={() => { onClickEliminarProd(); }} tipo={0} />
                <CardMensGeral mens={msg} textoBtn={"Okay"} onClickFechar={() => { onClickFechar() }} />
            </ContainerDiv>
        </>
    );
}

export default GerenciarProds;