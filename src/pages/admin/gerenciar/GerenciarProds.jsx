import { useState } from 'react';
import CardActProds from '../../../components/cards/CardActProds/CardActProds';
import CardFormProds from '../../../components/cards/CardFormProds/CardFormProds';
import styles from './GerenciarProds.module.css';

const GerenciarProds = () => {
    // true = modal aberto | false = modal fechado
    const [modalAberto, setModalAberto] = useState(false);

    return (
        <>
            <section className={styles.area}>
                <h2>Gerir produtos</h2>

                {/* Este cartão é repetido para cada produto */}
                <article className={styles.card}>
                    <div className={styles.img}>Img</div>

                    <div className={styles.info}>
                        <h3>Telemóvel Clássico</h3>
                        <p>1800 MT</p>
                    </div>

                    <div className={styles.acoes}>
                        <button className={styles.editar} onClick={() => setModalAberto(true)}>
                            Alterar
                        </button>
                        <button className={styles.remover}>Remover</button>
                    </div>
                </article>

                {/* Modal de alterar: abre ao clicar em "Alterar" */}
                <CardActProds
                    titulo="Alterar produto"
                    aberto={modalAberto}
                    onFechar={() => setModalAberto(false)}
                >
                    <CardFormProds />
                </CardActProds>
            </section>
        </>
    );
}

export default GerenciarProds;
