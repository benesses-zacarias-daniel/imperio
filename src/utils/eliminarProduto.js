import supabase from "../../services/supabaseClient";

const eliminarProduto = async (idProd) => {
    try {
        const { data, error } = await supabase.from("produto").delete().eq("id", idProd);;

        if (error) {
            console.error("Erro ao eliminar produto: " + error.message);
            return { "status": false, "prod": null };
        }

        console.log("Produto eliminado com sucesso", data);
        return { "status": true, "prod": data };
    } catch (error) {
        console.error("Erro ao eliminar produto: " + error.message);
    }
}


export default eliminarProduto;