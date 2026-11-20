import { Route, Routes, Navigate } from "react-router-dom"
import AdicionarProds from "../pages/admin/adicionar/AdicionarProds";
import GerenciarProds from "../pages/admin/gerenciar/GerenciarProds";
import AdminLayout from "../pages/admin/AdminLayout";
import Depoimentos from "../pages/admin/depoimentos/Depoimentos";
import Ajuda from "../pages/admin/ajuda/Ajuda";
import MensagensContacto from "../pages/admin/mensContacto/MensagensContacto";

const RotasAdmin = () => {
    return (
        <Routes>
            <Route path={"/"} element={<AdminLayout />}>
                <Route index element={<Navigate to="adicionar" replace />} />
                <Route path="adicionar" element={<AdicionarProds />} />
                <Route path="gerenciar" element={<GerenciarProds />} />
                <Route path="mensagens" element={<MensagensContacto />} />
                <Route path="depoimentos" element={<Depoimentos />} />
                <Route path="ajuda" element={<Ajuda />} />
            </Route>
        </Routes>
    );
};


export default RotasAdmin;