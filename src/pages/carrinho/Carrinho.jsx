import ContainerDiv from "../../components/Common/container/ContainerDiv";
import style from "./Carrinho.module.css";
import CardItemCarrinho from "../../components/cards/CardItensCarrinho/CardItemCarrinho";
import Button from "../../components/button/Button";
import Img from "../../components/img/Img";
import Visao from "../../assets/icons/visao.svg"
import CardResumo from "../../components/cards/CardResumo/CardResumo";
import { useState } from "react";
import useContextCarrinho from "../../hooks/useContextCarrinho";
import scrollCima from "../../utils/scrollCima";

const Carrinho = () => {
    const [showResumo, setShowResumo] = useState(false);
    const { itens } = useContextCarrinho();

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
                        <CardItemCarrinho ItensCarinho={itens} />
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