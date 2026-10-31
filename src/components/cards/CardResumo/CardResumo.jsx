import Button from "../../button/Button";
import ContainerDiv from "../../Common/container/ContainerDiv";
import Img from "../../img/Img";
import style from "./CardResumo.module.css";
// import Seta from "../../../assets/icons/seta.svg"

const CardResumo = ({ dadosResumos, showResumo }) => {
    const onClickOcultarResumo = () => {
        showResumo(false);
    }
    return (
        <ContainerDiv id={"container_area_resumo"} className={style.container_area_resumo} click={(evt) => {
            if (evt.target.id === "container_area_resumo") {
                onClickOcultarResumo();
            }

        }} >
            <div className={style.container_resumo}>
                <div className={style.fexarShowResumo}>
                    <Button className={style.btn_fexar_resumo} onClick={() => { onClickOcultarResumo() }}>
                        X
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
                                {dadosResumos.subtotal}
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
                        <Button className={style.btn_finalizar} onClick={() => { }}>
                            <p>Finalizar Compra</p>
                            {/* <Img src={Seta} alt={"Ícone de seta"} /> */}
                        </Button>
                    </div>
                    <div className={style.info_envio}>
                        {/* <div className={style.area_icone_env}>
                            <Img />
                        </div> */}
                        <div className={style.val_sub}>
                            <p className={style.total}>
                                A entrega depende de acordo entre o cliente e o entregador.
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