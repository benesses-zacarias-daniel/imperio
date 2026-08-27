import ContainerSessao from "../../Common/container/ContainerSessao"
import Img from "../../img/Img"
import style from "./CardCategoria.module.css"

const CardCategoria = ({ dados }) => {
    console.log(dados);

    return (
        <ContainerSessao className={style.container_categoria}>
            <div className={style.container_conteudo}>
                <div className={style.titulo_categoria}>
                    {dados.titulo}
                </div>
                {dados.min_info && (
                    <div className={style.min_info}>
                        {dados.min_info}
                    </div>
                )}
                <div className={style.area_categorias}>
                    {dados.categorias.map((Categoria) => {
                        return (
                            <div key={Categoria.id} className={style.categoria}>
                                <div className={style.icone_categoria}>
                                    <Img src={Categoria.src} alt={Categoria.alt} className={style.img_cat} />
                                </div>
                                <div className={style.titulo_categoria}>
                                    {Categoria.titulo}
                                </div>
                                <div className={style.desc_categoria}>
                                    {Categoria.desc}
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </ContainerSessao>
    )
}


export default CardCategoria;