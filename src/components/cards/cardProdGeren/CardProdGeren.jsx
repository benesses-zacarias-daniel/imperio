import style from "./CardProdGeren.module.css";
import Button from "../../button/Button";
import ContainerDiv from "../../Common/container/ContainerDiv";
import Img from "../../img/Img";
import Remover from "../../../assets/icons/delete.svg";
import EstrelaSimples from "../../../assets/icons/estrelaSimples.svg";
import EstrelaAval from "../../../assets/icons/estrelaAval.svg";
//Ícones
import Editar from "../../../assets/icons/edit.svg";

const CardProdGeren = ({ ItensGeren, onClickMostrarModal = () => { }, onClickPrimeiros = () => { }, onClickApagarProd = () => { } }) => {

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
                            {
                                itensGeren.primeiros ?
                                    (
                                        <Button className={style.btn_prim} onClick={() => { onClickPrimeiros(itensGeren.id, 0) }} children={
                                            <Img src={EstrelaAval} alt={"Ícone de Estrela"} className={style.icone_prim} />} />
                                    ) : (
                                        <Button className={style.btn_prim} onClick={() => { onClickPrimeiros(itensGeren.id, 1) }} children={
                                            <Img src={EstrelaSimples} alt={"Ícone de Estrela"} className={style.icone_prim} />
                                        } />
                                    )
                            }
                        </div>
                        <div className={style.area_btn_acao_car}>
                            <div className={style.container_btn_esq}>
                                <Button className={style.btn_car} onClick={() => {
                                    onClickMostrarModal(itensGeren.id);
                                }}>
                                    <>
                                        <Img src={Editar} alt={"Ícone de menus"} className={style.icone_qtd_control} />
                                        <p>Editar</p>
                                    </>
                                </Button>
                            </div>
                            <div className={style.container_btn_dir}>
                                <Button className={style.btn_rem} onClick={() => {
                                    onClickApagarProd(itensGeren.id);
                                }}>
                                    <Img src={Remover} alt={"Ícone de lixeira"} className={style.icone_qtd_control} />
                                    Eliminar
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