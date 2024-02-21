import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaInicial from './telas/TelaInicial';
import TelaCadastrarConta from './telas/TelaCadastrarConta';
import TelaAlterarConta from './telas/TelaAlterarConta';
import TelaExcluir from './telas/TelaExcluirConta';
import TelaConsultarContas from './telas/TelaConsultarContas';
import Tela404 from './telas/Tela404';
import TelaCadastrarAgencia from './telas/TelaCadastrarAgencia';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TelaInicial />} />
          <Route path='/cadastrarconta' element={<TelaCadastrarConta />} />
          <Route path='/cadastraragencia' element={<TelaCadastrarAgencia />} />
          <Route path='/alterarconta' element={<TelaAlterarConta />} />
          <Route path='/excluirconta' element={<TelaExcluir />} />
          <Route path='/consultarcontas' element={<TelaConsultarContas />} />
          {/* <Route path='/' */}
          <Route path='*' element={<Tela404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
