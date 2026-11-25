import style from './Depoimentos.module.css';
import ContainerDiv from '../../../components/Common/container/ContainerDiv';
import CardFormDepoimentos from '../../../components/cards/cardFormAdmin/cardFormDeps/CardFormDeps';
import Button from '../../../components/button/Button';
import Img from '../../../components/img/Img';
import Trocar from "../../../assets/icons/trocar.svg";
import { useEffect, useState } from 'react';
import CardDepGeren from '../../../components/cards/cardDepGeren/CardDepGeren';
import CardAct from '../../../components/cards/cardFormAdmin/cardAct/CardAct';
import scrollCima from '../../../utils/scrollCima';
import CardMsg from '../../../components/cards/cardMsg/CardMsg';
import CardMensGeral from '../../../components/cards/cardMensGeral/CardMensGeral';
import atualzarDepoimento from '../../../utils/atualizarDepoimento';
import buscarDepoimentos from '../../../utils/buscarDepoimentos';
import eliminarDepoimento from '../../../utils/eliminarDepoimento';

const Depoimentos = () => {

    const [depoimentosImutaveis, setDepoimentosImutaveis] = useState([]);
    const [depoimentos, setDepoimentos] = useState([]);
    const [showGerenciar, setShowGerenciar] = useState(false);
    const [depAlterar, setDepAltera] = useState([]);
    const [msg, setMsg] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [contaVisivel, setContaVisivel] = useState(0);
    const [showCardMsg, setShowCardMsg] = useState(false);
    const [dadosMsg, setDadosMsg] = useState([]);
    const [load, setLoad] = useState(false);

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

    const onClickRemoverVisivel = async (id) => {
        console.log(depoimentos);
        const visiveis = depoimentosImutaveis.filter((visivel) => visivel.visivel === true);

        if (visiveis.length < 2) {
            setMsg("No mínimo você precisa ter um depoimento para mostrar.");
            return;
        };

        await atualzarDepoimento({ "visivel": false }, id);

        await buscarDeps();
    };

    const onClickAdicionarVisivel = async (id) => {
        const existe = depoimentosImutaveis.find((visivel) => visivel.id === id);

        if (!existe) {
            return;
        }

        const visiveis = depoimentosImutaveis.filter((visivel) => visivel.visivel === true);

        if (!existe.visivel && visiveis.length >= 3) {
            setMsg("Limite máximo de 3 depoimentos em visíveis. Remova um primeiro!");
            return;
        }

        await atualzarDepoimento({ "visivel": true }, id)

        await buscarDeps();
    };

    const onClickFiltrar = (id) => {
        const visiveis = depoimentosImutaveis.filter((visivel) => visivel.visivel === true);
        const depVisivel = depoimentosImutaveis.filter((visivel) => visivel.id === id)
        if (visiveis.length < 2 && depVisivel.visivel !== true) {
            setMsg("Pra eliminar o último depoimento visível. Primeiro marque um outro depoimento como visível.");
            return;
        };

        const dadosEliminar = depoimentosImutaveis.filter((dados) => dados.id === id);
        setDadosMsg(dadosEliminar[0]);
        setShowCardMsg(true);
    };

    const onClickElminarDep = async () => {

        await eliminarDepoimento(dadosMsg?.id)

        await buscarDeps();

        setShowCardMsg(false);
    };

    const onClickFechar = () => {
        setMsg("")
    };

    const buscarDeps = async () => {

        const { dep, status } = await buscarDepoimentos();

        if (!status) {
            setMsg("Erro ao buscar depoimentos...Preenchendo com depoimentos de teste");
            setDepoimentosImutaveis(dep);

            const conta = depoimentosImutaveis.filter((depsV) => depsV.visivel === true);

            setContaVisivel(conta.length);

            return;
        }

        setDepoimentosImutaveis(dep);
        setDepoimentos(depoimentosImutaveis);

        const conta = depoimentosImutaveis.filter((depsV) => depsV.visivel === true);

        setContaVisivel(conta.length);

    };

    useEffect(() => {

        buscarDeps();

    }, []);

    return (
        <>
            <h2 className={style.titulo_dep}> {showGerenciar ? ("Gerenciar Depoimentos") : ("Adicionar Depoimentos")}</h2>
            <ContainerDiv className={showGerenciar ? style.area_cont_dep_dep : style.area_cont_dep_add}>
                {showGerenciar ? (
                    <>
                        <div className={style.area_scroll_dep}>
                            {load && (
                                <CardDepGeren deppoimentos={depoimentos} onClickMostrarModal={(id) => { onClickMostrarModal(id) }} onClickFiltrar={(id) => { onClickFiltrar(id) }} onClickVisivel={(id, tipo) => { onClickVisivel(id, tipo) }} />
                            )}
                        </div>
                        <CardAct showModal={showModal} tipo={true} onClickControlModal={() => { onClickShow(false, 0) }} children={
                            <CardFormDepoimentos onClickAtualizacao={async () => {
                                onClickShow(false, 0)

                                await buscarDepoimentos();
                            }} onClickShow={async () => {
                                scrollCima();
                                onClickShow(true, 1);
                                await buscarDepoimentos();
                            }} depoimentoCliente={depAlterar[0]} contaVisivel={contaVisivel.length} tipo={true} />
                        } />
                        <CardMsg dadosProd={dadosMsg} showCardMsg={showCardMsg} onClickOcultarCadMsg={() => { setShowCardMsg(false) }} onClickEliminar={() => { onClickElminarDep() }} tipo={1} />
                        <CardMensGeral mens={msg} textoBtn={"Okay"} onClickFechar={() => { onClickFechar() }} />
                    </>
                ) : (
                    <CardFormDepoimentos onClickShow={() => {
                        scrollCima();
                        onClickShow(true, 1);
                        buscarDeps();
                        setLoad(true);
                    }} dadodo={depoimentos} contaVisivel={contaVisivel.length} />
                )}
            </ContainerDiv>
            <div className={style.area_control_dep}>
                <Button className={style.btn_contol_area} children={
                    <Img src={Trocar} alt={"Ícone de troca"} className={style.icone_resumo} />
                } onClick={() => {
                    onClickShow(showGerenciar ? false : true, 1);
                    scrollCima();
                    buscarDeps();
                    setLoad(true);
                }} />
            </div>
        </>
    );
}

export default Depoimentos;
