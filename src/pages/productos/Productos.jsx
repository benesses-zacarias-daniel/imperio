import { useState } from "react";
import CardProdutos from "../../components/cards/CardProduto/CardProduto";
import ContainerDiv from "../../components/Common/container/ContainerDiv";
import Filtros from "../../components/productos/Filtros";
import style from "./Productos.module.css";
import Button from "../../components/button/Button";
import CardDetalhes from "../../components/cards/cardDetalhes/CardDetalhes";


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
            "categorias": "pc",
            "detalhes": {
                "srcDetalhes": [
                    { "id": 1, "srcDet": "/./img/tv02.jpeg", "srcThumb": "./img/tv02.jpeg", "alt": "", "localizacao": "Visão Frontal" },
                    { "id": 2, "srcDet": "/./img/tv01.jpeg", "srcThumb": "./img/tv01.jpeg", "alt": "", "localizacao": "Slot" },
                    { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" },
                    { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }, { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }, { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }, { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }, { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }, { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }, { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }, { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }, { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }, { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }, { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }, { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }, { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }, { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }, { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }, { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }, { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }, { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }],
                "acessos": ["Água", "Escola (Primárias e Secundárias)", "Mercado", "Estrada", "Mercado", "Estrada", "Mercado", "Estrada", "Mercado", "Estrada", "Mercado", "Estrada", "Mercado", "Estrada", "Mercado", "Estrada", "Mercado", "Estrada"]
            }
        }, {
            "id": 2,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc02.jpeg",
            "alt": "Imagem de ",
            "categorias": "pc",
            "detalhes": {
                "srcDetalhes": [
                    { "id": 1, "srcDet": "/./img/tv02.jpeg", "srcThumb": "./img/tv02.jpeg", "alt": "", "localizacao": "Visão Frontal" },
                    { "id": 2, "srcDet": "/./img/tv01.jpeg", "srcThumb": "./img/tv01.jpeg", "alt": "", "localizacao": "Slot" },
                    { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }],
                "acessos": ["Água", "Escola (Primárias e Secundárias)", "Mercado", "Estrada"]
            }
        }, {
            "id": 3,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc03.jpeg",
            "alt": "Imagem de ",
            "categorias": "pc",
            "detalhes": {
                "srcDetalhes": [
                    { "id": 1, "srcDet": "/./img/tv02.jpeg", "srcThumb": "./img/tv02.jpeg", "alt": "", "localizacao": "Visão Frontal" },
                    { "id": 2, "srcDet": "/./img/tv01.jpeg", "srcThumb": "./img/tv01.jpeg", "alt": "", "localizacao": "Slot" },
                    { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }],
                "acessos": ["Água", "Escola (Primárias e Secundárias)", "Mercado", "Estrada"]
            }
        }, {
            "id": 4,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/smartphone01.jpeg",
            "alt": "Imagem de ",
            "categorias": "smartphone",
            "detalhes": {
                "srcDetalhes": [
                    { "id": 1, "srcDet": "/./img/tv02.jpeg", "srcThumb": "./img/tv02.jpeg", "alt": "", "localizacao": "Visão Frontal" },
                    { "id": 2, "srcDet": "/./img/tv01.jpeg", "srcThumb": "./img/tv01.jpeg", "alt": "", "localizacao": "Slot" },
                    { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }],
                "acessos": ["Água", "Escola (Primárias e Secundárias)", "Mercado", "Estrada"]
            }
        }, {
            "id": 5,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/smartphone02.jpeg",
            "alt": "Imagem de ",
            "categorias": "smartphone",
            "detalhes": {
                "srcDetalhes": [
                    { "id": 1, "srcDet": "/./img/tv02.jpeg", "srcThumb": "./img/tv02.jpeg", "alt": "", "localizacao": "Visão Frontal" },
                    { "id": 2, "srcDet": "/./img/tv01.jpeg", "srcThumb": "./img/tv01.jpeg", "alt": "", "localizacao": "Slot" },
                    { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }],
                "acessos": ["Água", "Escola (Primárias e Secundárias)", "Mercado", "Estrada"]
            }
        }, {
            "id": 6,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/smartphone03.jpeg",
            "alt": "Imagem de ",
            "categorias": "smartphone",
            "detalhes": {
                "srcDetalhes": [
                    { "id": 1, "srcDet": "/./img/tv02.jpeg", "srcThumb": "./img/tv02.jpeg", "alt": "", "localizacao": "Visão Frontal" },
                    { "id": 2, "srcDet": "/./img/tv01.jpeg", "srcThumb": "./img/tv01.jpeg", "alt": "", "localizacao": "Slot" },
                    { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }],
                "acessos": ["Água", "Escola (Primárias e Secundárias)", "Mercado", "Estrada"]
            }
        }, {
            "id": 7,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/smartphone04.jpeg",
            "alt": "Imagem de ",
            "categorias": "smartphone",
            "detalhes": {
                "srcDetalhes": [
                    { "id": 1, "srcDet": "/./img/tv02.jpeg", "srcThumb": "./img/tv02.jpeg", "alt": "", "localizacao": "Visão Frontal" },
                    { "id": 2, "srcDet": "/./img/tv01.jpeg", "srcThumb": "./img/tv01.jpeg", "alt": "", "localizacao": "Slot" },
                    { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }],
                "acessos": ["Água", "Escola (Primárias e Secundárias)", "Mercado", "Estrada"]
            }
        }, {
            "id": 8,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/tv01.jpeg",
            "alt": "Imagem de ",
            "categorias": "tv",
            "detalhes": {
                "srcDetalhes": [
                    { "id": 1, "srcDet": "/./img/tv02.jpeg", "srcThumb": "./img/tv02.jpeg", "alt": "", "localizacao": "Visão Frontal" },
                    { "id": 2, "srcDet": "/./img/tv01.jpeg", "srcThumb": "./img/tv01.jpeg", "alt": "", "localizacao": "Slot" },
                    { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }],
                "acessos": ["Água", "Escola (Primárias e Secundárias)", "Mercado", "Estrada"]
            }
        }, {
            "id": 9,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/tv02.jpeg",
            "alt": "Imagem de ",
            "categorias": "tv",
            "detalhes": {
                "srcDetalhes": [
                    { "id": 1, "srcDet": "/./img/tv02.jpeg", "srcThumb": "./img/tv02.jpeg", "alt": "", "localizacao": "Visão Frontal" },
                    { "id": 2, "srcDet": "/./img/tv01.jpeg", "srcThumb": "./img/tv01.jpeg", "alt": "", "localizacao": "Slot" },
                    { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }],
                "acessos": ["Água", "Escola (Primárias e Secundárias)", "Mercado", "Estrada"]
            }
        }, {
            "id": 10,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/tv03.jpeg",
            "alt": "Imagem de ",
            "categorias": "tv",
            "detalhes": {
                "srcDetalhes": [
                    { "id": 1, "srcDet": "/./img/tv02.jpeg", "srcThumb": "./img/tv02.jpeg", "alt": "", "localizacao": "Visão Frontal" },
                    { "id": 2, "srcDet": "/./img/tv01.jpeg", "srcThumb": "./img/tv01.jpeg", "alt": "", "localizacao": "Slot" },
                    { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }],
                "acessos": ["Água", "Escola (Primárias e Secundárias)", "Mercado", "Estrada"]
            }
        }, {
            "id": 11,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/tv04.jpeg",
            "alt": "Imagem de ",
            "categorias": "tv",
            "detalhes": {
                "srcDetalhes": [
                    { "id": 1, "srcDet": "/./img/tv02.jpeg", "srcThumb": "./img/tv02.jpeg", "alt": "", "localizacao": "Visão Frontal" },
                    { "id": 2, "srcDet": "/./img/tv01.jpeg", "srcThumb": "./img/tv01.jpeg", "alt": "", "localizacao": "Slot" },
                    { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }],
                "acessos": ["Água", "Escola (Primárias e Secundárias)", "Mercado", "Estrada"]
            }
        }, {
            "id": 12,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/electrodomesticos01.jpeg",
            "alt": "Imagem de ",
            "categorias": "electro",
            "detalhes": {
                "srcDetalhes": [
                    { "id": 1, "srcDet": "/./img/tv02.jpeg", "srcThumb": "./img/tv02.jpeg", "alt": "", "localizacao": "Visão Frontal" },
                    { "id": 2, "srcDet": "/./img/tv01.jpeg", "srcThumb": "./img/tv01.jpeg", "alt": "", "localizacao": "Slot" },
                    { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }],
                "acessos": ["Água", "Escola (Primárias e Secundárias)", "Mercado", "Estrada"]
            }
        }, {
            "id": 13,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/electrodomesticos02.jpeg",
            "alt": "Imagem de ",
            "categorias": "electro",
            "detalhes": {
                "srcDetalhes": [
                    { "id": 1, "srcDet": "/./img/tv02.jpeg", "srcThumb": "./img/tv02.jpeg", "alt": "", "localizacao": "Visão Frontal" },
                    { "id": 2, "srcDet": "/./img/tv01.jpeg", "srcThumb": "./img/tv01.jpeg", "alt": "", "localizacao": "Slot" },
                    { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }],
                "acessos": ["Água", "Escola (Primárias e Secundárias)", "Mercado", "Estrada"]
            }
        }, {
            "id": 14,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/electrodomesticos03.jpeg",
            "alt": "Imagem de ",
            "categorias": "electro",
            "detalhes": {
                "srcDetalhes": [
                    { "id": 1, "srcDet": "/./img/tv02.jpeg", "srcThumb": "./img/tv02.jpeg", "alt": "", "localizacao": "Visão Frontal" },
                    { "id": 2, "srcDet": "/./img/tv01.jpeg", "srcThumb": "./img/tv01.jpeg", "alt": "", "localizacao": "Slot" },
                    { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }],
                "acessos": ["Água", "Escola (Primárias e Secundárias)", "Mercado", "Estrada"]
            }
        }, {
            "id": 15,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/electrodomesticos04.jpeg",
            "alt": "Imagem de ",
            "categorias": "electro",
            "detalhes": {
                "srcDetalhes": [
                    { "id": 1, "srcDet": "/./img/tv02.jpeg", "srcThumb": "./img/tv02.jpeg", "alt": "", "localizacao": "Visão Frontal" },
                    { "id": 2, "srcDet": "/./img/tv01.jpeg", "srcThumb": "./img/tv01.jpeg", "alt": "", "localizacao": "Slot" },
                    { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }],
                "acessos": ["Água", "Escola (Primárias e Secundárias)", "Mercado", "Estrada"]
            }
        }, {
            "id": 16,
            "nome": "",
            "preco": 25500,
            "bagde": "",
            "limit": "",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "src": "./img/pc.jpg",
            "alt": "Imagem de ",
            "categorias": "pc",
            "detalhes": {
                "srcDetalhes": [
                    { "id": 1, "srcDet": "/./img/tv02.jpeg", "srcThumb": "./img/tv02.jpeg", "alt": "", "localizacao": "Visão Frontal" },
                    { "id": 2, "srcDet": "/./img/tv01.jpeg", "srcThumb": "./img/tv01.jpeg", "alt": "", "localizacao": "Slot" },
                    { "id": 3, "srcDet": "/./img/smartphone04.jpeg", "srcThumb": "./img/smartphone04.jpeg", "alt": "", "localizacao": "Top Design" }],
                "acessos": ["Água", "Escola (Primárias e Secundárias)", "Mercado", "Estrada"]
            }
        }
    ];

    const [dadosMostrar, setDadosMostrar] = useState(ProdutosDados);
    const [showDetalhes, setShowDetalhes] = useState(false);
    const [dadoDetalhes, setDadosDetalhes] = useState([]);

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

    const onClickMostrarDetalhes = (id) => {
        const dadosDetalhes = ProdutosDados.filter((Prod) => Prod.id === id);

        setDadosDetalhes(dadosDetalhes);
        setShowDetalhes(true);
    }

    const onClickOcultar = () => {
        setShowDetalhes(false);
    }
    return (
        <ContainerDiv className={style.contianer_produtos}>
            <Filtros onChange={(cat) => { onChangeFiltros(cat) }} categorias={FiltrosCategorias} nome={"filtrar_productos"} id={"filtrar_productos"} />
            <div className={style.container_area_prod}>
                <div className={style.area_titulo_cont_prod}>
                    <h3 className={style.titulo_prods}>Catálogo <p className={style.foco_prod}>Imperial</p></h3>
                    <p className={style.total_prods}>{dadosMostrar.length} total itens</p>
                </div>
                <div className={style.area_produtos_pro}>
                    <CardProdutos dados={dadosMostrar} onClickDetalhes={(id) => { onClickMostrarDetalhes(id) }} />
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
            {showDetalhes && (
                <CardDetalhes dados={dadoDetalhes} onClickOcult={() => { onClickOcultar() }} />
            )}
        </ContainerDiv>)
}

export default Productos;