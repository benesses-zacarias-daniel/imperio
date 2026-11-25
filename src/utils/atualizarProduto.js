import supabase from "../../services/supabaseClient";

const atualizarProduto = async (prod, idProd) => {
    try {

        const { error } = await supabase.from("produtos").update(prod).eq("id", idProd);

        if (error) {
            console.error("Erro ao actualizar Produto: " + error.message);
            return { "status": false, "prod": null };
        }

        console.log("Produto actualizado com sucesso!");

        return { "status": true, "prod": null };

    } catch (error) {
        console.error("Erro ao actualizar Produto: " + error.message);
        return { "status": false, "prod": null };
    }
}

export default atualizarProduto;