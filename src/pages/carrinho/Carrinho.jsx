import ContainerDiv from "../../components/Common/container/ContainerDiv";
import style from "./Carrinho.module.css"
const Carrinho = () => {
    return (
        <ContainerDiv className={style.container_carrinho}>
            <div className={style.container_conteudo}>
                <div className={style.area_info_car}>
                    <div className={style.titulo_car}>
                        <h3>Anunciar Novo Producto</h3>
                        <p>Complete os detalhes abaixo para listar o seu hardware premium na nossa plataforma exclusiva.</p>
                    </div>
                </div>
            </div>
        </ContainerDiv>)
}



export default Carrinho;