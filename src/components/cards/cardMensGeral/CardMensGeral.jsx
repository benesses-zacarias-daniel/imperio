import style from "./CardMensGeral.module.css"
import Button from "../../button/Button";
import ContainerDiv from "../../Common/container/ContainerDiv";
import { useState } from "react";

const CardMensGeral = ({ mens, textoBtn, onClickFecharAdmin = () => { }, controlSair = true, onClickFechar = () => { } }) => {
    if (!mens) return null;
    const [fade, setFade] = useState(false);

    const onClickFexarCardMsgGeral = () => {
        setTimeout(() => {
            onClickFechar();
            setFade(false);
        }, 500)
        setFade(true);
    };

    return (
        <ContainerDiv className={`${style.overlay}${fade ? style.ocultalResumo : ""}`} click={() => { controlSair ? onClickFexarCardMsgGeral() : onClickFecharAdmin() }}>
            <div className={style.card} onClick={(e) => e.stopPropagation()}>
                <p className={style.mensagem}>{mens}</p>
                <Button className={controlSair ? style.btn_okay : style.btn_sair} onClick={() => { onClickFexarCardMsgGeral() }} children={textoBtn} />
            </div>
        </ContainerDiv>
    );
}

export default CardMensGeral;