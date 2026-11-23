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
                        "primeiros": true,
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
                    },
                    {
                        "id": 6,
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
                    },
                    {
                        "id": 7,
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
                    },
                    {
                        "id": 8,
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
                }, {
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
                }, {
                    "id": 4,
                    "nome": "Telemóvel Clássico",
                    "preco": 1800,
                    "badge": "Clássico",
                    "primeiros": true,
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
                },
                {
                    "id": 6,
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
                },
                {
                    "id": 7,
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
                },
                {
                    "id": 8,
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
                }
            ]
        };
    }
}

export default buscarProdutos;