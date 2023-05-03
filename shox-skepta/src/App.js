import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import MostruarioProdutos from './Pages/Mostruario';
import NotFound from './Pages/NotFound';
import SkeptaTailwind from './Pages/SkeptaTailwind';
import ProdutoDetalhes from './Pages/ProdutoDetalhes';
import Detalhes from './Pages/Detalhes';

// SPA rotas
function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/skepta-shox' element={<SkeptaTailwind/>}/>
          <Route path='/mostruario' element={<MostruarioProdutos/>}/>
          <Route path='/*' element={<NotFound/>}/>
          <Route path='/modelo/:id/:name' element={<ProdutoDetalhes/>}>
            <Route path='detalhes' element={<Detalhes/>}/>
          </Route>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
