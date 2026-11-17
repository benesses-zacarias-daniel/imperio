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
    const DepoimentosClientes = [
        {
            "id": 1,
            "nome": "Benesses Da Flora Daniel",
            "iniciais": "BF",
            "visivel": true,
            "depoimento": "Encontrei o smartphone e a TV que procurava com ótimo preço e garantia. A Imperial Electrónicos tem os melhores produtos do mercado sem dúvida."
        }, {
            "id": 2,
            "nome": "Ntxuphí Namoro",
            "iniciais": "NN",
            "visivel": false,
            "depoimento": "A Imperial Electrónicos ajudou-me a equipar o escritório da minha empresa com computadores e impressoras em tempo recorde. Profissionalismo puro!"
        }, {
            "id": 3,
            "nome": "Sesseneb Zacarias Daniel",
            "iniciais": "SD",
            "visivel": true,
            "depoimento": "O processo de compra da nossa geleira e máquina de lavar foi extremamente transparente e com entrega rápida. Recomendo vivamente a equipa."
        }
    ];

    const DepoimentosPadrao = [
        {
            "id": 0,
            "nome": "Sem Depoimentos",
            "iniciais": "SD",
            "visivel": false,
            "depoimento": "Ainda sem nenhum depoimento adiciona ao site."
        }
    ];

    const [showGerenciar, setShowGerenciar] = useState(false);
    const [depoimentos, setDepoimentos] = useState(DepoimentosClientes ? DepoimentosClientes : DepoimentosPadrao);
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

        const objPrimeirosRemovido = depoimentos.map((item) => {
            if (item.id === id) {
                return { ...item, visivel: false }
            }

            return item;
        });

        setDepoimentos(objPrimeirosRemovido);
    };

    const onClickAdicionarVisivel = (id) => {
        const objPrimeirosAdicionar = depoimentos.map((item) => {
            if (item.id === id) {
                return { ...item, visivel: true }
            }

            return item;
        });

        setDepoimentos(objPrimeirosAdicionar);
    };

    const onClickFiltrar = (id) => {
        const dadosEliminar = depoimentos.filter((dados) => dados.id === id);
        setDadosMsg(dadosEliminar[0]);
        setShowCardMsg(true);
    };

    const onClickElminarDep = () => {
        const dadosEliminar = depoimentos.filter((dados) => dados.id !== dadosMsg?.id);
        setDepoimentos(dadosEliminar);
        setShowCardMsg(false);
        console.log(dadosEliminar);

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
                            <CardFormDepoimentos depoimentoCliente={depAlterar[0]} contaVisivel={contaVisivel.length} tipo={true} />
                        } />
                        <CardMsg dadosProd={dadosMsg} showCardMsg={showCardMsg} onClickOcultarCadMsg={() => { setShowCardMsg(false) }} onClickEliminar={() => { onClickElminarDep(); }} mensagem={"Realmente tem certeza de que deseja eliminar o este depoimento?"} />
                    </>
                ) : (
                    <CardFormDepoimentos dadodo={depoimentos} contaVisivel={contaVisivel.length} />
                )}
            </ContainerDiv>
            <div className={style.area_control_dep}>
                <Button className={style.btn_contol_area} children={
                    <Img src={Trocar} alt={"Ícone de troca"} className={style.icone_resumo} />
                } onClick={() => {
                    onClickShow(showGerenciar ? false : true, 1);
                    scrollCima();
                }} />
            </div>
        </>
    );
}

export default Depoimentos;
