import Autor from "../../autor/Autor";
import Logo from "../logo/Logo";
import LogoIcone from "../../../assets/logo/logo.svg";
import style from "./Footer.module.css";

const Footer = () => {
    const DadosAutor = [{
        "id": 1,
        "nomeAutor": "BZD",
        "linkSobre": "https://sobremin-bzd-site.vercel.app",
        "textos": ["Desenvolvido por ", " © 2026 - Imperial Electronicos . Todos os direiros reservados."]
    }];

    return (
        <footer>
            <div className={style.area_info}>
                <div className={style.area_marca_nav}>
                    <div className={style.marca}>
                        <div className={style.desc_footer}>
                            <Logo LogoMarca={LogoIcone} marca={"Electrónicos"} foco={"Imperial"} />
                            <div className={style.desc_texto}>
                                A sua autoridade em hardware premium e soluções tecnológicas de luxo.
                            </div>
                        </div>
                        <div className={style.contactos}>
                            <h4>
                                Contactos
                            </h4><br />
                            [icone de email]<br />
                            [whatsApp]<br />
                            [facebook]<br />
                            [instagram]
                        </div>
                    </div>
                    <div className={style.nav}>
                        <h4>
                            Navegação
                        </h4><br />
                        [home]
                        <br />
                        [produtos]
                        <br />
                        [sobre]
                        <br />
                        [anunciar]
                    </div>
                </div>
                <hr className={style.linha} />
                <Autor dadosAutor={DadosAutor} />
            </div>
        </footer>)
}


export default Footer;