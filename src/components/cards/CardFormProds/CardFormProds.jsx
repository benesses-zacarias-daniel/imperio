import style from './CardFormProds.module.css';
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

const CardFormProds = ({ dadosAct, tipo = false }) => {
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
    const [desc, setDesc] = useState(dadosAct?.desc ? dadosAct?.desc : "");
    const [src, setSrc] = useState(dadosAct?.src ? dadosAct?.src : "");
    const [alt, setAlt] = useState(dadosAct?.alt ? dadosAct?.alt : "");
    const [especificacoes, setEspecificacoes] = useState(dadosAct?.detalhes?.especificacoes.length ? dadosAct?.detalhes?.especificacoes : [""]);
    const [srcDetalhes, setSrcDetalhes] = useState(dadosAct?.detalhes?.srcDetalhes ? dadosAct?.detalhes?.srcDetalhes : [{ id: crypto.randomUUID(), srcDet: "", srcThumb: "", alt: "", badge: "" }]);
    const [categorias, setCategorias] = useState(dadosAct?.categorias ? dadosAct?.categorias : Opcoes[0].opcoes[0].value);
    //Funções
    const onChangeTextarea = (val) => {
        console.log(val);
        setDesc(val);
    };

    const onChangeNome = (val) => {
        console.log(val);
        setNome(val.target.value)
    };

    const onChangePreco = (val) => {
        console.log(val);
        setPreco(val.target.value)
    };

    const onChangeBadge = (val) => {
        console.log(val);
        setBadge(val.target.value)
    };

    const onChangeCategorias = (val) => {
        console.log(val);
        setCategorias(val)
    };

    const onChangeEspecificacoes = (pos, val) => {
        console.log(val);
        setEspecificacoes((prevEsp) => {
            const novasImgs = [...prevEsp]
            novasImgs[pos] = val;
            return novasImgs;
        });
    };

    const onChangeSrc = (pos, val, tipo) => {
        if (tipo === 1) {
            setSrcDetalhes((prevImgs) => {
                const todasImgs = [...prevImgs]
                todasImgs[pos] = {
                    ...todasImgs[pos],
                    srcDet: val,
                    srcThumb: val
                };
                return todasImgs;
            });
            return;
        }

        setSrc(val);

    };

    const onChangeAltImgs = (pos, val, tipo) => {
        console.log(val);
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
        setSrcDetalhes([...srcDetalhes, { id: crypto.randomUUID(), srcDet: "", srcThumb: "", alt: "", badge: "" }]);
    };

    const onClickPublicar = () => {
        const ajusteSrC = srcDetalhes.filter((srcDet, pos) => pos !== 0);
        const objDados = {
            nome: nome,
            preco: preco,
            badge: badge,
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

    return (
        <ContainerDiv className={style.container_prods}>
            <form className={style.form_prods} onSubmit={() => { tipo ? () => { } : onClickSalvarAlteracoes(dadosAct.id) }}> {/*Depois devolvo o form*/}
                <div className={style.container_camp}>
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="nome">
                                Nome do produto
                            </label>
                        </div>
                        <input type={"text"} id="nome" placeholder={"Ex: Smartphone Pro"} required={true} className={style.input_anun} value={nome} onChange={(evt) => { onChangeNome(evt); }} />
                    </div>
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="preco">Preço (MT)</label>
                        </div>
                        <input type="number" id="preco" placeholder={"Ex: 25500"} required={true} className={style.input_anun} value={preco} onChange={(evt) => { onChangePreco(evt); }} />
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
                        <input type={"text"} id="badge" placeholder={"Ex: Novo, Promoção"} required={true} className={style.input_anun} value={badge} onChange={(evt) => { onChangeBadge(evt); }} />
                    </div>
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="desc">
                                Descrição
                            </label>
                        </div>
                        <textarea id="desc" className={style.campo_desc_prod} placeholder={"Pequena descrição do produto..."} required={true} value={desc} onChange={(evt) => { onChangeTextarea(evt.target.value); }} />
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
                            <input type={"file"} id="img_prods" placeholder={""} hidden={true} className={style.input_imagem} accept="image/*" onChange={(evt) => {
                                const img = criarURLsImgs(evt.target.files[0]);
                                onChangeSrc(1, img, 0)
                            }} />
                        </div>
                        <div className={style.area_label}>
                            <label htmlFor="altPrincipal">Alt Principal</label>
                        </div>
                        <input placeholder={"Alt da imagem principal"} required={true} type={"text"} id="altPrincipal" className={style.input_anun} value={alt} onChange={(evt) => { onChangeAltImgs(1, evt.target.value, 0); }} />
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
                                        <input type={"text"} placeholder={"Ex: 128 GB"} required={true} className={style.input_exp} value={especificao} onChange={(evt) => { onChangeEspecificacoes(pos, evt.target.value); }} />
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
                        {/* Esta linha é repetida para cada imagem */}
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
                                                <input type="file" id={`img_min_${srcDetalhe.id}`} hidden={true} accept="image/*" className={style.input_exp} onChange={(evt) => {
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
                                    <input type={"text"} placeholder={"Alt da imagem"} required={true} className={style.input_exp_al} value={srcDetalhe.alt} onChange={(evt) => { onChangeAltImgs(pos, evt.target.value, 1); }} />
                                </div>
                            );
                        })
                        }
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
                    )
                    }
                </div>
            </form >
        </ContainerDiv>
    );
}

export default CardFormProds;
