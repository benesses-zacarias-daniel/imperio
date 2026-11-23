import { createContext, useEffect, useState } from "react";
import supabase from "../../services/supabaseClient";


const ContextAdminLogado = createContext();


const ContextAdminLogadoProvider = ({ children }) => {
    const [adminStatus, setAdminStatus] = useState(false);
    const [usuario, setUsuario] = useState({ "email": "", "senha": "", "nome": "" });

    const onClickLogar = (val) => {
        setAdminStatus(val);
    };

    const onClickSair = () => {
        setAdminStatus(false);
        localStorage.clear()
    };

    useEffect(() => {

        const verificarSessao = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                setAdminStatus(true);
            }
        };

        verificarSessao();
        setAdminStatus(true)
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