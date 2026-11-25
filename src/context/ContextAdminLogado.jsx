import { createContext, useEffect, useState } from "react";
import verificarSessao from "../utils/verificarSessao";
import sairAdmin from "../utils/sairAdmin";


const ContextAdminLogado = createContext();


const ContextAdminLogadoProvider = ({ children }) => {
    const [adminStatus, setAdminStatus] = useState(false);
    const [carregandoSessao, setCarregandoSessao] = useState(true);
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
        try {
            const { status } = await verificarSessao();
            setAdminStatus(status)
        } finally {
            setCarregandoSessao(false);
        }
    }

    useEffect(() => {
        sessao();
    }, []);

    return (
        <ContextAdminLogado.Provider value={{ adminStatus, onClickLogar, onClickSair, usuario, setUsuario, carregandoSessao, setCarregandoSessao }}>
            {children}
        </ContextAdminLogado.Provider>
    )
}

export {
    ContextAdminLogado
};

export default ContextAdminLogadoProvider;