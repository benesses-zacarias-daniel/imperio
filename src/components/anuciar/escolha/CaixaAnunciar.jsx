import ContainerDiv from "../../Common/container/ContainerDiv"
import style from "./CaixaAnunciar.module.css"
const CaixaAnunciar = (onClickOpcao, dadosAnunciar) => {

    return (
        <ContainerDiv className={style.container_dados_anunciar}>

            <div className={style.container_}>
                <div className={style.container_conteudo}>
                    <div className={style.conteudo}>
                        <div className={style.area_input_anun}>
                            <div className={style.area_label}>
                                {dadosAnunciar.label[0]}
                            </div>
                            <input type={dadosAnunciar.type[0]} placeholder={dadosAnunciar.placeholder[0]} className={style.input_anun} />
                        </div>
                        <div className={style.select_categoria_anun}>
                            <p>Fitrar Por</p>
                            <select name={dadosAnunciar.nome} id={dadosAnunciar.id} className={style.select}>
                                {dadosAnunciar.map((cat) => {
                                    return (
                                        <option key={cat.id} value={cat.value} className={style.opcao} onClick={(evt) => {
                                            onClickOpcao(evt.target.value)
                                            console.log(evt.target.value);
                                        }}>{cat.cat}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className={style.area_input_anun}>
                            <div className={style.area_label}>
                                {dadosAnunciar.label[1]}
                            </div>
                            <input type={dadosAnunciar.type[1]} placeholder={dadosAnunciar.placeholder[1]} className={style.input_anun} />
                        </div>
                        <div className={style.area_input_anun}>
                            <div className={style.area_label}>
                                {dadosAnunciar.label[2]}
                            </div>
                            <input type={dadosAnunciar.type[2]} placeholder={dadosAnunciar.placeholder[2]} className={style.input_anun_desc_anun_prod} />
                        </div>
                        <div className={style.area_input_anun}>
                            <div className={style.area_label}>
                                {dadosAnunciar.label[3]}
                            </div>
                            <input type={dadosAnunciar.type[3]} placeholder={dadosAnunciar.placeholder[3]} className={style.input_imagem} />
                        </div>
                        <div className={style.area_input_anun}>
                            <div className={style.area_label}>
                                {dadosAnunciar.label[4]}
                            </div>
                            <div className={style.area_icone_input}>
                                <input type={dadosAnunciar.type[4]} placeholder={dadosAnunciar.placeholder[4]} className={style.input_anun} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerDiv>
    )
}