import style from "./CardMsg.module.css";
import Button from "../../button/Button";
import ContainerDiv from "../../Common/container/ContainerDiv";
import Img from "../../img/Img";
import Perigo from "../../../assets/icons/perigo.svg";
import Apagar from "../../../assets/icons/delete.svg";
import { useState } from "react";
import scrollCima from "../../../utils/scrollCima";

const CardMsg = ({ showCardMsg, onClickOcultarCadMsg = () => { }, dadosProd, onClickEliminar = () => { }, mensagem = "", tipo = null }) => {
    if (!showCardMsg) {
        return null;
    }

    const [fade, setFade] = useState(false);

    const onClickFexarCardMsg = () => {
        setTimeout(() => {
            onClickOcultarCadMsg(false);
            setFade(false);
        }, 500)
        setFade(true);
    };

    const nome = dadosProd[0]?.nome;

    const Mensagens = [
        `Tem certeza de que deseja eliminar o produto ${nome} ? Essa oporação não pode ser revertida uma vez feita.`,
        `Realmente tem certeza de que deseja eliminar o este depoimento? Essa oporação não pode ser revertida uma vez feita.`,
        `Tem certeza que quer eliminar esta mensagem? Essa oporação não pode ser revertida uma vez feita!`
    ];

    return (
        <ContainerDiv id={"container_area_msg"} className={`${style.container_area_msg} ${fade ? style.ocultalResumo : ""}`} click={(evt) => {
            if (evt.target === evt.currentTarget) {
                onClickFexarCardMsg();
            }
        }} >
            <div className={style.container_mens}>
                <div className={style.area_alerta_icone}>
                    <Button className={style.btn_fexar_resumo} onClick={() => { onClickFexarCardMsg() }}>
                        <Img src={Perigo} alt={"Ícone de X"} className={style.icone_fechar_resumo} />
                    </Button>
                </div>
                <div className={style.area_mensagem}>
                    <div className={style.mensagem}>
                        {Mensagens[tipo]}
                    </div>
                </div>
                <div className={style.area_btn_oper}>

                    <Button className={style.btn_cancelar} onClick={() => {
                        onClickFexarCardMsg();
                        scrollCima();
                    }} children={
                        <p>Cancelar</p>
                    }
                    />

                    <Button className={style.btn_apagar} onClick={() => {
                        onClickEliminar(dadosProd[0]?.id);
                        scrollCima();
                    }} children={
                        <>
                            <Img src={Apagar} alt={"Ícone de lixeira"} />
                            <p>Eliminar</p>
                        </>
                    }
                    />
                </div>
            </div>
        </ContainerDiv>
    )
}

export default CardMsg;