const normalizar = (producto) => {
    const novoObj =
    {
        "id": producto.id,
        "nome": producto.nome,
        "preco": producto.preco,
        "bagde": producto.bagde,
        "srcThumb": producto.detalhes.srcDetalhes[0].srcThumb,
        "altThumb": producto.detalhes.srcDetalhes[0].alt,
        "categorias": producto.categorias,
        "quantidade": 1
    };

    console.log(novoObj);

    return novoObj;
}


export default normalizar;