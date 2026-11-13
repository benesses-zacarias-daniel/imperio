import { createContext, useEffect, useState } from "react";
import normalizar from "../utils/normalizar";

const ContextCarinho = createContext();

const ContextCarinhoProvider = ({ children }) => {
    const [itens, setItens] = useState(() => {
        const itensSalvos = localStorage.getItem("productos");

        return itensSalvos ? JSON.parse(itensSalvos) || [] : [];
    });

    const onClickAdicionarItem = (obj) => {

        const novoObj = normalizar(obj);
        // console.log(novoObj);

        setItens((actual) => {
            const existe = actual.find((prod) => prod.id === novoObj.id);
            if (existe) {
                return;
            }
            return [...actual, novoObj]
        });
    };

    const salvarNoNavegador = (objDados) => {
        const itensSalvos = JSON.parse(localStorage.getItem("productos"));
        itensSalvos.push(objDados[0])
        localStorage.setItem("productos", JSON.stringify(itensSalvos));
    };

    const limparNavegador = () => {
        setItens([]);
    };

    const onClickRemoverItem = (idObj) => {
        const objs = itens.filter((objF) => objF.id !== idObj);

        setItens(objs);
        salvarNoNavegador(itens);
    };

    const onClickAlterarQtdItem = (idObj, tipo) => {
        // const objs = itens.filter((objF) => objF.id !== idObj);
        const objAlterar = itens.find((objF) => objF.id === idObj);
        if (!objAlterar) {
            return;
        }
        if (tipo !== 0 && objAlterar.quantidade === 1) {
            onClickRemoverItem(idObj);
            return;
        }

        const objFinal = itens.map((item) => {
            if (item.id === idObj) {
                return {
                    ...item,
                    quantidade: tipo === 0 ? item.quantidade + 1 : item.quantidade - 1
                }
            }

            return item;
        });

        setItens(objFinal);
        //salvarNoNavegador(objFinal);
    };

    const onClickSubTotal = () => {
        return calculadora();
    };

    const calculadora = () => {
        let total = 0;

        itens.map((item) => {
            total += item.quantidade * item.preco;
        });


        return total;
    };

    const onClickTotal = () => {
        return calculadora() + 200;//200 para entrega ao domicílio
    };

    const onClickMensagemFinalizarCompra = () => {
        let mensagem = "Olá, equipe da Imperial Electrônicos. Gostaria de encomendar esses productos ";
        itens.map((item, pos) => {
            if (pos < itens.length - 1) {
                mensagem += `${item.nome}, `;
            } else {
                mensagem += `${item.nome}.`;
            }
        });

        mensagem += ` Com o total de ${onClickTotal()} MT.`;

        return mensagem;
    };

    useEffect(() => {
        localStorage.setItem("productos", JSON.stringify(itens));
    }, [itens])


    return (
        <ContextCarinho.Provider value={{ itens, setItens, onClickAdicionarItem, onClickRemoverItem, onClickAlterarQtdItem, onClickSubTotal, onClickTotal, onClickMensagemFinalizarCompra, limparNavegador }}>
            {children}
        </ContextCarinho.Provider>
    )

}


export {
    ContextCarinho
};

export default ContextCarinhoProvider;