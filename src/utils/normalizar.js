const normalizar = (producto) => {
    const novoObj =
    {
        "id": producto.id,
        "nome": producto.nome,
        "preco": producto.preco,
        "bagde": producto.bagde,
        "categorias": producto.categorias,
        "quantidade": 1
    };

    console.log(novoObj);

    return novoObj;
}


export default normalizar;