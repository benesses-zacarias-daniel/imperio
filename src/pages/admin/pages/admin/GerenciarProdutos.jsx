import { useState, useCallback } from 'react';
import Modal from '../../components/admin/Modal.jsx';
import FormularioProduto from '../../components/admin/FormularioProduto.jsx';
import styles from './GerenciarProdutos.module.css';

// Dados de exemplo — troque por fetch ao seu backend
const exemplo = [
    {
        id: 1, nome: 'Smartphone Pro', preco: 25500, badge: 'Novo',
        desc: 'Ecrã grande e câmara de alta resolução.',
        altPrincipal: 'Smartphone Pro',
        especificacoes: ['128 GB', '8 GB RAM'],
        outrasImagens: [],
    },
    {
        id: 15, nome: 'Telemóvel Clássico', preco: 1800, badge: '',
        desc: 'Telemóvel de design clássico, durável e com bateria que dura dias.',
        altPrincipal: 'Telemóvel Clássico',
        especificacoes: ['Bateria de longa duração'],
        outrasImagens: [],
    },
];

const GerenciarProdutos = () => {
    const [produtos, setProdutos] = useState(exemplo);
    const [editando, setEditando] = useState(null);   // produto aberto no modal de edição
    const [removendo, setRemovendo] = useState(null); // produto a confirmar remoção

    const fecharEdicao = useCallback(() => setEditando(null), []);
    const fecharRemocao = useCallback(() => setRemovendo(null), []);

    const guardarEdicao = (dados, valores) => {
        // TODO backend: await fetch(`/api/produtos/${editando.id}`, { method: 'PUT', body: dados });
        setProdutos((l) => l.map((p) => (p.id === editando.id ? { ...p, ...valores } : p)));
        setEditando(null);
    };

    const confirmarRemocao = () => {
        // TODO backend: await fetch(`/api/produtos/${removendo.id}`, { method: 'DELETE' });
        setProdutos((l) => l.filter((p) => p.id !== removendo.id));
        setRemovendo(null);
    };

    return (
        <section className={styles.area}>
            <h2>Gerir produtos</h2>

            {produtos.length === 0 && (
                <p className={styles.vazio}>
                    Nenhum produto. Use “Adicionar produto” no menu para criar o primeiro.
                </p>
            )}

            {produtos.map((p) => (
                <article key={p.id} className={styles.card}>
                    <div className={styles.img} aria-hidden="true">Img</div>

                    <div className={styles.info}>
                        <h3>{p.nome}</h3>
                        <p>{Number(p.preco).toLocaleString('pt-MZ')} MT</p>
                    </div>

                    <div className={styles.acoes}>
                        <button type="button" className={styles.editar} onClick={() => setEditando(p)}>
                            Alterar
                        </button>
                        <button type="button" className={styles.remover} onClick={() => setRemovendo(p)}>
                            Remover
                        </button>
                    </div>
                </article>
            ))}

            {editando && (
                <Modal titulo={`Alterar: ${editando.nome}`} onFechar={fecharEdicao}>
                    <FormularioProduto
                        inicial={editando}
                        onSubmit={guardarEdicao}
                        onCancelar={fecharEdicao}
                        textoBotao="Guardar alterações"
                    />
                </Modal>
            )}

            {removendo && (
                <Modal titulo="Remover produto" onFechar={fecharRemocao} largura={440}>
                    <p className={styles.confirmaTexto}>
                        Tem a certeza que quer remover <strong>{removendo.nome}</strong>?
                        Esta ação não pode ser desfeita.
                    </p>
                    <div className={styles.confirmaBotoes}>
                        <button type="button" className={styles.cancelar} onClick={fecharRemocao}>
                            Cancelar
                        </button>
                        <button type="button" className={styles.confirmar} onClick={confirmarRemocao}>
                            Remover produto
                        </button>
                    </div>
                </Modal>
            )}
        </section>
    );
};

export default GerenciarProdutos;
