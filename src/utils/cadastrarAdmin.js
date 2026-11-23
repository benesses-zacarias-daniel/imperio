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
            return { "status": false, "mens": `Erro ao cadastrar` }
        }

        return { "status": true, "mens": "Conta Criada! Verifique o seu email ()" }
    } catch (error) {
        console.error("Erro ao cadastrar " + error.message);
    }
}


export default cadastrarAdmin;