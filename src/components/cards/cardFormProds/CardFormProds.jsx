import style from './CardFormProds.module.css';
// import '../../form/Input.module.css';
import { useState } from 'react';
import Img from '../../img/Img';
import Button from '../../button/Button';
//Ícones
import Upload from "../../../assets/icons/enviar.svg";
import Mais from "../../../assets/icons/maisB.svg";
import Remover from "../../../assets/icons/delete.svg";
import Guardar from "../../../assets/icons/guardar.svg";
import Publicar from "../../../assets/icons/publicar.svg";
import ContainerDiv from '../../Common/container/ContainerDiv';
import criarURLsImgs from '../../../utils/criarURLsImg';
import ContainerForm from '../../Common/containerForms/ContainerForms';
import InputNormal from '../../form/inputNomal/InputNormal';
import Textarea from '../../form/textarea/Textarea';
import InputRadio from '../../form/inputRadio/InputRadio';
import InputFile from '../../form/inputFile/InputFile';

const CardFormProds = ({ dadosAct, contaPrimeiros = 0, tipo = false }) => {
    const Opcoes = [
        {
            "id": 1,
            "nome": "categorias",
            "label": "Selecione a Categoria : ",
            "opcoes": [
                {
                    "id": 1,
                    "cat": "SmartPhones",
                    "value": "smartphone"
                }, {
                    "id": 2,
                    "cat": "TVs",
                    "value": "tv"
                }, {
                    "id": 3,
                    "cat": "Electrodomésticos",
                    "value": "electro"
                }, {
                    "id": 4,
                    "cat": "PCs",
                    "value": "pc"
                }]
        }
    ];

    const [nome, setNome] = useState(dadosAct?.nome ? dadosAct?.nome : "");
    const [preco, setPreco] = useState(dadosAct?.preco ? dadosAct?.preco : 0);
    const [badge, setBadge] = useState(dadosAct?.badge ? dadosAct?.badge : "");
    const [primeiros, setPrimeiros] = useState(dadosAct?.primeiros ? dadosAct?.primeiros : false);
    const [desc, setDesc] = useState(dadosAct?.desc ? dadosAct?.desc : "");
    const [src, setSrc] = useState(dadosAct?.src ? dadosAct?.src : "");
    const [alt, setAlt] = useState(dadosAct?.alt ? dadosAct?.alt : "");
    const [especificacoes, setEspecificacoes] = useState(dadosAct?.detalhes?.especificacoes.length ? dadosAct?.detalhes?.especificacoes : [""]);
    const [srcDetalhes, setSrcDetalhes] = useState(dadosAct?.detalhes?.srcDetalhes ? dadosAct?.detalhes?.srcDetalhes : [{ id: crypto.randomUUID(), srcDet: "", srcThumb: "", alt: "", badge: "" }]);
    const [categorias, setCategorias] = useState(dadosAct?.categorias ? dadosAct?.categorias : Opcoes[0].opcoes[0].value);
    //Funções
    const onChangeTextarea = (evt) => {
        console.log(evt);
        console.log(evt.target);
        setDesc(evt.target.value);
    };

    const onChangeNome = (evt) => {
        console.log(evt);
        setNome(evt.target.value)
    };

    const onChangePreco = (val) => {
        console.log(val);
        setPreco(val.target.value)
    };

    const onChangeBadge = (val) => {
        console.log(val);
        setBadge(val.target.value)
    };
    const onChangePrimeiros = (val) => {
        setPrimeiros(val)
    };
    const onChangeCategorias = (val) => {
        console.log(val);
        setCategorias(val)
    };

    const onChangeEspecificacoes = (pos, evt) => {
        console.log(evt);
        console.log(evt.target.value);
        setEspecificacoes((prevEsp) => {
            const novasImgs = [...prevEsp]
            novasImgs[pos] = evt.target.value;
            return novasImgs;
        });
    };

    const onChangeSrc = (pos, src, tipo) => {
        if (tipo === 1) {
            setSrcDetalhes((prevImgs) => {
                const todasImgs = [...prevImgs]
                todasImgs[pos] = {
                    ...todasImgs[pos],
                    srcDet: src,
                    srcThumb: src
                };
                return todasImgs;
            });
            return;
        }

        setSrc(src);

    };

    const onChangeAltImgs = (pos, evt, tipo) => {
        console.log(evt);
        if (tipo === 1) {
            setSrcDetalhes((prevImgs) => {
                const novasImgs = [...prevImgs]
                novasImgs[pos].alt = evt.target.value;
                novasImgs[pos].badge = evt.target.value;
                return [...novasImgs];
            });

            return;
        }

        setAlt(evt.target.value);
    };

    const onClickRemoverEsp = (posEsp) => {
        const novasEsp = especificacoes.filter((esp, pos) => pos !== posEsp);
        setEspecificacoes([...novasEsp]);
    };

    const onClickRemoverOutrsImg = (posImp) => {
        const novasImgs = srcDetalhes.filter((imgDet, pos) => pos !== posImp);
        setSrcDetalhes([...novasImgs]);
    };

    const onClickAdicionarEsps = () => {
        setEspecificacoes([...especificacoes, ""]);
    };

    const onClickAdicionarImgDetalhes = () => {
        setSrcDetalhes([...srcDetalhes, { id: crypto.randomUUID(), srcDet: "", srcThumb: "", alt: "", badge: "" }]);
    };

    const onClickPublicar = () => {
        const ajusteSrC = srcDetalhes.filter((srcDet, pos) => pos !== 0);
        const objDados = {
            nome: nome,
            preco: preco,
            badge: badge,
            primeiros: primeiros,
            desc: desc,
            src: src,
            alt: alt,
            categorias: categorias,
            detalhes: {
                srcDetalhes: [{ ...srcDetalhes[0], srcDet: src, alt: alt, srcThumb: src }, ...ajusteSrC],
                especificoes: [...especificacoes]
            }
        };

        console.log(objDados);
    };

    const onClickSalvarAlteracoes = (idProd) => {
        const novosDados = {
            id: idProd,
            nome: nome,
            preco: preco,
            badge: badge,
            primeiros: primeiros,
            desc: desc,
            src: src,
            alt: alt,
            categorias: categorias,
            detalhes: {
                srcDetalhes: [{ id: crypto.randomUUID(), srcDet: src, alt: alt, srcThumb: src }, ...srcDetalhes],
                especificoes: [...especificacoes]
            }
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
            <ContainerForm className={style.form_prods} onSubmit={() => { tipo ? onClickPublicar() : onClickSalvarAlteracoes(dadosAct.id) }}>
                <div className={style.container_camp}>
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="nome">
                                Nome do produto
                            </label>
                        </div>
                        <InputNormal type={"text"} id={"nome"} placeholder={"Ex: Smartphone Pro"} className={style.input_anun} value={nome} onChange={(evt) => { onChangeNome(evt); }} minLength={10} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
                            if (evt.target.validity.valueMissing) {
                                onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                            } else if (evt.target.validity.tooShort) {
                                let tam_actual = evt.target.value.length;

                                onInvalid(evt, `O nome do produto deve ter no mínimo 10 caracteres, você tem ${tam_actual} caracteres!`);
                            }
                        }} />
                    </div>
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="preco">Preço (MT)</label>
                        </div>
                        <InputNormal type={"number"} id={"preco"} placeholder={"Ex: 25500"} className={style.input_anun} value={preco} onChange={(evt) => { onChangePreco(evt); }} minLength={100} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
                            if (evt.target.validity.valueMissing) {
                                onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                            } else if (evt.target.validity.tooShort) {
                                let tam_actual = evt.target.value.length;
                                onInvalid(evt, `O preço do produto deve ser no mínimo 100, você tem ${tam_actual} Mt!`);
                            }
                        }} />
                    </div>
                    <div className={style.select_categoria_anun}>
                        <label>
                            {Opcoes[0].label}
                        </label>
                        <select name={Opcoes[0].nome} id={Opcoes[0].id} value={categorias} className={style.select} onChange={(evt) => { onChangeCategorias(evt.value) }} required={true}>
                            {Opcoes[0].opcoes.map((cat) => {
                                return (
                                    <option key={cat.id} value={cat.value} className={style.opcao}>{cat.cat}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="badge">Badge/Tag</label>
                        </div>
                        <InputNormal type={"text"} id="badge" placeholder={"Ex: Novo, Promoção"} minLength={10} className={style.input_anun} value={badge} onChange={(evt) => { onChangeBadge(evt); }} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
                            if (evt.target.validity.valueMissing) {
                                onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                            } else if (evt.target.validity.tooShort) {
                                let tam_actual = evt.target.value.length;

                                onInvalid(evt, `O badge do produto deve ter no mínimo 10 caracteres, você tem ${tam_actual} caracteres!`);
                            }
                        }} />
                    </div>
                    {
                        (contaPrimeiros > 0 && dadosAct?.primeiros !== true) ? (null) : (
                            <div className={style.area_input_anun_tP}>
                                <div className={style.area_label}>
                                    <label>Em destaque</label>
                                </div>
                                <div className={style.area_radio}>
                                    <InputRadio type={"radio"} name={"destaque"} id={"sim"} checked={primeiros === true} onChange={() => { onChangePrimeiros(true); }} />
                                    <div className={style.area_label_rad}>
                                        <label htmlFor="sim">Sim</label>
                                    </div>
                                </div>
                                <div className={style.area_radio}>
                                    <InputRadio type={"radio"} name={"destaque"} id={"nao"} checked={primeiros === false} onChange={() => { onChangePrimeiros(false); }} />
                                    <div className={style.area_label_rad}>
                                        <label htmlFor="nao">Não</label>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="desc">
                                Descrição
                            </label>
                        </div>
                        <Textarea id="desc" className={style.campo_desc_prod} placeholder={"Pequena descrição do produto..."} value={desc} onChange={(evt) => { onChangeTextarea(evt); }} />
                    </div>
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="img_prods">Imagem Principal</label>
                        </div>
                        <label className={style.lable_img} htmlFor="img_prods">
                            <Img src={src ? src : Upload} alt={"Ícone de upload (Núvem)"} className={style.icone_input_tell} />
                            {tipo ? (
                                <p>Clique para mudar a imagem</p>
                            ) : (
                                <p>Clique para carregar</p>
                            )}
                            <p>JPG,PNG (Máx 5 MB por foto)</p>
                        </label>
                        <div className={style.area_ocultar_input}>
                            <InputFile type={"file"} id={"img_prods"} placeholder={""} className={style.input_imagem} onChange={(evt) => {
                                const img = criarURLsImgs(evt.target.files[0]);
                                onChangeSrc(1, img, 0)
                            }} />
                        </div>
                        <div className={style.area_label}>
                            <label htmlFor="altPrincipal">Alt Principal</label>
                        </div>
                        <InputNormal placeholder={"Alt da imagem principal"} type={"text"} id={"altPrincipal"} className={style.input_anun} value={alt} minLength={15} onChange={(evt) => { onChangeAltImgs(1, evt.target.value, 0); }} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
                            if (evt.target.validity.valueMissing) {
                                onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                            } else if (evt.target.validity.tooShort) {
                                let tam_actual = evt.target.value.length;

                                onInvalid(evt, `O texto do Alt (Texto Alternativo) do produto deve ter no mínimo 15 caracteres, você tem ${tam_actual} caracteres!`);
                            }
                        }} />
                    </div>
                    <div className={style.area_input_anun}>
                        <div className={style.area_esp}>
                            <label>Especificações</label>
                            <Button className={style.btn_add_campo} onClick={() => { onClickAdicionarEsps() }}>
                                <>
                                    <Img src={Mais} alt={"Ícone de mais"} className={style.icone_input_tell} />
                                    <p>
                                        Adicionar
                                    </p>
                                </>
                            </Button>
                        </div>
                        {
                            especificacoes.map((especificao, pos) => {
                                return (
                                    <div className={style.area_control_esp} key={pos}>
                                        <InputNormal type={"text"} id={pos} placeholder={"Ex: 128 GB"} className={style.input_exp} value={especificao} minLength={15} onChange={(evt) => { onChangeEspecificacoes(pos, evt); }} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
                                            if (evt.target.validity.valueMissing) {
                                                onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                                            } else if (evt.target.validity.tooShort) {
                                                let tam_actual = evt.target.value.length;

                                                onInvalid(evt, `A especificação do produto deve ter no mínimo 15 caracteres, você tem ${tam_actual} caracteres!`);
                                            }
                                        }} />
                                        {especificacoes.length === 1 ? (null) : (
                                            <Button className={style.btn_apagar} onClick={() => { onClickRemoverEsp(pos); }}>
                                                <Img src={Remover} alt={"Ícone de caixa de lixo"} className={style.icone_input_tell} />
                                            </Button>
                                        )}
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className={style.caixa}>
                        <div className={style.area_esp}>
                            <label>Outras imagens</label>
                            <Button className={style.btn_add_campo} onClick={() => { onClickAdicionarImgDetalhes() }}>
                                <>
                                    <Img src={Mais} alt={"Ícone de mais"} className={style.icone_input_tell} />
                                    <p>
                                        Adicionar
                                    </p>
                                </>
                            </Button>
                        </div>
                        {srcDetalhes.map((srcDetalhe, pos) => {
                            return (
                                <div className={style.container_ot_img} key={srcDetalhe.id}>
                                    <div className={style.area_control_esp}>
                                        <div className={style.area_imp_ou}>
                                            <label htmlFor={`img_min_${srcDetalhe.id}`} className={style.label_img_outras}>
                                                <Img src={srcDetalhe?.srcThumb ? srcDetalhe?.srcThumb : Upload} alt={"Ícone de upload (Núvem)"} className={style.icone_input_tell} />
                                                {tipo ? (
                                                    <p>Clique para mudar a imagem</p>
                                                ) : (
                                                    <p>Clique para carregar</p>
                                                )}
                                            </label>
                                            <div className={style.area_ocultar_input}>
                                                <InputFile type={"file"} id={`img_min_${srcDetalhe.id}`} className={style.input_exp} onChange={(evt) => {
                                                    const img = criarURLsImgs(evt.target.files[0]);
                                                    onChangeSrc(pos, img, 1);
                                                }} />
                                            </div>
                                        </div>
                                        {srcDetalhes.length === 1 ? (null) : (
                                            <Button className={style.btn_apagar} onClick={() => { onClickRemoverOutrsImg(pos) }}>
                                                <Img src={Remover} alt={"Ícone de caixa de lixo"} className={style.icone_input_tell} />
                                            </Button>)}
                                    </div>
                                    <InputNormal type={"text"} placeholder={"Alt da imagem"} className={style.input_exp_al} value={srcDetalhe.alt} onChange={(evt) => { onChangeAltImgs(pos, evt, 1); }} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
                                        if (evt.target.validity.valueMissing) {
                                            onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                                        } else if (evt.target.validity.tooShort) {
                                            let tam_actual = evt.target.value.length;

                                            onInvalid(evt, `A especificação do produto deve ter no mínimo 15 caracteres, você tem ${tam_actual} caracteres!`);
                                        }
                                    }} />
                                </div>
                            );
                        })}
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
                        <Button className={style.btn_publicar} type={"submit"} onClick={() => { }} >
                            <>
                                <p>Publicar</p>
                                <Img src={Publicar} alt={"Ícone de upload"} className={style.icone_input_tell} />
                            </>
                        </Button>
                    )}
                </div>
            </ContainerForm >
        </ContainerDiv>
    );
}

export default CardFormProds;
