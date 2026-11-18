import style from './AdminLayout.module.css';
import { Navigate, Outlet } from 'react-router-dom';
import HeaderAdmin from '../../components/layout/Header/HeaderAdmin/HeaderAdmin';
import FooterAdmin from '../../components/layout/Footer/FooterAdmin/FooterAdmin';
import useContextAdminLogado from '../../hooks/useContextAdminLogado';

const AdminLayout = () => {

    const { adminStatus } = useContextAdminLogado();

    if (!adminStatus) {
        return <Navigate to={"/autenticar/login"} replace />
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
