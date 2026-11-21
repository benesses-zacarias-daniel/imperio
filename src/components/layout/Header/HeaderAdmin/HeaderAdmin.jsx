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
import CardMensGeral from "../../../cards/cardMensGeral/CardMensGeral";
import { Link } from "react-router-dom";
import scrollCima from "../../../../utils/scrollCima";

const HeaderAdmin = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { onClickSair } = useContextAdminLogado();
    const [msg, setMsg] = useState("");

    const onClickMenu = (val) => {
        setShowMenu(val);
    }
    const onClickSairMsg = () => {
        setMsg("Realmente deseja sair? Se sim clique em Sair, se não clique na área azul fora do Botão Sair!")
    }

    const onClickSairAdmin = () => {
        onClickSair();
    }

    const onClickFecharAdmin = () => {
        setMsg("")
    };

    return (
        <>
            <header>
                <div className={style.area_bnt_menu}>
                    <Button onClick={() => { onClickMenu(true) }} children={
                        <Img src={AbrirMenu} alt={"Ícone de barras!"} className={style.icone} />
                    } />
                </div>
                <div className={style.area_logo_topo}>
                    <Link to={"adicionar"} onClick={() => {
                        scrollCima();
                    }}>
                        <Logo LogoMarca={LogoIcone} marca={"Admin"} foco={"Imperial"} />
                    </Link>
                </div>
                <div className={style.area_carinho}>
                    <Button onClick={() => { onClickSairMsg() }} children={
                        <Img src={Sair} alt={"Ícone de Deslogar"} className={style.icone} />
                    } />
                </div>
            </header >
            <MenuAdmin mostrarMenu={showMenu} mostrarIcone={true} mostrarIconesMenu={true} onClickOcultar={(val) => {
                onClickMenu(val);
            }} />

            <CardMensGeral mens={msg} textoBtn={"Sair"} controlSair={false} onClickFecharAdmin={() => { onClickFecharAdmin() }} onClickFechar={() => { onClickSairAdmin() }} />
        </>
    )
}


export default HeaderAdmin;