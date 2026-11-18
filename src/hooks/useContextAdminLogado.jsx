import { useContext } from "react"
import { ContextAdminLogado } from "../context/ContextAdminLogado"

const useContextAdminLogado = () => {
    const context = useContext(ContextAdminLogado);

    if (!context) {
        throw new Error("O Administrador apenas pode estar logado na área da administração.");
    }

    return context;
}


export default useContextAdminLogado;