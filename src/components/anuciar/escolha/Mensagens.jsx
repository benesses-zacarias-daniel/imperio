import Button from "../../button/Button";
import ContainerDiv from "../../Common/container/ContainerDiv";
import Img from "../../img/Img";
import style from "./Mensagens.module.css";

const Mensagens = ({ Mensagens }) => {

    console.log(Mensagens.inputs);

    return (
        <ContainerDiv className={style.container_mens}>
            <form method="post">
                <div className={style.texto_info}>
                    <div className={style.titulo_mens}>
                        {Mensagens.titulo}
                    </div>
                    <div className={style.info}>
                        {Mensagens.info}
                    </div>
                    <div className={style.area_preencher}>
                        {Mensagens.inputs.map((Inputs) => {
                            return (
                                <div key={Inputs.id} className={style.area_inputs}>
                                    <div className={style.label_input}>
                                        {Inputs.label}
                                    </div>
                                    <div className={style.input}>
                                        <input type={Inputs.type} placeholder={Inputs.placeholder} className={style.campo_input} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={style.mensagem_preencher}>
                        <div className={style.label_input}>
                            {Mensagens.label}
                        </div>
                        <div className={style.campo_input_mens}>
                            <input type={Mensagens.type} placeholder={Mensagens.placeholder} className={style.campo_mens} />
                        </div>
                    </div>
                    <div className={style.area_enviar_mens}>
                        <Button className={style.btn_mens}>
                            <p>{Mensagens.texto_btn}</p>
                            <Img src={Mensagens.src} alt={Mensagens.alt} className={style.icone_mens} />
                        </Button>
                    </div>
                </div>
            </form>
        </ContainerDiv>
    )
}

export default Mensagens;