import style from "./Mensagens.module.css";
import Button from "../../button/Button";
import ContainerDiv from "../../Common/container/ContainerDiv";
import Img from "../../img/Img";
import InputNormal from "../../form/inputNomal/InputNormal";
import Textarea from "../../form/textarea/Textarea";

const Mensagens = ({ Mensagens }) => {

    //Funções de Controle dos Inputs
    const onInvalid = (evt, msg) => {
        evt.target.setCustomValidity(msg);
    };

    const onInput = (evt) => {
        evt.target.setCustomValidity("");
    };

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
                                        <InputNormal type={Inputs.type} placeholder={Inputs.placeholder} className={style.campo_input} id={Inputs.id} onChange={() => { }} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
                                            if (evt.target.validity.valueMissing) {
                                                onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                                            } else if (evt.target.validity.tooShort) {
                                                let tam_actual = evt.target.value.length;

                                                onInvalid(evt, `${tam_actual}`);
                                            }
                                        }} />
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
                            <Textarea placeholder={Mensagens.placeholder} className={style.campo_mens} id={"texto"} onChange={() => { }} />
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