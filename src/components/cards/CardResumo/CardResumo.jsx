import style from "./CardResumo.module.css";
import Button from "../../button/Button";
import ContainerDiv from "../../Common/container/ContainerDiv";
import Img from "../../img/Img";
import FecharResumo from "../../../assets/icons/fexar_detalhes.svg";
// import Seta from "../../../assets/icons/seta.svg"
import useContextCarinho from "../../../hooks/useContextCarinho";

const CardResumo = ({ showResumo }) => {
    const { onClickMensagemFinalizarCompra, onClickTotal, limparNavegador } = useContextCarinho();
    const numero = "849754315", mens = onClickMensagemFinalizarCompra();
    const linkWhatsApp = `https://wa.me/${numero}?text=${mens}`;
    const onClickOcultarResumo = () => {
        showResumo(false);
    }

    return (
        <ContainerDiv id={"container_area_resumo"} className={style.container_area_resumo} click={(evt) => {
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
                                {onClickTotal() === 200 ? 0 : onClickTotal()}
                            </p>
                        </div>
                    </div>
                    <div className={style.area_port}>
                        <p>
                            Portes de Envio
                        </p>
                        <p className={style.porte}>
                            Grátis
                        </p>
                    </div>
                    <div className={style.area_btn_finalizar_compra}>
                        <a href={linkWhatsApp} target="_blank">
                            <Button className={style.btn_finalizar} onClick={() => {
                                limparNavegador();
                                onClickOcultarResumo();
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
                                A valor total envolve a entrega dos Productos.
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