import ContainerDiv from "../../Common/container/ContainerDiv"
import Img from "../../img/Img"
import style from "./CardCategoria.module.css"

const CardCategoria = ({ dados, classeCatItem = style.categoriaItem, iconeCategoria = style.icone_categoria, areaInfoCat = style.areaInfoCat }) => {
    return (
        <ContainerDiv className={style.container_categoria}>
            <div className={style.container_conteudo}>
                <div className={style.titulo_cat}>
                    <h3>
                        {dados.titulo}
                    </h3>
                </div>
                {dados.min_info && (
                    <div className={style.min_info}>
                        {dados.min_info}
                    </div>
                )}
                <div className={style.area_categorias}>
                    {dados.categorias.map((Categoria) => {
                        return (
                            <div key={Categoria.id} className={classeCatItem}>
                                <div className={iconeCategoria}>
                                    <Img src={Categoria.src} alt={Categoria.alt} className={style.img_cat} />
                                </div>
                                <div className={areaInfoCat}>
                                    <div className={style.titulo_categoria}>
                                        {Categoria.titulo}
                                    </div>
                                    <div className={style.desc_categoria}>
                                        {Categoria.desc}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </ContainerDiv>
    );
}


export default CardCategoria;