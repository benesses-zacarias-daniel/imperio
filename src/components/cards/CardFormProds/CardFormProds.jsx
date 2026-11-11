import styles from './CardFormProds.module.css';

function Formulario() {
    return (
        <form className={styles.form}>
            <label>Nome do produto</label>
            <input placeholder="Ex: Smartphone Pro" />

            <label>Preço (MT)</label>
            <input type="number" placeholder="Ex: 25500" />

            <label>Badge / Tag</label>
            <input placeholder="Ex: Novo, Promoção" />

            <label>Descrição</label>
            <textarea placeholder="Pequena descrição do produto..." />

            <label>Imagem principal</label>
            <input type="file" accept="image/*" />
            <input placeholder="Alt da imagem principal" />

            {/* ----- ESPECIFICAÇÕES ----- */}
            <div className={styles.caixa}>
                <h3>Especificações</h3>

                {/* Esta linha é repetida para cada especificação */}
                <div className={styles.linha}>
                    <input placeholder="Ex: 128 GB" />
                    <button type="button" className={styles.apagar}>✕</button>
                </div>

                <button type="button" className={styles.adicionar}>
                    + Adicionar especificação
                </button>
            </div>

            {/* ----- OUTRAS IMAGENS ----- */}
            <div className={styles.caixa}>
                <h3>Outras imagens</h3>

                {/* Esta linha é repetida para cada imagem */}
                <div className={styles.linha}>
                    <input type="file" accept="image/*" />
                    <input placeholder="Alt da imagem" />
                    <button type="button" className={styles.apagar}>✕</button>
                </div>

                <button type="button" className={styles.adicionar}>
                    + Adicionar imagem
                </button>
            </div>

            <button type="submit" className={styles.enviar}>Guardar</button>
        </form>
    );
}

export default Formulario;
