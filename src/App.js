import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaInicial from './telas/TelaInicial';
import TelaCadastrarConta from './telas/TelaCadastrarConta';
import TelaAlterar from './telas/TelaAlterar';
import TelaExcluir from './telas/TelaExcluir';
import TelaConsultar from './telas/TelaConsultar';
import Tela404 from './telas/Tela404';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TelaInicial />} />
          <Route path='/cadastrarconta' element={<TelaCadastrarConta />} />
          <Route path='/alterarconta' element={<TelaAlterar />} />
          <Route path='/excluirconta' element={<TelaExcluir />} />
          <Route path='/consultarcontas' element={<TelaConsultar />} />
          {/* <Route path='/' */}
          <Route path='*' element={<Tela404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
