import ContainerSessao from "../Common/container/ContainerSessao";
import style from "./Filtros.module.css";

const Filtros = ({ onClickOpcao, categorias }) => {
    console.log(categorias);

    return (
        <ContainerSessao className={style.container_hero_prods}>
            <div className={style.container_conteudo}>
                <div className={style.conteudo}>
                    <p>Fitrar Por</p>
                    <select name="filtros" id="filtros" className={style.select}>
                        {categorias.map((cat) => {
                            return (
                                <option key={cat.id} value={cat.value} className={style.opcao} onClick={(evt) => {
                                    onClickOpcao(evt.target.value)
                                    console.log(evt.target.value);
                                }}>{cat.cat}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </ContainerSessao>
    )
}



export default Filtros;