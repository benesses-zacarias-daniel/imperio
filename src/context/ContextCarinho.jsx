import { createContext, useEffect, useState } from "react";
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
        const objs = itens.filter((objF) => objF.id !== idObj);
        const obj = itens.filter((objF) => objF.id === idObj);

        if (tipo === 0) {
            obj[0].quantidade = obj[0].quantidade + 1;
        } else {
            obj[0].quantidade = obj[0].quantidade - 1;
            if (obj[0].quantidade === 0) {
                onClickRemoverItem(idObj);
            }
        }

        const objFinal = [...objs, obj]

        setItens(objFinal);
    };

    // const value = ;
    return (
        <ContextCarinho.Provider value={{ itens, setItens, onClickAdicionarItem, onClickRemoverItem, onClickAlterarQtdItem }}>
            {children}
        </ContextCarinho.Provider>
    )

}


export {
    ContextCarinho
};

export default ContextCarinhoProvider;