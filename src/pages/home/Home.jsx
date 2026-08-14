import Hero from "../../components/cards/Hero/Hero";
import ContainerSessao from "../../components/Common/container/ContainerSessao";
import stlye from "./Home.module.css";

const Home = () => {
    return (
        <ContainerSessao className={stlye.container_home}>
            <p>Home</p>
            <Hero />
        </ContainerSessao>
    )
}



export default Home;