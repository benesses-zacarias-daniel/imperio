import supabase from "../../services/supabaseClient";

const adicionarDepoimento = async (depoimento) => {
    try {

        const { data, error } = await supabase.from("depoimentos").insert([depoimento]);

        if (error) {
            console.error("Erro ao guardar depoimento: " + error.message);
            return {
                "status": false,
                "dep": [{
                    "id": 0,
                    "nome": "Benesses Zacarias Daniel",
                    "iniciais": "BZD",
                    "visivel": false,
                    "depoimento": "Depoimento de Teste pois ainda não adicionou nenhum depoimento."
                }]
            };
        }

        console.log(`Depoimento guardado com sucesso: ${data}`);

        return { "status": true, "dep": `Depoimento guardado com sucesso: ${data}` };
    } catch (error) {
        console.error("Erro ao guardar depoimento: " + error.message);
        return {
            "status": false,
            "dep": [{
                "id": 0,
                "nome": "Benesses Zacarias Daniel",
                "iniciais": "BZD",
                "visivel": false,
                "depoimento": "Depoimento de Teste pois ainda não adicionou nenhum depoimento."
            }]
        }
    }
}

export default adicionarDepoimento;