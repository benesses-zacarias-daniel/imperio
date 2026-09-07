import ContainerDiv from "../../components/Common/container/ContainerDiv";
import style from "./Carrinho.module.css";
import CardItemCarrinho from "../../components/cards/CardItensCarrinho/CardItemCarrinho";
import Button from "../../components/button/Button";
import Img from "../../components/img/Img";
import Visao from "../../assets/icons/visao.svg"
import CardResumo from "../../components/cards/CardResumo/CardResumo";

const Carrinho = () => {
    const ProdutosCarrinho = [
        {
            "id": 1,
            "nome": "Space X PC",
            "preco": 200,
            "bagde": "Ultra Resistente",
            "limit": "MaxVision",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc.jpg",
            "alt": "Imagem de PC da Space X",
            "categorias": ""
        }, {
            "id": 2,
            "nome": "Space X PC",
            "preco": 200,
            "bagde": "Ultra Resistente",
            "limit": "MaxVision",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc.jpg",
            "alt": "Imagem de PC da Space X",
            "categorias": ""
        }, {
            "id": 3,
            "nome": "Space X PC",
            "preco": 200,
            "bagde": "Ultra Resistente",
            "limit": "MaxVision",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc.jpg",
            "alt": "Imagem de PC da Space X",
            "categorias": ""
        }, {
            "id": 4,
            "nome": "Space X PC",
            "preco": 200,
            "bagde": "Ultra Resistente",
            "limit": "MaxVision",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc.jpg",
            "alt": "Imagem de PC da Space X",
            "categorias": ""
        }, {
            "id": 5,
            "nome": "Space X PC",
            "preco": 20,
            "bagde": "Ultra Resistente",
            "limit": "MaxVision",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc.jpg",
            "alt": "Imagem de PC da Space X",
            "categorias": ""
        }, {
            "id": 6,
            "nome": "Space X PC",
            "preco": 20,
            "bagde": "Ultra Resistente",
            "limit": "MaxVision",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc.jpg",
            "alt": "Imagem de PC da Space X",
            "categorias": ""
        }
    ];
    console.log(ProdutosCarrinho);

    const Resumos = [
        {
            "id": 1,
            "subtotal": 840
        }];

    return (
        <ContainerDiv className={style.container_carrinho}>
            <div className={style.container_conteudo}>
                <div className={style.titulo_car}>
                    <h3>O Teu Carrinho</h3>
                </div>
                <div className={style.container_itens_car}>
                    <CardItemCarrinho ItensCarrinho={ProdutosCarrinho} />
                </div>
                <div className={style.area_btn_resumo}>
                    <Button className={style.btn_resumo} children={
                        <Img src={Visao} alt={"Ícone de olho"} className={style.icone_resumo} />
                    } onClick={() => { }} />
                </div>
                <CardResumo dadosResumos={Resumos[0]} />
            </div>
        </ContainerDiv>)
}



export default Carrinho;