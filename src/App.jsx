import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './style/global.css';
import ContextCarrinhoProvider from './context/ContextCarrinho';
import AdminLayout from './pages/admin/AdminLayout';
import UserLayout from './pages/userLayout/UserLayout';

const App = () => {

  return (
    <BrowserRouter>
      <ContextCarrinhoProvider>
        <div className="imperial_container">
          <UserLayout />
          <AdminLayout />
        </div>
      </ContextCarrinhoProvider>
    </BrowserRouter>
  )
}

export default App;
