import { Link, useLocation } from "react-router-dom";
import ContainerDiv from "../../Common/container/ContainerDiv";
import Img from "../../img/Img";
import style from "./Logo.module.css";
import scrollCima from "../../../utils/scrollCima";

const Logo = ({ LogoMarca, marca, foco, className = style.corNormal }) => {
    const { pathname } = useLocation();

    return (
        <ContainerDiv className={style.area_logo}>
            <Link to={pathname.includes("admin") ? "adicionar" : "home"} onClick={() => { scrollCima() }}>
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
        </ContainerDiv>
    )
}

export default Logo;