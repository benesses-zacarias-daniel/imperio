import style from "./CardProdGeren.module.css";
import Button from "../../button/Button";
import ContainerDiv from "../../Common/container/ContainerDiv";
import Img from "../../img/Img";
import Remover from "../../../assets/icons/delete.svg";
//Ícones
import Editar from "../../../assets/icons/edit.svg";

const CardProdGeren = ({ ItensGeren, onClickMostrarModal }) => {

    return (
        ItensGeren.map((itensGeren, pos) => {
            return (

                <ContainerDiv key={itensGeren.id} className={`${style.container_cardItemCar} ${pos === 0 ? style.bordaInicial : ""} ${pos === ItensGeren.length - 1 ? style.bordaFinal : ""}`}>
                    <div className={style.img_item_car}>
                        <Img src={itensGeren.detalhes.srcDetalhes[0].srcThumb} alt={itensGeren.detalhes.srcDetalhes[0].alt} className={style.img_car} />
                    </div>
                    <div className={style.area_infos_item_car}>
                        <div className={style.container_titulo}>
                            <div className={style.area_nome_car}>
                                <h3>{itensGeren.nome}</h3>
                            </div>
                            <div className={style.area_preco}>
                                {itensGeren.preco} MT
                            </div>
                        </div>
                        <div className={style.area_badge}>
                            <p>{itensGeren.badge}</p>
                        </div>
                        <div className={style.area_btn_acao_car}>
                            <div className={style.container_btn_esq}>
                                <Button className={style.btn_car} onClick={() => { onClickMostrarModal(itensGeren.id) }}>
                                    <>
                                        <Img src={Editar} alt={"Ícone de menus"} className={style.icone_qtd_control} />
                                        <p>Editar</p>
                                    </>
                                </Button>
                            </div>
                            <div className={style.container_btn_dir}>
                                <Button className={style.btn_rem} onClick={() => {
                                }}>
                                    <Img src={Remover} alt={"Ícone de lixeira"} className={style.icone_qtd_control} />
                                    Remover
                                </Button>
                            </div>
                        </div>
                    </div>
                </ContainerDiv>
            );
        })
    );
};

export default CardProdGeren;