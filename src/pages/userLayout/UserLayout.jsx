import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import "./UserLayout.css";
import { Outlet } from "react-router-dom";

const UserLayout = () => {

  return (
    <>
      <Header />
      <main id={"conteudo"}>
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default UserLayout;