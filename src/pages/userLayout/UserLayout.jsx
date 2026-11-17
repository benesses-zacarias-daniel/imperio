import "./UserLayout.css";
import { Outlet } from "react-router-dom";
import HeaderUser from "../../components/layout/Header/HeaderUser/HeaderUser";
import FooterUser from "../../components/layout/Footer/FooterUser/FooterUser";

const UserLayout = () => {

  return (
    <>
      <HeaderUser />
      <main id={"conteudo"}>
        <Outlet />
        <FooterUser />
      </main>
    </>
  );
}

export default UserLayout;