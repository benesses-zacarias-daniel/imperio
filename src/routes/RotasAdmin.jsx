import { Route, Routes, Navigate } from "react-router-dom"
import AdicionarProds from "../pages/admin/adicionar/AdicionarProds";
import GerenciarProds from "../pages/admin/gerenciar/GerenciarProds";
const RotasAdmin = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="adicionar" replace />} />
            <Route path="adicionar" element={<AdicionarProds />} />
            <Route path="gerenciar" element={<GerenciarProds />} />
        </Routes>
    );
};


export default RotasAdmin;