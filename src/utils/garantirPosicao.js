const garantirPrincipal = (listaDetalhes, principal) => {
    const itemPrincipal = {
        srcDet: principal.srcDet,     // base64 ou link da imagem principal (grande)
        srcThumb: principal.srcThumb, // base64 ou link da imagem principal (miniatura)
        alt: principal.alt || "",     // mesmo alt da imagem principal
    };

    const listaAtual = Array.isArray(listaDetalhes) ? [...listaDetalhes] : [];

    if (listaAtual.length === 0) {
        return [itemPrincipal];
    }

    listaAtual[0] = itemPrincipal;
    return listaAtual;
};


export default garantirPrincipal;