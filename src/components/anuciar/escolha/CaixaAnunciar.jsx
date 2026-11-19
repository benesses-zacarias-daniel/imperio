import ContainerDiv from "../../Common/container/ContainerDiv";
import style from "./CaixaAnunciar.module.css";
import Img from "../../img/Img";
import Button from "../../button/Button";
import InputNormal from "../../form/inputNomal/InputNormal";
import InputFile from "../../form/inputFile/InputFile";
import ContainerForm from "../../Common/containerForm/ContainerForm";
import Textarea from "../../form/textarea/Textarea";
import { useState } from "react";
import criarURLsImgs from "../../../utils/criarURLsImg";


const CaixaAnunciar = ({ dadosAnunciar, Opcoes }) => {
    console.log(Opcoes[0]);
    const [nome, setNome] = useState("");
    const [srcImg, setSrcImg] = useState(dadosAnunciar?.icones[0]?.icone_src ? dadosAnunciar?.icones[0]?.icone_src : "#");
    const [opcao, setOpcao] = useState("smartphone");
    const [textarea, setTextarea] = useState("");
    const [contacto, setContacto] = useState("");
    //Funções
    const onChangeNome = (evt) => {
        evt.preventDefault();
        console.log(evt);
        setNome(evt.target.value)
    };

    const onChangeOpcao = (evt) => {
        evt.preventDefault();
        setOpcao(evt.target.value)
    };

    const onChangeTextarea = (evt) => {
        evt.preventDefault();
        console.log(evt);
        console.log(evt.target);
        setTextarea(evt.target.value);
    };

    const onChangeSrc = (val, evt) => {
        evt.preventDefault();
        setSrcImg(val)
    };

    const onChangeContacto = (evt) => {
        evt.preventDefault();
        console.log(evt);
        console.log(evt.target);
        setContacto(evt.target.value);
    };

    const onInvalid = (evt, msg) => {
        evt.target.setCustomValidity(msg);
    };

    const onInput = (evt) => {
        evt.target.setCustomValidity("");
    };

    const onSubmit = (evt) => {
        evt.preventDefault();

        const dadosAnunciar = {
            nome: nome,
            opcao: opcao,
            desc: textarea,
            srcImg: srcImg,
            contacto: contacto
        }

        console.log(dadosAnunciar);

    };

    return (
        <ContainerDiv className={style.container_caixaAnun}>
            <ContainerForm className={style.form_caixaAnun} onSubmit={(evt) => { onSubmit(evt) }} >
                <div className={style.container_anun}>
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="nome">
                                {dadosAnunciar.inputs[0].label}
                            </label>
                        </div>
                        <InputNormal type={dadosAnunciar.type[0]} id="nome" placeholder={dadosAnunciar.inputs[0].placeholder} minLength={10} className={style.input_anun} value={nome} onChange={(evt) => {
                            onChangeNome(evt);
                        }} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
                            if (evt.target.validity.valueMissing) {
                                onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                            } else if (evt.target.validity.tooShort) {
                                let tam_actual = evt.target.value.length;

                                onInvalid(evt, `O nome do produto deve ter no mínimo 10 caracteres, você tem ${tam_actual} caracteres!`);
                            }
                        }} />
                    </div>
                    <div className={style.select_categoria_anun}>
                        <label>
                            {Opcoes[0].label}
                        </label>
                        <select name={Opcoes[0].nome} id={Opcoes[0].id} value={opcao} className={style.select} onChange={(evt) => {
                            onChangeOpcao(evt)
                        }}>
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
                            <label htmlFor="det">
                                {dadosAnunciar.inputs[2].label}
                            </label>
                        </div>
                        <Textarea id="det" placeholder={dadosAnunciar.inputs[2].placeholder} className={style.campo_desc_prod} value={textarea} onChange={(evt) => {
                            onChangeTextarea(evt)
                        }} />
                    </div>
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            {dadosAnunciar.inputs[3].label}
                        </div>
                        <div className={`${style.area_input_img}`}>
                            <label className={style.lable_img} htmlFor="img_prods">
                                <Img src={srcImg} alt={dadosAnunciar.icones[0].icone_alt} className={style.icone_input_tell} />
                                <p>{" Clique para mudar/escolher a imagem"}</p>
                                <p>JPG,PNG (Máx 5 MB por foto)</p>
                            </label>
                        </div>
                        <div className={style.area_ocultar_input}>
                            <InputFile type={dadosAnunciar.type[2]} id={"img_prods"} className={style.input_imagem} onChange={(evt) => {
                                const img = criarURLsImgs(evt.target.files[0]);
                                onChangeSrc(img, evt);
                            }} />
                        </div>
                    </div>
                    <div className={style.area_input_anun}>
                        <div className={style.area_label}>
                            <label htmlFor="contacto_">
                                {dadosAnunciar.inputs[4].label}
                            </label>
                        </div>
                        <div className={style.area_icone_input}>
                            {/* <Img src={dadosAnunciar.icones[1].icone_src} alt={dadosAnunciar.icones[1].icone_alt} className={style.icone_input_tell} /> */}
                            <InputNormal type={dadosAnunciar.type[3]} id={"contacto_"} placeholder={dadosAnunciar.inputs[4].placeholder} onChange={(evt) => { onChangeContacto(evt) }} className={style.input_anun} onInput={(evt) => { onInput(evt); }} onInvalid={(evt) => {
                                if (evt.target.validity.valueMissing) {
                                    onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                                } else if (evt.target.validity.tooShort) {
                                    let tam_actual = evt.target.value.length;

                                    onInvalid(evt, `O número de contacto deve ter no mínimo 9 caracteres, você tem ${tam_actual} caracteres!`);
                                }
                            }} />
                        </div>
                    </div>
                </div>
                <div className={style.area_btn_anunciar}>
                    <Button type={"submit"} className={style.btn_mens} onClick={() => { }}>
                        <p>{dadosAnunciar.texto_btn}</p>
                        <Img src={dadosAnunciar.icones[1].icone_src} alt={dadosAnunciar.icones[1].icone_alt} className={style.icone_mens} />
                    </Button>
                </div>
            </ContainerForm>
        </ContainerDiv>
    )
}


export default CaixaAnunciar;