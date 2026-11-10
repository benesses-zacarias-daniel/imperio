import { Outlet } from 'react-router-dom';
import MenuAdmin from './MenuAdmin.jsx';
import styles from './AdminLayout.module.css';

// Layout exclusivo do admin: não usa o menu/footer do site.
const AdminLayout = () => (
    <div className={styles.layout}>
        <MenuAdmin />
        <main className={styles.conteudo}>
            <Outlet />
        </main>
    </div>
);

export default AdminLayout;
