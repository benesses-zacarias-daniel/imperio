import styles from './AdminLayout.module.css';
import HeaderAdmin from '../../components/layout/HeaderAdmin/HeaderAdmin';
import RotasAdmin from '../../routes/RotasAdmin';
import { useLocation } from 'react-router-dom';

const AdminLayout = () => {
    const { pathname } = useLocation();
    return (
        <>
            {(pathname.startsWith("/admin")) && (
                <div className={styles.layout}>
                    <HeaderAdmin />
                    <main className={styles.conteudo}>
                        <RotasAdmin />
                    </main>
                </div>
            )}
        </>
    );
}

export default AdminLayout;
