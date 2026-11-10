import { useState } from 'react';
import FormularioProduto from '../../components/admin/FormularioProduto.jsx';
import styles from './AdicionarProduto.module.css';

const AdicionarProduto = () => {
    // A key nova limpa o formulário depois de guardar
    const [versao, setVersao] = useState(0);

    const guardar = (dados) => {
        // TODO backend (Node.js / Supabase):
        // await fetch('/api/produtos', { method: 'POST', body: dados });
        console.log([...dados.entries()]);
        setVersao((v) => v + 1);
    };

    return (
        <section className={styles.cartao}>
            <h2>Adicionar produto</h2>
            <FormularioProduto key={versao} onSubmit={guardar} textoBotao="Adicionar produto" />
        </section>
    );
};

export default AdicionarProduto;
