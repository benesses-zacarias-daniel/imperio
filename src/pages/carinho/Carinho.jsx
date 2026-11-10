import ContainerDiv from "../../components/Common/container/ContainerDiv";
import style from "./Carinho.module.css";
import CardItemCarinho from "../../components/cards/CardItensCarinho/CardItemCarinho";
import Button from "../../components/button/Button";
import Img from "../../components/img/Img";
import Visao from "../../assets/icons/visao.svg"
import CardResumo from "../../components/cards/CardResumo/CardResumo";
import { useState } from "react";
import useContextCarinho from "../../hooks/useContextCarinho";
import scrollCima from "../../utils/scrollCima";

const Carrinho = () => {
    const [showResumo, setShowResumo] = useState(false);
    const { itens } = useContextCarinho();

    const onClickResumo = (val) => {
        setShowResumo(val);
    }

    return (
        <ContainerDiv className={style.container_carrinho}>
            <div className={style.container_conteudo}>
                <div className={style.titulo_car}>
                    <h3>O Teu Carrinho</h3>
                </div>
                <div className={style.container_itens_car}>
                    <div className={style.area_controle_scroll}>
                        <CardItemCarinho ItensCarinho={itens} />
                    </div>
                </div>
                <div className={style.area_btn_resumo}>
                    <Button className={style.btn_resumo} children={
                        <Img src={Visao} alt={"Ícone de olho"} className={style.icone_resumo} />
                    } onClick={() => {
                        onClickResumo(true);
                        scrollCima();
                    }} />
                </div>
                {
                    showResumo && (
                        itens.length > 0 && (
                            <CardResumo showResumo={() => { setShowResumo(false) }} />
                        )
                    )
                }
            </div>
        </ContainerDiv>)
}



export default Carrinho;