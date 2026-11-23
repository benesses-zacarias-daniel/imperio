import supabase from "../../services/supabaseClient";

const enviarMensagem = async (mensagem) => {
    try {

        const { data, error } = await supabase.from("mensagens").insert([mensagem]);

        if (error) {
            console.error("Erro ao enviar mensagem: " + error.message);
            return;
        }

        console.log("Mensagem enviada com sucesso ", data);

    } catch (error) {
        console.error("Erro ao enviar mensagem: " + error.message);
    }
}

export default enviarMensagem;