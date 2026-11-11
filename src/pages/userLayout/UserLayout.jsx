import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import Rotas from "../../routes/Rotas"
import style from "./UserLayout.module.css"
import { useLocation } from "react-router-dom";

const UserLayout = () => {
  const { pathname } = useLocation();
  return (
    <>{

      (!pathname.startsWith("/admin")) && (
        <>
          <Header />

          <main id={style.conteudo}>
            <Rotas />
            <Footer />
          </main>
        </>
      )
    }
    </>
  );
}

export default UserLayout;