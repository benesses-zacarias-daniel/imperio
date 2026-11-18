import style from './Ajuda.module.css';
import ContainerDiv from '../../../components/Common/container/ContainerDiv';
import DicasAjuda from "../../../components/data/DicasAjuda.json";

const Ajuda = () => {
    return (
        <ContainerDiv className={style.container_ajuda}>
            <span className={style.titulo_area}>Dicas de Como o Sistema Imperial Funciona</span>
            <div className={style.lista_dicas}>
                {DicasAjuda.map((dica) => {
                    return (
                        <div key={dica.id} className={style.card_dica}>
                            <span className={style.titulo_dica}>{dica.titulo}</span>
                            <div className={style.container_texto_dica}>
                                <p className={style.min_info}>{dica.descricao}</p>
                                {dica.itens.map((item, index) => (
                                    <div key={index} className={style.desc_dica}>
                                        <div className={style.nome_dica}>
                                            <div className={style.ponto}></div>
                                            {item.nome}
                                        </div> {item.texto}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </ContainerDiv>
    );
}

export default Ajuda;
