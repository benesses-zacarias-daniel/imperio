import style from './AdicionarProds.module.css';
import CardFormProds from '../../../components/cards/CardFormProds/CardFormProds';
import ContainerDiv from '../../../components/Common/container/ContainerDiv';

const AdicionarProds = () => {
    return (
        <>
            <h2 className={style.titulo_add}>Adicionar produto</h2>
            <ContainerDiv className={style.area_cont_add}>
                <CardFormProds />
            </ContainerDiv>
        </>
    );
}

export default AdicionarProds;
