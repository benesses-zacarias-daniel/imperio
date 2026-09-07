import ContainerDiv from "../../Common/container/ContainerDiv";
import style from "./CaixaAnunciar.module.css";
import Img from "../../img/Img";
import Button from "../../button/Button";


const CaixaAnunciar = ({ dadosAnunciar, Opcoes }) => {
    console.log(Opcoes[0]);

    return (
        <ContainerDiv className={style.container_dados_anunciar}>

            <div className={style.container_}>
                <form method="post">
                    <div className={style.container_conteudo}>
                        <div className={style.conteudo}>
                            <div className={style.area_input_anun}>
                                <div className={style.area_label}>
                                    <label htmlFor="nome">
                                        {dadosAnunciar.inputs[0].label}
                                    </label>
                                </div>
                                <input type={dadosAnunciar.type[0]} id="nome" placeholder={dadosAnunciar.inputs[0].placeholder} className={style.input_anun} />
                            </div>
                            <div className={style.select_categoria_anun}>
                                <label>
                                    {Opcoes[0].label}
                                </label>
                                <select name={Opcoes[0].nome} id={Opcoes[0].id} className={style.select}>
                                    {Opcoes[0].opcoes.map((cat) => {
                                        return (
                                            <option key={cat.id} value={cat.value} className={style.opcao} onClick={(evt) => {
                                                console.log(evt.target.value);
                                            }}>{cat.cat}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className={style.area_input_anun}>
                                <div className={style.area_label}>
                                    <label htmlFor="det">
                                        {dadosAnunciar.inputs[2].label}
                                    </label>
                                </div>
                                <input type={dadosAnunciar.type[0]} id="det" placeholder={dadosAnunciar.inputs[2].placeholder} className={style.input_anun} />
                            </div>
                            <div className={style.area_input_anun}>
                                <div className={style.area_label}>
                                    {dadosAnunciar.inputs[3].label}
                                </div>
                                <div className={style.area_icone_input}>
                                    <label htmlFor="img_prods">

                                        <Img src={dadosAnunciar.icones[0].icone_src} alt={dadosAnunciar.icones[0].icone_alt} className={style.icone_input_tell} />
                                        <p>{dadosAnunciar.inputs[3].placeholder}</p>
                                        <p>JPG,PNG (Máx 5 MB por foto)</p>
                                    </label>
                                </div>
                                <div className={style.area_ocultar_input}>
                                    <input type={dadosAnunciar.type[2]} id="img_prods" placeholder={""} className={style.input_imagem} />
                                </div>
                            </div>
                            <div className={style.area_input_anun}>
                                <div className={style.area_label}>
                                    <label htmlFor="contacto_">
                                        {dadosAnunciar.inputs[4].label}
                                    </label>
                                </div>
                                <div className={style.area_icone_input}>
                                    <Img src={dadosAnunciar.icones[1].icone_src} alt={dadosAnunciar.icones[1].icone_alt} className={style.icone_input_tell} />
                                    <input type={dadosAnunciar.type[4]} id={"contacto_"} placeholder={dadosAnunciar.inputs[4].placeholder} className={style.input_anun} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.area_btn_anunciar}>
                        <Button className={style.btn_mens}>
                            <p>{dadosAnunciar.texto_btn}</p>
                            <Img src={dadosAnunciar.icones[2].icone_src} alt={dadosAnunciar.icones[2].icone_alt} className={style.icone_mens} />
                        </Button>
                    </div>
                </form>
            </div>
        </ContainerDiv>
    )
}


export default CaixaAnunciar;