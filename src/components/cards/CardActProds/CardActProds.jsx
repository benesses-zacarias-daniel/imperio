import Button from '../../button/Button';
import ContainerDiv from '../../Common/container/ContainerDiv';
import Img from '../../img/Img';
import styles from './CardActProds.module.css';
import Fexar from "../../../assets/icons/fexar_detalhes.svg";

const CardActProds = ({ showModal, children, onClickControlModal }) => {
    if (!showModal) return null;

    return (
        <ContainerDiv className={styles.containerAct} id={"containerAct"} click={(evt) => {
            if (evt.target === evt.currentTarget) {
                onClickControlModal(false);
            }
        }}>
            <div className={styles.caixa}>
                <div className={styles.topo}>
                    <h2>Actualizar Produto</h2>
                    <Button className={styles.btn_fexar_act} onClick={() => { onClickControlModal(false) }}>
                        <Img src={Fexar} alt={"Ícone de X"} className={styles.img_fechar_act} />
                    </Button>
                </div>
                <div className={styles.corpo}>{children}</div>
            </div>
        </ContainerDiv>
    );
}

export default CardActProds;