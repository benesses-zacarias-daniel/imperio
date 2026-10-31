import style from "./CardTermos.module.css";

const CardTermos = ({ dadosTermos }) => {

    return (
        dadosTermos.map((termosDados) => {
            return (
                <div key={termosDados.id} className={style.container_card_term}>
                    <div className={style.area_texto}>
                        <div className={style.area_titulo_termos}>
                            <h3 className={style.titulo_termos}>{termosDados.titulo}</h3>
                        </div>
                        {termosDados.desc.map((desc, pos) => {
                            return (<div key={pos} className={style.desc_termos}>
                                {desc}
                            </div>
                            )
                        })}
                        {termosDados.proibicoes && (
                            termosDados.proibicoes.map((proib, pos) => {
                                return (
                                    <div key={pos} className={style.lista}>
                                        <div className={style.ponto}></div>
                                        <div className={style.texto_term}>
                                            {proib}
                                        </div>
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>
            )
        }
        )
    );
}

export default CardTermos;