import style from './AdicionarProds.module.css';
import CardFormProds from '../../../components/cards/cardFormProds/CardFormProds';
import ContainerDiv from '../../../components/Common/container/ContainerDiv';
import ProdutosDados from "./../../../components/data/ProdutosDados.json";

const AdicionarProds = () => {
    const contarPrimeiros = ProdutosDados.filter((prod) => prod.primeiros === true);
    console.log(contarPrimeiros.length);

    return (
        <>
            <h2 className={style.titulo_add}>Adicionar produto</h2>
            <ContainerDiv className={style.area_cont_add}>
                <CardFormProds contaPrimeiros={contarPrimeiros.length} />
            </ContainerDiv>
        </>
    );
}

export default AdicionarProds;
