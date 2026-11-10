import { useState } from 'react';
import styles from './FormularioProduto.module.css';

const novoId = () => crypto.randomUUID();

/**
 * Usado em "Adicionar" (sem `inicial`) e no modal "Alterar" (com `inicial`).
 * inicial = { nome, preco, badge, desc, altPrincipal, especificacoes: string[],
 *             outrasImagens: [{ id, url, alt }] }
 * onSubmit(formData, valores)
 */
const FormularioProduto = ({ inicial, onSubmit, textoBotao = 'Guardar', onCancelar }) => {
    const edicao = Boolean(inicial);

    const [produto, setProduto] = useState({
        nome: inicial?.nome ?? '',
        preco: inicial?.preco ?? '',
        badge: inicial?.badge ?? '',
        desc: inicial?.desc ?? '',
        altPrincipal: inicial?.altPrincipal ?? '',
    });
    const [imgPrincipal, setImgPrincipal] = useState(null);

    const [especificacoes, setEspecificacoes] = useState(
        edicao
            ? (inicial.especificacoes ?? []).map((valor) => ({ id: novoId(), valor }))
            : [{ id: novoId(), valor: '' }]
    );

    const [outrasImagens, setOutrasImagens] = useState(
        edicao
            ? (inicial.outrasImagens ?? []).map((i) => ({
                id: novoId(), idExistente: i.id, url: i.url, alt: i.alt ?? '', file: null,
            }))
            : [{ id: novoId(), file: null, alt: '' }]
    );

    const handleCampo = (e) =>
        setProduto((p) => ({ ...p, [e.target.name]: e.target.value }));

    // Especificações
    const addSpec = () => setEspecificacoes((l) => [...l, { id: novoId(), valor: '' }]);
    const changeSpec = (id, valor) =>
        setEspecificacoes((l) => l.map((s) => (s.id === id ? { ...s, valor } : s)));
    const removeSpec = (id) => setEspecificacoes((l) => l.filter((s) => s.id !== id));

    // Outras imagens
    const addImg = () => setOutrasImagens((l) => [...l, { id: novoId(), file: null, alt: '' }]);
    const changeImg = (id, campo, valor) =>
        setOutrasImagens((l) => l.map((i) => (i.id === id ? { ...i, [campo]: valor } : i)));
    const removeImg = (id) => setOutrasImagens((l) => l.filter((i) => i.id !== id));

    const handleSubmit = (e) => {
        e.preventDefault();

        const specs = especificacoes.map((s) => s.valor.trim()).filter(Boolean);
        const mantidas = outrasImagens.filter((i) => i.idExistente);
        const novas = outrasImagens.filter((i) => !i.idExistente && i.file);

        const dados = new FormData();
        Object.entries(produto).forEach(([k, v]) => dados.append(k, v));
        if (imgPrincipal) dados.append('imgPrincipal', imgPrincipal);
        dados.append('especificacoes', JSON.stringify(specs));
        dados.append(
            'imagensMantidas',
            JSON.stringify(mantidas.map((i) => ({ id: i.idExistente, alt: i.alt })))
        );
        novas.forEach((i) => dados.append('outrasImagens', i.file));
        dados.append('outrasImagensAlt', JSON.stringify(novas.map((i) => i.alt)));

        onSubmit(dados, { ...produto, preco: Number(produto.preco), especificacoes: specs });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.gridMain}>
                <div className={styles.grupo}>
                    <label htmlFor="nome">Nome do produto</label>
                    <input id="nome" name="nome" value={produto.nome} onChange={handleCampo}
                        placeholder="Ex: Smartphone Pro" required />
                </div>

                <div className={styles.grupo}>
                    <label htmlFor="preco">Preço (MT)</label>
                    <input id="preco" name="preco" type="number" min="0" value={produto.preco}
                        onChange={handleCampo} placeholder="Ex: 25500" required />
                </div>

                <div className={styles.grupo}>
                    <label htmlFor="badge">Badge / Tag</label>
                    <input id="badge" name="badge" value={produto.badge} onChange={handleCampo}
                        placeholder="Ex: Novo, Promoção" />
                </div>

                <div className={`${styles.grupo} ${styles.cheio}`}>
                    <label htmlFor="desc">Descrição</label>
                    <textarea id="desc" name="desc" value={produto.desc} onChange={handleCampo}
                        placeholder="Pequena descrição do produto..." />
                </div>
            </div>

            <div className={styles.grupo}>
                <label htmlFor="imgPrincipal">Imagem principal</label>
                <input id="imgPrincipal" type="file" accept="image/*" required={!edicao}
                    onChange={(e) => setImgPrincipal(e.target.files[0] ?? null)} />
                {edicao && <p className={styles.dica}>Deixe vazio para manter a imagem atual.</p>}
                <input name="altPrincipal" value={produto.altPrincipal} onChange={handleCampo}
                    placeholder="Alt da imagem principal" aria-label="Alt da imagem principal" />
            </div>

            {/* Especificações */}
            <section className={styles.dinamica}>
                <div className={styles.cabecalho}>
                    <h3>Especificações</h3>
                    <button type="button" className={styles.btnAdd} onClick={addSpec}>
                        Adicionar especificação
                    </button>
                </div>

                {especificacoes.length === 0 && (
                    <p className={styles.vazio}>Sem especificações. Clique em “Adicionar especificação”.</p>
                )}

                {especificacoes.map((spec, idx) => (
                    <div key={spec.id} className={styles.linha}>
                        <input
                            value={spec.valor}
                            onChange={(e) => changeSpec(spec.id, e.target.value)}
                            placeholder={`Especificação ${idx + 1}`}
                            aria-label={`Especificação ${idx + 1}`}
                        />
                        <button type="button" className={styles.btnApagar}
                            onClick={() => removeSpec(spec.id)}
                            aria-label={`Remover especificação ${idx + 1}`}>
                            Remove
                        </button>
                    </div>
                ))}
            </section>

            {/* Outras imagens */}
            <section className={styles.dinamica}>
                <div className={styles.cabecalho}>
                    <h3>Outras imagens</h3>
                    <button type="button" className={styles.btnAdd} onClick={addImg}>
                        Adicionar imagem
                    </button>
                </div>

                {outrasImagens.length === 0 && (
                    <p className={styles.vazio}>Sem imagens extra. Clique em “Adicionar imagem”.</p>
                )}

                {outrasImagens.map((img, idx) => (
                    <div key={img.id} className={styles.linha}>
                        {img.url ? (
                            <img src={img.url} alt={img.alt || `Imagem ${idx + 1}`} className={styles.miniatura} />
                        ) : (
                            <input type="file" accept="image/*"
                                onChange={(e) => changeImg(img.id, 'file', e.target.files[0] ?? null)}
                                aria-label={`Ficheiro da imagem ${idx + 1}`} />
                        )}
                        <input
                            value={img.alt}
                            onChange={(e) => changeImg(img.id, 'alt', e.target.value)}
                            placeholder={`Alt da imagem ${idx + 1}`}
                            aria-label={`Alt da imagem ${idx + 1}`}
                        />
                        <button type="button" className={styles.btnApagar}
                            onClick={() => removeImg(img.id)}
                            aria-label={`Remover imagem ${idx + 1}`}>
                            Remove
                        </button>
                    </div>
                ))}
            </section>

            <div className={styles.rodape}>
                {onCancelar && (
                    <button type="button" className={styles.cancelar} onClick={onCancelar}>
                        Cancelar
                    </button>
                )}
                <button type="submit" className={styles.submit}>{textoBotao}</button>
            </div>
        </form>
    );
};

export default FormularioProduto;
