import "./UserLayout.css";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/layout/Header/HeaderAdmin/HeaderAdmin";
import FooterUser from "../../components/layout/Footer/FooterUser/FooterUser";

const UserLayout = () => {

  return (
    <>
      <HeaderAdmin />
      <main id={"conteudo"}>
        <Outlet />
        <FooterUser />
      </main>
    </>
  );
}

export default UserLayout;