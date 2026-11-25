import { createContext, useEffect, useState } from "react";
import verificarSessao from "../utils/verificarSessao";
import sairAdmin from "../utils/sairAdmin";


const ContextAdminLogado = createContext();


const ContextAdminLogadoProvider = ({ children }) => {
    const [adminStatus, setAdminStatus] = useState(false);
    const [usuario, setUsuario] = useState({ "email": "", "senha": "", "nome": "" });

    const onClickLogar = (val) => {
        setAdminStatus(val);
    };

    const onClickSair = async () => {
        const { status } = await sairAdmin();
        console.log(status);

        if (status) {
            console.log(status);

            setAdminStatus(false);
        }
    };
    const sessao = async () => {
        const { status } = verificarSessao();
        if (status) {
            setAdminStatus(status)
        }
    }

    useEffect(() => {
        sessao();
    }, []);

    return (
        <ContextAdminLogado.Provider value={{ adminStatus, onClickLogar, onClickSair, usuario, setUsuario }}>
            {children}
        </ContextAdminLogado.Provider>
    )
}

export {
    ContextAdminLogado
};

export default ContextAdminLogadoProvider;