import { useState } from 'react';
import CardActProds from '../../../components/cards/CardActProds/CardActProds';
import CardFormProds from "../../../components/cards/CardFormProds/CardFormProds"
import styles from './GerenciarProds.module.css';
import CardProdGeren from '../../../components/cards/CardProdGeren/CardProdGeren';

const GerenciarProds = () => {
    // true = modal aberto | false = modal fechado
    const [modalAberto, setModalAberto] = useState(false);
    const [dadosModal, setDadosModal] = useState([]);
    const ItensTeste = [
        {
            "id": 1,
            "nome": "Telemóvel Básico",
            "preco": 1200,
            "bagde": "",
            "limit": 20,
            "desc": "Telemóvel simples e resistente, perfeito para chamadas e mensagens.",
            "src": "./img/smartphone03.jpeg",
            "alt": "Imagem de Telemóvel Básico",
            "categorias": "smartphone",
            "detalhes": {
                "srcDetalhes": [
                    {
                        "id": 1,
                        "srcDet": "./img/smartphone03.jpeg",
                        "srcThumb": "./img/smartphone03.jpeg",
                        "alt": "Telemóvel Básico",
                        "localizacao": "Telemóvel Básico"
                    },
                    {
                        "id": 2,
                        "srcDet": "./img/smartphone04.jpeg",
                        "srcThumb": "./img/smartphone04.jpeg",
                        "alt": "Telemóvel Clássico",
                        "localizacao": "Telemóvel Clássico"
                    }],
                "especificacoes": [
                    "Ecrã LED de alta definição",
                    "Entradas HDMI e USB",
                    "Sintonizador digital"]
            }
        },
        {
            "id": 2,
            "nome": "Telemóvel Clássico",
            "preco": 1800,
            "bagde": "Clássico",
            "limit": 15,
            "desc": "Telemóvel de design clássico, durável e com bateria que dura dias.",
            "src": "./img/smartphone04.jpeg",
            "alt": "Imagem de Telemóvel Clássico",
            "categorias": "smartphone",
            "detalhes": {
                "srcDetalhes": [
                    {
                        "id": 1,
                        "srcDet": "./img/smartphone04.jpeg",
                        "srcThumb": "./img/smartphone04.jpeg",
                        "alt": "Telemóvel Clássico",
                        "localizacao": "Telemóvel Clássico"
                    },
                    {
                        "id": 2,
                        "srcDet": "./img/smartphone01.jpeg",
                        "srcThumb": "./img/smartphone01.jpeg",
                        "alt": "Smartphone Pro",
                        "localizacao": "Smartphone Pro"
                    }],
                "especificacoes": [
                    "Ecrã LED de alta definição",
                    "Entradas HDMI e USB",
                    "Sintonizador digital"]
            }
        }, {
            "id": 5,
            "nome": "Televisão LED",
            "preco": 18900,
            "bagde": "",
            "limit": 6,
            "desc": "Televisão LED com imagem nítida para a sala de estar.",
            "src": "./img/tv01.jpeg",
            "alt": "Imagem de Televisão LED",
            "categorias": "tv",
            "detalhes": {
                "srcDetalhes": [
                    {
                        "id": 1,
                        "srcDet": "./img/tv01.jpeg",
                        "srcThumb": "./img/tv01.jpeg",
                        "alt": "Televisão LED",
                        "localizacao": "Televisão LED"
                    },
                    {
                        "id": 2,
                        "srcDet": "./img/tv02.jpeg",
                        "srcThumb": "./img/tv02.jpeg",
                        "alt": "Televisão LED Slim",
                        "localizacao": "Televisão LED Slim"
                    }],
                "especificacoes": [
                    "Ecrã LED de alta definição",
                    "Entradas HDMI e USB",
                    "Sintonizador digital",
                    "Colunas integradas",
                    "Comando à distância"
                ]
            }
        }
    ];
    const onClickControlModal = (val) => {
        setModalAberto(val);
    }

    const onClickMostrarModal = (idProd) => {
        setDadosModal(ItensTeste.find((Prod) => Prod.id === idProd));
        onClickControlModal(true);
    }

    return (
        <>
            <section className={styles.area}>
                <h2>Gerir produtos</h2>
                <CardProdGeren ItensGeren={ItensTeste} onClickMostrarModal={(idProd) => { onClickMostrarModal(idProd) }} />
                <CardActProds showModal={modalAberto} onClickControlModal={(val) => { onClickControlModal(val) }} children={<CardFormProds dadosAct={dadosModal} />} />
            </section>
        </>
    );
}

export default GerenciarProds;
