import styles from './CardActProds.module.css';

function Modal({ titulo, aberto, onFechar, children }) {
    if (!aberto) return null;

    return (
        <div className={styles.fundo}>
            <div className={styles.caixa}>
                <div className={styles.topo}>
                    <h2>{titulo}</h2>
                    <button type="button" onClick={onFechar}>✕</button>
                </div>

                {/* Tudo o que colocar dentro de <Modal> aparece aqui */}
                <div className={styles.corpo}>{children}</div>
            </div>
        </div>
    );
}

export default Modal;
