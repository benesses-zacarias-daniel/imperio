import style from "./CardResumo.module.css";
import Button from "../../button/Button";
import ContainerDiv from "../../Common/container/ContainerDiv";
import Img from "../../img/Img";
import FecharResumo from "../../../assets/icons/fexar_detalhes.svg";
// import Seta from "../../../assets/icons/seta.svg"
import useContextCarrinho from "../../../hooks/useContextCarrinho";
import { useState } from "react";

const CardResumo = ({ showResumo }) => {
    const { onClickMensagemFinalizarCompra, onClickSubTotal, onClickTotal, limparNavegador } = useContextCarrinho();
    const numero = "849754315", mens = onClickMensagemFinalizarCompra();
    const linkWhatsApp = `https://wa.me/${numero}?text=${mens}`;
    const [fade, setFade] = useState(false);

    const onClickOcultarResumo = () => {
        setTimeout(() => {
            showResumo(false);
            setFade(false);
        }, 500)
        setFade(true);
    }

    return (
        <ContainerDiv id={"container_area_resumo"} className={`${style.container_area_resumo} ${fade ? style.ocultalResumo : ""}`} click={(evt) => {
            if (evt.target === evt.currentTarget) {
                onClickOcultarResumo();
            }

        }} >
            <div className={style.container_resumo}>
                <div className={style.fexarShowResumo}>
                    <Button className={style.btn_fexar_resumo} onClick={() => { onClickOcultarResumo() }}>
                        <Img src={FecharResumo} alt={"Ícone de X"} className={style.icone_fechar_resumo} />
                    </Button>
                </div>
                <div className={style.container_conteudo}>
                    <div className={style.area_titulo}>
                        <h4>
                            Resumo do Pedido
                        </h4>
                    </div>
                    <div className={style.area_sub_total}>
                        <div className={style.nome_sub}>
                            Subtotal
                        </div>
                        <div className={style.val_sub}>
                            <p className={style.total}>
                                {onClickSubTotal()}
                            </p>
                        </div>
                    </div>
                    <div className={style.area_port}>
                        <p>
                            Valor Total
                        </p>
                        <p className={style.porte}>
                            {onClickTotal()}
                        </p>
                    </div>
                    <div className={style.area_port}>
                        <p>
                            Portes de Envio
                        </p>
                        <p className={style.porte}>
                            Incluído
                        </p>
                    </div>

                    <div className={style.area_btn_finalizar_compra}>
                        <a href={linkWhatsApp} target="_blank">
                            <Button className={style.btn_finalizar} onClick={() => {
                                onClickOcultarResumo();
                                setTimeout(() => {
                                    limparNavegador();
                                }, 3000);
                            }}>
                                <p>Finalizar Compra</p>
                                {/* <Img src={Seta} alt={"Ícone de seta"} /> */}
                            </Button>
                        </a>
                    </div>
                    <div className={style.info_envio}>
                        <div className={style.val_sub}>
                            {/* <p className={style.total}>
                                A entrega depende de acordo entre o cliente e o entregador.
                            </p> */}
                            <p className={style.total}>
                                O valor total envolve a entrega dos Produtos.
                            </p>
                        </div>
                    </div>
                    {/* <hr /> */}
                </div>
            </div>
        </ContainerDiv>
    )
}

export default CardResumo;