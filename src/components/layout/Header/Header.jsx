import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import Button from "../../button/Button";
import Img from "../../img/Img";
import Logo from "../logo/Logo";
//Imagens
import AbrirMenu from "../../../assets/icons/menu.svg";
import Carinho from "../../../assets/icons/carinho.svg";
import LogoIcone from "../../../assets/logo/logo.svg";
import Menu from "../Sidebar/Menu";
import useContextCarinho from "../../../hooks/useContextCarinho";

const Header = () => {
    const [click, setClick] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const { itens } = useContextCarinho();
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
        <>
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
                    <Link to={"/carinho"}>
                        <Button children={
                            <Img src={Carinho} alt={"Ícone de Carinho de compras"} className={style.icone} />
                        } onClick={() => { onClickCarinho(); }} className={`${style.carinho_bnt} ${click && style.clickBtn}`} />
                        {itens.length > 0 && (
                            <div className={`${style.contador_carinho} ${click && style.clickBtn}`} onClick={() => {
                                onClickCarinho();
                            }}>
                                <p>{itens.length >= 10 ? "+9" : itens.length}</p>
                            </div>
                        )}
                    </Link>
                </div>
            </header >
            <Menu mostrarMenu={showMenu} mostrarIcone={true} mostrarIconesMenu={true} onClickOcultar={(val) => {
                onClickMenu(val);
            }} />
        </>
    )
}


export default Header;