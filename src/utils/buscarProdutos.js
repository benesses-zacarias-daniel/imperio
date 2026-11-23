import supabase from "../../services/supabaseClient";

const buscarProdutos = async () => {
    try {

        const { data, error } = await supabase.from("produtos").select("*");

        if (error) {
            console.error("Erro ao buscar produtos: " + error.message);
            return {
                "status": false,
                "prod": [
                    {
                        "id": 0,
                        "nome": "Ainda Sem Produtos",
                        "preco": 0,
                        "badge": "Sem badge",
                        "primeiros": false,
                        "desc": "",
                        "src": "",
                        "alt": "",
                        "categorias": "",
                        "detalhes": {
                            "srcDetalhes": [
                                {
                                    "id": 1,
                                    "srcDet": "",
                                    "srcThumb": "",
                                    "alt": ""
                                }],
                            "especificacoes": []
                        }
                    }
                ]
            };
        }

        console.log("Produtos buscados com sucesso", data);
        return { "status": true, "prod": data };
    } catch (error) {
        console.error("Erro ao buscar produtos: " + error.message);
    }
}

export default buscarProdutos;