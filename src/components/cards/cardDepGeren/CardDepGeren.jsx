import style from "./CardDepGeren.module.css";
import Button from "../../button/Button";
import ContainerDiv from "../../Common/container/ContainerDiv";
import Img from "../../img/Img";
import Remover from "../../../assets/icons/delete.svg";
import EstrelaSimples from "../../../assets/icons/estrelaSimples.svg";
import EstrelaAval from "../../../assets/icons/estrelaAval.svg";
//Ícones
import Editar from "../../../assets/icons/edit.svg";

const CardDepGeren = ({ deppoimentos, onClickMostrarModal, onClickVisivel }) => {

    return (
        deppoimentos.map((dep) => {
            return (

                <ContainerDiv key={dep.id} className={style.container_cardItemCar}>
                    <div className={style.iniciais}>
                        <p className={style.iniciais_p}>{dep.iniciais}</p>
                    </div>
                    <div className={style.area_infos_item_car}>
                        <div className={style.container_titulo}>
                            <div className={style.area_nome_car}>
                                <h3>{dep.nome}</h3>
                            </div>
                            <div className={style.area_preco}>
                                {
                                    dep.visivel ?
                                        (
                                            <Button className={style.btn_prim} onClick={() => { onClickVisivel(dep.id, 0) }} children={
                                                <Img src={EstrelaAval} alt={"Ícone de Estrela"} className={style.icone_prim} />} />
                                        ) : (
                                            <Button className={style.btn_prim} onClick={() => { onClickVisivel(dep.id, 1) }} children={
                                                <Img src={EstrelaSimples} alt={"Ícone de Estrela"} className={style.icone_prim} />
                                            } />
                                        )
                                }
                            </div>
                        </div>
                        <div className={style.area_btn_acao_car}>
                            <div className={style.container_btn_esq}>
                                <Button className={style.btn_car} onClick={() => { onClickMostrarModal(dep.id) }} children={
                                    <>
                                        <Img src={Editar} alt={"Ícone de menus"} className={style.icone_qtd_control} />
                                        <p>Editar</p>
                                    </>
                                }
                                />
                            </div>
                            <div className={style.container_btn_dir}>
                                <Button className={style.btn_rem} onClick={() => { }} children={
                                    <>
                                        <Img src={Remover} alt={"Ícone de lixeira"} className={style.icone_qtd_control} />
                                        <p>Remover </p>
                                    </>
                                }
                                />
                            </div>
                        </div>
                    </div>
                </ContainerDiv>
            );
        })
    );
};

export default CardDepGeren;