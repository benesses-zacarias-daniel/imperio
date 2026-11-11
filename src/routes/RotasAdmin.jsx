import { Route, Routes, Navigate } from "react-router-dom"
import AdicionarProds from "../pages/admin/adicionar/AdicionarProds";
import GerenciarProds from "../pages/admin/gerenciar/GerenciarProds";
const RotasAdmin = () => {
    return (
        <Routes>
            <Route path="/admin" element={<Navigate to="/admin/adicionar" replace />} />
            <Route path="/admin/adicionar" element={<AdicionarProds />} />
            <Route path="/admin/gerenciar" element={<GerenciarProds />} />
        </Routes>
    );
};


export default RotasAdmin;