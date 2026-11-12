const scrollCima = () => {
    const conteudo = document.getElementById("conteudo") || document.getElementById("conteudo_admin");

    if (conteudo) {
        conteudo.scrollTo({ top: 0, behavior: "smooth" });
    }
}


export default scrollCima;