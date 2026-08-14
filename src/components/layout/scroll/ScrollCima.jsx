import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollCima = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const conteudo = document.getElementById("conteudo");
        if (conteudo) {
            conteudo.scrollTop = 0;
        }

    }, [pathname]);

    return null;
}


export default ScrollCima;