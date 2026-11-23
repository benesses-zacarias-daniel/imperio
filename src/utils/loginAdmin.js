import supabase from "../../services/supabase";

const loginAdmin = async (usuario) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword(
            {
                "email": usuario.email,
                "senha": usuario.senha
            }
        );

        if (error) {
            console.error("Erro ao logar ", error.message)
            return { "status": false, "mens": "Erro ao logar" };
        }

        return { "status": true, "mens": "" };
    } catch (error) {
        console.error("Erro ao logar " + error.message);
    }
}


export default loginAdmin;