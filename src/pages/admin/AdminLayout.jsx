import styles from './AdminLayout.module.css';
import { useLocation } from 'react-router-dom';
import HeaderAdmin from '../../components/layout/HeaderAdmin/HeaderAdmin';
import RotasAdmin from '../../routes/RotasAdmin';

const AdminLayout = () => {
    const { pathname } = useLocation();
    return (
        <>
            {(pathname.startsWith("/admin")) && (
                <div className={styles.layout}>
                    <HeaderAdmin />
                    <main id={"conteudo"} className={styles.conteudo}>
                        <RotasAdmin />
                    </main>
                </div>
            )}
        </>
    );
}

export default AdminLayout;
