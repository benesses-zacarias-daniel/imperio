import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home";
import Produtos from "../pages/produtos/Produtos";
import Sobre from "../pages/sobre/Sobre";
import Termos from "../pages/termos/Termos";
import Anunciar from "../pages/anunciar/Anunciar";
import Carrinho from "../pages/carrinho/Carrinho";
import Contacto from "../pages/contacto/Contacto";
import UserLayout from "../pages/userLayout/UserLayout";

const RotasCliente = () => {
    return (
        <Routes>
            <Route path={"/"} element={<UserLayout />}>
                <Route index element={<Navigate to={"home"} replace />} />
                <Route path={"home"} element={<Home />} />
                <Route path="produtos" element={<Produtos />} />
                <Route path="sobre" element={<Sobre />} />
                <Route path="termos" element={<Termos />} />
                <Route path="anunciar" element={<Anunciar />} />
                <Route path="carrinho" element={<Carrinho />} />
                <Route path="contacto" element={<Contacto />} />
            </Route>
        </Routes>
    )
}


export default RotasCliente;