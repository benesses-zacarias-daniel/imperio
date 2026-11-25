const verificarSessao = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
        return { status: true };
    }

    return { status: false };
};


export default verificarSessao;