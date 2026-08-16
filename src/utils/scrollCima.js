const scrollCima = () => {
    const conteudo = document.getElementById("conteudo");
    if (conteudo) {
        conteudo.scrollTo({ top: 0, behavior: "smooth" });
    }
}


export default scrollCima;