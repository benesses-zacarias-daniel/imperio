import ContainerDiv from "../../Common/container/ContainerDiv";
import Img from "../../img/Img";
import style from "./Logo.module.css";

const Logo = ({ LogoMarca, marca, foco, className = style.corNormal }) => {

    return (
        <ContainerDiv className={style.area_logo}>
            <Img src={LogoMarca} className={style.icone_logo} />
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