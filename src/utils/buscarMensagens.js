import supabase from "../../services/supabaseClient";

const buscarMensagens = async () => {
    try {

        const { data, error } = await supabase.from("mensagens").select("*");

        if (error) {
            console.error("Erro ao buscar mensagens: " + error.message);
            return {
                "status": false, "mens": [
                    {
                        "id": 0,
                        "nome": "Benesses Zacarias Daniel",
                        "iniciais": "BZD",
                        "mens": "",
                        "lida": false
                    }
                ]
            };
        }

        console.log("Mensagens buscados com sucesso", data);
        return { "status": true, "mens": data };
    } catch (error) {
        console.error("Erro ao buscar Mensagens: " + error.message);
    }
}


export default buscarMensagens;