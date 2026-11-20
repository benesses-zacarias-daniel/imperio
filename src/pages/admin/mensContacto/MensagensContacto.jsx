import style from "./MensagensContacto.module.css";
import ContainerDiv from "../../../components/Common/container/ContainerDiv";
import CardMensContacto from "../../../components/cards/cardMensContacto/CardMensContacto";
import { useState } from "react";
import CardDetMens from "../../../components/cards/cardDetMens/CardDetMens";
import scrollCima from "../../../utils/scrollCima";

const MensagensContacto = () => {

    const [mensagens, setMensagens] = useState(
        () => JSON.parse(localStorage.getItem("mensagensBanco")) || [{ "id": 0, "telefone": 11111111, "email": "Ainda sem nenhum email de mesagem recebida.", "mens": "Ainda sem nenhuma mensagem", "lida": false }]
    );

    const [msgAberta, setMsgAberta] = useState(null);
    const [showDetMens, setShowDetMens] = useState(false);

    const onClickEliminar = (idMens) => {
        if (idMens) {
            alert("Tem certeza que quer eliminar esta mensagem? Uma vez eliminada não pode voltar pra traz!");
            // return;
        }
        const filtradas = mensagens.filter((mens) => mens.id !== idMens);
        setMensagens(filtradas);
        localStorage.setItem("mensagensBanco", JSON.stringify(filtradas));
    };

    const onClickVerDetalhes = (idMens) => {
        console.log(idMens);

        const filtradas = mensagens.filter((mens) => mens.id === idMens);
        console.log(filtradas[0]);

        setMsgAberta(filtradas[0]);
        setShowDetMens(true);
        scrollCima();
    };

    const onClickAdicionarLidas = (idMens) => {

        const mensGuardadas = localStorage.getItem("mensagensBanco");
        const mensG = mensGuardadas ? JSON.parse(mensGuardadas) : [{ "id": 0, "nome": "Benesses Zacarias Daniel", "telefone": 870006914, "email": "benesses@teste.com", "mens": "Ainda sem nenhuma mensagem", "lida": false }];

        const novasMens = mensG.map((mens) => {
            if (mens.id === idMens) {
                return { ...mens, "lida": true }
            }

            return mens;
        })

        setMensagens(novasMens);
        localStorage.setItem("mensagensBanco", JSON.stringify(novasMens));
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
                    <CardMensContacto mensagens={mensagens} onClickEliminar={(idMens) => { onClickEliminar(idMens) }} onClickVerDetalhes={(id) => { onClickVerDetalhes(id) }} onClickAdicionarLidas={(id) => { onClickAdicionarLidas(id) }} />
                </div>
                <CardDetMens showDetMens={showDetMens} mensagem={msgAberta} onClickFecar={() => { onClickFexar() }} />
            </ContainerDiv>
        </>
    )
}

export default MensagensContacto;