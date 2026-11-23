import supabase from "../../services/supabase";

const eliminarDepoimento = async (idDep) => {
    try {
        const { data, error } = await supabase.from("depoimentos").delete().eq("id", idDep);;

        if (error) {
            console.error("Erro ao eliminar depoimento: " + error.message);
            return { "info": false, "deps": null };
        }

        console.log("Depoimento eliminado com sucesso", data);
        return { "info": true, "deps": data };
    } catch (error) {
        console.error("Erro ao eliminar depoimento: " + error.message);
    }
}


export default eliminarDepoimento;