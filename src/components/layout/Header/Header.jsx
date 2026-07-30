import Button from "../../button/Button";
import Img from "../../img/Img";
import style from "./Header.module.css";
import Logo from "../logo/Logo";
//Imagens
import AbrirMenu from "../../../assets/icons/menu.svg";
import Carinho from "../../../assets/icons/carinho.svg";
import LogoIcone from "../../../assets/logo/logo.svg";
import { useState } from "react";

const Header = () => {
    const [contador, setContador] = useState(10);

    return (
        <header>
            <div className={style.area_bnt_menu}>
                <Button children={
                    <Img src={AbrirMenu} alt={"Ícone de barras!"} className={style.icone} />
                } onClick={() => { }} className={""} />
            </div>
            <div className={style.area_logo_topo}>
                <Logo LogoMarca={LogoIcone} marca={"Electrónicos"} foco={"Imperial"} />
            </div>
            <div className={style.area_carinho}>
                <Button children={
                    <Img src={Carinho} alt={"Ícone de Carinho de compras"} className={style.icone} />
                } onClick={() => { }} className={style.carinho_bnt} />
                {contador > 0 && (
                    <div className={style.contador_carinho}>
                        <p>{contador >= 10 ? "+9" : contador}</p>
                    </div>
                )}
            </div>
        </header>
    )
}


export default Header;