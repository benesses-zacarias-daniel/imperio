const normalizar = (producto) => {
    return {
        "id": producto.id,
        "nome": producto.nome,
        "preco": producto.preco,
        "bagde": producto.bagde,
        "srcThumb": producto.detalhes.srcDetalhes[0].srcThumb,
        "altThumb": producto.detalhes.srcDetalhes[0].alt,
        "categorias": producto.categorias,
        "quantidade": 1
    };
}


export default normalizar;