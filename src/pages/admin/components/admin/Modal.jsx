import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

// Uso: {aberto && <Modal titulo="..." onFechar={() => setAberto(false)}>...</Modal>}
const Modal = ({ titulo, onFechar, children, largura = 640 }) => {
    const caixa = useRef(null);

    useEffect(() => {
        const aoTecla = (e) => { if (e.key === 'Escape') onFechar(); };
        document.addEventListener('keydown', aoTecla);
        const overflowAnterior = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        caixa.current?.focus();

        return () => {
            document.removeEventListener('keydown', aoTecla);
            document.body.style.overflow = overflowAnterior;
        };
    }, [onFechar]);

    return createPortal(
        <div
            className={styles.fundo}
            onMouseDown={(e) => { if (e.target === e.currentTarget) onFechar(); }}
        >
            <div
                ref={caixa}
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                aria-label={titulo}
                className={styles.caixa}
                style={{ maxWidth: largura }}
            >
                <header className={styles.topo}>
                    <h2>{titulo}</h2>
                    <button type="button" className={styles.fechar} onClick={onFechar} aria-label="Fechar">
                        X
                    </button>
                </header>
                <div className={styles.corpo}>{children}</div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
