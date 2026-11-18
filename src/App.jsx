import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './style/global.css';
import ContextCarrinhoProvider from './context/ContextCarrinho';
import RotasAutenticar from './routes/RotasAutenticar';
import RotasAdmin from './routes/RotasAdmin';
import RotasCliente from './routes/RotasCliente';
import ContextAdminLogadoProvider from './context/ContextAdminLogado';

const App = () => {

  return (
    <BrowserRouter>
      <div className="imperial_container">
        <Routes>
          <Route path={"/admin/*"} element={
            <ContextAdminLogadoProvider>
              <RotasAdmin />
            </ContextAdminLogadoProvider>
          } />
          <Route path={"/autenticar/*"} element={<RotasAutenticar />} />
          <Route path={"/*"} element={
            <ContextCarrinhoProvider>
              <RotasCliente />
            </ContextCarrinhoProvider>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
