import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home";
import Productos from "../pages/productos/Productos";
import Sobre from "../pages/sobre/Sobre";
import Termos from "../pages/termos/Termos";
import Anunciar from "../pages/anunciar/Anunciar";
import Carinho from "../pages/carrinho/Carinho";
import Contacto from "../pages/contacto/Contacto";

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/anunciar" element={<Anunciar />} />
            <Route path="/carinho" element={<Carinho />} />
            <Route path="/contacto" element={<Contacto />} />
        </Routes>
    )
}


export default Rotas;