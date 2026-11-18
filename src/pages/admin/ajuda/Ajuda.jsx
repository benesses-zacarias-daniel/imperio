import style from './Ajuda.module.css';
import ContainerDiv from '../../../components/Common/container/ContainerDiv';

const Ajuda = () => {

    const dicasSitema = [
        {
            id: 1,
            titulo: "Dica 1: Área Adicionar Produtos",
            descricao: "Como preencher cada campo para publicar um novo equipamento na loja:",
            itens: [
                {
                    nome: "Nome do produto",
                    texto: "Título principal que aparece nos cards da vitrine e no topo da página de detalhes."
                },
                {
                    nome: "Preço",
                    texto: "Valor de venda exibido ao cliente em Meticais (MT)."
                },
                {
                    nome: "Categoria",
                    texto: "Define em qual filtro da loja o produto será agrupado."
                },
                {
                    nome: "Badge (Etiqueta)",
                    texto: "Selo destaque no card (ex: 'Novo', 'Destaque', 'Clássico')."
                },
                {
                    nome: "Primeiras (Destaque inicial)",
                    texto: "Define se o produto aparece logo nas primeiras posições da página inicial. Por padrão é possível escolher no máximo 3 produtos de destaque por vez (Caso necessário mostrar mais produtos contacte o Desenvolvedor)."
                },
                {
                    nome: "Descrição do Produto",
                    texto: "Pequena descriçã do produto em poucas palavras. Essa descrição aparece o cartão do produto na loja e nos detalhes do produto."
                },
                {
                    nome: "Imagem Principal e Alt Principal",
                    texto: "Foto de capa exibida no catálogo. O texto alternativo (Alt) descreve a imagem para acessibilidade e buscas."
                },
                {
                    nome: "Especificações",
                    texto: "Características técnicas detalhadas (ex: memória, voltagem, dimensões) mostradas na página do produto."
                },
                {
                    nome: "Outras imagens (Img e Alt)",
                    texto: "Galeria extra de fotos para o cliente ver o produto de vários ângulos."
                },
                {
                    nome: "Botão Publicar / Salvar Alterações",
                    texto: "Valida os campos e coloca o produto imediatamente visível na loja."
                }
            ]
        },
        {
            id: 2,
            titulo: "Dica 2: Área Gerenciar Produtos",
            descricao: "Como organizar, atualizar ou remover produtos já cadastrados:",
            itens: [
                {
                    nome: "Filtro por categoria",
                    texto: "Permite isolar rapidamente produtos de um tipo específico sem precisar rolar toda a lista."
                },
                {
                    nome: "Estrela",
                    texto: "Estrela amarela indica que o produto está em destaque na página inicial; estrela cinzenta indica exibição normal."
                },
                {
                    nome: "Botão Editar & Atualizar",
                    texto: "Abre o formulário já preenchido com os dados atuais do produto para alterar preço, fotos ou textos e salvar."
                },
                {
                    nome: "Botão Remover",
                    texto: "Abre uma janela de confirmação antes de apagar o produto definitivamente do sistema."
                }
            ]
        },
        {
            id: 3,
            titulo: "Dica 3: Área Depoimentos",
            descricao: "Como cadastrar e moderar as avaliações dos clientes:",
            itens: [
                {
                    nome: "Nome do cliente e Iniciais",
                    texto: "Identificação exibida no rodapé do depoimento; as iniciais formam o avatar circular azul."
                },
                {
                    nome: "Mostrar depoimento (Sim / Não)",
                    texto: "Controla se o comentário fica público na página inicial ou guardado apenas no painel. Por padrão é possível escolher no máximo 3 depoimentos que serão exibidos por vez (Caso necessário mostrar mais depoimentos contacte o Desenvolvedor)."
                },
                {
                    nome: "Depoimento & Botão Guardar Dep",
                    texto: "Texto da avaliação do cliente. Ao clicar em 'Guardar Dep', o registo fica salvo no sistema."
                },
                {
                    nome: "Gerenciar Dep (Editar, Estrela e Remover)",
                    texto: "Na lista de depoimentos, a estrela amarela mostra quais estão visíveis no site (cinzenta = oculto). Use Editar para corrigir o texto ou Remover para excluir."
                }
            ]
        },
        {
            id: 4,
            titulo: "Dica 4: Que este Sistema Seja Uma Benção",
            descricao: "Este sistema foi feito com o objectivo de te ser muito útil no teu negócio. Faça bom uso:",
            itens: [
                {
                    nome: "Desenvolvido por Benesses Zacarias Daniel",
                    texto: "Aspirante a Programador (Desenvolvedor Web e Mobile)"
                }]
        }
    ];

    return (
        <ContainerDiv className={style.container_ajuda}>
            <span className={style.titulo_area}>Dicas de Como o Sistema Imperial Funciona</span>
            <div className={style.lista_dicas}>
                {dicasSitema.map((dica) => {
                    return (
                        <div key={dica.id} className={style.card_dica}>
                            <span className={style.titulo_dica}>{dica.titulo}</span>
                            <div className={style.container_texto_dica}>
                                <p className={style.min_info}>{dica.descricao}</p>
                                {dica.itens.map((item, index) => (
                                    <div key={index} className={style.desc_dica}>
                                        <div className={style.nome_dica}>
                                            <div className={style.ponto}></div>
                                            {item.nome}
                                        </div> {item.texto}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </ContainerDiv>
    );
}

export default Ajuda;
