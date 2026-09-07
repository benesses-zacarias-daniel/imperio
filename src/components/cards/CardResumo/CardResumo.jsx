import Button from "../../button/Button";
import ContainerDiv from "../../Common/container/ContainerDiv";
import Img from "../../img/Img";
import style from "./CardResumo.module.css";


const CardResumo = ({ dadosResumos }) => {
    return (
        <ContainerDiv className={style.container_area_resumo}>
            <div className={style.container_resumo}>
                <div className={style.container_conteudo}>
                    <div className={style.area_titulo}>
                        <h4>
                            Resumo do Pedido
                        </h4>
                    </div>
                    <div className={style.area_sub_total}>
                        <div className={style.subtotal}>
                            <div className={style.nome_sub}>
                                Subtotal
                            </div>
                            <div className={style.val_sub}>
                                <p className={style.total}>
                                    {dadosResumos.subtotal}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.info_envio}>
                        <div className={style.area_icone_env}>
                            <Img />
                        </div>
                        <div className={style.val_sub}>
                            <p className={style.total}>
                                O a entrega depende de acordo entre o cliente e o entregador.
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className={style.total_pagar}>
                        <div className={style.nome_sub}>
                            Subtotal
                        </div>
                        <div className={style.val_sub}>
                            <p className={style.total}>
                                {dadosResumos.subtotal}
                            </p>
                        </div>
                    </div>
                    <div className={style.area_btn_finalizar_compra}>
                        <Button className={style.btn_finalizar} onClick={() => { }}>
                            <p>Finalizar Compra</p>
                            <Img />
                        </Button>
                    </div>
                </div>
            </div>
        </ContainerDiv>
    )
}

export default CardResumo;