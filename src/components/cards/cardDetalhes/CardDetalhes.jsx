import { useState } from "react";
import style from "./CardDetalhes.module.css";
import Img from "../../img/Img";
import Fexar from "../../../assets/icons/fexar_detalhes.svg";
import Carinho from "../../../assets/icons/carinhoadd.svg";
import Button from "../../button/Button";
import EstrelaAval from "../../../assets/icons/estrelaAval.svg";
import RemoverItem from "../../../assets/icons/delete.svg";
import useContextCarrinho from "../../../hooks/useContextCarrinho";

const CardDetalhes = ({ onClickOcult, dados, showDetalhes = false }) => {
    if (!showDetalhes) {
        return null;
    }
    const { itens, onClickAdicionarItem, onClickRemoverItem } = useContextCarrinho();
    //Dados detalhados
    const detalhes = dados[0].detalhes;
    const srcDetalhes = detalhes.srcDetalhes;
    const tamanhoSrc = srcDetalhes.length;
    const especificacoes = detalhes.especificacoes;
    //States para gerir as Imgs
    const [srcDetAct, setSrcDetAct] = useState(0);
    const [fade, setFade] = useState(false);

    const onClickCasaDetalhes = (pos) => {
        setSrcDetAct(pos);
    }
    const onClickOcultarDetalhes = () => {
        setTimeout(() => {
            onClickOcult();
            setFade(false);
        }, 700);
        setFade(true);
    }

    return (
        <div className={`${style.container_detalhes} ${fade ? style.ocultarCard : ""}`}>
            <div className={`${style.area_conteudo_detalhes} ${fade ? style.ocultarCard : ""}`}>
                <div className={style.fexar_detalhes}>
                    <Button estilo={style.btn_fexar_detalhes} onClick={() => {
                        onClickOcultarDetalhes();
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
                            {especificacoes && (<h3>O Produto possui:</h3>)}
                            <div className={style.area_acessos_detalhes}>
                                {especificacoes && (
                                    especificacoes.map((esp, pos) => {
                                        return (
                                            <div key={pos} className={style.acesso}>
                                                <Img src={EstrelaAval} alt={"Estrela"} />
                                                <p>{esp}</p>
                                            </div>
                                        )
                                    })
                                )}
                            </div>
                        </div>
                        <div className={style.area_btn_contactar_detalhes}>
                            {
                                itens.some((prod) => prod.id === dados[0].id) ? (
                                    <Button children={
                                        <>
                                            <Img src={RemoverItem} alt={"Ícone de Carinho"} />
                                            <p>Remover</p>
                                        </>
                                    } onClick={() => {
                                        onClickRemoverItem(dados[0].id);
                                    }} className={style.btn_rm_resumo} />
                                ) : (
                                    <Button children={
                                        <>
                                            <Img src={Carinho} alt={"Ícone de Carinho"} />
                                            <p>Adicionar</p>
                                        </>
                                    } onClick={() => {
                                        onClickAdicionarItem(dados[0]);
                                        onClickOcultarDetalhes();
                                    }} className={style.btn_add_resumo} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >);
}

export default CardDetalhes;