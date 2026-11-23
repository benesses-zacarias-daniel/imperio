import style from '../CardFormAdmin.module.css';
import { useEffect, useState } from 'react';
import Img from '../../../img/Img';
import Button from '../../../button/Button';
//Ícones
import Upload from "../../../../assets/icons/enviar.svg";
import Mais from "../../../../assets/icons/maisB.svg";
import Remover from "../../../../assets/icons/delete.svg";
import Guardar from "../../../../assets/icons/guardar.svg";
import Publicar from "../../../../assets/icons/publicar.svg";
import ContainerDiv from '../../../Common/container/ContainerDiv';
import ContainerForm from '../../../Common/containerForm/ContainerForm';
import InputNormal from '../../../form/inputNomal/InputNormal';
import Textarea from '../../../form/textarea/Textarea';
import InputRadio from '../../../form/inputRadio/InputRadio';
import InputFile from '../../../form/inputFile/InputFile';
import conversorWebp from '../../../../utils/conversorWebp';
import scrollCima from '../../../../utils/scrollCima';
import adicionarProduto from '../../../../utils/adicionarProduto';
import atualizarProduto from '../../../../utils/atualizarProduto';
import buscarProdutos from '../../../../utils/buscarProdutos';

const CardFormProds = ({ dadosAct, tipo = false, onClickFecharCard = () => { } }) => {
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
    const [srcDetalhes, setSrcDetalhes] = useState(dadosAct?.detalhes?.srcDetalhes ? dadosAct?.detalhes?.srcDetalhes : [{ "id": crypto.randomUUID(), "srcDet": "", "srcThumb": "", "alt": "", "badge": "" }]);
    const [categorias, setCategorias] = useState(dadosAct?.categorias ? dadosAct?.categorias : Opcoes[0].opcoes[0].value);
    const [contaPrim, setContaPrim] = useState(0);
    //Funções
    const onChangeTextarea = (evt) => {
        evt.preventDefault();
        console.log(evt);
        console.log(evt.target);
        setDesc(evt.target.value);
    };

    const onChangeNome = (evt) => {
        evt.preventDefault();
        console.log(evt);
        setNome(evt.target.value)
    };

    const onChangePreco = (evt) => {
        evt.preventDefault();
        setPreco(evt.target.value)
    };

    const onChangeBadge = (evt) => {
        evt.preventDefault();
        setBadge(evt.target.value)
    };

    const onChangePrimeiros = (val, evt) => {
        // evt.preventDefault();
        setPrimeiros(val);
        contaPrimeiros();
    };

    const onChangeCategorias = (evt) => {
        evt.preventDefault();
        setCategorias(evt.target.value);
    };

    const onChangeEspecificacoes = (pos, evt) => {
        evt.preventDefault();
        console.log(evt);
        console.log(evt.target.value);
        setEspecificacoes((prevEsp) => {
            const novasImgs = [...prevEsp]
            novasImgs[pos] = evt.target.value;
            return novasImgs;
        });
    };

    const onChangeSrc = (pos, { srcDet = null, srcThumb = null } = {}, tipo, evt) => {
        evt.preventDefault();
        if (tipo === 1) {
            setSrcDetalhes((prevImgs) => {
                const todasImgs = [...prevImgs]
                todasImgs[pos] = {
                    ...todasImgs[pos],
                    "srcDet": srcDet,
                    "srcThumb": srcThumb
                };
                return todasImgs;
            });
            return;
        }

        setSrc(srcDet);

    };

    const onChangeAltImgs = (pos, val, tipo, evt) => {
        evt.preventDefault();
        console.log(val)
        if (tipo === 1) {
            setSrcDetalhes((prevImgs) => {
                const novasImgs = [...prevImgs]
                novasImgs[pos].alt = val;
                novasImgs[pos].badge = val;
                return [...novasImgs];
            });

            return;
        }

        setAlt(val);
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
        setSrcDetalhes([...srcDetalhes, { "id": crypto.randomUUID(), "srcDet": "", "srcThumb": "", "alt": "", "badge": "" }]);
    };

    const limparCampos = () => {
        setNome("");
        setPreco(0);
        setBadge("");
        setCategorias("smartphone");
        setPrimeiros(false);
        setDesc("");
        setSrc(null);
        setAlt("")
        setEspecificacoes([""]);
        setSrcDetalhes([{ "id": crypto.randomUUID(), "srcDet": "", "srcThumb": "", "alt": "", "badge": "" }]);
        scrollCima();
    };

    const contaPrimeiros = async () => {

        try {

            const { prod, status } = await buscarProdutos();

            if (!status) {
                const prims = prod.filter((prim) => prim.primeiros === true);
                setContaPrim(prims.length);
                console.error("Erro ao buscar produtos em destaque: " + error.message);
                return;
            }

            const prims = prod.filter((prim) => prim.primeiros === true);
            setContaPrim(prims.length);

        } catch (error) {
            console.error("Erro ao buscar produtos em destaque: " + error.message);
        }

    };

    const onClickPublicar = async (evt) => {

        evt.preventDefault();
        const ajusteSrC = srcDetalhes.filter((srcDet, pos) => pos !== 0);
        const objDados = {
            "nome": nome,
            "preco": preco,
            "badge": badge,
            "primeiros": primeiros,
            "desc": desc,
            "src": src,
            "alt": alt,
            "categorias": categorias,
            "detalhes": {
                "srcDetalhes": [{ ...srcDetalhes[0], "srcDet": src, "alt": alt, "srcThumb": src }, ...ajusteSrC],
                "especificacoes": [...especificacoes]
            }
        };

        try {

            await adicionarProduto(objDados);
            await contaPrimeiros();

            limparCampos();

        } catch (error) {
            console.error("Erro ao adicionar produto: " + error.message);
        }

    };

    const onClickSalvarAlteracoes = async (idProd, evt) => {
        evt.preventDefault();
        const novosDados = {
            "id": idProd,
            "nome": nome,
            "preco": preco,
            "badge": badge,
            "primeiros": primeiros,
            "desc": desc,
            "src": src,
            "alt": alt,
            "categorias": categorias,
            "detalhes": {
                "srcDetalhes": [{ "id": crypto.randomUUID(), "srcDet": src, "alt": alt, "srcThumb": src }, ...srcDetalhes],
                "especificacoes": [...especificacoes]
            }
        }

        try {

            const novProd = await atualizarProduto(novosDados, idProd)

            console.log(novProd);

            await contaPrimeiros();
            limparCampos();
            onClickFecharCard();

        } catch (error) {
            console.error("Erro ao actualizar Produto: " + error.message);
        }

    };
    //Effect
    useEffect(() => {
        contaPrimeiros();
    }, []);
    //Funções de Controle dos Inputs
    const onInvalid = (evt, msg) => {
        evt.target.setCustomValidity(msg);
    };

    const onInput = (evt) => {
        evt.target.setCustomValidity("");
    };
    console.log(contaPrim);

    return (
        <ContainerDiv className={style.container_prods}>
            <ContainerForm className={style.form_prods} onSubmit={async (evt) => { tipo ? onClickSalvarAlteracoes(dadosAct.id, evt) : onClickPublicar(evt) }}>
                <div className={style.container_camp}>
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="nome">
                                Nome do produto
                            </label>
                        </div>
                        <InputNormal type={"text"} id={"nome"} placeholder={"Ex: Smartphone Pro"} className={style.input_anun} value={nome} onChange={(evt) => { onChangeNome(evt); }} minLength={null} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
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
                        <InputNormal type={"number"} id={"preco"} placeholder={"Ex: 25500"} className={style.input_anun} value={preco} onChange={(evt) => { onChangePreco(evt); }} minLength={null} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
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
                        <select name={Opcoes[0].nome} id={Opcoes[0].id} value={categorias} className={style.select} onChange={(evt) => { onChangeCategorias(evt) }} required={true}>
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
                        <InputNormal type={"text"} id="badge" placeholder={"Ex: Novo, Promoção"} minLength={null} className={style.input_anun} value={badge} onChange={(evt) => { onChangeBadge(evt, evt); }} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
                            if (evt.target.validity.valueMissing) {
                                onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                            } else if (evt.target.validity.tooShort) {
                                let tam_actual = evt.target.value.length;

                                onInvalid(evt, `O badge do produto deve ter no mínimo 10 caracteres, você tem ${tam_actual} caracteres!`);
                            }
                        }} />
                    </div>
                    {
                        (contaPrim === 3 && dadosAct?.primeiros !== true) ? (null) : (
                            <div className={style.area_input_anun_tP}>
                                <div className={style.area_label}>
                                    <label>Em destaque</label>
                                </div>
                                <div className={style.area_radio}>
                                    <InputRadio type={"radio"} name={"destaque"} id={"sim"} checked={primeiros === true} onChange={(evt) => { onChangePrimeiros(true, evt); }} />
                                    <div className={style.area_label_rad}>
                                        <label htmlFor="sim">Sim</label>
                                    </div>
                                </div>
                                <div className={style.area_radio}>
                                    <InputRadio type={"radio"} name={"destaque"} id={"nao"} checked={primeiros === false} onChange={(evt) => { onChangePrimeiros(false, evt); }} />
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
                        <Textarea id="desc" className={style.campo_desc_prod} placeholder={"Pequena descrição do produto..."} value={desc} onChange={(evt) => { onChangeTextarea(evt, evt); }} />
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
                            <InputFile type={"file"} id={"img_prods"} placeholder={""} className={style.input_imagem} onChange={async (evt) => {
                                //const img = criarURLsImgs(evt.target.files[0]);
                                const srcDet = await conversorWebp(evt.target.files[0], { qualidade: 0.8, larguraMax: 1200 });
                                const srcThumb = await conversorWebp(evt.target.files[0], { qualidade: 0.75, larguraMax: 400 });
                                onChangeSrc(1, { srcDet: srcDet.base64, srcThumb: srcThumb.base64 }, 0, evt);
                            }} />
                        </div>
                        <div className={style.area_label}>
                            <label htmlFor="altPrincipal">Alt Principal</label>
                        </div>
                        <InputNormal placeholder={"Alt da imagem principal"} type={"text"} id={"altPrincipal"} className={style.input_anun} value={alt} minLength={null} onChange={(evt) => { onChangeAltImgs(1, evt.target.value, 0, evt); }} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
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
                                        <InputNormal type={"text"} id={pos} placeholder={"Ex: 128 GB"} className={style.input_exp} value={especificao} minLength={null} onChange={(evt) => { onChangeEspecificacoes(pos, evt); }} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
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
                                                <InputFile type={"file"} id={`img_min_${srcDetalhe.id}`} className={style.input_exp} onChange={async (evt) => {
                                                    //const img = criarURLsImgs(evt.target.files[0]);
                                                    const srcDet = await conversorWebp(evt.target.files[0], { qualidade: 0.8, larguraMax: 1200 });
                                                    const srcThumb = await conversorWebp(evt.target.files[0], { qualidade: 0.75, larguraMax: 400 });
                                                    console.log(srcDet);
                                                    onChangeSrc(pos, { srcDet: srcDet.base64, srcThumb: srcThumb.base64 }, 1, evt);
                                                }} />
                                            </div>
                                        </div>
                                        {srcDetalhes.length === 1 ? (null) : (
                                            <Button className={style.btn_apagar} onClick={() => { onClickRemoverOutrsImg(pos) }}>
                                                <Img src={Remover} alt={"Ícone de caixa de lixo"} className={style.icone_input_tell} />
                                            </Button>)}
                                    </div>
                                    <InputNormal type={"text"} placeholder={"Alt da imagem"} className={style.input_exp_al} value={srcDetalhe.alt} onChange={(evt) => { onChangeAltImgs(pos, evt.target.value, 1, evt); }} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
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
