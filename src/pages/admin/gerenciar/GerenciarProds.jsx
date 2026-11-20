import style from './GerenciarProds.module.css';
import { useEffect, useState } from 'react';
import CardFormProds from "../../../components/cards/cardFormAdmin/cardFormProds/CardFormProds"
import CardProdGeren from '../../../components/cards/cardProdGeren/CardProdGeren';
import ContainerDiv from '../../../components/Common/container/ContainerDiv';
import Filtros from "../../../components/productos/Filtros";
import Categorias from "../../../components/data/Categorias.json";
import CardAct from '../../../components/cards/cardFormAdmin/cardAct/CardAct';
import CardMsg from '../../../components/cards/cardMsg/CardMsg';

const GerenciarProds = () => {

    const [modalAberto, setModalAberto] = useState(false);
    const [showCardMsg, setShowCardMsg] = useState(false);
    const [dadosModal, setDadosModal] = useState([]);
    const [dadosMsg, setDadosMsg] = useState([]);
    const produtosTeste = localStorage.getItem("produtosBanco");
    const ItensTeste = produtosTeste ? JSON.parse(produtosTeste) : [
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

    const [dadosFiltrados, setDadosFiltrados] = useState(ItensTeste);

    const onClickControlModal = (val) => {
        setModalAberto(val);
    };

    const onClickMostrarModal = (idProd) => {
        setDadosModal(ItensTeste.find((Prod) => Prod.id === idProd));
        onClickControlModal(true);
    };

    const onChangeFiltros = (categoria) => {
        if (categoria !== "todas") {
            setDadosFiltrados(ItensTeste.filter((iten) => iten.categorias === categoria));
        } else {
            setDadosFiltrados(ItensTeste);
        }
    };

    const onClickPrimeiros = (id, tipo) => {
        if (tipo === 0) {
            onClickRemoverPrimeiros(id);
            return;
        }

        onClickAdicionarPrimeiros(id);
    }

    const onClickRemoverPrimeiros = (id) => {
        console.log(dadosFiltrados);
        const listaPrimeiros = dadosFiltrados.filter((prim) => prim.primeiros === true);
        if (listaPrimeiros.length < 2) {
            alert("Limite mínimo de 1 produto em destaque atingido.Pelo menus tenha produto em destaque!");
            return;
        }

        const objPrimeirosRemovido = dadosFiltrados.map((item) => {
            if (item.id === id) {
                return { ...item, primeiros: false }
            }

            return item;
        });


        setDadosFiltrados(objPrimeirosRemovido);
        // const produtosTeste = localStorage.getItem("produtosBanco");
        localStorage.setItem("produtosBanco", JSON.stringify(objPrimeirosRemovido));
    };

    const onClickAdicionarPrimeiros = (id) => {
        console.log("Entrou");

        const prod = ItensTeste.find((prod) => prod.id === id);

        if (!prod) {
            return;
        };

        const listaPrimeiros = dadosFiltrados.filter((prim) => prim.primeiros === true);

        if (!prod.primeiros && listaPrimeiros.length >= 3) {
            alert("Limite máximo de 3 produtos em destaque atingido. Remova um primeiro!");
            return;
        }

        const objPrimeirosAdicionar = dadosFiltrados.map((item) => {
            if (item.id === id) {
                return { ...item, primeiros: true }
            }

            return item;
        });

        setDadosFiltrados(objPrimeirosAdicionar);
        localStorage.setItem("produtosBanco", JSON.stringify(objPrimeirosAdicionar));
    };

    const onClickFiltrar = (id) => {
        const prims = dadosFiltrados.filter((visivel) => visivel.primeiros === true);

        if (prims.length < 2) {
            alert("Pra eliminar o último produto em destaque. Primeiro destaque um outro produto no lugar dele.");
            return;
        };
        const dadosEliminar = dadosFiltrados.filter((dados) => dados.id === id);
        setDadosMsg(dadosEliminar);
        setShowCardMsg(true);
    };

    const onClickEliminarProd = () => {
        const dadosEliminar = dadosFiltrados.filter((dados) => dados.id !== dadosMsg[0]?.id);
        setDadosFiltrados(dadosEliminar);
        setShowCardMsg(false);
        localStorage.setItem("produtosBanco", JSON.stringify(dadosEliminar));
    };
    // useEffect(() => {
    //     localStorage.setItem("prodsGeren", [JSON.stringify(ItensTeste)]);
    // }, []);

    return (
        <>
            <h2 className={style.titulo_geren}>Gerir produtos</h2>
            <Filtros onChange={(cat) => { onChangeFiltros(cat) }} categorias={Categorias} nome={"filtrar_itens_geren"} id={"filtrar_itens_geren"} />
            <ContainerDiv className={style.area_cont_geren}>
                <div className={style.area_scroll}>
                    <CardProdGeren ItensGeren={dadosFiltrados} onClickMostrarModal={(idProd) => { onClickMostrarModal(idProd) }} onClickPrimeiros={(id, tipo) => { onClickPrimeiros(id, tipo) }} onClickApagarProd={(id) => { onClickFiltrar(id) }} />
                </div>
                <CardAct showModal={modalAberto} onClickControlModal={(val) => { onClickControlModal(val) }} children={<CardFormProds tipo={true} dadosAct={dadosModal} />} />
                <CardMsg dadosProd={dadosMsg} showCardMsg={showCardMsg} onClickOcultarCadMsg={() => { setShowCardMsg(false) }} onClickEliminar={() => { onClickEliminarProd(); }} mensagem={`Tem certeza de que deseja eliminar o produto `} tipo={true} />
            </ContainerDiv>
        </>
    );
}

export default GerenciarProds;