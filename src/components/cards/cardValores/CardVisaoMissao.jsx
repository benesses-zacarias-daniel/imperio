import style from "./CardVisaoMissao.module.css"
import Img from "../../img/Img";

const CardVisaoMissao = ({ dadosVisao }) => {
    return (
        dadosVisao.map((missaoVisao) => {
            return (
                <div key={missaoVisao.id} className={style.area_visao_missao}>
                    <div className={style.area_icone}>
                        <div className={style.area_icone_val_mis}>
                            <Img src={missaoVisao.src} alt={missaoVisao.alt} /></div>
                    </div>
                    <div className={style.area_texto}>
                        <h3 className={style.titulo_val_mis}>{missaoVisao.titulo}</h3>
                        <div className={style.area_desc}>
                            {missaoVisao.desc}
                        </div>
                    </div>
                </div>
            );
        })
    )
}


export default CardVisaoMissao;