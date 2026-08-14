import { BrowserRouter } from 'react-router-dom';
import './App.css';
import "./style/global.css";
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Rotas from './routes/Rotas';

const App = () => {
  return (
    <BrowserRouter>
      <div className="imperial_container">
        <Header />
        <main className="conteudo">
          <Rotas />
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;
