import Button from "../../button/Button";
import ContainerDiv from "../../Common/container/ContainerDiv";
import Img from "../../img/Img";
import style from "./CardItemCarrinho.module.css";
import Remover from "../../../assets/icons/delete.svg";


const CardItemCarrinho = ({ ItensCarrinho }) => {
    return (
        ItensCarrinho.map((itensCarrinho) => {
            return (

                <ContainerDiv key={itensCarrinho.id} className={style.container_cardItemCar}>
                    <div className={style.img_item_car}>
                        <Img src={itensCarrinho.src} alt={itensCarrinho.alt} className={style.img_car} />
                    </div>
                    <div className={style.area_infos_item_car}>
                        <div className={style.container_titulo}>
                            <div className={style.area_nome_car}>
                                <h3>{itensCarrinho.nome}</h3>
                            </div>
                            <div className={style.area_preco}>
                                {itensCarrinho.preco} MT
                            </div>
                        </div>
                        {/* <div className={style.area_badge}>
                            <p>{itensCarrinho.bagde}</p>
                        </div> */}
                        <div className={style.area_btn_acao_car}>
                            <div className={style.container_btn_esq}>
                                <Button className={style.btn_car}>
                                    <p>-</p>
                                </Button>
                                <div className={style.contador_itens}>
                                    <p>{itensCarrinho.total_car === 10 ? "+9" : itensCarrinho.total_car} </p>
                                </div>
                                <Button className={style.btn_car}>
                                    <p>+</p>
                                </Button>
                            </div>
                            <div className={style.container_dir}>
                                <Button className={style.btn_rem} onClick={() => {
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