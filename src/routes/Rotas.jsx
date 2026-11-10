import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home";
import Produtos from "../pages/produtos/Produtos";
import Sobre from "../pages/sobre/Sobre";
import Termos from "../pages/termos/Termos";
import Anunciar from "../pages/anunciar/Anunciar";
import Carrinho from "../pages/carrinho/Carrinho";
import Contacto from "../pages/contacto/Contacto";
import AdminLayout from "../pages/admin/layout/admin/AdminLayout";
import AdicionarProds from "../pages/admin/pages/admin/AdicionarProduto";
import GerenciarProds from "../pages/admin/pages/admin/GerenciarProdutos";

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/anunciar" element={<Anunciar />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/admin" element={<AdminLayout />} />
            <Route path="/admin/adicionar" element={<AdicionarProds />} />
            <Route path="/admin/gerenciar" element={<GerenciarProds />} />
        </Routes>
    )
}


export default Rotas;