import CardTermos from "../../components/cards/CardTermos/CardTermos";
import ContainerDiv from "../../components/Common/container/ContainerDiv";
import style from "./Termos.module.css";

const Termos = () => {
    const TermosCondicoesDados = [
        {
            "id": 1,
            "titulo": "1. Introdução",
            "src": "",
            "alt": "",
            "desc": ["Os presentes Termos e Condições regem o acesso e utilização do website Imperial Electrónicos. Ao navegar ou realizar compras, o utilizador estabelece o vinculo contractual com a nossa entidade, aceitando sem reservas todas as disposições aqui constantes.", "Reservamo-nos o direito de actualizar estes termod perioficamente para refletir alterações legislativasou melhorias na experiência de luxo que proporcionamos."],
            "proibicoes": []
        },
        {
            "id": 2,
            "titulo": "2. Uso da Plataforma",
            "src": "",
            "alt": "",
            "desc": ["A plataforma destina-se ao comércio de componentes e dispositivos electronicos de alta performance. É estritamente proibido:"],
            "proibicoes": ["Utilizar processos automatizados (bots) para raspagem de preços ou stock", "Fornecer informações de identidade falsas ou métodos de pagamento de terceiros sem autorização.", "Tentar comprometer a infraestrutura de segurança do ecossistema Imperial."]
        }, {
            "id": 3,
            "titulo": "3. Compras e Pagamento",
            "src": "",
            "alt": "",
            "desc": ["Todos os preços exibidos incluem os impostos legais em vigor, salvo indicação em contrário. A Imperial Electrónicos garante a segurança absoluta das transações através de encriptação de nível militar.", "A confirmação de encomenda está sujeita à verificação de stock e aprovação da entidade financeira. Em caso de discrepância de preço por erro tecnológico óbvio, a Imperial reserva-se o direito de cancelar a transação, noticando o cliente de imediato."],
            "proibicoes": []
        }, {
            "id": 4,
            "titulo": "4. Entregas e Logística",
            "src": "",
            "alt": "",
            "desc": ["Utilizamos apenas parceiros logisticos premium para garantir que o hardware chegue em condições imaculadas. Os prazos de entrega são estimativas e podem variar conforme a exclusividade do producto solicitado.", "O risco de perda ou dano tranfere-se para cliente no momento da entrega física, devendo o mesmo inspecionar a embalagem no acto do recebimento."],
            "proibicoes": []
        }, {
            "id": 5,
            "titulo": "5. Privacidade de Dados",
            "src": "",
            "alt": "",
            "desc": ["A sua privacidade é um pilar da nossa marca. Os dados recolhidos servem estritamente para o processamento de encomendas e personalização da sua experiência de compra. Nunca vendemos ou partilhamos informações sensíveis com entidades fora do fluxo operacional essencial.", "Consulte a nossa Política de Cookies para entender como otimizamos a sua navegação técnica."],
            "proibicoes": []
        }, {
            "id": 6,
            "titulo": "6. Responsabilidades",
            "src": "",
            "alt": "",
            "desc": ["A Imperial Elctrónicos não se responsabiliza por danos indirectos decorrentes da má utilização dos produtos vendidos. A garantia cobre exclusivamente defeitos de fabrico conforme estipulado pela lei e pela marca fabricante."],
            "proibicoes": []
        }
    ];
    return (
        <ContainerDiv className={style.container_termos} >
            <div className={style.foco_termos}>
                <h3 className={style.titulo_terms}>Contrato de Serviço</h3>
                <p>Bem-vindo à Imperial Electrônicos. Ao aceder ao nosso ecossitema de hardware exclusivo, concorda em cumprir estes termos desenhados para garantir a excelência e integridade em cada transação.</p>
            </div>
            <CardTermos dadosTermos={TermosCondicoesDados} />
        </ContainerDiv>
    )
}



export default Termos;