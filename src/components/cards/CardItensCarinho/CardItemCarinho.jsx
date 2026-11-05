import Button from "../../button/Button";
import ContainerDiv from "../../Common/container/ContainerDiv";
import Img from "../../img/Img";
import style from "./CardItemCarinho.module.css";
import Remover from "../../../assets/icons/delete.svg";
import useContextCarinho from "../../../hooks/useContextCarinho";
//Ícones
import Mais from "../../../assets/icons/mais.svg";
import Menus from "../../../assets/icons/menus.svg";

const CardItemCarrinho = ({ ItensCarinho }) => {
    const { onClickAlterarQtdItem, onClickRemoverItem } = useContextCarinho();

    return (
        ItensCarinho.map((itensCarinho, pos) => {
            return (

                <ContainerDiv key={itensCarinho.id} className={`${style.container_cardItemCar} ${pos === 0 ? style.bordaInicial : ""} ${pos === ItensCarinho.length - 1 ? style.bordaFinal : ""}`}>
                    <div className={style.img_item_car}>
                        <Img src={itensCarinho.srcThumb} alt={itensCarinho.altThumb} className={style.img_car} />
                    </div>
                    <div className={style.area_infos_item_car}>
                        <div className={style.container_titulo}>
                            <div className={style.area_nome_car}>
                                <h3>{itensCarinho.nome}</h3>
                            </div>
                            <div className={style.area_preco}>
                                {itensCarinho.preco} MT
                            </div>
                        </div>
                        <div className={style.area_badge}>
                            <p>{itensCarinho.bagde}</p>
                        </div>
                        <div className={style.area_btn_acao_car}>
                            <div className={style.container_btn_esq}>
                                <Button className={style.btn_car} onClick={() => { onClickAlterarQtdItem(itensCarinho.id, 1) }}>
                                    <Img src={Menus} alt={"Ícone de menus"} className={style.icone_qtd_control} />
                                </Button>
                                <div className={style.contador_itens}>
                                    <p>{itensCarinho.quantidade === 10 ? "+9" : itensCarinho.quantidade} </p>
                                </div>
                                <Button className={style.btn_car} onClick={() => { onClickAlterarQtdItem(itensCarinho.id, 0) }}>
                                    <Img src={Mais} alt={"Ícone de mais"} className={style.icone_qtd_control} />
                                </Button>
                            </div>
                            <div className={style.container_btn_dir}>
                                <Button className={style.btn_rem} onClick={() => {
                                    onClickRemoverItem(itensCarinho.id, 1);
                                }}>
                                    <Img src={Remover} alt={"Ícone de lixeira"} className={style.icone_btn_car} />
                                    Remover
                                </Button>
                            </div>
                        </div>
                    </div>
                </ContainerDiv>
            )
        })
    )
}

export default CardItemCarrinho;