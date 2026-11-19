import { useEffect, useState } from "react";
import InputNormal from "../../form/inputNomal/InputNormal";
import Button from "../../button/Button";
import style from "../LoginCadastrar.module.css"
import ContainerForm from "../../Common/containerForm/ContainerForm";
import ContainerDiv from "../../Common/container/ContainerDiv";
import useContextAdminLogado from "../../../hooks/useContextAdminLogado";
import { useNavigate } from "react-router-dom";

const Cadastrar = () => {
    const [usuarioPadrao, setUsuarioPadrao] = useState({ "id": null, "email": "", "password": "", "userName": "" });
    const { onClickLogar } = useContextAdminLogado();
    const navigate = useNavigate();

    const onChangeEmail = (val) => {
        setUsuarioPadrao((ant) => ({ ...ant, email: val.replace(" ", "") }));
    };

    const onChangePassword = (val) => {
        setUsuarioPadrao((ant) => ({ ...ant, password: val.replace(" ", "") }));
    };

    const onChangeUserName = (val) => {
        setUsuarioPadrao((ant) => ({ ...ant, userName: val.replace(" ", "") }));
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        const data = new Date();
        const aleat = Math.floor(Math.random() * 1000036)
        const id = data.getDay() + aleat;

        usuarioPadrao.id = id;
        guardaInformacoes(usuarioPadrao)
    };

    const guardaInformacoes = (usuarioInfo) => {

        if (!usuarioInfo) {
            return;
        }

        const usuariosSalvos = localStorage.getItem("usuarios");
        const usuarios = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];

        const existe = usuarios.find((usuario) => usuario.email === usuarioInfo.email);

        if (existe) {
            alert("Esse E-mail já está cadastrado!");
            return;
        }

        usuarios.push(usuarioInfo);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        localStorage.setItem("usuarioLogado", true);

        onClickLogar(true);
        navigate("/admin/adicionar");
    };

    const onInvalid = (evt, msg) => {
        evt.target.setCustomValidity(msg);
    };

    const onInput = (evt) => {
        evt.target.setCustomValidity("");
    };

    useEffect(() => {
        setUsuarioPadrao({ "id": null, "email": "", "password": "", "userName": "" })
    }, []);

    return (
        <ContainerDiv className={style.area_forms}>
            <ContainerForm onSubmit={(evt) => { onSubmit(evt) }} className={style.form}>
                <div className={style.div_input}>
                    <span>E-mail</span>
                    <InputNormal type={"email"} minLength={null} onInvalid={(evt) => { onInvalid(evt, "Campo obrigatório. Preencha por favor!") }} onInput={(evt) => { onInput(evt) }} required onChange={(evt) => { evt.preventDefault(); onChangeEmail(evt.target.value) }} placeholder={"exemplo@gmail.com"} value={usuarioPadrao.email} />
                </div>
                <div className={style.div_input}>
                    <span>Senha</span>
                    <InputNormal type={"password"} minLength={8} onInvalid={(evt) => {
                        if (evt.target.validity.valueMissing) {
                            onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                        } else if (evt.target.validity.tooShort) {
                            let tam_actual = evt.target.value.length;

                            onInvalid(evt, `A senha deve ter no mínimo 8 caracteres, você tem ${tam_actual} caracteres!`);
                        }
                    }} onInput={(evt) => { onInput(evt) }} placeholder={"••••••••"} value={usuarioPadrao.password} onChange={(evt) => { evt.preventDefault(); onChangePassword(evt.target.value) }} />
                </div>
                <div className={style.div_input}>
                    <span>Nome de Usuário</span>
                    <InputNormal type={"text"} minLength={null} onInvalid={(evt) => { onInvalid(evt, "Campo obrigatório. Preencha por favor!") }} onInput={(evt) => { onInput(evt) }} placeholder={"benesses_dev"} value={usuarioPadrao.userName} onChange={(evt) => { onChangeUserName(evt.target.value) }} />
                </div>
                <div className={style.area_btn_criar}>
                    <Button type="submit" className={style.btn_log_cad} onClick={() => { }} children={"Criar Conta"} />
                </div>
            </ContainerForm>
        </ContainerDiv >
    );
}

export default Cadastrar;