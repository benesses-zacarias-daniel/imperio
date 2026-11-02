import { useState } from "react";
import style from "./CardDetalhes.module.css";
import Img from "../../img/Img";
import Fexar from "../../../assets/icons/fexar_detalhes.svg";
import Carrinho from "../../../assets/icons/carinho.svg";
import Button from "../../button/Button";
import EstrelaAval from "../../../assets/icons/estrelaAval.svg";

const CardDetalhes = ({ onClickOcult, dados }) => {
    //Dados detalhados
    const detalhes = dados[0].detalhes;
    const srcDetalhes = detalhes.srcDetalhes;
    const tamanhoSrc = srcDetalhes.length;
    const acessos = detalhes.acessos;
    //States para gerir as Imgs
    const [srcDetAct, setSrcDetAct] = useState(0);
    const [fade, setFade] = useState(false);

    const onClickCasaDetalhes = (pos) => {
        setSrcDetAct(pos);
    }

    return (
        <div className={`${style.container_detalhes} ${fade ? style.ocultarDetalhes : ""}`}>
            <div className={`${style.area_conteudo_detalhes} ${fade ? style.ocultarDetalhes : ""}`}>
                <div className={style.fexar_detalhes}>
                    <Button estilo={style.btn_fexar_detalhes} onClick={() => {
                        setTimeout(() => {
                            onClickOcult();
                            setFade(false);
                        }, 1000);
                        setFade(true);
                    }} children={
                        <Img src={Fexar} alt={"Ícone de X"} />
                    } />
                </div>
                <div className={style.conteudo_detalhes}>
                    <div className={style.area_titulo_detalhes}>
                        <h3>Detalhes Do Produto</h3>
                    </div>
                    <div className={style.area_conteudo}>
                        <div className={style.area_imgs_detalhes}>
                            <Img src={srcDetalhes[srcDetAct].srcDet} alt={srcDetalhes[srcDetAct].alt} />
                            <div className={style.miniaturas}>
                                <div className={style.scroll_miniaturas}>
                                    {srcDetalhes.map((img, pos) => (

                                        <Button key={pos}
                                            className={pos === srcDetAct ? style.miniatura_ativa : style.miniatura}
                                            onClick={() => onClickCasaDetalhes(pos)}>
                                            <Img src={img.srcThumb} alt={img.alt} load={true} />
                                        </Button>
                                    ))}
                                </div>
                            </div>
                            <div className={style.area_legenda_local}>
                                <div className={style.ponto_verd}></div>
                                <h4>{srcDetalhes[srcDetAct].localizacao}</h4>
                            </div>
                            <div className={style.loc_detalhes}>{srcDetAct + 1}/{tamanhoSrc}</div>
                        </div>
                        <div className={style.area_info_detalhes}>
                            {acessos && (<h3>O Producto possui:</h3>)}
                            <div className={style.area_acessos_detalhes}>
                                {acessos && (
                                    acessos.map((acesso, pos) => {
                                        return (
                                            <div key={pos} className={style.acesso}>
                                                <Img src={EstrelaAval} alt={"Estrela"} />
                                                <p>{acesso}</p>
                                            </div>
                                        )
                                    })
                                )}
                            </div>
                        </div>
                        <div className={style.area_btn_contactar_detalhes}>
                            <Button className={style.btn_detalhe_detalhe} children={
                                <>
                                    <Img src={Carrinho} alt={"Ícone de Carinho"} />
                                    <p>Adicionar</p>
                                </>
                            } onClick={() => { }} />
                        </div>
                    </div>
                </div>
            </div>
        </div >);
}

export default CardDetalhes;