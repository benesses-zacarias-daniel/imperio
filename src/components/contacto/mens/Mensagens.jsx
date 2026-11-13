import style from "./Mensagens.module.css";
import Button from "../../button/Button";
import ContainerDiv from "../../Common/container/ContainerDiv";
import Img from "../../img/Img";

const Mensagens = ({ Mensagens }) => {

    return (
        <ContainerDiv className={style.container_mens}>
            <div className={style.texto_info}>
                <div className={style.titulo_mens}>
                    <h3>{Mensagens.titulo}</h3>
                </div>
                <div className={style.info}>
                    {Mensagens.info}
                </div>
                <div className={style.area_form_mens}>
                    <div className={style.area_preencher}>
                        {Mensagens.inputs.map((Inputs) => {
                            return (
                                <div key={Inputs.id} className={style.area_inputs}>
                                    <div className={style.label_input}>
                                        {Inputs.label}
                                    </div>
                                    <div className={style.input}>
                                        <input type={Inputs.type} placeholder={Inputs.placeholder} className={style.campo_input} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={style.mensagem_preencher}>
                        <div className={style.label_input}>
                            {Mensagens.label}
                        </div>
                        <div className={style.area_campo_mens}>
                            <textarea placeholder={Mensagens.placeholder} className={style.campo_mens}></textarea>
                            {/* <input type={Mensagens.type} p /> */}
                        </div>
                    </div>
                    <div className={style.area_enviar_mens}>
                        <Button className={style.btn_mens} onClick={() => { }}>
                            <p>{Mensagens.texto_btn}</p>
                            <Img src={Mensagens.src} alt={Mensagens.alt} className={style.icone_mens} />
                        </Button>
                    </div>
                </div>
            </div>
        </ContainerDiv>
    )
}

export default Mensagens;