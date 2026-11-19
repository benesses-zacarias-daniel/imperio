import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './style/global.css';
import ContextCarrinhoProvider from './context/ContextCarrinho';
import RotasAutenticar from './routes/RotasAutenticar';
import RotasAdmin from './routes/RotasAdmin';
import RotasCliente from './routes/RotasCliente';
import ContextAdminLogadoProvider from './context/ContextAdminLogado';
import ContainerDiv from './components/Common/container/ContainerDiv';

const App = () => {

  return (
    <BrowserRouter>

      <ContainerDiv className="imperial_container">

        <ContextCarrinhoProvider>

          <Routes>

            <Route path={"/*"} element={

              <RotasCliente />

            } />

          </Routes>

        </ContextCarrinhoProvider>

        <ContextAdminLogadoProvider>

          <Routes>

            <Route path={"/admin/*"} element={

              <RotasAdmin />

            } />

            <Route path={"/autenticar/*"} element={

              <RotasAutenticar />

            } />

          </Routes>

        </ContextAdminLogadoProvider>

      </ContainerDiv>

    </BrowserRouter>
  )
}

export default App;
