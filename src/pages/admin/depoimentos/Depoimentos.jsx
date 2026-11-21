import style from './Depoimentos.module.css';
import ContainerDiv from '../../../components/Common/container/ContainerDiv';
import CardFormDepoimentos from '../../../components/cards/cardFormAdmin/cardFormDeps/CardFormDeps';
import Button from '../../../components/button/Button';
import Img from '../../../components/img/Img';
import Trocar from "../../../assets/icons/trocar.svg";
import { useState } from 'react';
import CardDepGeren from '../../../components/cards/cardDepGeren/CardDepGeren';
import CardAct from '../../../components/cards/cardFormAdmin/cardAct/CardAct';
import scrollCima from '../../../utils/scrollCima';
import CardMsg from '../../../components/cards/cardMsg/CardMsg';

const Depoimentos = () => {

    const depTestes = localStorage.getItem("depoimentosBancos");
    const DepoimentosClientes = depTestes ? JSON.parse(depTestes) : [
        {
            "id": 0,
            "nome": "Sem Depoimentos",
            "iniciais": "SD",
            "visivel": false,
            "depoimento": "Ainda sem nenhum depoimento adiciona ao site."
        }
    ];

    const [showGerenciar, setShowGerenciar] = useState(false);
    const [depoimentos, setDepoimentos] = useState(DepoimentosClientes);
    const [depAlterar, setDepAltera] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const contaVisivel = depoimentos.filter((dep) => dep.visivel === true);
    const [showCardMsg, setShowCardMsg] = useState(false);
    const [dadosMsg, setDadosMsg] = useState([]);
    const onClickShow = (val, tipo) => {
        if (tipo === 1) {
            setShowGerenciar(val);
            return;
        }

        setShowModal(val);
    };

    const onClickMostrarModal = (idDep) => {

        setShowModal(true);
        const depoimento = depoimentos.filter((dep) => dep.id === idDep);
        console.log(depoimento);

        setDepAltera(depoimento);

    };

    const onClickVisivel = (id, tipo) => {
        console.log(id + " " + tipo);

        if (tipo === 0) {
            onClickRemoverVisivel(id);
            return;
        }

        onClickAdicionarVisivel(id);
    }

    const onClickRemoverVisivel = (id) => {
        console.log(depoimentos);
        const visiveis = depoimentos.filter((visivel) => visivel.visivel === true);

        if (visiveis.length < 2) {
            alert("No mínimo você precisa ter um depoimento para mostrar.");
            return;
        };

        const objPrimeirosRemovido = depoimentos.map((item) => {
            if (item.id === id) {
                return { ...item, visivel: false }
            }

            return item;
        });

        setDepoimentos(objPrimeirosRemovido);
        localStorage.setItem("depoimentosBancos", JSON.stringify(objPrimeirosRemovido));
    };

    const onClickAdicionarVisivel = (id) => {
        const existe = depoimentos.find((visivel) => visivel.id === id);

        if (!existe) {
            return;
        }

        const visiveis = depoimentos.filter((visivel) => visivel.visivel === true);

        if (!existe.visivel && visiveis.length >= 3) {
            alert("Limite máximo de 3 depoimentos em visíveis. Remova um primeiro!");
            return;
        }

        const objPrimeirosAdicionar = depoimentos.map((item) => {
            if (item.id === id) {
                return { ...item, visivel: true }
            }

            return item;
        });

        setDepoimentos(objPrimeirosAdicionar);
        localStorage.setItem("depoimentosBancos", JSON.stringify(objPrimeirosAdicionar));
    };

    const onClickFiltrar = (id) => {
        const visiveis = depoimentos.filter((visivel) => visivel.visivel === true);
        const depVisivel = depoimentos.filter((visivel) => visivel.id === id)
        if (visiveis.length < 2 && depVisivel.visivel !== true) {
            alert("Pra eliminar o último depoimento visível. Primeiro marque um outro depoimento como visível.");
            return;
        };

        const dadosEliminar = depoimentos.filter((dados) => dados.id === id);
        setDadosMsg(dadosEliminar[0]);
        setShowCardMsg(true);
    };

    const onClickElminarDep = () => {
        const dadosEliminar = depoimentos.filter((dados) => dados.id !== dadosMsg?.id);
        setDepoimentos(dadosEliminar);
        setShowCardMsg(false);
        console.log(dadosEliminar);
        localStorage.setItem("depoimentosBancos", JSON.stringify(dadosEliminar));
    };

    return (
        <>
            <h2 className={style.titulo_dep}> {showGerenciar ? ("Gerenciar Depoimentos") : ("Adicionar Depoimentos")}</h2>
            <ContainerDiv className={showGerenciar ? style.area_cont_dep_dep : style.area_cont_dep_add}>
                {showGerenciar ? (
                    <>
                        <div className={style.area_scroll_dep}>
                            <CardDepGeren deppoimentos={depoimentos} onClickMostrarModal={(id) => { onClickMostrarModal(id) }} onClickFiltrar={(id) => { onClickFiltrar(id) }} onClickVisivel={(id, tipo) => { onClickVisivel(id, tipo) }} />
                        </div>
                        <CardAct showModal={showModal} tipo={true} onClickControlModal={() => { onClickShow(false, 0) }} children={
                            <CardFormDepoimentos onClickAtualizacao={() => {
                                onClickShow(false, 0)
                                const depTestes = localStorage.getItem("depoimentosBancos");
                                const deps = depTestes ? JSON.parse(depTestes) : [
                                    {
                                        "id": 0,
                                        "nome": "Sem Depoimentos",
                                        "iniciais": "SD",
                                        "visivel": false,
                                        "depoimento": "Ainda sem nenhum depoimento adiciona ao site."
                                    }
                                ]

                                setDepoimentos(deps);
                            }} onClickShow={() => {
                                scrollCima();
                                onClickShow(true, 1)
                                const depTestes = localStorage.getItem("depoimentosBancos");
                                const deps = depTestes ? JSON.parse(depTestes) : [
                                    {
                                        "id": 0,
                                        "nome": "Sem Depoimentos",
                                        "iniciais": "SD",
                                        "visivel": false,
                                        "depoimento": "Ainda sem nenhum depoimento adiciona ao site."
                                    }
                                ]
                                setDepoimentos(deps);
                            }} depoimentoCliente={depAlterar[0]} contaVisivel={contaVisivel.length} tipo={true} />
                        } />
                        <CardMsg dadosProd={dadosMsg} showCardMsg={showCardMsg} onClickOcultarCadMsg={() => { setShowCardMsg(false) }} onClickEliminar={() => { onClickElminarDep() }} tipo={1} />
                    </>
                ) : (
                    <CardFormDepoimentos onClickShow={() => {
                        scrollCima();
                        onClickShow(true, 1)
                        const depTestes = localStorage.getItem("depoimentosBancos");
                        const deps = depTestes ? JSON.parse(depTestes) : [
                            {
                                "id": 0,
                                "nome": "Sem Depoimentos",
                                "iniciais": "SD",
                                "visivel": false,
                                "depoimento": "Ainda sem nenhum depoimento adiciona ao site."
                            }
                        ]
                        setDepoimentos(deps);
                    }} dadodo={depoimentos} contaVisivel={contaVisivel.length} />
                )}
            </ContainerDiv>
            <div className={style.area_control_dep}>
                <Button className={style.btn_contol_area} children={
                    <Img src={Trocar} alt={"Ícone de troca"} className={style.icone_resumo} />
                } onClick={() => {
                    onClickShow(showGerenciar ? false : true, 1);
                    scrollCima();
                    const depTestes = localStorage.getItem("depoimentosBancos");
                    const deps = depTestes ? JSON.parse(depTestes) : [
                        {
                            "id": 0,
                            "nome": "Sem Depoimentos",
                            "iniciais": "SD",
                            "visivel": false,
                            "depoimento": "Ainda sem nenhum depoimento adiciona ao site."
                        }
                    ]
                    setDepoimentos(deps);
                }} />
            </div>
        </>
    );
}

export default Depoimentos;
