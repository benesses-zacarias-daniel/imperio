import { createContext, useEffect, useState } from "react";


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

    useEffect(() => {
        const usuarioLog = localStorage.getItem("usuarioLogado");;
        if (!usuarioLog) {

            localStorage.setItem("usuarioLogado", false);
            return;
        };
    }, [])

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