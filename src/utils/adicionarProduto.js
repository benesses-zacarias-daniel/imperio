import supabase from "../../services/supabaseClient";

const adicionarProduto = async (produto) => {
    try {

        const { error } = await supabase.from("produtos").insert([produto]);

        if (error) {
            console.error("Erro ao adicionar produto: " + error.message);
            return { "status": false, "prod": null };
        }

        console.log("Produto adicionado com sucesso: ");

        return { "status": true, "prod": null };

    } catch (error) {
        console.error("Erro ao adicionar produto: " + error.message);
        return { "status": false, "prod": null };
    }
}

export default adicionarProduto;