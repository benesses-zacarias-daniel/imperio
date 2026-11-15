import Img from "../../img/Img";
import Estrela from "../../../assets/icons/estrelaAval.svg"
import style from "./CardDepoimentos.module.css";

const Depoimentos = ({ tituloDep, minInfoDep, depoimentos }) => {
    return (
        <div className={style.depoimentos_container}>
            <div className={style.titulo_dep}>
                <h3>{tituloDep}</h3>
                <p className={style.minInfoDep}>{minInfoDep}</p>
            </div>
            <div className={style.depoimentos}>
                {depoimentos && (
                    depoimentos.map((depoimento) => {
                        let icone = depoimento.nome.split(" ", 2);
                        icone = icone[0].charAt(0) + icone[1].charAt(0);

                        return (
                            <div key={depoimento.id} className={style.area_depoimento}>
                                <div className={style.estrela}>
                                    <Img src={Estrela} alt={"Ícone de estrela"} />
                                    <Img src={Estrela} alt={"Ícone de estrela"} />
                                    <Img src={Estrela} alt={"Ícone de estrela"} />
                                    <Img src={Estrela} alt={"Ícone de estrela"} />
                                    <Img src={Estrela} alt={"Ícone de estrela"} />
                                </div>
                                <div className={style.depoimento_cli}>
                                    {`" ${depoimento.depoimento} "`}
                                </div>
                                <div className={style.depoimento_info}>
                                    <div className={style.area_nome}>
                                        {icone}
                                    </div>
                                    <div className={style.nome}>
                                        {depoimento.nome}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div >
    )
}

export default Depoimentos;