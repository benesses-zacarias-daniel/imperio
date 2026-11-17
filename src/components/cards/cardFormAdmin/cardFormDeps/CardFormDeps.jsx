import style from '../CardFormAdmin.module.css';
import { useState } from 'react';
import Img from '../../../img/Img';
import Button from '../../../button/Button';
//Ícones
import Guardar from "../../../../assets/icons/guardar.svg";
import Publicar from "../../../../assets/icons/publicar.svg";
import ContainerDiv from '../../../Common/container/ContainerDiv';
import ContainerForm from '../../../Common/containerForms/ContainerForms';
import InputNormal from '../../../form/inputNomal/InputNormal';
import Textarea from '../../../form/textarea/Textarea';
import InputRadio from '../../../form/inputRadio/InputRadio';

const CardFormDepoimentos = ({ depoimentoCliente, contaVisivel = 0, tipo = false }) => {


    const [nome, setNome] = useState(depoimentoCliente?.nome ? depoimentoCliente?.nome : "");
    const [iniciais, setBadge] = useState(depoimentoCliente?.iniciais ? depoimentoCliente?.iniciais : "");
    const [visivel, setVisivel] = useState(depoimentoCliente?.visivel ? depoimentoCliente?.visivel : false);
    const [depoimento, setDepoimento] = useState(depoimentoCliente?.depoimento ? depoimentoCliente?.depoimento : "");
    //Funções
    const onChangeDepoimento = (evt) => {
        console.log(evt);
        console.log(evt.target);
        setDepoimento(evt.target.value);
    };

    const onChangeNome = (evt) => {
        console.log(evt);
        setNome(evt.target.value)
    };


    const onChangeIniciais = (evt) => {
        console.log(evt);
        setBadge(evt.target.value)
    };

    const onChangeVisivel = (val) => {
        setVisivel(val)
    };

    const onClickGuardarDepoimento = () => {
        const objDados = {
            nome: nome,
            iniciais: iniciais,
            visivel: visivel,
            depoimento: depoimento
        };

        console.log(objDados);
        return;
    };

    const onClickSalvarAlteracoes = (idProd) => {
        const novosDados = {
            id: idProd,
            nome: nome,
            iniciais: iniciais,
            visivel: visivel,
            depoimento: depoimento
        }
        console.log(novosDados);

        // const dados = [...JSON.pase(localStorage.getItem("prodsGeren")), novosDados];
        // localStorage.setItem("prodsGeren", JSON.stringify(dados));
    };
    //Funções de Controle dos Inputs
    const onInvalid = (evt, msg) => {
        evt.target.setCustomValidity(msg);
    };

    const onInput = (evt) => {
        evt.target.setCustomValidity("");
    };

    return (
        <ContainerDiv className={style.container_prods}>
            {/* <ContainerForm className={style.form_prods} onSubmit={() => { tipo ? () => { } : onClickSalvarAlteracoes(depoimentoCliente.id) }}> */}
            <div className={style.container_camp}>
                <div className={style.area_input_anun}>
                    <div className={style.area_label}>
                        <label htmlFor="nome">
                            Nome
                        </label>
                    </div>
                    <InputNormal type={"text"} id={"nome"} placeholder={"Ex: Benesses Zacarias Daniel"} className={style.input_anun} value={nome} onChange={(evt) => { onChangeNome(evt); }} minLength={null} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
                        if (evt.target.validity.valueMissing) {
                            onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                        }
                    }} />
                </div>
                <div className={style.area_input_anun}>
                    <div className={style.area_label}>
                        <label htmlFor="iniciais">Iniciais</label>
                    </div>
                    <InputNormal type={"text"} id={"iniciais"} placeholder={"Ex: BZD"} className={style.input_anun} value={iniciais} onChange={(evt) => { onChangeIniciais(evt); }} minLength={2} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
                        if (evt.target.validity.valueMissing) {
                            onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                        }
                    }} />
                </div>
                {
                    (contaVisivel === 3 && depoimentoCliente?.visivel !== true) ? (null) : (
                        <div className={style.area_input_anun_tP}>
                            <div className={style.area_label}>
                                <label>Mostrar Depoimento</label>
                            </div>
                            <div className={style.area_radio}>
                                <InputRadio type={"radio"} name={"destaque"} id={"sim"} checked={visivel === true} onChange={() => { onChangeVisivel(true); }} />
                                <div className={style.area_label_rad}>
                                    <label htmlFor="sim">Sim</label>
                                </div>
                            </div>
                            <div className={style.area_radio}>
                                <InputRadio type={"radio"} name={"destaque"} id={"nao"} checked={visivel === false} onChange={() => { onChangeVisivel(false); }} />
                                <div className={style.area_label_rad}>
                                    <label htmlFor="nao">Não</label>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className={style.area_input_anun}>
                    <div className={style.area_label}>
                        <label htmlFor="dep">
                            Depoimento
                        </label>
                    </div>
                    <Textarea id="dep" className={style.campo_desc_prod} placeholder={"Pequeno depoimento do cliente..."} value={depoimento} onChange={(evt) => { onChangeDepoimento(evt); }} />
                </div>
            </div>
            <div className={style.area_btn_acao_form}>
                {tipo ? (
                    <Button className={style.btn_actualizar} onClick={() => {
                        onClickSalvarAlteracoes(depoimentoCliente.id);
                    }} >
                        <>
                            <p>Salvar Alterações</p>
                            <Img src={Guardar} alt={"Ícone de salvar arquivo"} className={style.icone_input_tell} />
                        </>
                    </Button>
                ) : (
                    <Button className={style.btn_guardar_dep} type={"submit"} onClick={() => {
                        onClickGuardarDepoimento();
                    }} >
                        <>
                            <p>Guardar Depoimento</p>
                            <Img src={Publicar} alt={"Ícone de upload"} className={style.icone_input_tell} />
                        </>
                    </Button>
                )}
            </div>
            {/* </ContainerForm > */}
        </ContainerDiv>
    );
}

export default CardFormDepoimentos;
