import styles from './AdminLayout.module.css';
import { useLocation } from 'react-router-dom';
import HeaderAdmin from '../../components/layout/HeaderAdmin/HeaderAdmin';
import RotasAdmin from '../../routes/RotasAdmin';
import { useState } from 'react';
import Autenticar from '../autenticaco/Autentifcar';

const AdminLayout = () => {
    const { pathname } = useLocation();
    const [adminStaus, setAdminStatus] = useState(false);

    return (
        <>
            {(pathname.startsWith("/admin") && adminStaus === true) ? (
                <div className={styles.layout}>
                    <HeaderAdmin />
                    <main id={"conteudo_admin"} className={styles.conteudo_admin}>
                        <RotasAdmin />
                    </main>
                </div>
            ) : (
                <Autenticar />
            )}
        </>
    );
}

export default AdminLayout;
