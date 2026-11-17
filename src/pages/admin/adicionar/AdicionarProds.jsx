import style from './AdicionarProds.module.css';
import ContainerDiv from '../../../components/Common/container/ContainerDiv';
import ProdutosDados from "./../../../components/data/ProdutosDados.json";
import CardFormProds from '../../../components/cards/cardFormAdmin/cardFormProds/CardFormProds';

const AdicionarProds = () => {
    const contarPrimeiros = ProdutosDados.filter((prod) => prod.primeiros === true);

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
