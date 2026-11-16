import { Navigate, Route, Routes } from "react-router-dom";
import Autenticar from "../pages/autenticaco/Autenticar";
import Login from "../components/autenticar/login/Login";
import Cadastrar from "../components/autenticar/cadastrar/Cadastrar";

const RotasAutenticar = () => {
    return (
        <Routes>
            <Route path="/" element={<Autenticar />}>
                <Route idex element={<Navigate to={"login"} replace />} />
                <Route path="login" element={<Login />} />
                <Route path="cadastrar" element={<Cadastrar />} />
            </Route>
        </Routes>
    );
};


export default RotasAutenticar;