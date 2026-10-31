import ContainerDiv from "../../components/Common/container/ContainerDiv";
import style from "./Carrinho.module.css";
import CardItemCarrinho from "../../components/cards/CardItensCarrinho/CardItemCarrinho";
import Button from "../../components/button/Button";
import Img from "../../components/img/Img";
import Visao from "../../assets/icons/visao.svg"
import CardResumo from "../../components/cards/CardResumo/CardResumo";
import { useState } from "react";

const Carrinho = () => {
    const [showResumo, setShowResumo] = useState(false);
    const ProdutosCarrinho = [
        { "id": 1, "nome": "Space X PC", "preco": 200, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 2, "nome": "Space X PC", "preco": 200, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 3, "nome": "Space X PC", "preco": 200, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 4, "nome": "Space X PC", "preco": 200, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 5, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 6, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 7, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 8, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 9, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 10, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 11, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 12, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 13, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 14, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 15, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 16, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 17, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 18, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 19, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 20, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 21, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 22, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 23, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 24, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 25, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 26, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 27, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 28, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 29, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 30, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 31, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }, { "id": 32, "nome": "Space X PC", "preco": 20, "bagde": "Ultra Resistente", "limit": "MaxVision", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "src": "./img/pc.jpg", "alt": "Imagem de PC da Space X", "categorias": "" }
    ];

    console.log(ProdutosCarrinho);

    const Resumos = [
        {
            "id": 1,
            "subtotal": 840
        }];

    const onClickResumo = (val) => {
        setShowResumo(val);
    }
    return (
        <ContainerDiv className={style.container_carrinho}>
            <div className={style.container_conteudo}>
                <div className={style.titulo_car}>
                    <h3>O Teu Carrinho</h3>
                </div>
                <div className={style.container_itens_car}>
                    <div className={style.area_controle_scroll}>
                        <CardItemCarrinho ItensCarrinho={ProdutosCarrinho} />
                    </div>
                </div>
                <div className={style.area_btn_resumo}>
                    <Button className={style.btn_resumo} children={
                        <Img src={Visao} alt={"Ícone de olho"} className={style.icone_resumo} />
                    } onClick={() => { onClickResumo(true) }} />
                </div>
                {
                    showResumo && (
                        <CardResumo dadosResumos={Resumos[0]} showResumo={() => { setShowResumo(false) }} />
                    )
                }
            </div>
        </ContainerDiv>)
}



export default Carrinho;