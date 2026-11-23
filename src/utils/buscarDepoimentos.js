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
                        "id": 0,
                        "nome": "Sem Depoimentos",
                        "iniciais": "SD",
                        "visivel": false,
                        "depoimento": "Ainda sem nenhum depoimento adiciona ao site."
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
                    "id": 0,
                    "nome": "Sem Depoimentos",
                    "iniciais": "SD",
                    "visivel": false,
                    "depoimento": "Ainda sem nenhum depoimento adiciona ao site."
                }
            ]
        }
    }
}


export default buscarDepoimentos;