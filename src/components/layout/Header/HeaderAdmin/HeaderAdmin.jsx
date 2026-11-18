import style from "../Header.module.css";
import { useState } from "react";
import Button from "../../../button/Button";
import Img from "../../../img/Img";
import Logo from "../../Logo/Logo";
//Imagens
import AbrirMenu from "../../../../assets/icons/menu.svg";
import Sair from "../../../../assets/icons/sair.svg";
import LogoIcone from "../../../../assets/logo/logoIET.webp";
import MenuAdmin from "../../Sidebar/SidebarAdmin/MenuAdmin";
import useContextAdminLogado from "../../../../hooks/useContextAdminLogado";

const HeaderAdmin = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { onClickSair } = useContextAdminLogado();

    const onClickMenu = (val) => {
        setShowMenu(val);
    }

    return (
        <>
            <header>
                <div className={style.area_bnt_menu}>
                    <Button onClick={() => { onClickMenu(true) }} children={
                        <Img src={AbrirMenu} alt={"Ícone de barras!"} className={style.icone} />
                    } />
                </div>
                <div className={style.area_logo_topo}>
                    <Logo LogoMarca={LogoIcone} marca={"Admin"} foco={"Imperial"} />
                </div>
                <div className={style.area_carinho}>
                    <Button onClick={() => { onClickSair() }} children={
                        <Img src={Sair} alt={"Ícone de Deslogar"} className={style.icone} />
                    } />
                </div>
            </header >
            <MenuAdmin mostrarMenu={showMenu} mostrarIcone={true} mostrarIconesMenu={true} onClickOcultar={(val) => {
                onClickMenu(val);
            }} />
        </>
    )
}


export default HeaderAdmin;