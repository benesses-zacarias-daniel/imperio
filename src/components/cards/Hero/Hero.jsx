import style from "./Hero.module.css";
import Button from "../../button/Button"
import ContainerSessao from "../../Common/container/ContainerSessao";

const Hero = ({ foco, marca, minInfo, textoProd, classNameBtnProd, textoCon, classNameBtnCon }) => {
    return (
        <ContainerSessao className={style.contaner_hero}>
            <div className={style.container_conteudo_hero}>
                <div className={style.area_accao_hero}>
                    <div className={style.area_foco_marca}>
                        <div className={style.foco}>
                            {foco}
                        </div>
                        {marca}
                    </div>
                    <div className={style.min_info}><i>{minInfo}</i></div>
                    <div className={style.area_btns}>
                        <Button children={textoProd} onClick={() => { }} className={classNameBtnProd} />
                        <Button children={textoCon} onClick={() => { }} className={classNameBtnCon} />
                    </div>
                </div>
            </div>
        </ContainerSessao>
    );
}

export default Hero;