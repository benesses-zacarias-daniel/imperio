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
        { "id": 1, "nome": "Smartphone Pro", "preco": 25500, "bagde": "Novo", "srcThumb": "./img/smartphone01.jpeg", "altThumb": "Smartphone Pro", "categorias": "smartphone", "quantidade": 1 },
        { "id": 2, "nome": "Smartphone Android", "preco": 14500, "bagde": "Promoção", "srcThumb": "./img/smartphone02.jpeg", "altThumb": "Smartphone Android", "categorias": "smartphone", "quantidade": 1 },
        { "id": 4, "nome": "Telemóvel Clássico", "preco": 1800, "bagde": "Clássico", "srcThumb": "./img/smartphone04.jpeg", "altThumb": "Telemóvel Clássico", "categorias": "smartphone", "quantidade": 1 },
        { "id": 3, "nome": "Telemóvel Básico", "preco": 1200, "bagde": "", "srcThumb": "./img/smartphone03.jpeg", "altThumb": "Telemóvel Básico", "categorias": "smartphone", "quantidade": 1 },
        { "id": 5, "nome": "Televisão LED", "preco": 18900, "bagde": "", "srcThumb": "./img/tv01.jpeg", "altThumb": "Televisão LED", "categorias": "tv", "quantidade": 1 },
        { "id": 6, "nome": "Televisão LED Slim", "preco": 22500, "bagde": "Mais vendido", "srcThumb": "./img/tv02.jpeg", "altThumb": "Televisão LED Slim", "categorias": "tv", "quantidade": 1 },
        { "id": 7, "nome": "Televisão Retro", "preco": 4500, "bagde": "Retro", "srcThumb": "./img/tv03.jpeg", "altThumb": "Televisão Retro", "categorias": "tv", "quantidade": 1 }
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
