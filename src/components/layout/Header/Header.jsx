import Button from "../../button/Button";
import Img from "../../img/Img";
import style from "./Header.module.css";
import Logo from "../logo/Logo";
//Imagens
import AbrirMenu from "../../../assets/icons/menu.svg";
import Carinho from "../../../assets/icons/carinho.svg";
import LogoIcone from "../../../assets/logo/logo.svg";
import { useState } from "react";
import Menu from "../Sidebar/Menu";

const Header = () => {
    const [contador, setContador] = useState(8);
    const [click, setClick] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const onClickCarinho = () => {
        setClick(true);
        setTimeout(() => {
            setClick(false);
        }, 95)
    }

    const onClickMenu = (val) => {
        setShowMenu(val);
    }

    return (
        <header>
            <div className={style.area_bnt_menu}>
                <Button children={
                    <Img src={AbrirMenu} alt={"Ícone de barras!"} className={style.icone} />
                } onClick={() => { onClickMenu(true); }} className={""} />
            </div>
            <div className={style.area_logo_topo}>
                <Logo LogoMarca={LogoIcone} marca={"Electrónicos"} foco={"Imperial"} />
            </div>
            <div className={style.area_carinho}>
                <Button children={
                    <Img src={Carinho} alt={"Ícone de Carinho de compras"} className={style.icone} />
                } onClick={() => { onClickCarinho(); }} className={`${style.carinho_bnt} ${click && style.clickBtn}`} />
                {contador > 0 && (
                    <div className={`${style.contador_carinho} ${click && style.clickBtn}`} onClick={() => {
                        onClickCarinho();
                    }}>
                        <p>{contador >= 10 ? "+9" : contador}</p>
                    </div>
                )}
            </div>
            <Menu mostrarMenu={showMenu} mostrarIcone={true} mostrarIconesMenu={true} onClickOcultar={(val) => {
                onClickMenu(val);
            }} />
        </header>
    )
}


export default Header;