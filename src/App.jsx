import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './style/global.css';
import ContextCarrinhoProvider from './context/ContextCarrinho';
import AdminLayout from './pages/admin/AdminLayout';
import UserLayout from './pages/userLayout/UserLayout';

const App = () => {

  return (
    <BrowserRouter>
      <div className="imperial_container">
        <ContextCarrinhoProvider>
          <UserLayout />
        </ContextCarrinhoProvider>
        <AdminLayout />
      </div>
    </BrowserRouter>
  )
}

export default App;
