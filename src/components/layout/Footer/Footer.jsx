import Autor from "../../autor/Autor";
import Logo from "../logo/Logo";
import LogoIcone from "../../../assets/logo/logo.svg";
import style from "./Footer.module.css";
import Menu from "../Sidebar/Menu";
import Img from "../../img/Img";
import Chamada from "../../../assets/icons/chamada.svg";
import Email from "../../../assets/icons/email.svg";

const Footer = () => {
    const DadosAutor = [{
        "id": 1,
        "nomeAutor": "BZD",
        "linkSobre": "https://sobrebzd.vercel.app",
        "textos": ["Desenvolvido por ", " © 2026 - Imperial Electronicos . Todos os direiros reservados."]
    }];

    const linkEmail = `mailto:imperialelectronicoscontacto@gmail.com`;
    const num1 = "258 84 975 4315";
    const linkWhatsApp1 = `https://wa.me/${num1}?text=Olá, tudo bem? Gostaria de saber mais sobre a Imperial Electronicos!`;
    const num2 = "258 87 000 6914";
    const linkWhatsApp2 = `https://wa.me/${num2}?text=Olá, tudo bem? Gostaria de saber mais sobre a Imperial Electronicos!`;

    return (
        <footer>
            <div className={style.area_info}>
                <div className={style.area_marca_nav}>
                    <div className={style.marca}>
                        <div className={style.desc_footer}>
                            <Logo LogoMarca={LogoIcone} marca={"Electrónicos"} foco={"Imperial"} className={style.corFora} />
                            <div className={style.desc_texto}>
                                A sua autoridade em hardware premium e soluções tecnológicas de luxo.
                            </div>
                        </div>
                        <div className={style.contacto}>
                            <h2 className={style.titulo_contacto}>Contactos:</h2>
                            <div className={style.area_numeros}>
                                <div className={style.numeros}><a href={linkWhatsApp2} className={style.link_footer_nav}><Img src={Chamada} alt={"Ícone de Telefone"} />  <p>+258 84 975 4315</p></a></div>
                                <div className={style.numeros}><a href={linkWhatsApp1} className={style.link_footer_nav}><Img src={Chamada} alt={"Ícone de Telefone"} />  <p>+258 87 000 6914</p></a></div>
                            </div>
                            <div className={style.email}>
                                <a href={linkEmail} className={style.link_footer_nav}>
                                    <Img src={Email} alt={"Ícone de E-mail alternativo"} />
                                    <p>
                                        imperialelectronicoscontacto@gmail.com
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style.nav}>
                        <h4 className={style.titulo_nav}>
                            Navegação Rápida
                        </h4>
                        <Menu mostrarMenu={true} onClickOcultar={() => { }} classContaner={style.contaner_footer_menu} classeLinkMenu={style.link_footer} classeBtnMenu={style.btn_footer_menu} />
                    </div>
                </div>
                <hr className={style.linha} />
                <Autor dadosAutor={DadosAutor} />
            </div>
        </footer>)
}


export default Footer;