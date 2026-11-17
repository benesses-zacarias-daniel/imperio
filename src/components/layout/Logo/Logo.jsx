import { Link } from "react-router-dom";
import Img from "../../img/Img";
import style from "./Logo.module.css";
import scrollCima from "../../../utils/scrollCima";

const Logo = ({ LogoMarca, marca, foco, className = style.corNormal }) => {

    return (
        <div className={style.area_logo}>
            <Link to={"/"} onClick={() => {
                scrollCima();
            }}>
                <Img src={LogoMarca} className={style.icone_logo} />
            </Link>
            <div className={style.area_nome}>
                <div className={style.area_foco}>
                    {foco}
                </div>
                <div className={className}>
                    {marca}
                </div>
            </div>
        </div>
    )
}

export default Logo;