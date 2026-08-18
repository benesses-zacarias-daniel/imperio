import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Hero from "../../components/cards/Hero/Hero";
import ContainerSessao from "../../components/Common/container/ContainerSessao";
import style from "./Home.module.css";
import scrollCima from "../../utils/scrollCima";

const Home = () => {
    return (
        <ContainerSessao className={style.container_home}>
            <Hero foco={"Imperial"} marca={"Electrónicos"} minInfo={"A excelência em tecnologia. Descubra uma curadoria exclusiva do hardware mais avançado do mundo, onde o desempenho encontra o luxo absoluto."} textoProd={"Ver Productos"} textoCon={"Contactar"} classNameBtnProd={style.btn_prod} classNameBtnCon={style.btn_con} />
            <ContainerSessao className={style.container_produtos}>
                <div className={style.area_produtos_home}>
                    <div className={style.destaque_prod}>
                        <div className={style.titulo_dest_prod}>
                            Produtos em Destaque
                        </div>
                        <div className={style.area_btn_dest}>
                            <Link to={"/productos"}>
                                <Button onClick={() => {
                                    scrollCima();
                                }} className={style.ver_todos_home} children={"Ver Todos"} />
                            </Link>
                        </div>
                    </div>
                    <div className={style.area_produtos_home}>

                    </div>
                </div>
            </ContainerSessao>
        </ContainerSessao>
    )
}



export default Home;