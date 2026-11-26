import style from './AdminLayout.module.css';
import { Outlet, useNavigate } from 'react-router-dom';
import HeaderAdmin from '../../components/layout/Header/HeaderAdmin/HeaderAdmin';
import FooterAdmin from '../../components/layout/Footer/FooterAdmin/FooterAdmin';
import useContextAdminLogado from '../../hooks/useContextAdminLogado';
import { useEffect } from 'react';

const AdminLayout = () => {

    const { adminStatus, carregandoSessao } = useContextAdminLogado();
    const navigate = useNavigate();

    useEffect(() => {
        if (!carregandoSessao && !adminStatus) {
            navigate("/autenticar/login", { replace: true });
        }
    }, [carregandoSessao, adminStatus, navigate])

    if (!adminStatus) {
        return null;
    }
    if (carregandoSessao) {
        return null;
    }
    return (

        <div className={style.layout}>
            <HeaderAdmin />
            <main id={"conteudo_admin"} className={style.conteudo_admin}>
                <Outlet />
                <FooterAdmin />
            </main>
        </div>
    );
}

export default AdminLayout;
