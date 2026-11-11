import styles from './AdicionarProds.module.css';
import CardFormProds from '../../../components/cards/CardFormProds/CardFormProds';

const AdicionarProds = () => {
    return (
        <>
            <section className={styles.cartao}>
                <h2>Adicionar produto</h2>
                <CardFormProds />
            </section>
        </>
    );
}

export default AdicionarProds;
