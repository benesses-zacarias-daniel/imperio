import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Menu.module.css";
import Button from "../../button/Button";
import Img from "../../img/Img";

import Home from "../../../assets/icons/casa.svg";
import Productos from "../../../assets/icons/produto.svg";
import Sobre from "../../../assets/icons/sobre.svg";
import Anunciar from "../../../assets/icons/anuncio.svg";
import Carinho from "../../../assets/icons/carinhoB.svg";
import Termos from "../../../assets/icons/termos.svg";
import Contacto from "../../../assets/icons/estrelaCircular.svg";
import Fexar from "../../../assets/icons/fexarMenu.svg";

//Ícones de foco
import HomeActiva from "../../../assets/icons/casaL.svg";
import ProductosActiva from "../../../assets/icons/produtoL.svg";
import SobreActiva from "../../../assets/icons/sobreL.svg";
import AnunciarActiva from "../../../assets/icons/anuncioL.svg";
import CarinhoActiva from "../../../assets/icons/carinho.svg";
import TermosActiva from "../../../assets/icons/termosL.svg";
import ContactoActiva from "../../../assets/icons/estrelaCircular.svg";


const Menu = ({ mostrarIcone = true, mostrarMenu, onClickOcultar }) => {
    const { pathname } = useLocation();
    const [paginaActiva, setPaginaActiva] = useState(pathname);

    useEffect(() => {
        // console.log(pathname);
        setPaginaActiva(pathname);
        // console.log(paginaActiva);
    }, [pathname])

    return (

        mostrarMenu && (
            <nav>

                <div className={style.contaner_menu}>
                    <div className={style.contedeudo_contaner}>

                        {mostrarIcone && (<div className={style.icone_faxar_menu}>
                            <Button children={
                                <Img src={Fexar} alt={"Ícone de Menu com X"} />
                            } onClick={() => {
                                onClickOcultar(false);
                            }} />
                        </div>)}
                        <div className={style.area_menu}>
                            <Link to={"/"} className={`${style.link_menu} ${(paginaActiva === "/") ? style.pagina_activa : ""}`}>
                                <Button children={
                                    <>
                                        <Img src={(paginaActiva === "/") ? HomeActiva : Home} alt={"Ícone de Casa"} className={style.img_menu} />
                                        <p>Home</p>
                                    </>
                                } onClick={() => {
                                    onClickOcultar(false);
                                }} className={style.btn_menu} />

                            </Link>
                            <Link to={"/productos"} className={`${style.link_menu} ${(paginaActiva === "/productos") ? style.pagina_activa : ""}`}>
                                <Button children={
                                    <>
                                        <Img src={(paginaActiva === "/productos") ? ProductosActiva : Productos} alt={"Ícone de Sacola de Compras"} className={style.img_menu} />
                                        <p>Productos</p>
                                    </>
                                } onClick={() => {
                                    onClickOcultar(false);
                                }} className={style.btn_menu} />

                            </Link>

                            <Link to={"/sobre"} className={`${style.link_menu} ${(paginaActiva === "/sobre") ? style.pagina_activa : ""}`}>
                                <Button children={
                                    <>
                                        <Img src={(paginaActiva === "/sobre") ? SobreActiva : Sobre} alt={"Ícone de Info"} className={style.img_menu} />
                                        <p>Sobre</p>
                                    </>
                                } onClick={() => {
                                    onClickOcultar(false);
                                }} className={style.btn_menu} />

                            </Link>

                            <Link to={"/contacto"} className={`${style.link_menu} ${(paginaActiva === "/contacto") ? style.pagina_activa : ""}`}>
                                <Button children={
                                    <>
                                        <Img src={(paginaActiva === "/contacto") ? ContactoActiva : Contacto} alt={"Ícone de Email"} className={style.img_menu} />
                                        <p>Contacto</p>
                                    </>
                                } onClick={() => {
                                    onClickOcultar(false);
                                }} className={style.btn_menu} />

                            </Link>

                            <Link to={"/anunciar"} className={`${style.link_menu} ${(paginaActiva === "/anunciar") ? style.pagina_activa : ""}`}>
                                <Button children={
                                    <>
                                        <Img src={(paginaActiva === "/anunciar") ? AnunciarActiva : Anunciar} alt={"Ícone de Casa com um Mais no Canto"} className={style.img_menu} />
                                        <p>Anunciar Produto</p>
                                    </>
                                } onClick={() => {
                                    onClickOcultar(false);
                                }} className={style.btn_menu} />

                            </Link>

                            <Link to={"/carinho"} className={`${style.link_menu} ${(paginaActiva === "/carinho") ? style.pagina_activa : ""}`}>
                                <Button children={
                                    <>
                                        <Img src={(paginaActiva === "/carinho") ? CarinhoActiva : Carinho} alt={"Ícone de Carinho"} className={style.img_menu} />
                                        <p>Carinho</p>
                                    </>
                                } onClick={() => {
                                    onClickOcultar(false);
                                }} className={style.btn_menu} />

                            </Link>

                            <Link to={"/termos"} className={`${style.link_menu} ${(paginaActiva === "/termos") ? style.pagina_activa : ""}`}>
                                <Button children={
                                    <>
                                        <Img src={(paginaActiva === "/termos") ? TermosActiva : Termos} alt={"Ícone de Doc"} className={style.img_menu} />
                                        <p>Termos & Condições</p>
                                    </>
                                } onClick={() => {
                                    onClickOcultar(false);
                                }} className={style.btn_menu} />

                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        )

    )
}



export default Menu;