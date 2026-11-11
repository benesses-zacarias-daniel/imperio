import style from './CardFormProds.module.css';
import Img from '../../img/Img';
import Button from '../../button/Button';
//Ícones
import Upload from "../../../assets/icons/enviar.svg";
import Mais from "../../../assets/icons/maisB.svg";
import Remover from "../../../assets/icons/delete.svg";
import ContainerDiv from '../../Common/container/ContainerDiv';

const CardFormProds = ({ dadosAct }) => {
    const Opcoes = [
        {
            "id": 1,
            "nome": "categorias",
            "label": "Categoria",
            "opcoes": [
                {
                    "id": 1,
                    "cat": "Todas as Categorias",
                    "value": "todas"
                }, {
                    "id": 2,
                    "cat": "SmatPhones",
                    "value": "smartphones"
                }, {
                    "id": 3,
                    "cat": "TVs",
                    "value": "tvs"
                }, {
                    "id": 4,
                    "cat": "Electrodomésticos",
                    "value": "electro"
                }, {
                    "id": 5,
                    "cat": "PCs",
                    "value": "pcs"
                }]
        }
    ];

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
                        <input type={"text"} id="nome" placeholder={"Ex: Smartphone Pro"} className={style.input_anun} value={dadosAct.nome ? dadosAct.nome : ""} />
                    </div>

                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="preco">Preço (MT)</label>
                        </div>
                        <input type="number" id="preco" placeholder="Ex: 25500" />
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
                        <input type={"text"} id="badge" placeholder="Ex: Novo, Promoção" />
                    </div>
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="desc">
                                Descrição
                            </label>
                        </div>
                        <textarea id="desc" className={style.campo_desc_prod} placeholder="Pequena descrição do produto..." />
                    </div>
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="img_prods">Imagem Principal</label>
                        </div>
                        <label className={style.lable_img} htmlFor="img_prods">
                            <Img src={Upload} alt={""} className={style.icone_input_tell} />
                            <p>Clique para carregar</p>
                            <p>JPG,PNG (Máx 5 MB por foto)</p>
                        </label>
                        <div className={style.area_ocultar_input}>
                            <input type={"file"} id="img_prods" placeholder={""} className={style.input_imagem} accept="image/*" />
                        </div>
                        <div className={style.area_label}>
                            <label htmlFor="altPrincipal">Alt Principal</label>
                        </div>
                        <input placeholder="Alt da imagem principal" type={"text"} id="altPrincipal" className={style.input_anun} />
                    </div>

                    {/* ----- ESPECIFICAÇÕES ----- */}
                    <div className={style.area_input_anun}>
                        <div className={style.area_esp}>
                            <label>Especificações</label>
                            <Button className={style.btn_mens} onClick={() => { }}>
                                <>
                                    <Img src={Mais} alt={"Ícone de mais"} className={style.icone_input_tell} />
                                    <p>
                                        Adicionar
                                    </p>
                                </>
                            </Button>
                        </div>
                        <div className={style.area_control_esp}>
                            <input type={"text"} placeholder="Ex: 128 GB" className={style.input_exp} />
                            <Button className={style.btn_apagar}>
                                <Img src={Remover} alt={"Ícone de caixa de lixo"} className={style.icone_input_tell} />
                            </Button>
                        </div>

                    </div>

                    {/* ----- OUTRAS IMAGENS ----- */}
                    <div className={style.caixa}>
                        <div className={style.area_esp}>
                            <label>Outras imagens</label>
                            <Button className={style.btn_mens} onClick={() => { }}>
                                <>
                                    <Img src={Mais} alt={"Ícone de mais"} className={style.icone_input_tell} />
                                    <p>
                                        Adicionar
                                    </p>
                                </>
                            </Button>
                        </div>
                        {/* Esta linha é repetida para cada imagem */}
                        <div className={style.area_control_esp}>
                            <div className="area_imp_ou">
                                <input type="file" accept="image/*" className={style.input_exp} />
                            </div>
                            <Button className={style.btn_apagar}>
                                <Img src={Remover} alt={"Ícone de caixa de lixo"} className={style.icone_input_tell} />
                            </Button>
                        </div>
                        <input type={"text"} placeholder="Alt da imagem" className={style.input_exp_al} />
                    </div>
                </div>
                <div className={style.area_btn_enviar}>
                    <Button className={style.btn_enviar} onClick={() => { }} >Guardar</Button>
                </div>
            </form>
        </ContainerDiv>
    );
}

export default CardFormProds;
