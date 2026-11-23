import supabase from "../../services/supabaseClient";

const buscarProdutos = async () => {
    try {

        const { data, error } = await supabase.from("produtos").select("*");

        if (error) {
            console.error("Erro ao buscar produtos: " + error.message);
            return {
                "status": false,
                "prod": [
                    {
                        "id": 1,
                        "nome": "Portátil Gamer",
                        "preco": 58000,
                        "badge": "Novo",
                        "primeiros": true,
                        "desc": "Portátil gamer com teclado retroiluminado e ventilação reforçada.",
                        "src": "/img/pc02.jpeg",
                        "alt": "Imagem de Portátil Gamer",
                        "categorias": "pc",
                        "detalhes": {
                            "srcDetalhes": [
                                {
                                    "id": 1,
                                    "srcDet": "/img/pc02.jpeg",
                                    "srcThumb": "/img/pc02.jpeg",
                                    "alt": "Portátil Gamer"
                                },
                                {
                                    "id": 2,
                                    "srcDet": "/img/pc03.jpeg",
                                    "srcThumb": "/img/pc03.jpeg",
                                    "alt": "Computador de Secretária"
                                },
                                {
                                    "id": 3,
                                    "srcDet": "/img/pc.jpg",
                                    "srcThumb": "/img/pc.jpg",
                                    "alt": "Portátil"
                                }
                            ],
                            "especificacoes": [
                                "Teclado retroiluminado RGB",
                                "Placa gráfica dedicada",
                                "Ecrã de alta taxa de atualização",
                                "Ventilação reforçada",
                                "Disco SSD rápido"
                            ]
                        }
                    },
                    {
                        "id": 2,
                        "nome": "Fogão com Forno",
                        "preco": 21000,
                        "badge": "",
                        "primeiros": false,
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
                                    "alt": "Fogão com Forno"
                                },
                                {
                                    "id": 2,
                                    "srcDet": "/img/electrodomesticos03.jpeg",
                                    "srcThumb": "/img/electrodomesticos03.jpeg",
                                    "alt": "Ferro de Engomar"
                                },
                                {
                                    "id": 3,
                                    "srcDet": "/img/electrodomesticos04.jpeg",
                                    "srcThumb": "/img/electrodomesticos04.jpeg",
                                    "alt": "Torradeira"
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
                    }, {
                        "id": 3,
                        "nome": "Smart TV",
                        "preco": 32000,
                        "badge": "Destaque",
                        "primeiros": true,
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
                                    "alt": "Smart TV"
                                },
                                {
                                    "id": 2,
                                    "srcDet": "/img/tv01.jpeg",
                                    "srcThumb": "/img/tv01.jpeg",
                                    "alt": "Televisão LED"
                                },
                                {
                                    "id": 3,
                                    "srcDet": "/img/tv02.jpeg",
                                    "srcThumb": "/img/tv02.jpeg",
                                    "alt": "Televisão LED Slim"
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
                        "id": 4,
                        "nome": "Telemóvel Clássico",
                        "preco": 1800,
                        "badge": "Clássico",
                        "primeiros": false,
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
                                    "alt": "Telemóvel Clássico"
                                },
                                {
                                    "id": 2,
                                    "srcDet": "/img/smartphone01.jpeg",
                                    "srcThumb": "/img/smartphone01.jpeg",
                                    "alt": "Smartphone Pro"
                                },
                                {
                                    "id": 3,
                                    "srcDet": "/img/smartphone02.jpeg",
                                    "srcThumb": "/img/smartphone02.jpeg",
                                    "alt": "Smartphone Android"
                                }
                            ],
                            "especificacoes": [
                                "Design clássico e resistente",
                                "Teclado físico",
                                "Bateria de longa duração",
                                "Chamadas e SMS",
                                "Jogos integrados"
                            ]
                        }
                    },
                    {
                        "id": 5,
                        "nome": "Torradeira",
                        "preco": 2300,
                        "badge": "",
                        "primeiros": false,
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
                                    "alt": "Torradeira"
                                },
                                {
                                    "id": 2,
                                    "srcDet": "/img/electrodomesticos01.jpeg",
                                    "srcThumb": "/img/electrodomesticos01.jpeg",
                                    "alt": "Batedeira de Bancada"
                                },
                                {
                                    "id": 3,
                                    "srcDet": "/img/electrodomesticos02.jpeg",
                                    "srcThumb": "/img/electrodomesticos02.jpeg",
                                    "alt": "Fogão com Forno"
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
                    }, {
                        "id": 6,
                        "nome": "Portátil",
                        "preco": 28500,
                        "badge": "",
                        "primeiros": false,
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
                                    "alt": "Portátil"
                                },
                                {
                                    "id": 2,
                                    "srcDet": "/img/pc01.jpeg",
                                    "srcThumb": "/img/pc01.jpeg",
                                    "alt": "PC Gamer"
                                },
                                {
                                    "id": 3,
                                    "srcDet": "/img/pc02.jpeg",
                                    "srcThumb": "/img/pc02.jpeg",
                                    "alt": "Portátil Gamer"
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
                    },
                    {
                        "id": 7,
                        "nome": "Televisão Retro",
                        "preco": 4500,
                        "badge": "Retro",
                        "primeiros": false,
                        "desc": "Televisão de estilo clássico, ideal para colecionadores e decoração.",
                        "src": "/img/tv03.jpeg",
                        "alt": "Imagem de Televisão Retro",
                        "categorias": "tv",
                        "detalhes": {
                            "srcDetalhes": [
                                {
                                    "id": 1,
                                    "srcDet": "/img/tv03.jpeg",
                                    "srcThumb": "/img/tv03.jpeg",
                                    "alt": "Televisão Retro"
                                },
                                {
                                    "id": 2,
                                    "srcDet": "/img/tv04.jpeg",
                                    "srcThumb": "/img/tv04.jpeg",
                                    "alt": "Smart TV"
                                },
                                {
                                    "id": 3,
                                    "srcDet": "/img/tv01.jpeg",
                                    "srcThumb": "/img/tv01.jpeg",
                                    "alt": "Televisão LED"
                                }
                            ],
                            "especificacoes": [
                                "Ecrã CRT",
                                "Sintonizador analógico",
                                "Comandos no painel frontal",
                                "Entrada de antena",
                                "Design retro"
                            ]
                        }
                    },
                    {
                        "id": 8,
                        "nome": "Smartphone Android",
                        "preco": 14500,
                        "badge": "Promoção",
                        "primeiros": true,
                        "desc": "Smartphone Android com ecrã grande, ideal para o dia a dia.",
                        "src": "/img/smartphone02.jpeg",
                        "alt": "Imagem de Smartphone Android",
                        "categorias": "smartphone",
                        "detalhes": {
                            "srcDetalhes": [
                                {
                                    "id": 1,
                                    "srcDet": "/img/smartphone02.jpeg",
                                    "srcThumb": "/img/smartphone02.jpeg",
                                    "alt": "Smartphone Android"
                                },
                                {
                                    "id": 2,
                                    "srcDet": "/img/smartphone03.jpeg",
                                    "srcThumb": "/img/smartphone03.jpeg",
                                    "alt": "Telemóvel Básico"
                                },
                                {
                                    "id": 3,
                                    "srcDet": "/img/smartphone04.jpeg",
                                    "srcThumb": "/img/smartphone04.jpeg",
                                    "alt": "Telemóvel Clássico"
                                }
                            ],
                            "especificacoes": [
                                "Ecrã tátil de grande dimensão",
                                "Câmara traseira múltipla",
                                "Suporte para dois cartões SIM",
                                "Bateria de longa duração",
                                "Wi-Fi e Bluetooth"
                            ]
                        }
                    },
                    {
                        "id": 9,
                        "nome": "Batedeira de Bancada",
                        "preco": 5200,
                        "badge": "Novo",
                        "primeiros": false,
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
                                    "alt": "Batedeira de Bancada"
                                },
                                {
                                    "id": 2,
                                    "srcDet": "/img/electrodomesticos02.jpeg",
                                    "srcThumb": "/img/electrodomesticos02.jpeg",
                                    "alt": "Fogão com Forno"
                                },
                                {
                                    "id": 3,
                                    "srcDet": "/img/electrodomesticos03.jpeg",
                                    "srcThumb": "/img/electrodomesticos03.jpeg",
                                    "alt": "Ferro de Engomar"
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
                    }, {
                        "id": 10,
                        "nome": "Ferro de Engomar",
                        "preco": 1500,
                        "badge": "Promoção",
                        "primeiros": false,
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
                                    "alt": "Ferro de Engomar"
                                },
                                {
                                    "id": 2,
                                    "srcDet": "/img/electrodomesticos04.jpeg",
                                    "srcThumb": "/img/electrodomesticos04.jpeg",
                                    "alt": "Torradeira"
                                },
                                {
                                    "id": 3,
                                    "srcDet": "/img/electrodomesticos01.jpeg",
                                    "srcThumb": "/img/electrodomesticos01.jpeg",
                                    "alt": "Batedeira de Bancada"
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
                        "id": 11,
                        "nome": "Torradeira",
                        "preco": 2300,
                        "badge": "",
                        "primeiros": false,
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
                                    "alt": "Torradeira"
                                },
                                {
                                    "id": 2,
                                    "srcDet": "/img/electrodomesticos01.jpeg",
                                    "srcThumb": "/img/electrodomesticos01.jpeg",
                                    "alt": "Batedeira de Bancada"
                                },
                                {
                                    "id": 3,
                                    "srcDet": "/img/electrodomesticos02.jpeg",
                                    "srcThumb": "/img/electrodomesticos02.jpeg",
                                    "alt": "Fogão com Forno"
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
                    }
                ]
            };
        }

        console.log("Produtos buscados com sucesso", data);
        return { "status": true, "prod": data };
    } catch (error) {
        console.error("Erro ao buscar produtos: " + error.message);
        return {
            "status": false,
            "prod": [
                {
                    "id": 1,
                    "nome": "Portátil Gamer",
                    "preco": 58000,
                    "badge": "Novo",
                    "primeiros": true,
                    "desc": "Portátil gamer com teclado retroiluminado e ventilação reforçada.",
                    "src": "/img/pc02.jpeg",
                    "alt": "Imagem de Portátil Gamer",
                    "categorias": "pc",
                    "detalhes": {
                        "srcDetalhes": [
                            {
                                "id": 1,
                                "srcDet": "/img/pc02.jpeg",
                                "srcThumb": "/img/pc02.jpeg",
                                "alt": "Portátil Gamer"
                            },
                            {
                                "id": 2,
                                "srcDet": "/img/pc03.jpeg",
                                "srcThumb": "/img/pc03.jpeg",
                                "alt": "Computador de Secretária"
                            },
                            {
                                "id": 3,
                                "srcDet": "/img/pc.jpg",
                                "srcThumb": "/img/pc.jpg",
                                "alt": "Portátil"
                            }
                        ],
                        "especificacoes": [
                            "Teclado retroiluminado RGB",
                            "Placa gráfica dedicada",
                            "Ecrã de alta taxa de atualização",
                            "Ventilação reforçada",
                            "Disco SSD rápido"
                        ]
                    }
                },
                {
                    "id": 2,
                    "nome": "Fogão com Forno",
                    "preco": 21000,
                    "badge": "",
                    "primeiros": false,
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
                                "alt": "Fogão com Forno"
                            },
                            {
                                "id": 2,
                                "srcDet": "/img/electrodomesticos03.jpeg",
                                "srcThumb": "/img/electrodomesticos03.jpeg",
                                "alt": "Ferro de Engomar"
                            },
                            {
                                "id": 3,
                                "srcDet": "/img/electrodomesticos04.jpeg",
                                "srcThumb": "/img/electrodomesticos04.jpeg",
                                "alt": "Torradeira"
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
                }, {
                    "id": 3,
                    "nome": "Smart TV",
                    "preco": 32000,
                    "badge": "Destaque",
                    "primeiros": true,
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
                                "alt": "Smart TV"
                            },
                            {
                                "id": 2,
                                "srcDet": "/img/tv01.jpeg",
                                "srcThumb": "/img/tv01.jpeg",
                                "alt": "Televisão LED"
                            },
                            {
                                "id": 3,
                                "srcDet": "/img/tv02.jpeg",
                                "srcThumb": "/img/tv02.jpeg",
                                "alt": "Televisão LED Slim"
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
                    "id": 4,
                    "nome": "Telemóvel Clássico",
                    "preco": 1800,
                    "badge": "Clássico",
                    "primeiros": false,
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
                                "alt": "Telemóvel Clássico"
                            },
                            {
                                "id": 2,
                                "srcDet": "/img/smartphone01.jpeg",
                                "srcThumb": "/img/smartphone01.jpeg",
                                "alt": "Smartphone Pro"
                            },
                            {
                                "id": 3,
                                "srcDet": "/img/smartphone02.jpeg",
                                "srcThumb": "/img/smartphone02.jpeg",
                                "alt": "Smartphone Android"
                            }
                        ],
                        "especificacoes": [
                            "Design clássico e resistente",
                            "Teclado físico",
                            "Bateria de longa duração",
                            "Chamadas e SMS",
                            "Jogos integrados"
                        ]
                    }
                },
                {
                    "id": 5,
                    "nome": "Torradeira",
                    "preco": 2300,
                    "badge": "",
                    "primeiros": false,
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
                                "alt": "Torradeira"
                            },
                            {
                                "id": 2,
                                "srcDet": "/img/electrodomesticos01.jpeg",
                                "srcThumb": "/img/electrodomesticos01.jpeg",
                                "alt": "Batedeira de Bancada"
                            },
                            {
                                "id": 3,
                                "srcDet": "/img/electrodomesticos02.jpeg",
                                "srcThumb": "/img/electrodomesticos02.jpeg",
                                "alt": "Fogão com Forno"
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
                }, {
                    "id": 6,
                    "nome": "Portátil",
                    "preco": 28500,
                    "badge": "",
                    "primeiros": false,
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
                                "alt": "Portátil"
                            },
                            {
                                "id": 2,
                                "srcDet": "/img/pc01.jpeg",
                                "srcThumb": "/img/pc01.jpeg",
                                "alt": "PC Gamer"
                            },
                            {
                                "id": 3,
                                "srcDet": "/img/pc02.jpeg",
                                "srcThumb": "/img/pc02.jpeg",
                                "alt": "Portátil Gamer"
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
                },
                {
                    "id": 7,
                    "nome": "Televisão Retro",
                    "preco": 4500,
                    "badge": "Retro",
                    "primeiros": false,
                    "desc": "Televisão de estilo clássico, ideal para colecionadores e decoração.",
                    "src": "/img/tv03.jpeg",
                    "alt": "Imagem de Televisão Retro",
                    "categorias": "tv",
                    "detalhes": {
                        "srcDetalhes": [
                            {
                                "id": 1,
                                "srcDet": "/img/tv03.jpeg",
                                "srcThumb": "/img/tv03.jpeg",
                                "alt": "Televisão Retro"
                            },
                            {
                                "id": 2,
                                "srcDet": "/img/tv04.jpeg",
                                "srcThumb": "/img/tv04.jpeg",
                                "alt": "Smart TV"
                            },
                            {
                                "id": 3,
                                "srcDet": "/img/tv01.jpeg",
                                "srcThumb": "/img/tv01.jpeg",
                                "alt": "Televisão LED"
                            }
                        ],
                        "especificacoes": [
                            "Ecrã CRT",
                            "Sintonizador analógico",
                            "Comandos no painel frontal",
                            "Entrada de antena",
                            "Design retro"
                        ]
                    }
                },
                {
                    "id": 8,
                    "nome": "Smartphone Android",
                    "preco": 14500,
                    "badge": "Promoção",
                    "primeiros": true,
                    "desc": "Smartphone Android com ecrã grande, ideal para o dia a dia.",
                    "src": "/img/smartphone02.jpeg",
                    "alt": "Imagem de Smartphone Android",
                    "categorias": "smartphone",
                    "detalhes": {
                        "srcDetalhes": [
                            {
                                "id": 1,
                                "srcDet": "/img/smartphone02.jpeg",
                                "srcThumb": "/img/smartphone02.jpeg",
                                "alt": "Smartphone Android"
                            },
                            {
                                "id": 2,
                                "srcDet": "/img/smartphone03.jpeg",
                                "srcThumb": "/img/smartphone03.jpeg",
                                "alt": "Telemóvel Básico"
                            },
                            {
                                "id": 3,
                                "srcDet": "/img/smartphone04.jpeg",
                                "srcThumb": "/img/smartphone04.jpeg",
                                "alt": "Telemóvel Clássico"
                            }
                        ],
                        "especificacoes": [
                            "Ecrã tátil de grande dimensão",
                            "Câmara traseira múltipla",
                            "Suporte para dois cartões SIM",
                            "Bateria de longa duração",
                            "Wi-Fi e Bluetooth"
                        ]
                    }
                },
                {
                    "id": 9,
                    "nome": "Batedeira de Bancada",
                    "preco": 5200,
                    "badge": "Novo",
                    "primeiros": false,
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
                                "alt": "Batedeira de Bancada"
                            },
                            {
                                "id": 2,
                                "srcDet": "/img/electrodomesticos02.jpeg",
                                "srcThumb": "/img/electrodomesticos02.jpeg",
                                "alt": "Fogão com Forno"
                            },
                            {
                                "id": 3,
                                "srcDet": "/img/electrodomesticos03.jpeg",
                                "srcThumb": "/img/electrodomesticos03.jpeg",
                                "alt": "Ferro de Engomar"
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
                }, {
                    "id": 10,
                    "nome": "Ferro de Engomar",
                    "preco": 1500,
                    "badge": "Promoção",
                    "primeiros": false,
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
                                "alt": "Ferro de Engomar"
                            },
                            {
                                "id": 2,
                                "srcDet": "/img/electrodomesticos04.jpeg",
                                "srcThumb": "/img/electrodomesticos04.jpeg",
                                "alt": "Torradeira"
                            },
                            {
                                "id": 3,
                                "srcDet": "/img/electrodomesticos01.jpeg",
                                "srcThumb": "/img/electrodomesticos01.jpeg",
                                "alt": "Batedeira de Bancada"
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
                    "id": 11,
                    "nome": "Torradeira",
                    "preco": 2300,
                    "badge": "",
                    "primeiros": false,
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
                                "alt": "Torradeira"
                            },
                            {
                                "id": 2,
                                "srcDet": "/img/electrodomesticos01.jpeg",
                                "srcThumb": "/img/electrodomesticos01.jpeg",
                                "alt": "Batedeira de Bancada"
                            },
                            {
                                "id": 3,
                                "srcDet": "/img/electrodomesticos02.jpeg",
                                "srcThumb": "/img/electrodomesticos02.jpeg",
                                "alt": "Fogão com Forno"
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
                }
            ]
        };
    }
}

export default buscarProdutos;