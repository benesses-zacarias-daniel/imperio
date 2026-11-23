import { useEffect, useState } from "react";
import InputNormal from "../../form/inputNomal/InputNormal";
import Button from "../../button/Button";
import style from "../LoginCadastrar.module.css"
import ContainerForm from "../../Common/containerForm/ContainerForm";
import ContainerDiv from "../../Common/container/ContainerDiv";
import useContextAdminLogado from "../../../hooks/useContextAdminLogado";
import { useNavigate } from "react-router-dom";
import CardMensGeral from "../../cards/cardMensGeral/CardMensGeral";
import cadastrarAdmin from "../../../utils/cadastrarAdmin";

const Cadastrar = () => {

    const { usuario, setUsuario } = useContextAdminLogado();
    const [msg, setMsg] = useState("");
    const { onClickLogar } = useContextAdminLogado();
    const navigate = useNavigate();

    const onChangeEmail = (val) => {
        setUsuario((ant) => ({ ...ant, "email": val.replace(" ", "") }));
    };

    const onChangeSenha = (val) => {
        setUsuario((ant) => ({ ...ant, "senha": val.replace(" ", "") }));
    };

    const onChangeNome = (val) => {
        setUsuario((ant) => ({ ...ant, "nome": val.replace(" ", "") }));
    };

    const onClickFecharMsg = () => {
        setMsg("")
    }

    const onSubmit = async (evt) => {
        evt.preventDefault();

        const { mens, status } = await cadastrarAdmin(usuario);

        if (!status) {
            setMsg(mens);
        }

        setMsg(mens)
        onClickLogar(status);
        navigate("/admin/adicionar");

    };

    const onInvalid = (evt, msg) => {
        evt.target.setCustomValidity(msg);
    };

    const onInput = (evt) => {
        evt.target.setCustomValidity("");
    };

    useEffect(() => {
        setUsuario({ "email": "", "senha": "", "nome": "" })
    }, []);

    return (
        <ContainerDiv className={style.area_forms}>
            <ContainerForm onSubmit={(evt) => { onSubmit(evt) }} className={style.form}>
                <div className={style.div_input}>
                    <span>E-mail</span>
                    <InputNormal type={"email"} minLength={null} onInvalid={(evt) => { onInvalid(evt, "Campo obrigatório. Preencha por favor!") }} onInput={(evt) => { onInput(evt) }} required onChange={(evt) => { evt.preventDefault(); onChangeEmail(evt.target.value) }} placeholder={"exemplo@gmail.com"} value={usuario.email} />
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
                    }} onInput={(evt) => { onInput(evt) }} placeholder={"••••••••"} value={usuario.senha} onChange={(evt) => { evt.preventDefault(); onChangeSenha(evt.target.value) }} />
                </div>
                <div className={style.div_input}>
                    <span>Nome de Usuário</span>
                    <InputNormal type={"text"} minLength={null} onInvalid={(evt) => { onInvalid(evt, "Campo obrigatório. Preencha por favor!") }} onInput={(evt) => { onInput(evt) }} placeholder={"benesses_dev"} value={usuario.nome} onChange={(evt) => { onChangeNome(evt.target.value) }} />
                </div>
                <div className={style.area_btn_criar}>
                    <Button type="submit" className={style.btn_log_cad} onClick={() => { }} children={"Criar Conta"} />
                </div>
            </ContainerForm>
            <CardMensGeral mens={msg} textoBtn={"Okay"} onClickFechar={() => { onClickFecharMsg() }} />
        </ContainerDiv >
    );
}

export default Cadastrar;