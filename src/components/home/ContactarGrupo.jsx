import Button from "../button/Button";
import ContainerSessao from "../Common/container/ContainerSessao";
import style from "./ContactarGrupo.module.css";
import Img from "../img/Img";
import WhatsApp from "../../assets/icons/whatsapp.svg";

const ContactarGrupo = () => {
    return (
        <ContainerSessao className={style.container_cont_grupo} children={
            <div className={style.container_conteudo}>
                <div className={style.area_textos}>
                    <div className={style.titulo_grupo}>
                        <h3>
                            Mantenha-se na vanguarda
                        </h3>
                    </div>
                    <div className={style.min_info_grupo}>
                        Subscreva para receber convites exclusivos para lançamentos de produtos de edição limitada.
                    </div>
                </div>
                <div className={style.area_accao}>
                    <Button children={
                        <a href="#">
                            <Img src={WhatsApp} className={style.icone} /> <p>Entrar</p>
                        </a>
                    } className={style.btn_ent_grup} />
                </div>
            </div>
        } />
    )
}

export default ContactarGrupo;