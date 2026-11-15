import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import Rotas from "../../routes/Rotas"
import "./UserLayout.css"

const UserLayout = () => {

  return (
    <>
      <Header />
      <main id={"conteudo"}>
        <Rotas />
        <Footer />
      </main>
    </>
  );
}

export default UserLayout;