import style from "./CardMensContacto.module.css";
import ContainerDiv from "../../Common/container/ContainerDiv";
import Button from "../../button/Button";
import Img from "../../img/Img";
import EstrelaSimples from "../../../assets/icons/estrelaSimples.svg";
import EstrelaAval from "../../../assets/icons/estrelaAval.svg";

import Visao from "../../../assets/icons/visao2B.svg";
import Delete from "../../../assets/icons/delete.svg";

const CardMensContacto = ({ mensagens, onClickVerDetalhes = () => { }, onClickEliminar = () => { }, onClickAdicionarLidas = () => { } }) => {

    return (

        mensagens.map((mens) => {
            return (

                <ContainerDiv key={mens.id} className={style.card}>
                    <div className={style.topo}>
                        <strong className={style.nome}>{mens.nome}</strong>
                        <Button onClick={() => { mens.lida ? () => { } : onClickAdicionarLidas(mens.id) }} className={style.data} children={
                            <Img src={mens.lida ? EstrelaAval : EstrelaSimples} alt={"Ícone de estrela"} />
                        }
                        />
                    </div>

                    <span className={style.telefone}>{mens.telefone}</span>

                    <p className={style.resumo}>
                        {mens.mens.length > 75
                            ? `${mens.mens.slice(0, 75)}...`
                            : mens.mens}
                    </p>

                    <div className={style.acoes}>
                        <Button type="button" className={style.btnVer} onClick={() => {
                            console.log(mens.id)

                            onClickVerDetalhes(mens.id)
                        }} children={
                            <>
                                <Img src={Visao} alt={"Ícone de olho"} />
                                <p>Ver Tudo</p>
                            </>
                        } />
                        <Button type="button" className={style.btnExcluir} onClick={() => { onClickEliminar(mens.id) }} children={
                            <>
                                <Img src={Delete} alt={"Ícone de lixeira"} />
                                <p>Eliminar</p>
                            </>
                        } />
                    </div>
                </ContainerDiv>
            )
        })
    )
}

export default CardMensContacto;