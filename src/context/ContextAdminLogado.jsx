import { createContext, useState } from "react";


const ContextAdminLogado = createContext();


const ContextAdminLogadoProvider = ({ children }) => {
    const [adminStatus, setAdminStatus] = useState(false);

    const onClickLogar = (userInfo) => {

    };

    const onClickSair = () => {
        setAdminStatus(false);
    };

    return (
        <ContextAdminLogado.Provider value={{ adminStatus, setAdminStatus, onClickLogar, onClickSair }}>
            {children}
        </ContextAdminLogado.Provider>
    )
}

export {
    ContextAdminLogado
};

export default ContextAdminLogadoProvider;