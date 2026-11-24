import supabase from "../../services/supabaseClient";

const buscarDepoimentos = async () => {
    try {
        const { data, error } = await supabase.from("depoimentos").select("*");

        if (error) {
            console.error("Erro ao buscar depoimentos: " + error.message);
            return {
                "status": false,
                "dep": [
                    {
                        "id": 1,
                        "nome": "Benesses Da Flora Daniel",
                        "iniciais": "BFD",
                        "visivel": true,
                        "depoimento": "Encontrei o smartphone e a TV que procurava com ótimo preço e garantia. A Imperial Electrónicos tem os melhores produtos do mercado sem dúvida."
                    },
                    {
                        "id": 2,
                        "nome": "Ntxuphí Namoro",
                        "iniciais": "NN",
                        "visivel": true,
                        "depoimento": "A Imperial Electrónicos ajudou-me a equipar o escritório da minha empresa com computadores e impressoras em tempo recorde. Profissionalismo puro!"
                    },
                    {
                        "id": 3,
                        "nome": "Benedito Zacarias Daniel",
                        "iniciais": "BZD",
                        "visivel": true,
                        "depoimento": "O processo de compra da nossa geleira e máquina de lavar foi extremamente transparente e com entrega rápida. Recomendo vivamente a equipa."
                    }
                ]
            };
        }

        console.log("Depoimentos buscados com sucesso", data);
        return { "status": true, "dep": data };
    } catch (error) {
        console.error("Erro ao buscar depoimentos: " + error.message);
        return {
            "status": false,
            "dep": [
                {
                    "id": 1,
                    "nome": "Benesses Da Flora Daniel",
                    "iniciais": "BFD",
                    "visivel": true,
                    "depoimento": "Encontrei o smartphone e a TV que procurava com ótimo preço e garantia. A Imperial Electrónicos tem os melhores produtos do mercado sem dúvida."
                },
                {
                    "id": 2,
                    "nome": "Ntxuphí Namoro",
                    "iniciais": "NN",
                    "visivel": true,
                    "depoimento": "A Imperial Electrónicos ajudou-me a equipar o escritório da minha empresa com computadores e impressoras em tempo recorde. Profissionalismo puro!"
                },
                {
                    "id": 3,
                    "nome": "Benedito Zacarias Daniel",
                    "iniciais": "BZD",
                    "visivel": true,
                    "depoimento": "O processo de compra da nossa geleira e máquina de lavar foi extremamente transparente e com entrega rápida. Recomendo vivamente a equipa."
                }
            ]
        }
    }
}


export default buscarDepoimentos;