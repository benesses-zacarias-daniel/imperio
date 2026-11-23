import style from "./MensagensContacto.module.css";
import ContainerDiv from "../../../components/Common/container/ContainerDiv";
import CardMensContacto from "../../../components/cards/cardMensContacto/CardMensContacto";
import { useState } from "react";
import CardDetMens from "../../../components/cards/cardDetMens/CardDetMens";
import scrollCima from "../../../utils/scrollCima";
import CardMsg from "../../../components/cards/cardMsg/CardMsg";
import eliminarMensagem from "../../../utils/eliminarMensagem";
import buscarMensagens from "../../../utils/buscarMensagens";
import atualizarMensagem from "../../../utils/atualizarMensagem";

const MensagensContacto = () => {

    const [mensagens, setMensagens] = useState([]);
    const [msgAberta, setMsgAberta] = useState(null);
    const [showDetMens, setShowDetMens] = useState(false);

    const [showCardMsg, setShowCardMsg] = useState(false);
    const [dadosMsg, setDadosMsg] = useState([]);

    const onClickEliminar = async (idMens) => {
        try {

            await eliminarMensagem(idMens);

            const { mens, status } = await buscarMensagens();

            if (!status) {
                setMensagens(mens);
                setShowCardMsg(false);
                return;
            };

            setMensagens(mens);

            setShowCardMsg(false);

        } catch (error) {
            console.error("Erro ao eliminar mensagem: " + error.message);
        }

    };

    const onClickFiltrar = (idMens) => {
        const filtradas = mensagens.filter((mens) => mens.id !== idMens);
        setDadosMsg(filtradas);
        setShowCardMsg(true);
    };

    const onClickVerDetalhes = (idMens) => {

        const filtradas = mensagens.filter((mens) => mens.id === idMens);
        console.log(filtradas[0]);

        setMsgAberta(filtradas[0]);
        setShowDetMens(true);
        scrollCima();
    };

    const onClickAdicionarLidas = async (idMens) => {
        try {

            await atualizarMensagem({ "lida": true }, idMens);
            const { mens, status } = await buscarMensagens();

            if (!status) {
                setMensagens(mens);
                setShowCardMsg(false);
            };

            setMensagens(mens);
            setShowCardMsg(false);
        } catch (error) {
            console.error("Erro ao adicionar mensagem em lida: " + error.message);
        }

    };

    const onClickFexar = () => {
        onClickAdicionarLidas(msgAberta?.id);
        setShowDetMens(false);
        scrollCima();
    };

    const buscarMens = async () => {
        try {

            const { mens, info } = await buscarMensagens();

            if (!info) {
                setMensagens(mens)
            };

            setMensagens(mens);

        } catch (error) {
            console.error("Erro ao buscar Mensagens: " + error.message);
        }
    };

    useEffect(() => {

        buscarMens()

    }, []);

    return (
        <>
            <h2 className={style.titulo_mens}> Mensagens </h2>
            <ContainerDiv className={style.container_mens}>
                <div className={style.area_scroll_mens}>
                    <CardMensContacto mensagens={mensagens} onClickEliminar={(idMens) => { onClickFiltrar(idMens) }} onClickVerDetalhes={(id) => { onClickVerDetalhes(id) }} onClickAdicionarLidas={(id) => { onClickAdicionarLidas(id) }} />
                </div>
                <CardDetMens showDetMens={showDetMens} mensagem={msgAberta} onClickFecar={() => { onClickFexar() }} />
                <CardMsg dadosProd={dadosMsg} showCardMsg={showCardMsg} onClickOcultarCadMsg={() => { setShowCardMsg(false) }} tipo={2} onClickEliminar={(idMens) => { onClickEliminar(idMens) }} />
            </ContainerDiv>
        </>
    )
}

export default MensagensContacto;