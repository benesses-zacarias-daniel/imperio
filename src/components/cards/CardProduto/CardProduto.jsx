import style from "./CardProduto.module.css";
import Img from "../../img/Img"
import Estrela from "../../../assets/icons/estrelaAval.svg";
import Carinho from "../../../assets/icons/carinho.svg";
import Button from "../../button/Button";

const CardProdutos = ({ dados }) => {
    return (
        dados.map(
            (Produto) => {
                return (
                    <div key={Produto.id} className={style.container_card}>
                        <div className={style.area_imagem}>
                            <Img src={"img/pc.jpg"} alt={"Imagem de PC"} className={style.img_produto} />
                            <div className={style.categoria}>{Produto.bagde}</div>

                            <div className={style.preco}>
                                <h3>$ {Produto.preco} MT</h3>
                            </div>
                        </div>
                        <div className={style.area_info_accao}>
                            <div className={style.classificacao}>
                                <p>{Produto.limit}</p>
                                <div className={style.area_estrela}>
                                    <Img src={Estrela} alt={"Ícone de Estrela"} className={style.icone} />
                                    <Img src={Estrela} alt={"Ícone de Estrela"} className={style.icone} />
                                    <Img src={Estrela} alt={"Ícone de Estrela"} className={style.icone} />
                                    <Img src={Estrela} alt={"Ícone de Estrela"} className={style.icone} />
                                    <Img src={Estrela} alt={"Ícone de Estrela"} className={style.icone} />
                                </div>
                            </div>
                            <div className={style.info_produto}>
                                <div className={style.are_desc_produto}>
                                    <h2 className={style.nome_produto}>
                                        {Produto.nome}
                                    </h2>
                                    <p className={style.desc_produto}>
                                        {Produto.desc}
                                    </p>
                                </div>
                                <div className={style.area_acao}>
                                    <Button children={"Ver Detalhes"} onClick={() => { }} className={style.btn_det} />
                                    <Button onClick={() => { }} className={style.btn_car} children={"Carrinho"} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        )
    )
}


export default CardProdutos;