import { useState } from "react";
import CardProdutos from "../../components/cards/CardProduto/CardProduto";
import ContainerDiv from "../../components/Common/container/ContainerDiv";
import Filtros from "../../components/productos/Filtros";
import style from "./Productos.module.css";
import Button from "../../components/button/Button";


const Productos = () => {
    const ProdutosDados = [
        {
            "id": 1,
            "nome": "Skyland Ultra",
            "preco": 25500,
            "bagde": "Setup Gamer - Completo",
            "limit": "Excelencia em Cada Bit",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc01.jpeg",
            "alt": "Imagem de setup completo de PC (DeskTop),Teclado Gamer ect..",
            "categorias": "pc"
        }, {
            "id": 2,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc02.jpeg",
            "alt": "Imagem de ",
            "categorias": "pc"
        }, {
            "id": 3,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc03.jpeg",
            "alt": "Imagem de ",
            "categorias": "pc"
        }, {
            "id": 4,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/smartphone01.jpeg",
            "alt": "Imagem de ",
            "categorias": "smartphone"
        }, {
            "id": 5,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/smartphone02.jpeg",
            "alt": "Imagem de ",
            "categorias": "smartphone"
        }, {
            "id": 6,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/smartphone03.jpeg",
            "alt": "Imagem de ",
            "categorias": "smartphone"
        }, {
            "id": 7,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/smartphone04.jpeg",
            "alt": "Imagem de ",
            "categorias": "smartphone"
        }, {
            "id": 8,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/tv01.jpeg",
            "alt": "Imagem de ",
            "categorias": "tv"
        }, {
            "id": 9,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/tv02.jpeg",
            "alt": "Imagem de ",
            "categorias": "tv"
        }, {
            "id": 10,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/tv03.jpeg",
            "alt": "Imagem de ",
            "categorias": "tv"
        }, {
            "id": 11,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/tv04.jpeg",
            "alt": "Imagem de ",
            "categorias": "tv"
        }, {
            "id": 12,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/electrodomesticos01.jpeg",
            "alt": "Imagem de ",
            "categorias": "electro"
        }, {
            "id": 13,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/electrodomesticos02.jpeg",
            "alt": "Imagem de ",
            "categorias": "electro"
        }, {
            "id": 14,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/electrodomesticos03.jpeg",
            "alt": "Imagem de ",
            "categorias": "electro"
        }, {
            "id": 15,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/electrodomesticos04.jpeg",
            "alt": "Imagem de ",
            "categorias": "electro"
        }, {
            "id": 16,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc.jpg",
            "alt": "Imagem de ",
            "categorias": "pc"
        }
    ];

    const [dadosMostrar, setDadosMostrar] = useState(ProdutosDados);

    const FiltrosCategorias = [
        {
            "id": 1,
            "cat": "Todas as Categorias",
            "value": "todas"
        }, {
            "id": 2,
            "cat": "SmatPhones",
            "value": "smartphone"
        }, {
            "id": 3,
            "cat": "TVs",
            "value": "tv"
        }, {
            "id": 4,
            "cat": "Electrodomésticos",
            "value": "electro"
        }, {
            "id": 5,
            "cat": "PCs",
            "value": "pc"
        }
    ];

    const onChangeFiltros = (categoria) => {
        if (categoria !== "todas") {
            const novosDados = ProdutosDados.filter((iten) => iten.categorias === categoria);
            setDadosMostrar(novosDados);

            return;
        }

        setDadosMostrar(ProdutosDados);
    };

    return (
        <ContainerDiv className={style.contianer_produtos}>
            <Filtros onChange={(cat) => { onChangeFiltros(cat) }} categorias={FiltrosCategorias} nome={"filtrar_productos"} id={"filtrar_productos"} />
            <div className={style.container_area_prod}>
                <div className={style.area_titulo_cont_prod}>
                    <h3 className={style.titulo_prods}>Catálogo <p className={style.foco_prod}>Imperial</p></h3>
                    <p className={style.total_prods}>{dadosMostrar.length} total itens</p>
                </div>
                <div className={style.area_produtos_pro}>
                    <CardProdutos dados={dadosMostrar} />
                </div>
            </div>
            <div className={style.area_contador}>
                <div className={style.btn_contador}>{"<"}</div>
                <div className={style.contadores}>
                    <Button children={"1"} onClick={() => { }} className={style.btn_cont} />
                    <Button children={"2"} onClick={() => { }} className={style.btn_cont} />
                    <Button children={"3"} onClick={() => { }} className={style.btn_cont} />
                    <Button children={"4"} onClick={() => { }} className={style.btn_cont} />
                    <Button children={"5"} onClick={() => { }} className={style.btn_cont} />
                </div>
                <div className={style.btn_contador}>{">"}</div>
            </div>
        </ContainerDiv>)
}

export default Productos;