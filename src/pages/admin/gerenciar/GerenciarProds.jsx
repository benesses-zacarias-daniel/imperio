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
import supabase from '../../../../services/supabase';

const GerenciarProds = () => {

    const [modalAberto, setModalAberto] = useState(false);
    const [showCardMsg, setShowCardMsg] = useState(false);
    const [dadosModal, setDadosModal] = useState([]);
    const [dadosMsg, setDadosMsg] = useState([]);
    const [msg, setMsg] = useState("");

    const produtosTeste = localStorage.getItem("produtosBanco");
    const ItensTeste = produtosTeste ? JSON.parse(produtosTeste) : [
        {
            "id": 0,
            "nome": "Ainda Sem Produtos",
            "preco": 0,
            "badge": "Sem badge",
            "primeiros": false,
            "desc": "",
            "src": "#",
            "alt": "",
            "categorias": "",
            "detalhes": {
                "srcDetalhes": [
                    {
                        "id": 1,
                        "srcDet": "#",
                        "srcThumb": "#",
                        "alt": "",
                        "badge": ""
                    }],
                "especificacoes": []
            }
        }
    ];

    const [dadosImutaveis, setDadosImutaveis] = useState(null);
    useEffect(async () => {

        try {

            const { data, error } = await supabase().from("produtos").select("*");

            if (error) {
                console.error("Erro ao buscar produtos: " + error.message);
                return;
            }

            console.log("Produtos buscados com sucesso", data);
            setDadosImutaveis(data);
        } catch (error) {
            console.error("Erro ao buscar produtos: " + error.message);
        }

    }, []);

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

    const onClickRemoverPrimeiros = (id) => {
        console.log(dadosFiltrados);
        const listaPrimeiros = dadosFiltrados.filter((prim) => prim.primeiros === true);
        if (listaPrimeiros.length < 2) {
            //alert("Limite mínimo de 1 produto em destaque atingido.Pelo menus tenha produto em destaque!");
            setMsg("Limite mínimo de 1 produto em destaque atingido.Pelo menus tenha produto em destaque!");
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

        const prod = dadosImutaveis.find((prod) => prod.id === id);

        if (!prod) {
            return;
        };

        const listaPrimeiros = dadosFiltrados.filter((prim) => prim.primeiros === true);

        if (!prod.primeiros && listaPrimeiros.length >= 3) {
            setMsg("Limite máximo de 3 produtos em destaque atingido. Remova um primeiro!");
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
            setMsg("Pra eliminar o último produto em destaque. Primeiro destaque um outro produto no lugar dele.");

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

    const onClickFechar = () => {
        setMsg("")
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
                <CardAct showModal={modalAberto} onClickControlModal={(val) => { onClickControlModal(val) }} children={<CardFormProds tipo={true} dadosAct={dadosModal} onClickFecharCard={() => { onClickControlModal(false) }} />} />
                <CardMsg dadosProd={dadosMsg} showCardMsg={showCardMsg} onClickOcultarCadMsg={() => { setShowCardMsg(false) }} onClickEliminar={() => { onClickEliminarProd(); }} tipo={0} />
                <CardMensGeral mens={msg} textoBtn={"Okay"} onClickFechar={() => { onClickFechar() }} />
            </ContainerDiv>
        </>
    );
}

export default GerenciarProds;