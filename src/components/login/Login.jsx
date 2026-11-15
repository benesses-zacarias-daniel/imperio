import { useState } from "react";
import InputNormal from "../../components/form/inputNomal/InputNormal";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import style from "../../components/form/Input.module.css"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg_info, setMsg] = useState("");
    const navegar = useNavigate();

    const onChangeEmail = (val) => {
        setEmail(val);
        console.log(val);
    }

    const onChangePassword = (val) => {
        setPassword(val);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        const linha = localStorage.getItem("usuarios");
        const usuario = linha ? JSON.parse(linha) : [];

        if (!usuario) {
            setMsg("Nenhum Usuário Cadastrado");
            return;
        }

        const usuarioEncontrado = null;

        if (usuarioEncontrado) {
            // guardaInformacoes(usuarioEncontrado);
            navegar("/admin");
        } else {
            setMsg("E-mail ou Senha incorretos");
            setTimeout(() => { setMsg("") }, 4000);
        }

    }

    const onInvalid = (evt, msg) => {
        evt.target.setCustomValidity(msg);
    }

    const onInput = (evt) => {
        evt.target.setCustomValidity("");
    }

    return (
        <div className={style.area_forms}>
            <form id="form_log" onSubmit={(evt) => { onSubmit(evt) }} className={style.form}>
                <div className={style.div_input}>
                    <span>E-mail</span>
                    <InputNormal type="email" minLength={null} onInvalid={(evt) => { onInvalid(evt, "Campo obrigatório. Preencha por favor!") }} onInput={(evt) => { onInput(evt) }} required onChange={(evt) => { evt.preventDefault(); onChangeEmail(evt.target.value) }} placeHolder={"exemplo@gmail.com"} value={email} />
                </div>
                <div className={style.div_input}>
                    <span>Senha</span>
                    <InputNormal type="password" minLength={null} onInvalid={(evt) => {
                        if (evt.target.validity.valueMissin) {
                            onInvalid(evt, "Campo obrigatório. Preencha por favor!");
                        } else if (evt.target.validity.tooShort) {
                            onInvalid(evt, "A senha deve ter no mínimo 8 caracteres");
                        }
                    }} onInput={(evt) => { onInput(evt) }} required placeHolder={"••••••••"} value={password} onChange={(evt) => { evt.preventDefault(); onChangePassword(evt.target.value) }} />
                </div>
            </form>
            <div className={style.msg_cl}>{msg_info}</div>
            <div className={style.area_btn_log}>
                <Button type="submit" estilo={""} form="form_log" onClick={(evt) => { }} texto="Entrar" />
            </div>
        </div>
    )
}


export default Login;