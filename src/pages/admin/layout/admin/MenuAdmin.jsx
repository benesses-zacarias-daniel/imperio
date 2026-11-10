import { NavLink } from 'react-router-dom';
import styles from './MenuAdmin.module.css';

const itens = [
    { to: '/admin/adicionar', label: 'Adicionar produto' },
    { to: '/admin/gerenciar', label: 'Gerir produtos' },
];

const classe = ({ isActive }) =>
    isActive ? `${styles.item} ${styles.ativo}` : styles.item;

const MenuAdmin = () => (
    <aside className={styles.menu}>
        <div className={styles.marca}>
            <strong>Imperial Admin</strong>
            <small>Painel de administração</small>
        </div>

        <nav className={styles.nav} aria-label="Menu do administrador">
            {itens.map(({ to, label }) => (
                <NavLink key={to} to={to} className={classe}>
                    <span>{label}</span>
                </NavLink>
            ))}
        </nav>

        <NavLink to="/" className={`${styles.item} ${styles.voltar}`}>
            <span>Voltar ao site</span>
        </NavLink>
    </aside>
);

export default MenuAdmin;
