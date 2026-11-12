import style from './CardFormProds.module.css';
import { useState } from 'react';
import Img from '../../img/Img';
import Button from '../../button/Button';
//Ícones
import Upload from "../../../assets/icons/enviar.svg";
import Mais from "../../../assets/icons/maisB.svg";
import Remover from "../../../assets/icons/delete.svg";
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
                    "value": "smartphones"
                }, {
                    "id": 2,
                    "cat": "TVs",
                    "value": "tvs"
                }, {
                    "id": 3,
                    "cat": "Electrodomésticos",
                    "value": "electro"
                }, {
                    "id": 4,
                    "cat": "PCs",
                    "value": "pcs"
                }]
        }
    ];
    const [nome, setNome] = useState(dadosAct?.nome ? dadosAct?.nome : "");
    const [preco, setPreco] = useState(dadosAct?.preco ? dadosAct?.preco : 1000);
    const [bagde, setBagde] = useState(dadosAct?.bagde ? dadosAct?.bagde : "");
    const onChange = (val) => {
        console.log(val);

    };
    const onChangeNome = (val) => {
        console.log(val);
        val.target.value = val.target.value;
        setNome(val.target.value)
    };
    const onChangePreco = (val) => {
        console.log(val);
        val.target.value = val.target.value;
        setPreco(val.target.value)
    };
    const onChangeBagde = (val) => {
        console.log(val);
        val.target.value = val.target.value;
        setBagde(val.target.value)
    };
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
                        <select name={Opcoes[0].nome} id={Opcoes[0].id} className={style.select}>
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
                        <input type={"text"} id="badge" placeholder="Ex: Novo, Promoção" className={style.input_anun} value={bagde} onChange={(evt) => { onChangeBagde(evt); }} />
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
                            <p>Clique para carregar</p>
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
                        <div className={style.area_control_esp}>
                            <input type={"text"} placeholder="Ex: 128 GB" className={style.input_exp} value={dadosAct?.detalhes?.especificacoes[0] ? dadosAct?.detalhes?.especificacoes[0] : ""} onChange={(evt) => { onChange(evt); }} />
                            <Button className={style.btn_apagar}>
                                <Img src={Remover} alt={"Ícone de caixa de lixo"} className={style.icone_input_tell} />
                            </Button>
                        </div>
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
                        <div className={style.container_ot_img}>
                            <div className={style.area_control_esp}>
                                <div className="area_imp_ou">
                                    <label htmlFor="img_min" className={style.label_img_outras}>
                                        <Img src={Upload} alt={"Ícone de upload (Núvem)"} className={style.icone_input_tell} />
                                        <p>Clique para carregar</p>
                                    </label>
                                    <div className={style.area_ocultar_input}>
                                        <input type="file" id="img_min" accept="image/*" className={style.input_exp} />
                                    </div>
                                </div>
                                <Button className={style.btn_apagar}>
                                    <Img src={Remover} alt={"Ícone de caixa de lixo"} className={style.icone_input_tell} />
                                </Button>
                            </div>
                            <input type={"text"} placeholder="Alt da imagem" className={style.input_exp_al} value={dadosAct?.detalhes.srcDetalhes[0].alt ? dadosAct?.detalhes.srcDetalhes[0].alt : ""} onChange={(evt) => { onChange(evt); }} />
                        </div>
                    </div>
                </div>
                <div className={style.area_btn_enviar}>
                    {tipo ? (
                        <Button className={style.btn_enviar} onClick={() => { }} >
                            <>
                                <p>Actualizar</p>
                                <Img src={Publicar} alt={"Ícone de envio"} className={style.icone_input_tell} />
                            </>
                        </Button>
                    ) : (
                        <Button className={style.btn_enviar} onClick={() => { }} >
                            <>
                                <p>Guardar</p>
                                <Img src={Publicar} alt={"Ícone de envio"} className={style.icone_input_tell} />
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
