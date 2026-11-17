import style from "../Header.module.css";
import { useState } from "react";
import Button from "../../../button/Button";
import Img from "../../../img/Img";
import Logo from "../../Logo/Logo";
//Imagens
import AbrirMenu from "../../../../assets/icons/menu.svg";
import LogoIcone from "../../../../assets/logo/logoIET.webp";
import MenuAdmin from "../../Sidebar/SidebarAdmin/MenuAdmin";

const HeaderAdmin = () => {
    const [showMenu, setShowMenu] = useState(false);

    const onClickMenu = (val) => {
        setShowMenu(val);
    }

    return (
        <>
            <header>
                <div className={style.area_bnt_menu}>
                    <Button children={
                        <Img src={AbrirMenu} alt={"Ícone de barras!"} className={style.icone} />
                    } onClick={() => { onClickMenu(true); }} className={""} />
                </div>
                <div className={style.area_logo_topo}>
                    <Logo LogoMarca={LogoIcone} marca={"Admin"} foco={"Imperial"} />
                </div>
            </header >
            <MenuAdmin mostrarMenu={showMenu} mostrarIcone={true} mostrarIconesMenu={true} onClickOcultar={(val) => {
                onClickMenu(val);
            }} />
        </>
    )
}


export default HeaderAdmin;