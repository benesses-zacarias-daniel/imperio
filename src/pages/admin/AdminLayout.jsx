import styles from './AdminLayout.module.css';
import { Navigate, Outlet } from 'react-router-dom';
import HeaderAdmin from '../../components/layout/HeaderAdmin/HeaderAdmin';
import { useState } from 'react';

const AdminLayout = () => {
    const [adminStaus, setAdminStatus] = useState(false);

    // if (!adminStaus) {
    //     return <Navigate to={"/autenticar/login"} replace />
    // }

    return (
        <div className={styles.layout}>
            <HeaderAdmin />
            <main id={"conteudo_admin"} className={styles.conteudo_admin}>
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
