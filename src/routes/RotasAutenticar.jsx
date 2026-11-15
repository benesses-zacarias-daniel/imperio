import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/login/Login";
import Cadastrar from "../components/cadastrar/Cadastrar";

const RotasAutenticar = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"login"} replace />} />
            <Route path="login" element={<Login />} />
            <Route path="cadastrar" element={<Cadastrar />} />
        </Routes>
    );
};


export default RotasAutenticar;