import supabase from "../../services/supabaseClient";

const loginAdmin = async (usuario) => {
    try {
        const { error } = await supabase.auth.signInWithPassword(
            {
                "email": usuario.email,
                "password": usuario.senha
            }
        );

        if (error) {
            console.error("Erro ao logar ", error.message)
            return { "status": false, "mens": `E-mail ou Senha incorretos` };
        }

        return { "status": true, "mens": "" };
    } catch (error) {
        console.error("Erro ao logar " + error.message);
        return { "status": false, "mens": `E-mail ou Senha incorretos` };
    }
}


export default loginAdmin;