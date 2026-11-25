import supabase from "../../services/supabaseClient";

const atualizarMensagem = async (mens, idMens) => {
    try {

        const { error } = await supabase.from("mensagens").update(mens).eq("id", idMens);

        if (error) {
            console.error("Erro ao adicionar mensagem lida: ", error.message);
            return;
        }

    } catch (error) {
        console.error("Erro ao adicionar mensagem em lida: ", error.message);
    }
}


export default atualizarMensagem;