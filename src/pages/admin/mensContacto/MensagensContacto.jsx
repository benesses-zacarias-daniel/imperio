import style from "./MensagensContacto.module.css";
import ContainerDiv from "../../../components/Common/container/ContainerDiv";
import CardMensContacto from "../../../components/cards/cardMensContacto/CardMensContacto";
import { useState } from "react";
import CardDetMens from "../../../components/cards/cardDetMens/CardDetMens";
import scrollCima from "../../../utils/scrollCima";
import CardMsg from "../../../components/cards/cardMsg/CardMsg";

const MensagensContacto = () => {

    const [mensImutaveis, setMensImutaveis] = useState();
    useEffect(async () => {

        try {

            const { data, error } = await supabase().from("mensagens").select("*");

            if (error) {
                console.error("Erro ao buscar mensagens: " + error.message);
                return;
            }

            console.log("Mensagens buscados com sucesso", data);
            setMensImutaveis(data);
        } catch (error) {
            console.error("Erro ao buscar Mensagens: " + error.message);
        }

    }, []);

    const [mensagens, setMensagens] = useState(mensImutaveis);
    const [msgAberta, setMsgAberta] = useState(null);
    const [showDetMens, setShowDetMens] = useState(false);

    const [showCardMsg, setShowCardMsg] = useState(false);
    const [dadosMsg, setDadosMsg] = useState([]);

    const onClickEliminar = async (idMens) => {
        try {

            const { data, error } = await supabase().from("mensagens").delete().eq("id", idMens);

            if (error) {
                console.error("Erro ao eliminar mensagem: " + error.message);
                return;
            }

            localStorage.setItem("mensagensBanco", JSON.stringify(filtradas));
            const filtradas = mensagens.filter((mens) => mens.id !== idMens);
            setMensagens(data);
            setShowCardMsg(false);
        } catch (error) {
            console.error("Erro ao buscar produtos em destaque: " + error.message);
        }

    };

    const onClickFiltrar = (idMens) => {
        const filtradas = mensagens.filter((mens) => mens.id !== idMens);
        setDadosMsg(filtradas);
        setShowCardMsg(true);
    };

    const onClickVerDetalhes = (idMens) => {
        console.log(idMens);

        const filtradas = mensagens.filter((mens) => mens.id === idMens);
        console.log(filtradas[0]);

        setMsgAberta(filtradas[0]);
        setShowDetMens(true);
        scrollCima();
    };

    const onClickAdicionarLidas = async (idMens) => {
        try {


            const novasMens = mensagens.map((mens) => {
                if (mens.id === idMens) {
                    return { ...mens, "lida": true }
                }

                return mens;
            })

            const { data, error } = await supabase().from("mensagens").update(novasMens).eq("id", idMens);

            if (error) {
                console.error("Erro ao adicionar mensagem lida: " + error.message);
                return;
            }

            localStorage.setItem("mensagensBanco", JSON.stringify(filtradas));
            const filtradas = mensagens.filter((mens) => mens.id !== idMens);
            setMensagens(data);
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