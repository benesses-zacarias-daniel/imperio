import ContainerDiv from "../Common/container/ContainerDiv";
import style from "./Filtros.module.css";

const Filtros = ({ onChange, nome, id, categorias }) => {
    return (
        <ContainerDiv className={style.container_hero_prods}>
            <div className={style.container_conteudo}>
                <div className={style.conteudo}>
                    <p>Fitrar Por</p>
                    <select name={nome} id={id} className={style.select} onChange={(evt) => {
                        const catFilt = evt.target.value;
                        onChange(catFilt);
                    }}>
                        {categorias.map((cat) => {
                            return (
                                <option key={cat.id} value={cat.value} className={style.opcao}>{cat.cat}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </ContainerDiv>
    )
}



export default Filtros;