import { createContext, useState } from "react";


const ContextAdminLogado = createContext();


const ContextAdminLogadoProvider = ({ children }) => {
    const [adminStatus, setAdminStatus] = useState(() => {
        const usuarioLogado = localStorage.getItem("usuarioLogado");

        return usuarioLogado ? true : false;
    });

    const onClickLogar = (val) => {
        setAdminStatus(val);
    };

    const onClickSair = () => {
        setAdminStatus(false);
        localStorage.clear()
    };

    return (
        <ContextAdminLogado.Provider value={{ adminStatus, onClickLogar, onClickSair }}>
            {children}
        </ContextAdminLogado.Provider>
    )
}

export {
    ContextAdminLogado
};

export default ContextAdminLogadoProvider;