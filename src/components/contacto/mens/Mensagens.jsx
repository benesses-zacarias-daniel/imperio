import style from "./Mensagens.module.css";
import Button from "../../button/Button";
import ContainerDiv from "../../Common/container/ContainerDiv";
import Img from "../../img/Img";
import InputNormal from "../../form/inputNomal/InputNormal";
import Textarea from "../../form/textarea/Textarea";
import ContainerForm from "../../Common/containerForm/ContainerForm";
import { useState } from "react";

const Mensagens = ({ Mensagens }) => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [textarea, setTextarea] = useState("");
    const [contacto, setContacto] = useState("");
    //Funções
    const onChangeNome = (evt) => {
        evt.preventDefault();
        console.log(evt);
        setNome(evt.target.value)
    };

    const onChangeEmail = (evt) => {
        evt.preventDefault();
        setEmail(evt.target.value)
    };

    const onChangeTextarea = (evt) => {
        evt.preventDefault();
        console.log(evt);
        console.log(evt.target);
        setTextarea(evt.target.value);
    };

    const onChangeContacto = (evt) => {
        evt.preventDefault();
        console.log(evt);
        console.log(evt.target);
        setContacto(evt.target.value);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        const id = Math.floor(Math.random() * 10000000000000)
        const dadosMens = {
            "id": id,
            "nome": nome,
            "telefone": contacto,
            "email": email,
            "lida": false,
            "mens": textarea
        }

        const mensSalvas = localStorage.getItem("mensagensBanco");
        const mens = mensSalvas ? JSON.parse(mensSalvas) : [];
        mens.push(dadosMens);
        localStorage.setItem("mensagensBanco", JSON.stringify(mens));
        limparCampos()

    };

    const limparCampos = () => {
        setNome("");
        setEmail("");
        setContacto("");
        setTextarea("");
    }
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
                <ContainerForm className={style.area_form_mens} onSubmit={async (evt) => { onSubmit(evt) }}>
                    <div className={style.area_preencher}>
                        <div className={style.area_inputs}>
                            <div className={style.label_input}>
                                <label htmlFor={Mensagens.inputs[0].id}>{Mensagens.inputs[0].label}</label>
                            </div>
                            <div className={style.input}>
                                <InputNormal type={Mensagens.inputs[0].type} placeholder={Mensagens.inputs[0].placeholder} className={style.campo_input} value={nome} id={Mensagens.inputs[0].id} onChange={(evt) => {
                                    onChangeNome(evt)
                                }} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
                                    if (evt.target.validity.valueMissing) {
                                        onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                                    } else if (evt.target.validity.tooShort) {
                                        let tam_actual = evt.target.value.length;
                                        onInvalid(evt, `${tam_actual}`);
                                    }
                                }} />
                            </div>
                        </div>
                        <div className={style.area_inputs}>
                            <div className={style.label_input}>
                                <label htmlFor={Mensagens.inputs[1].id}>{Mensagens.inputs[1].label}</label>
                            </div>
                            <div className={style.input}>
                                <InputNormal type={Mensagens.inputs[1].type} placeholder={Mensagens.inputs[1].placeholder} className={style.campo_input} value={contacto} id={Mensagens.inputs[1].id} onChange={(evt) => {
                                    onChangeContacto(evt)
                                }} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
                                    if (evt.target.validity.valueMissing) {
                                        onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                                    } else if (evt.target.validity.tooShort) {
                                        let tam_actual = evt.target.value.length;
                                        onInvalid(evt, `${tam_actual}`);
                                    }
                                }} />
                            </div>
                        </div>
                        <div className={style.area_inputs}>
                            <div className={style.label_input}>
                                <label htmlFor={Mensagens.inputs[2].id}>{Mensagens.inputs[2].label}</label>
                            </div>
                            <div className={style.input}>
                                <InputNormal type={Mensagens.inputs[2].type} placeholder={Mensagens.inputs[2].placeholder} className={style.campo_input} id={Mensagens.inputs[2].id} value={email} onChange={(evt) => {
                                    onChangeEmail(evt)
                                }} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
                                    if (evt.target.validity.valueMissing) {
                                        onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                                    } else if (evt.target.validity.tooShort) {
                                        let tam_actual = evt.target.value.length;
                                        onInvalid(evt, `${tam_actual}`);
                                    }
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className={style.mensagem_preencher}>
                        <div className={style.label_input}>
                            <label htmlFor="mens"> {Mensagens.label}</label>
                        </div>
                        <div className={style.area_campo_mens}>
                            <Textarea placeholder={Mensagens.placeholder} className={style.campo_mens} id={"mens"} value={textarea} onChange={(evt) => { onChangeTextarea(evt) }} />
                        </div>
                    </div>
                    <div className={style.area_enviar_mens}>
                        <Button className={style.btn_mens} type={"submit"} onClick={() => { }}>
                            <p>{Mensagens.texto_btn}</p>
                            <Img src={Mensagens.src} alt={Mensagens.alt} className={style.icone_mens} />
                        </Button>
                    </div>
                </ContainerForm>
            </div>
        </ContainerDiv>
    )
}

export default Mensagens;