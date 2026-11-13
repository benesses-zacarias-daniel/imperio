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

const CardFormProds = ({ dadosAct, tipo = false }) => {
    const Opcoes = [
        {
            "id": 1,
            "nome": "categorias",
            "label": "Categoria",
            "opcoes": [
                {
                    "id": 1,
                    "cat": "SmatPhones",
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
    const [preco, setPreco] = useState(dadosAct?.preco ? dadosAct?.preco : "");
    const [badge, setBadge] = useState(dadosAct?.badge ? dadosAct?.badge : "");
    const [especificacoes, setEspecificacoes] = useState(dadosAct?.detalhes?.especificacoes.length ? dadosAct?.detalhes?.especificacoes : [""]);
    const [srcDetalhes, setSrcDetalhes] = useState(dadosAct?.detalhes?.srcDetalhes ? dadosAct?.detalhes?.srcDetalhes : [{ id: crypto.randomUUID(), srcThumb: "", alt: "", badge: "" }]);
    const [categorias, setCategorias] = useState(dadosAct?.categorias ? dadosAct?.categorias : "");
    //Funções
    const onChange = (val) => {
        console.log(val);

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

    const onChangeEspecificacoes = (val) => {
        console.log(val);
        // setEspecificacoes(val.target.value)
    };

    const onChangeSrcDetalhes = (val) => {
        console.log(val);
        // setSrcDetalhes(val.target.value)
    };

    console.log(srcDetalhes);


    return (
        <ContainerDiv className={style.container_prods}>
            <form className={style.form_prods}>
                <div className={style.container_camp}>
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="nome">
                                Nome do produto
                            </label>
                        </div>
                        <input type={"text"} id="nome" placeholder={"Ex: Smartphone Pro"} className={style.input_anun} value={nome} onChange={(evt) => { onChangeNome(evt); }} />
                    </div>
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="preco">Preço (MT)</label>
                        </div>
                        <input type="number" id="preco" placeholder="Ex: 25500" className={style.input_anun} value={preco} onChange={(evt) => { onChangePreco(evt); }} />
                    </div>
                    <div className={style.select_categoria_anun}>
                        <label>
                            Selecione a Categoria
                        </label>
                        <select name={Opcoes[0].nome} id={Opcoes[0].id} value={categorias} className={style.select} onChange={(evt) => { onChangeCategorias(evt.value) }}>
                            {Opcoes[0].opcoes.map((cat) => {
                                return (
                                    <option key={cat.id} value={cat.value} className={style.opcao} onClick={(evt) => {
                                        console.log(evt.target.value);
                                    }}>{cat.cat}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="badge">Badge/Tag</label>
                        </div>
                        <input type={"text"} id="badge" placeholder="Ex: Novo, Promoção" className={style.input_anun} value={badge} onChange={(evt) => { onChangeBadge(evt); }} />
                    </div>
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="desc">
                                Descrição
                            </label>
                        </div>
                        <textarea id="desc" className={style.campo_desc_prod} placeholder="Pequena descrição do produto..." value={dadosAct?.desc ? dadosAct?.desc : ""} onChange={(evt) => { onChange(evt); }} />
                    </div>
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="img_prods">Imagem Principal</label>
                        </div>
                        <label className={style.lable_img} htmlFor="img_prods">
                            <Img src={Upload} alt={"Ícone de upload (Núvem)"} className={style.icone_input_tell} />
                            {tipo ? (
                                <p>Clique para mudar a imagem</p>
                            ) : (
                                <p>Clique para carregar</p>
                            )}
                            <p>JPG,PNG (Máx 5 MB por foto)</p>
                        </label>
                        <div className={style.area_ocultar_input}>
                            <input type={"file"} id="img_prods" placeholder={""} className={style.input_imagem} accept="image/*" />
                        </div>
                        <div className={style.area_label}>
                            <label htmlFor="altPrincipal">Alt Principal</label>
                        </div>
                        <input placeholder="Alt da imagem principal" type={"text"} id="altPrincipal" className={style.input_anun} value={dadosAct?.alt ? dadosAct?.alt : ""} onChange={(evt) => { onChange(evt); }} />
                    </div>
                    {/* ----- ESPECIFICAÇÕES ----- */}
                    <div className={style.area_input_anun}>
                        <div className={style.area_esp}>
                            <label>Especificações</label>
                            <Button className={style.btn_add_campo} onClick={() => { }}>
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
                                        <input type={"text"} placeholder="Ex: 128 GB" className={style.input_exp} value={especificao} onChange={(evt) => { onChangeEspecificacoes(evt); }} />
                                        <Button className={style.btn_apagar} onClick={() => { }}>
                                            <Img src={Remover} alt={"Ícone de caixa de lixo"} className={style.icone_input_tell} />
                                        </Button>
                                    </div>
                                );
                            })
                        }
                    </div>
                    {/* ----- OUTRAS IMAGENS ----- */}
                    <div className={style.caixa}>
                        <div className={style.area_esp}>
                            <label>Outras imagens</label>
                            <Button className={style.btn_add_campo} onClick={() => { }}>
                                <>
                                    <Img src={Mais} alt={"Ícone de mais"} className={style.icone_input_tell} />
                                    <p>
                                        Adicionar
                                    </p>
                                </>
                            </Button>
                        </div>
                        {/* Esta linha é repetida para cada imagem */}
                        {srcDetalhes.map((srcDetalhe) => {
                            return (
                                <div className={style.container_ot_img} key={srcDetalhe.id}>
                                    <div className={style.area_control_esp}>
                                        <div className={style.area_imp_ou}>
                                            <label htmlFor={`img_min_${srcDetalhe.id}`} className={style.label_img_outras}>
                                                <Img src={Upload} alt={"Ícone de upload (Núvem)"} className={style.icone_input_tell} />
                                                {tipo ? (
                                                    <p>Clique para mudar a imagem</p>
                                                ) : (
                                                    <p>Clique para carregar</p>
                                                )}
                                            </label>
                                            <div className={style.area_ocultar_input}>
                                                <input type="file" id={`img_min_${srcDetalhe.id}`} accept="image/*" className={style.input_exp} onChange={(evt) => { onChangeSrcDetalhes(evt); }} />
                                            </div>
                                        </div>
                                        <Button className={style.btn_apagar}>
                                            <Img src={Remover} alt={"Ícone de caixa de lixo"} className={style.icone_input_tell} />
                                        </Button>
                                    </div>
                                    <input type={"text"} placeholder="Alt da imagem" className={style.input_exp_al} value={srcDetalhe.alt} onChange={(evt) => { onChangeSrcDetalhes(evt); }} />
                                </div>
                            );
                        })
                        }
                    </div>
                </div>
                <div className={style.area_btn_acao_form}>
                    {tipo ? (
                        <Button className={style.btn_actualizar} onClick={() => { }} >
                            <>
                                <p>Salvar Alterações</p>
                                <Img src={Guardar} alt={"Ícone de salvar arquivo"} className={style.icone_input_tell} />
                            </>
                        </Button>
                    ) : (
                        <Button className={style.btn_publicar} onClick={() => { }} >
                            <>
                                <p>Publicar</p>
                                <Img src={Publicar} alt={"Ícone de upload"} className={style.icone_input_tell} />
                            </>
                        </Button>
                    )
                    }
                </div>
            </form>
        </ContainerDiv>
    );
}

export default CardFormProds;
