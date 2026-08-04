import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Routas from './routes/Routas';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <section id="conteudo">
        <Routas />
      </section>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
