import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./MenuAdmin.module.css";
import Button from "../../button/Button";
import Img from "../../img/Img";

import scrollCima from "../../../utils/scrollCima";

import Home from "../../../assets/icons/casa.svg";
import Productos from "../../../assets/icons/produto.svg";

// import Fexar from "../../../assets/icons/fexarMenu.svg";

//Ícones de foco
import HomeActiva from "../../../assets/icons/casaL.svg";
import ProductosActiva from "../../../assets/icons/produtoL.svg";


const MenuAdmin = ({ mostrarIcone = false, mostrarMenu = false, onClickOcultar, classContaner = style.contaner_menu, classeLinkMenu = style.link_menu, classeBtnMenu = style.btn_menu, mostrarIconesMenu = false }) => {
    const { pathname } = useLocation();
    const [paginaActiva, setPaginaActiva] = useState(pathname);
    const [fade, setFade] = useState(false);

    const estiloContainer = mostrarIcone ? `${classContaner} ${fade ? style.ocultarMenu : ""}` : style.contaner_footer_menu;

    const onClickOcultarMenu = () => {
        setTimeout(() => {
            setFade(false);
            onClickOcultar(false);
        }, 2000);

        setFade(true);
    }

    useEffect(() => {
        // console.log(pathname);
        setPaginaActiva(pathname);
        // console.log(paginaActiva);
    }, [pathname])

    return (

        mostrarMenu && (
            <nav>

                <div className={estiloContainer} id="contaner_menu" onClick={(evt) => {
                    if (evt.target.id === "contaner_menu") {
                        onClickOcultarMenu();
                    }
                }}>
                    <div className={style.contedeudo_contaner}>

                        {mostrarIcone && (
                            <div className={style.icone_faxar_menu}>
                                <div className={style.nome_marca_menu}>
                                    <div className={style.nome}>
                                        Imperial Admin
                                    </div>
                                </div>
                            </div>)}
                        <div className={style.area_menu}>
                            <Link to={"/admin/adicionar"} className={`${classeLinkMenu} ${(paginaActiva === "/admin/adicionar") ? style.pagina_activa : ""}`}>
                                <Button children={
                                    <>
                                        {mostrarIconesMenu && (<Img src={(paginaActiva === "/admin/adicionar") ? HomeActiva : Home} alt={"Ícone de Casa"} className={style.img_menu} />
                                        )}
                                        <p>Adicionar Produtos</p>
                                    </>
                                } onClick={() => {
                                    onClickOcultarMenu();
                                    scrollCima();
                                }} className={classeBtnMenu} />

                            </Link>
                            <Link to={"/admin/gerenciar"} className={`${classeLinkMenu} ${(paginaActiva === "/admin/gerenciar") ? style.pagina_activa : ""}`}>
                                <Button children={
                                    <>
                                        {mostrarIconesMenu && (<Img src={(paginaActiva === "/admin/gerenciar") ? ProductosActiva : Productos} alt={"Ícone de Sacola de Compras"} className={style.img_menu} />
                                        )}
                                        <p>Gerenciar Produtos</p>
                                    </>
                                } onClick={() => {
                                    onClickOcultarMenu();
                                    scrollCima();
                                }} className={classeBtnMenu} />
                            </Link>

                            <a href={"/"} className={classeLinkMenu} target="_blank" rel="noopener noreferrer">
                                <Button children={
                                    <>
                                        <Img src={Home} alt={"Ícone de Sacola de Compras"} className={style.img_menu} />
                                        <p>Voltar Para o Imperio</p>
                                    </>
                                } onClick={() => {
                                    onClickOcultarMenu();
                                    scrollCima();
                                }} className={classeBtnMenu} />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        )

    )
}



export default MenuAdmin;