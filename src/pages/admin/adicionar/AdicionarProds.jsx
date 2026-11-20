import style from './AdicionarProds.module.css';
import ContainerDiv from '../../../components/Common/container/ContainerDiv';
import CardFormProds from '../../../components/cards/cardFormAdmin/cardFormProds/CardFormProds';

const AdicionarProds = () => {
    const contarPrimeiros = [];

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
