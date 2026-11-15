import style from "./Autenticar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Img from "../../components/img/Img";
import LogoImperial from "../../assets/logo/logoIET.webp"
import Login from "../../components/login/Login";
import Cadastrar from "../../components/cadastrar/Cadastrar";
import Button from "../../components/button/Button";

const Autenticar = () => {

    const [info, setInfo] = useState(true);

    const onClickLogin = (val) => {
        setInfo(val);
        console.log(info);

    }

    const onClickCriar = (val) => {
        setInfo(val);
    }

    return (
        <div className={style.area_user}>
            <div className={style.area_geral}>
                <div className={style.area_img}>
                    <Img src={LogoImperial} alt="Imagem de Usuario" />
                </div>
                {info ? (
                    <div className={style.saudacao_login}>
                        <h2>Bem-vindo de volta ao </h2>
                        <span>Faça Login e continue a explorar o Mundo Tech</span>
                    </div>) : (
                    <div className={style.saudacao_login}>
                        <h2>Crie sua conta  </h2>
                        <span>E fique à par das maiores notícias do Universo Tech</span>
                    </div>)}
                {info ? (
                    <Login />
                ) : (
                    <Cadastrar />
                )}
                <div className={style.area_btn_escolha}>
                    {info ? (
                        <div>
                            Não tem uma conta?
                            <Link to={"/autenticar/cadastrar"}>
                                <Button type="button" className={style.activa_} onClick={() => { onClickCriar(false) }} children={"Cadastrar"} />
                            </Link>
                        </div>
                    ) : (
                        <div>
                            Já tem uma conta? Fazer
                            <Link to={"/autenticar/login"}>
                                <Button type="button" className={style.activa_} onClick={() => { onClickLogin(true) }} children={"Login"} />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}


export default Autenticar;