import { useState } from "react";
import CardProdutos from "../../components/cards/CardProduto/CardProduto";
import ContainerSessao from "../../components/Common/container/ContainerSessao";
import Filtros from "../../components/productos/Filtros";
import style from "./Productos.module.css";

const Productos = () => {
    const ProdutosDados = [
        {
            "id": 1,
            "nome": "Space X PC",
            "preco": 2500,
            "bagde": "Ultra Resistente - Space X PC",
            "limit": "MaxVision",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc.jpg",
            "alt": "Imagem de PC da Space X",
            "categorias": "pcs"
        },
        {
            "id": 2,
            "nome": "TV Analógica 262 HD",
            "preco": 3000,
            "bagde": "VIP - TV Analógica 262 HD",
            "limit": "Limitado",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc.jpg",
            "alt": "Imagem de PC da Nasa",
            "categorias": "tvs"
        }, {
            "id": 3,
            "nome": "Smart TV LED",
            "preco": 6000,
            "bagde": "Excelência - Smart TV LED",
            "limit": "3 modelos",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc.jpg",
            "alt": "Imagem de PC Gamer",
            "categorias": "tvs"
        }, {
            "id": 4,
            "nome": "Gileira",
            "preco": 90,
            "bagde": "Excelência - Gileira",
            "limit": "3 modelos",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc.jpg",
            "alt": "Imagem de PC Gamer",
            "categorias": "electro"
        }, {
            "id": 5,
            "nome": "Tecno Pop Ultra 360B",
            "preco": 60,
            "bagde": "Excelência - Tecno Pop Ultra 360B",
            "limit": "3 modelos",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc.jpg",
            "alt": "Imagem de PC Gamer",
            "categorias": "smartphones"
        }
    ];

    const [dadosMostrar, setDadosMostrar] = useState(ProdutosDados);
    const Categoria = [
        {
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
        }
    ]

    const handleClikcFiltros = (categoria) => {
        if (categoria !== "todas") {
            const novosDados = ProdutosDados.filter((iten) => iten.categorias === categoria);
            setDadosMostrar(novosDados);

            return;
        }

        setDadosMostrar(ProdutosDados);
    }
    return (
        <ContainerSessao className={style.contianer_produtos}>
            <Filtros onClickOpcao={(cat) => { handleClikcFiltros(cat) }} categorias={Categoria} />
            <div className={style.container_area_prod}>
                <div className={style.area_titulo_cont_prod}>
                    <h3 className={style.titulo_prods}>Catálogo <p className={style.foco_prod}>Imperial</p></h3>
                    <p className={style.total_prods}>{ProdutosDados.length} total itens</p>
                </div>
                <div className={style.area_produtos_pro}>
                    <CardProdutos dados={dadosMostrar} />
                </div>
            </div>
            <div>
                <p>{"<- "}</p>
                <p>{"1 2 3 4 5->"}</p>
            </div>
        </ContainerSessao>)
}

export default Productos;