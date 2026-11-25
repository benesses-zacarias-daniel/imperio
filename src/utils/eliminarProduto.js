import supabase from "../../services/supabaseClient";

const eliminarProduto = async (idProd) => {
    try {
        const { error } = await supabase.from("produtos").delete().eq("id", idProd);;

        if (error) {
            console.error("Erro ao eliminar produto: " + error.message);
            return { "status": false, "prod": null };
        }

        console.log("Produto eliminado com sucesso");
        return { "status": true, "prod": null };
    } catch (error) {
        console.error("Erro ao eliminar produto: " + error.message);
        return { "status": false, "prod": null };
    }
}


export default eliminarProduto;