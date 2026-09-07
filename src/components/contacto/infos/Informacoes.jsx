import ContainerDiv from "../../Common/container/ContainerDiv";
import Img from "../../img/Img";
import style from "./Informacoes.module.css";

const Informacoes = ({ InformacoesDirectas }) => {
    return (
        <ContainerDiv className={style.infor_directas}>
            <div className={style.titulo_infos}>
                <h3>{InformacoesDirectas.titulo}</h3>
            </div>
            <div className={style.area_contactos}>
                {InformacoesDirectas.infosDir.map((InfoDir) => {
                    return (
                        <div key={InfoDir.id} className={style.contacto}>
                            <div className={style.area_icone_con}>
                                <Img src={InfoDir.src} alt={InfoDir.alt} className={style.icone_con} />
                            </div>
                            <div className={style.info_texto}>
                                <div className={style.titulo_info}>
                                    <h3>{InfoDir.titulo}</h3>
                                </div>
                                <div className={style.info}>
                                    {InfoDir.info}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </ContainerDiv>
    )
}

export default Informacoes;