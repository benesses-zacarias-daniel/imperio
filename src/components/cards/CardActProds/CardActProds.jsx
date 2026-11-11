import styles from './CardActProds.module.css';

function CardActProds({ showModal, children, onClickControlModal }) {
    if (!showModal) return null;

    return (
        <div className={styles.fundo}>
            <div className={styles.caixa}>
                <div className={styles.topo}>
                    <h2>Actualizar Produto</h2>
                    <button type="button" onClick={() => { onClickControlModal(false) }}>✕</button>
                </div>

                {/* Tudo o que colocar dentro de <Modal> aparece aqui */}
                <div className={styles.corpo}>{children}</div>
            </div>
        </div>
    );
}

export default CardActProds;
