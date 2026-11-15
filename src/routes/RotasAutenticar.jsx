import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/login/Login";
import Cadastrar from "../components/cadastrar/Cadastrar";

const RotasAutenticar = () => {
    return (
        <Routes>
            <Route path="/autenticar" element={<Navigate to={"/autenticar/login"} replace />} />
            <Route path="/autenticar/login" element={<Login />} />
            <Route path="/autenticar/cadastrar" element={<Cadastrar />} />
        </Routes>
    );
};


export default RotasAutenticar;