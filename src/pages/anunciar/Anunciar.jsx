import CaixaAnunciar from "../../components/anuciar/escolha/CaixaAnunciar";
import ContainerDiv from "../../components/Common/container/ContainerDiv";
import style from "./Anunciar.module.css";

//Ícones Input
import Enviar from "../../assets/icons/enviar.svg";
import Telefone from "../../assets/icons/chamada.svg";
import Publicar from "../../assets/icons/publicar.svg";

const Anunciar = () => {
    const DadosAnunciar = {
        "id": 1,
        "texto_btn": "Publicar Producto",
        "type": [
            "text",
            "number",
            "file",
            "phone"
        ],
        "icones": [
            {
                "id": 1,
                "icone_src": Enviar,
                "icone_alt": "Ícone de enviar (na forma de núvem)"
            },
            {
                "id": 2,
                "icone_src": Publicar,
                "icone_alt": "Ícone de publicar/enviar"
            }
        ],
        "inputs": [
            {
                "id": 1,
                "label": "Nome do Produto",
                "placeholder": "Ex.: RTX Sparc"
            }, {
                "id": 2,
                "label": "Preço",
                "placeholder": "0.00"
            }, {
                "id": 3,
                "label": "Descrição Detalhadas",
                "placeholder": "Descreva as especificações, estado de conservação e garantia..."
            }, {
                "id": 4,
                "label": "Fotos do Produto",
                "placeholder": "Clique para carregar"
            }, {
                "id": 5,
                "label": "Contacto (Telefone ou WhatsApp)",
                "placeholder": "+258 84 000 6914"
            }]
    }

    const Opcoes = [
        {
            "id": 1,
            "nome": "categorias",
            "label": "Categoria",
            "opcoes": [{
                "id": 1,
                "cat": "Todas as Categorias",
                "value": "todas"
            }, {
                "id": 2,
                "cat": "SmatPhones",
                "value": "smartphones"
            }, {
                "id": 3,
                "cat": "TVs",
                "value": "tvs"
            }, {
                "id": 4,
                "cat": "Electrodomésticos",
                "value": "electro"
            }, {
                "id": 5,
                "cat": "PCs",
                "value": "pcs"
            }]
        }
    ]

    return (
        <ContainerDiv className={style.container_carrinho}>
            <div className={style.container_conteudo}>
                <div className={style.area_info_car}>
                    <div className={style.titulo_car}>
                        <h3>Anunciar Novo Producto</h3>
                    </div>
                    <p className={style.car_min_info}>Complete os detalhes abaixo para listar o seu hardware premium na nossa plataforma exclusiva.</p>
                    {/* <CaixaAnunciar dadosAnunciar={DadosAnunciar} Opcoes={Opcoes} classContainer={style.classeContainer} classContainerCont={style.classContainerCont} classAreaInput={style.classAreaInput} /> */}
                    <CaixaAnunciar dadosAnunciar={DadosAnunciar} Opcoes={Opcoes} />
                </div>
            </div>
        </ContainerDiv>)
}



export default Anunciar;