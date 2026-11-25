import supabase from "../../services/supabaseClient";

const enviarImagem = async (base64) => {
    if (!base64) return null;

    // Se já for um link pronto, devolve ele mesmo
    if (typeof base64 === "string" && base64.startsWith("http")) {
        return base64;
    }

    // 1. Converte base64 em blob (ficheiro)
    const resposta = await fetch(base64);
    const blob = await resposta.blob();

    // 2. Cria um nome único dentro do bucket "produtos"
    const nomeFicheiro = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}.webp`;

    // 3. Envia para o Storage
    const { error } = await supabase.storage
        .from("produtos")
        .upload(nomeFicheiro, blob, { contentType: "image/webp" });

    if (error) throw error;

    // 4. Devolve o link público da imagem
    const { data } = supabase.storage
        .from("produtos")
        .getPublicUrl(nomeFicheiro);

    return data.publicUrl;
};

export default enviarImagem;