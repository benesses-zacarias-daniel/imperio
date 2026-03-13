import Button from "../../button/Button"
import Img from "../../img/Img"

const Hero = () => {
    return (
        <div className="contaner_hero">
            <div className="area_accao_hero">
                <div className="area_foco_marca">
                    <div className="foco">
                        Imperial
                    </div>
                    Electrónicos
                </div>
                <div className="min_info"> <i>A excelência em tecnologia. Descubra uma curadoria exclusiva do hardware mais avançado do mundo, onde o desempenho encontra o luxo absoluto.</i></div>
                <div className="area_btns">
                    <Button children={"Ver produtos"} onClick={() => { }} />
                    <Button children={"Contactar"} onClick={() => { }} />
                </div>
            </div>
            <div className="area_img_hero">
                <Img alt={"Imagem de Teste"} src={"#"} />
            </div>
        </div>
    );
}

export default Hero;