import Img from "../../img/Img";
import style from "./Logo.module.css";

const Logo = ({ LogoMarca, marca, foco }) => {

    return (
        <div className={style.area_logo}>
            <Img src={LogoMarca} className={style.icone_logo} />
            <div className={style.area_nome}>
                <div className={style.area_foco}>
                    {foco}
                </div>
                {marca}
            </div>
        </div>
    )
}

export default Logo;