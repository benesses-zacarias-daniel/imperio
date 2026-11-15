import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './style/global.css';
import ContextCarrinhoProvider from './context/ContextCarrinho';
import AdminLayout from './pages/admin/AdminLayout';
import UserLayout from './pages/userLayout/UserLayout';
import RotasAutenticar from './routes/RotasAutenticar';

const App = () => {

  return (
    <BrowserRouter>
      <div className="imperial_container">
        <Routes>
          <Route path={"/admin/*"} element={<AdminLayout />} />
          <Route path={"/autenticar/*"} element={<RotasAutenticar />} />

          <Route path={"/*"} element={
            <ContextCarrinhoProvider>
              <UserLayout />
            </ContextCarrinhoProvider>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
