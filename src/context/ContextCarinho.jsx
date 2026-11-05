import { createContext, useState } from "react";
import normalizar from "../utils/normalizar";

const ContextCarinho = createContext();

const ContextCarinhoProvider = ({ children }) => {
    const [itens, setItens] = useState([]);

    const onClickAdicionarItem = (obj) => {
        console.log(obj);

        const novoObj = normalizar(obj);

        console.log(novoObj);
        setItens((actual) => {
            const existe = actual.find((prod) => prod.id === novoObj.id);
            if (existe) {
                return;
            }

            return [...actual, novoObj]
        });
    };

    // useEffect(() => {
    //     console.log(itens);
    // }, [itens])
    const onClickRemoverItem = (idObj) => {
        const objs = itens.filter((objF) => objF.id !== idObj);

        setItens(objs);
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

        /* if (tipo === 0) {
             obj[0].quantidade = obj[0].quantidade + 1;
         } else {
             if (obj[0].quantidade === 1) {
 
             }
 
             obj[0].quantidade = obj[0].quantidade - 1;
         }
 
          const objFinal = [...obj, ...objs];
          console.log("Final --- ");console.log(...objFinal);*/
        setItens(objFinal);
    };

    const onClickTotal = () => {
        let total = 0;

        itens.map((item) => {
            total += item.quantidade * item.preco;
        });

        return total;
    };

    const onClickMensagemFinalizarCompra = () => {
        let mensagem = "Olá, equipe da Imperial Electrônicos. Gostaria de encomenda esses productos ";
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

    return (
        <ContextCarinho.Provider value={{ itens, setItens, onClickAdicionarItem, onClickRemoverItem, onClickAlterarQtdItem, onClickTotal, onClickMensagemFinalizarCompra }}>
            {children}
        </ContextCarinho.Provider>
    )

}


export {
    ContextCarinho
};

export default ContextCarinhoProvider;