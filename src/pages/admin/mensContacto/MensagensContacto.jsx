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
import CardMensGeral from "../../../components/cards/cardMensGeral/CardMensGeral";

const MensagensContacto = () => {

    const [mensagens, setMensagens] = useState([]);
    const [msgAberta, setMsgAberta] = useState(null);
    const [showDetMens, setShowDetMens] = useState(false);

    const [showCardMsg, setShowCardMsg] = useState(false);
    const [dadosMsg, setDadosMsg] = useState([]);
    const [msg, setMsg] = useState("");

    const onClickEliminar = async (idMens) => {

        await eliminarMensagem(idMens);

        const { mens, status } = await buscarMensagens();

        if (!status) {
            setMsg("Erro ao eliminar mensagem. Tente novamente mais tarde!")
            setMensagens(mens);
            setShowCardMsg(false);
            return;
        };

        setMensagens(mens);

        setShowCardMsg(false);

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

        await atualizarMensagem({ "lida": true }, idMens);

        const { mens, status } = await buscarMensagens();

        if (!status) {
            setMsg("Erro ao marcar mensagen como lida! Tente Novamente");
            setMensagens(mens);
            setShowCardMsg(false);
            return;
        };

        setMensagens(mens);
        setShowCardMsg(false);

    };

    const onClickFexar = () => {
        onClickAdicionarLidas(msgAberta?.id);
        setShowDetMens(false);
        scrollCima();
    };

    const onClickFecharCardGeral = () => {
        setMsg("")
    };

    const buscarMens = async () => {

        const { mens, info } = await buscarMensagens();

        if (!info) {
            console.log("Erro ao buscar mensagens....Preenchendo com mensagem de teste");
            setMsg("Erro ao buscar mensagens....Preenchendo com mensagem de teste");
            setMensagens(mens);
            return;
        };

        setMensagens(mens);

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
                <CardMensGeral mens={msg} textoBtn={"Okay"} onClickFechar={() => { onClickFecharCardGeral() }} />
            </ContainerDiv>
        </>
    )
}

export default MensagensContacto;