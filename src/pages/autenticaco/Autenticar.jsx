import style from "./Autenticar.module.css";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Img from "../../components/img/Img";
import LogoImperial from "../../assets/logo/logoIET.webp"
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
                        <div className={style.titulo_imperial}>
                            Bem-vindo de volta à
                            <h2 className={style.nome_imp}> Imperial </h2>
                        </div>
                        <span>Entre na sua conta para gerenciar o catálogo de produtos e os depoimentos da loja com facilidade.</span>
                    </div>) : (
                    <div className={style.saudacao_login}>
                        <div className={style.titulo_imperial}>
                            Junte-se à
                            <h2 className={style.nome_imp}>Imperial Electrónicos</h2>
                        </div>
                        <span>Crie o seu acesso administrativo em segundos e mantenha os produtos e depoimentos actualizados.</span>
                    </div>)}
                <Outlet />
                <div className={style.area_btn_escolha}>
                    {info ? (
                        <div className={style.area_escolha}>
                            <p>Não tem uma conta?</p>
                            <Link to={"cadastrar"}>
                                <Button type="button" className={style.activa_} onClick={() => { onClickCriar(false) }} children={"Cadastrar"} />
                            </Link>
                        </div>
                    ) : (
                        <div className={style.area_escolha}>
                            <p>Já tem uma conta? Fazer</p>
                            <Link to={"login"}>
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