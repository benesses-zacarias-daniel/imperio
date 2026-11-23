import supabase from "../../services/supabaseClient";

const atualzarDepoimento = async (depAt, idDep) => {
    try {

        const { data, error } = await supabase.from("depoimentos").update(depAt).eq("id", idDep);

        if (error) {
            console.error("Erro ao actualizar depoimento: " + error.message);
            return;
        }

        return { "status": true, "dep": `Depoimento actualizar com sucesso: ${data}` };
    } catch (error) {
        console.error("Erro ao actualizar depoimento: " + error.message);
    }
}

export default atualzarDepoimento;