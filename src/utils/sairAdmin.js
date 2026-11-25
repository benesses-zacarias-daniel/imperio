import supabase from "../../services/supabaseClient"

const sairAdmin = async () => {
    try {

        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error("Erro ao Sair: ", error.message)
            return { status: false, mensAdm: "Erro ao sair" };
        }

        return { status: true, mensAdm: "Admin saindo" };
    } catch (error) {
        console.error("Erro ao Sair: ", error.message)
        return { status: false, mensAdm: "Erro ao sair" };
    }
};



export default sairAdmin;