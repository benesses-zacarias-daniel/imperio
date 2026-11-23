import supabase from "../../services/supabaseClient";

const eliminarMensagem = async (idMens) => {
    try {

        const { data, error } = await supabase.from("mensagens").delete().eq("id", idMens);

        if (error) {
            console.error("Erro ao eliminar mensagem: " + error.message);
            return;
        }

        console.log("Mensagem eliminada com sucesso: ", data);
    } catch (error) {
        console.error("Erro ao buscar produtos em destaque: " + error.message);
    }
}


export default eliminarMensagem;