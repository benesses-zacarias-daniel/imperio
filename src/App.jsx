import { BrowserRouter } from 'react-router-dom';
import './App.css';
import "./style/global.css";
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Rotas from './routes/Rotas';
import ScrollCima from './components/layout/scroll/ScrollCima';

const App = () => {
  return (
    <BrowserRouter>
      <div className="imperial_container">
        <Header />
        <ScrollCima />
        <main id="conteudo">
          <Rotas />
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;
