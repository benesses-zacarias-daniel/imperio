import supabase from "../../services/supabaseClient";

const adicionarProduto = async (produto) => {
    try {
        const { data, error } = await supabase().from("produtos").insert([produto]);

        if (error) {
            console.error("Erro ao adicionar produto: " + error.message);
            return { "status": false, "prod": null };;
        }

        console.log("Produto adicionado com sucesso: ", data);

        return { "status": true, "prod": data };

    } catch (error) {
        console.error("Erro ao adicionar produto: " + error.message);
    }
}

export default adicionarProduto;