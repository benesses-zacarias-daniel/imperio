import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Sobre from "../pages/Sobre";
import Termos from "../pages/Termos";
import Anunciar from "../pages/Anunciar";
import Carinho from "../pages/Carinho";
import Contacto from "../pages/Contacto";

const Routas = () => {
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


export default Routas;