import ContainerDiv from "../../components/Common/container/ContainerDiv";
import style from "./Contacto.module.css";
//Ícones Categorias
import Telefone from "../../assets/icons/chamada.svg";
import Contactar from "../../assets/icons/contactarL.svg";
import WhatsApp from "../../assets/icons/whatsapp.svg";
import Periodo from "../../assets/icons/periodo.svg";
import Informacoes from "../../components/contacto/infos/Informacoes";
import Mensagens from "../../components/contacto/mens/Mensagens";

const Contacto = () => {
    const InformacoesDirectas = [{
        "titulo": "Informações Directas",
        "infosDir": [{
            "id": 1,
            "src": Telefone,
            "alt": "Ícone de telefone",
            "titulo": "Telefone",
            "info": "+258 87 000 6914"
        }, {
            "id": 2,
            "src": WhatsApp,
            "alt": "Ícone de whatsapp",
            "titulo": "WhatsApp",
            "info": "+258 87 000 6914"
        }, {
            "id": 3,
            "src": Contactar,
            "alt": "Ícone de email",
            "titulo": "E-mail",
            "info": "imperialelctronicocontacto@gmail.com"
        }, {
            "id": 4,
            "src": Periodo,
            "alt": "Ícone de calendario",
            "titulo": "Horário de Funcionamento",
            "info": "imperialelctronicocontacto@gmail.com"
        }]
    }
    ];

    const Mens = [{
        "titulo": "Envie uma Mensagem",
        "info": "Entraremos em contacto consigo num prazo máximo de 24 horas úteis.",
        "texto_btn": "Enviar Mensagem",
        "src": "#",
        "alt": "Ícone de enviar",
        "label": "A sua Mensagem",
        "type": "text",
        "placeholder": "Como podemos ajudar?",
        "inputs": [{
            "id": 1,
            "label": "Nome Completo",
            "type": "text",
            "placeholder": "Ex: Benesses Zacarias Daniel"
        }, {
            "id": 2,
            "label": "Telefone/WhatsApp",
            "type": "phone",
            "placeholder": "+258 84 000 6914"
        }, {
            "id": 3,
            "label": "E-mail",
            "type": "email",
            "placeholder": "exemplo@gmail.com"
        }]
    }
    ];

    return (
        <ContainerDiv className={style.container_contacto}>
            <div className={style.area_hero_contacto}>
                <div className={style.foto_contacto_hero}>
                    Entre em Contacto
                </div>
                <div className={style.area_titulo_hero_con}>
                    <h4>Estamos aqui para elevar a sua experiencia tecnologica</h4>
                </div>
                <div className={style.area_texto_con}>
                    <p>
                        A nossa equipa de especialistas está pronta para ajudar om dúvidas sobre produtos premium , parcerias comerciais ou suporte técnico exclusivo.
                    </p>
                </div>
            </div>
            <div className={style.container_conteudo_contacto}>
                <Informacoes InformacoesDirectas={InformacoesDirectas[0]} />
                <Mensagens Mensagens={Mens[0]} />
            </div>
        </ContainerDiv>)
}



export default Contacto;