import style from "../LoginCadastrar.module.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputNormal from "../../form/inputNomal/InputNormal";
import Button from "../../button/Button";
import ContainerForm from "../../Common/containerForm/ContainerForm";
import ContainerDiv from "../../Common/container/ContainerDiv";
import useContextAdminLogado from "../../../hooks/useContextAdminLogado";
import loginAdmin from "../../../utils/loginAdmin";

const Login = () => {
    const { usuario, setUsuario } = useContextAdminLogado();

    const { onClickLogar } = useContextAdminLogado();
    const [msgInfo, setMsgInfo] = useState("");
    const navigate = useNavigate();

    const onChangeEmail = (val) => {
        setUsuario((ant) => ({ ...ant, "email": val.replace(" ", "") }));
    }

    const onChangeSenha = (val) => {
        setUsuario((ant) => ({ ...ant, "senha": val.replace(" ", "") }));
    }

    const onSubmit = async (evt) => {
        evt.preventDefault();
        const { mens, status } = await loginAdmin(usuario);

        if (!status) {
            setMsgInfo(mens);
            setTimeout(() => { setMsgInfo("") }, 4000);
        }

        onClickLogar(status);
        navigate("/admin/adicionar");

    }

    const onInvalid = (evt, msg) => {
        evt.target.setCustomValidity(msg);
    }

    const onInput = (evt) => {
        evt.target.setCustomValidity("");
    }

    useEffect(() => {
        setUsuario({ "email": "", "senha": "" })
    }, []);

    return (
        <ContainerDiv className={style.area_forms}>
            <ContainerForm onSubmit={(evt) => { onSubmit(evt) }} className={style.form}>
                <div className={style.div_input}>
                    <label htmlFor={"email_login"}>E-mail</label>
                    <InputNormal id={"email_login"} type="email" minLength={null} onInvalid={(evt) => { onInvalid(evt, "Campo obrigatório. Preencha por favor!") }} onInput={(evt) => { onInput(evt) }} onChange={(evt) => { onChangeEmail(evt.target.value) }} placeholder={"exemplo@gmail.com"} value={usuario.email} />
                </div>
                <div className={style.div_input}>
                    <label htmlFor={"senha_login"}>Senha</label>
                    <InputNormal id={"senha_login"} type="password" minLength={null} onInvalid={(evt) => {
                        if (evt.target.validity.valueMissin) {
                            onInvalid(evt, "Campo obrigatório. Preencha por favor!");
                        } else if (evt.target.validity.tooShort) {
                            onInvalid(evt, "A senha deve ter no mínimo 8 caracteres");
                        }
                    }} onInput={(evt) => { onInput(evt) }} placeholder={"**********"} value={usuario.senha} onChange={(evt) => { onChangeSenha(evt.target.value) }} />
                </div>
                {msgInfo && (<div className={style.msg_cl}>{msgInfo}</div>)}
                <div className={style.area_btn_log}>
                    <Button type="submit" className={style.btn_log_cad} onClick={() => { }} children="Entrar" />
                </div>
            </ContainerForm>
        </ContainerDiv>
    )
}


export default Login;