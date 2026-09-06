import ContainerDiv from "../../Common/container/ContainerDiv";
import Img from "../../img/Img";
import style from "./Porque.module.css";

const Porque = ({ infosPorque }) => {
    return (
        <ContainerDiv className={style.area_porque}>
            <div className={style.area_min_info}>
                <h3 className={style.titulo_porque}>{infosPorque.titulo}</h3>
                <p>{infosPorque.min_info}</p>
            </div>
            <div className={style.area_porques}>
                {
                    infosPorque.porques.map((porque) => {
                        return (
                            <div key={porque.id} className={style.porque}>
                                <div className={style.area_icone_porque}>
                                    <div className={style.borda_porque}>
                                        <Img src={porque.src} alt={porque.alt} className={style.icone_porque} />
                                    </div>
                                    <div className={style.area_texto_porque}>
                                        <div className={style.titulo_porque}>
                                            {porque.titulo}
                                        </div>
                                        <div className={style.texto_porque}>
                                            {porque.desc}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </ContainerDiv>
    )
}

export default Porque;