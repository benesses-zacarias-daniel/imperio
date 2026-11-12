import style from './AdicionarProds.module.css';
import CardFormProds from '../../../components/cards/CardFormProds/CardFormProds';
import ContainerDiv from '../../../components/Common/container/ContainerDiv';

const AdicionarProds = () => {
    return (
        <>
            <ContainerDiv className={style.cartao}>
                <h2>Adicionar produto</h2>
                <CardFormProds />
            </ContainerDiv>
        </>
    );
}

export default AdicionarProds;
