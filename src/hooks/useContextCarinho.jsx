import { useContext } from "react"
import { ContextCarinho } from "../context/ContextCarinho"

const useContextCarinho = () => {
    const context = useContext(ContextCarinho);

    if (!context) {
        throw new Error("Context só funcione dentro do carinho")
    }

    return context;
}


export default useContextCarinho;