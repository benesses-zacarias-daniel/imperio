import styles from './GerenciarProds.module.css';
import { useState } from 'react';
import CardActProds from '../../../components/cards/CardActProds/CardActProds';
import CardFormProds from "../../../components/cards/CardFormProds/CardFormProds"
import CardProdGeren from '../../../components/cards/CardProdGeren/CardProdGeren';
import ContainerDiv from '../../../components/Common/container/ContainerDiv';
import Filtros from "../../../components/productos/Filtros";
import Categorias from "../../../components/data/Categorias.json";

const GerenciarProds = () => {
    const [modalAberto, setModalAberto] = useState(false);
    const [dadosModal, setDadosModal] = useState([]);
    const ItensTeste = [
        {
            "id": 1,
            "nome": "Telemóvel Básico",
            "preco": 1200,
            "badge": "",
            "limit": 20,
            "desc": "Telemóvel simples e resistente, perfeito para chamadas e mensagens.",
            "src": "/img/smartphone03.jpeg",
            "alt": "Imagem de Telemóvel Básico",
            "categorias": "smartphone",
            "detalhes": {
                "srcDetalhes": [
                    {
                        "id": 1,
                        "srcDet": "/img/smartphone03.jpeg",
                        "srcThumb": "/img/smartphone03.jpeg",
                        "alt": "Telemóvel Básico",
                        "badge": "Telemóvel Básico"
                    },
                    {
                        "id": 2,
                        "srcDet": "/img/smartphone04.jpeg",
                        "srcThumb": "/img/smartphone04.jpeg",
                        "alt": "Telemóvel Clássico",
                        "badge": "Telemóvel Clássico"
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
            "badge": "Clássico",
            "limit": 15,
            "desc": "Telemóvel de design clássico, durável e com bateria que dura dias.",
            "src": "/img/smartphone04.jpeg",
            "alt": "Imagem de Telemóvel Clássico",
            "categorias": "smartphone",
            "detalhes": {
                "srcDetalhes": [
                    {
                        "id": 1,
                        "srcDet": "/img/smartphone04.jpeg",
                        "srcThumb": "/img/smartphone04.jpeg",
                        "alt": "Telemóvel Clássico",
                        "badge": "Telemóvel Clássico"
                    },
                    {
                        "id": 2,
                        "srcDet": "/img/smartphone01.jpeg",
                        "srcThumb": "/img/smartphone01.jpeg",
                        "alt": "Smartphone Pro",
                        "badge": "Smartphone Pro"
                    }],
                "especificacoes": [
                    "Ecrã LED de alta definição",
                    "Entradas HDMI e USB",
                    "Sintonizador digital"]
            }
        }, {
            "id": 3,
            "nome": "Televisão LED",
            "preco": 18900,
            "badge": "",
            "limit": 6,
            "desc": "Televisão LED com imagem nítida para a sala de estar.",
            "src": "/img/tv01.jpeg",
            "alt": "Imagem de Televisão LED",
            "categorias": "tv",
            "detalhes": {
                "srcDetalhes": [
                    {
                        "id": 1,
                        "srcDet": "/img/tv01.jpeg",
                        "srcThumb": "/img/tv01.jpeg",
                        "alt": "Televisão LED",
                        "badge": "Televisão LED"
                    },
                    {
                        "id": 2,
                        "srcDet": "/img/tv02.jpeg",
                        "srcThumb": "/img/tv02.jpeg",
                        "alt": "Televisão LED Slim",
                        "badge": "Televisão LED Slim"
                    }],
                "especificacoes": [
                    "Ecrã LED de alta definição",
                    "Entradas HDMI e USB",
                    "Sintonizador digital",
                    "Colunas integradas",
                    "Comando à distância"
                ]
            }
        }, {
            "id": 4,
            "nome": "Smart TV",
            "preco": 32000,
            "badge": "Destaque",
            "limit": 4,
            "desc": "Smart TV com aplicações de streaming e imagem de alta resolução.",
            "src": "/img/tv04.jpeg",
            "alt": "Imagem de Smart TV",
            "categorias": "tv",
            "detalhes": {
                "srcDetalhes": [
                    {
                        "id": 1,
                        "srcDet": "/img/tv04.jpeg",
                        "srcThumb": "/img/tv04.jpeg",
                        "alt": "Smart TV",
                        "badge": "Smart TV"
                    },
                    {
                        "id": 2,
                        "srcDet": "/img/tv01.jpeg",
                        "srcThumb": "/img/tv01.jpeg",
                        "alt": "Televisão LED",
                        "badge": "Televisão LED"
                    },
                    {
                        "id": 3,
                        "srcDet": "/img/tv02.jpeg",
                        "srcThumb": "/img/tv02.jpeg",
                        "alt": "Televisão LED Slim",
                        "badge": "Televisão LED Slim"
                    }
                ],
                "especificacoes": [
                    "Ecrã LED de alta resolução",
                    "Aplicações de streaming",
                    "Wi-Fi integrado",
                    "Entradas HDMI e USB",
                    "Comando à distância"
                ]
            }
        },
        {
            "id": 5,
            "nome": "Batedeira de Bancada",
            "preco": 5200,
            "badge": "Novo",
            "limit": 10,
            "desc": "Batedeira potente para massas, bolos e cremes, com taça em aço inoxidável.",
            "src": "/img/electrodomesticos01.jpeg",
            "alt": "Imagem de Batedeira de Bancada",
            "categorias": "electro",
            "detalhes": {
                "srcDetalhes": [
                    {
                        "id": 1,
                        "srcDet": "/img/electrodomesticos01.jpeg",
                        "srcThumb": "/img/electrodomesticos01.jpeg",
                        "alt": "Batedeira de Bancada",
                        "badge": "Batedeira de Bancada"
                    },
                    {
                        "id": 2,
                        "srcDet": "/img/electrodomesticos02.jpeg",
                        "srcThumb": "/img/electrodomesticos02.jpeg",
                        "alt": "Fogão com Forno",
                        "badge": "Fogão com Forno"
                    },
                    {
                        "id": 3,
                        "srcDet": "/img/electrodomesticos03.jpeg",
                        "srcThumb": "/img/electrodomesticos03.jpeg",
                        "alt": "Ferro de Engomar",
                        "badge": "Ferro de Engomar"
                    }
                ],
                "especificacoes": [
                    "Taça em aço inoxidável",
                    "Várias velocidades de batimento",
                    "Inclui batedor, gancho e globo",
                    "Base antiderrapante",
                    "Fácil de limpar"
                ]
            }
        },
        {
            "id": 6,
            "nome": "Fogão com Forno",
            "preco": 21000,
            "badge": "",
            "limit": 5,
            "desc": "Fogão com forno integrado, perfeito para cozinhar e assar com segurança.",
            "src": "/img/electrodomesticos02.jpeg",
            "alt": "Imagem de Fogão com Forno",
            "categorias": "electro",
            "detalhes": {
                "srcDetalhes": [
                    {
                        "id": 1,
                        "srcDet": "/img/electrodomesticos02.jpeg",
                        "srcThumb": "/img/electrodomesticos02.jpeg",
                        "alt": "Fogão com Forno",
                        "badge": "Fogão com Forno"
                    },
                    {
                        "id": 2,
                        "srcDet": "/img/electrodomesticos03.jpeg",
                        "srcThumb": "/img/electrodomesticos03.jpeg",
                        "alt": "Ferro de Engomar",
                        "badge": "Ferro de Engomar"
                    },
                    {
                        "id": 3,
                        "srcDet": "/img/electrodomesticos04.jpeg",
                        "srcThumb": "/img/electrodomesticos04.jpeg",
                        "alt": "Torradeira",
                        "badge": "Torradeira"
                    }
                ],
                "especificacoes": [
                    "Forno integrado",
                    "Queimadores com acendimento automático",
                    "Porta de vidro temperado",
                    "Termóstato regulável",
                    "Estrutura em aço inoxidável"
                ]
            }
        },
        {
            "id": 7,
            "nome": "Ferro de Engomar",
            "preco": 1500,
            "badge": "Promoção",
            "limit": 25,
            "desc": "Ferro de engomar com vapor e base antiaderente para uma roupa sem vincos.",
            "src": "/img/electrodomesticos03.jpeg",
            "alt": "Imagem de Ferro de Engomar",
            "categorias": "electro",
            "detalhes": {
                "srcDetalhes": [
                    {
                        "id": 1,
                        "srcDet": "/img/electrodomesticos03.jpeg",
                        "srcThumb": "/img/electrodomesticos03.jpeg",
                        "alt": "Ferro de Engomar",
                        "badge": "Ferro de Engomar"
                    },
                    {
                        "id": 2,
                        "srcDet": "/img/electrodomesticos04.jpeg",
                        "srcThumb": "/img/electrodomesticos04.jpeg",
                        "alt": "Torradeira",
                        "badge": "Torradeira"
                    },
                    {
                        "id": 3,
                        "srcDet": "/img/electrodomesticos01.jpeg",
                        "srcThumb": "/img/electrodomesticos01.jpeg",
                        "alt": "Batedeira de Bancada",
                        "badge": "Batedeira de Bancada"
                    }
                ],
                "especificacoes": [
                    "Base antiaderente",
                    "Temperatura regulável",
                    "Função vapor",
                    "Cabo ergonómico",
                    "Depósito de água"
                ]
            }
        },
        {
            "id": 8,
            "nome": "Torradeira",
            "preco": 2300,
            "badge": "",
            "limit": 12,
            "desc": "Torradeira com vários níveis de tostagem para um pequeno-almoço perfeito.",
            "src": "/img/electrodomesticos04.jpeg",
            "alt": "Imagem de Torradeira",
            "categorias": "electro",
            "detalhes": {
                "srcDetalhes": [
                    {
                        "id": 1,
                        "srcDet": "/img/electrodomesticos04.jpeg",
                        "srcThumb": "/img/electrodomesticos04.jpeg",
                        "alt": "Torradeira",
                        "badge": "Torradeira"
                    },
                    {
                        "id": 2,
                        "srcDet": "/img/electrodomesticos01.jpeg",
                        "srcThumb": "/img/electrodomesticos01.jpeg",
                        "alt": "Batedeira de Bancada",
                        "badge": "Batedeira de Bancada"
                    },
                    {
                        "id": 3,
                        "srcDet": "/img/electrodomesticos02.jpeg",
                        "srcThumb": "/img/electrodomesticos02.jpeg",
                        "alt": "Fogão com Forno",
                        "badge": "Fogão com Forno"
                    }
                ],
                "especificacoes": [
                    "Ranhuras largas",
                    "Vários níveis de tostagem",
                    "Função descongelar",
                    "Bandeja de migalhas removível",
                    "Corpo em aço inoxidável"
                ]
            }
        },
        {
            "id": 9,
            "nome": "Portátil",
            "preco": 28500,
            "badge": "Ultra Rápido",
            "limit": 7,
            "desc": "Portátil leve e rápido para estudo e trabalho.",
            "src": "/img/pc.jpg",
            "alt": "Imagem de Portátil",
            "categorias": "pc",
            "detalhes": {
                "srcDetalhes": [
                    {
                        "id": 1,
                        "srcDet": "/img/pc.jpg",
                        "srcThumb": "/img/pc.jpg",
                        "alt": "Portátil",
                        "badge": "Portátil"
                    },
                    {
                        "id": 2,
                        "srcDet": "/img/pc01.jpeg",
                        "srcThumb": "/img/pc01.jpeg",
                        "alt": "PC Gamer",
                        "badge": "PC Gamer"
                    },
                    {
                        "id": 3,
                        "srcDet": "/img/pc02.jpeg",
                        "srcThumb": "/img/pc02.jpeg",
                        "alt": "Portátil Gamer",
                        "badge": "Portátil Gamer"
                    }
                ],
                "especificacoes": [
                    "Ecrã LED",
                    "Processador multinúcleo",
                    "Memória RAM e disco SSD",
                    "Teclado e touchpad",
                    "Bateria recarregável e Wi-Fi"
                ]
            }
        }
    ];
    const [dadosFiltrados, setDadosFiltrados] = useState(ItensTeste);

    const onClickControlModal = (val) => {
        setModalAberto(val);
    };

    const onClickMostrarModal = (idProd) => {
        setDadosModal(ItensTeste.find((Prod) => Prod.id === idProd));
        onClickControlModal(true);
    };

    const onChangeFiltros = (categoria) => {
        if (categoria !== "todas") {
            setDadosFiltrados(ItensTeste.filter((iten) => iten.categorias === categoria));
        } else {
            setDadosFiltrados(ItensTeste);
        }
    };

    return (
        <>
            <Filtros onChange={(cat) => { onChangeFiltros(cat) }} categorias={Categorias} nome={"filtrar_itens_geren"} id={"filtrar_itens_geren"} />
            <h2 className={styles.titulo_geren}>Gerir produtos</h2>
            <ContainerDiv className={styles.area_cont_geren}>
                <CardActProds showModal={modalAberto} onClickControlModal={(val) => { onClickControlModal(val) }} children={<CardFormProds tipo={true} dadosAct={dadosModal} />} />
                <CardProdGeren ItensGeren={dadosFiltrados} onClickMostrarModal={(idProd) => { onClickMostrarModal(idProd) }} />
            </ContainerDiv>
        </>
    );
}

export default GerenciarProds;