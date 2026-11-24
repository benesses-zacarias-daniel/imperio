import supabase from "../../services/supabaseClient";

const cadastrarAdmin = async (dados) => {
    try {
        const { data, error } = await supabase.auth.signUp(
            {
                "email": dados.email,
                "senha": dados.senha,
                "nome": dados.nome
            }
        );

        if (error) {
            console.error("Erro ao cadastrar ", error.message);
            return { "status": false, "mens": `Erro ao cadastrar. Tente novamente Mais tarde!` }
        }

        return { "status": true, "mens": "Conta Criada! Verifique o seu email (Verifique seu email pra confirmar o cadastro & em seguida pode fazer Login!)" }
    } catch (error) {
        console.error("Erro ao cadastrar " + error.message);
        return { "status": false, "mens": `Erro ao cadastrar. Tente novamente Mais tarde!` }
    }
}


export default cadastrarAdmin;