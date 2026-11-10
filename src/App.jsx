import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './style/global.css';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Rotas from './routes/Rotas';
import ContextCarrinhoProvider from './context/ContextCarrinho';

const App = () => {

  return (
    <BrowserRouter>
      <ContextCarrinhoProvider>
        <div className="imperial_container">
          <Header />
          <main id="conteudo">
            <Rotas />
            <Footer />
          </main>
        </div>
      </ContextCarrinhoProvider>
    </BrowserRouter>
  )
}

export default App;
