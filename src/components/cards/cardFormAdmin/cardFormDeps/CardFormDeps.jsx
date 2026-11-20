import style from '../CardFormAdmin.module.css';
import { useState } from 'react';
import Img from '../../../img/Img';
import Button from '../../../button/Button';
//Ícones
import Guardar from "../../../../assets/icons/guardar.svg";
import Publicar from "../../../../assets/icons/publicar.svg";
import ContainerDiv from '../../../Common/container/ContainerDiv';
import ContainerForm from '../../../Common/containerForm/ContainerForm';
import InputNormal from '../../../form/inputNomal/InputNormal';
import Textarea from '../../../form/textarea/Textarea';
import InputRadio from '../../../form/inputRadio/InputRadio';

const CardFormDepoimentos = ({ depoimentoCliente, onClickShow = () => { }, onClickAtualizacao = () => { }, tipo = false }) => {

    const [nome, setNome] = useState(depoimentoCliente?.nome ? depoimentoCliente?.nome : "");
    const [iniciais, setIniciais] = useState(depoimentoCliente?.iniciais ? depoimentoCliente?.iniciais : "");
    const [visivel, setVisivel] = useState(depoimentoCliente?.visivel ? depoimentoCliente?.visivel : false);
    const [depoimento, setDepoimento] = useState(depoimentoCliente?.depoimento ? depoimentoCliente?.depoimento : "");
    const [contaVisivel, setContaVisivel] = useState(() => {
        const depsTestes = localStorage.getItem("depoimentosBancos");
        const dadosProds = depsTestes ? JSON.parse(depsTestes) : [];
        const visivel = dadosProds.filter((prods) => prods.visivel === true);

        return visivel.length;
    });
    //Funções
    const onChangeDepoimento = (evt) => {
        evt.preventDefault();
        console.log(evt);
        console.log(evt.target);
        setDepoimento(evt.target.value);
    };

    const onChangeNome = (evt) => {
        evt.preventDefault();
        console.log(evt);
        setNome(evt.target.value)
    };

    const onChangeIniciais = (evt) => {
        evt.preventDefault();
        console.log(evt);
        setIniciais(evt.target.value)
    };

    const onChangeVisivel = (val) => {
        setVisivel(val)
    };

    const limparCampos = () => {
        setNome("");
        setIniciais("")
        setDepoimento("");
    };

    const onClickGuardarDepoimento = (evt) => {
        evt.preventDefault();
        const id = Math.floor(Math.random() * 10000000000000)
        const objDados = {
            "id": id,
            "nome": nome,
            "iniciais": iniciais,
            "visivel": visivel,
            "depoimento": depoimento
        };

        console.log(objDados);
        console.log(objDados);
        const depTestes = localStorage.getItem("depoimentosBancos");
        const dep = depTestes ? JSON.parse(depTestes) : [];
        dep.push(objDados);

        localStorage.setItem("depoimentosBancos", JSON.stringify(dep));
        setContaVisivel(dep.length);
        limparCampos();
        onClickShow();
    };

    const onClickSalvarAlteracoes = (idDep, evt) => {
        evt.preventDefault();
        const novosDados = {
            "id": idDep,
            "nome": nome,
            "iniciais": iniciais,
            "visivel": visivel,
            "depoimento": depoimento
        };

        const depTestes = localStorage.getItem("depoimentosBancos");

        const dep = depTestes ? JSON.parse(depTestes) : [];
        const dadosNovos = dep.map((deps) => {

            if (deps.id === idDep) {
                return novosDados;
            }

            return deps;
        })

        localStorage.setItem("depoimentosBancos", JSON.stringify(dadosNovos));
        setContaVisivel(dep.length);
        limparCampos();
        onClickAtualizacao();
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
            <ContainerForm className={style.form_prods} onSubmit={(evt) => { tipo ? onClickSalvarAlteracoes(depoimentoCliente.id, evt) : onClickGuardarDepoimento(evt) }}>
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
                        <Button className={style.btn_actualizar} type={"submit"} onClick={() => { }} >
                            <>
                                <p>Salvar Alterações</p>
                                <Img src={Guardar} alt={"Ícone de salvar arquivo"} className={style.icone_input_tell} />
                            </>
                        </Button>
                    ) : (
                        <Button className={style.btn_guardar_dep} type={"submit"} onClick={() => { }} >
                            <>
                                <p>Guardar Depoimento</p>
                                <Img src={Publicar} alt={"Ícone de upload"} className={style.icone_input_tell} />
                            </>
                        </Button>
                    )}
                </div>
            </ContainerForm >
        </ContainerDiv>
    );
}

export default CardFormDepoimentos;
