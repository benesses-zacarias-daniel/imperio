import style from "./CardDetMens.module.css";
import Button from "../../button/Button";
import ContainerDiv from "../../Common/container/ContainerDiv";

const CardDetMens = ({ showDetMens, mensagem, onClickFecar = () => { } }) => {
    if (!showDetMens) return;
    console.log(mensagem);
    const link = `https://wa.me/${mensagem.telefone}?Olá Sr. (a) ${mensagem.nome}, tudo bem? Recebi a sua mensagem no Site da Imperial Electrónicos. Podemos falar ?`;

    return (
        <ContainerDiv className={style.overlay} onClick={() => { onClickFecar() }}>
            <div className={style.modal} onClick={(e) => e.stopPropagation()}>
                <div className={style.header}>
                    <h3>Detalhes da Mensagem</h3>
                    {/* <span className={style.data}>{mensagem.dataEnvio}</span> */}
                </div>

                <div className={style.infoGrupo}>
                    <label>Nome Completo</label>
                    <p>{mensagem.nome}</p>
                </div>

                <div className={style.infoGrupo}>
                    <label>Telefone / WhatsApp</label>
                    <p>{mensagem.telefone}</p>
                </div>

                <div className={style.infoGrupo}>
                    <label>E-mail</label>
                    <p>{mensagem.email || "Não informado"}</p>
                </div>

                <div className={style.infoGrupo}>
                    <label>Mensagem</label>
                    <div className={style.caixaTexto}>
                        {mensagem.mens}
                    </div>
                </div>
                <div className={style.area_accao_mens}>

                    <Button type={"button"} className={style.btn_fechar} onClick={() => { onClickFecar() }} children={"Fechar"} />
                    <Button className={style.btn_contactar} onClick={() => { }} children={
                        <a href={link} className={style.link_wh}>Conversar</a>
                    } />
                </div>
            </div>
        </ContainerDiv>
    );
}



export default CardDetMens;