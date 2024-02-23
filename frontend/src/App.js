import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaInicial from './telas/TelaInicial';
import TelaCadastrarConta from './telas/TelaCadastrarConta';
import TelaAlterarConta from './telas/TelaAlterarConta';
import TelaExcluir from './telas/TelaExcluirConta';
import TelaConsultarContas from './telas/TelaConsultarContas';
import TelaConsultarAgencias from './telas/TelaConsultarAgencias';
import Tela404 from './telas/Tela404';
import TelaCadastrarAgencia from './telas/TelaCadastrarAgencia';
import 'bootstrap/dist/css/bootstrap.min.css';

// banco de dados: backendpfs2
// user: mauricioalberti
// senha: mauricioalbertipfs2

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TelaInicial />} />
          {/* CONTAS */}
          <Route path='/cadastrarconta' element={<TelaCadastrarConta />} />
          <Route path='/alterarconta' element={<TelaAlterarConta />} />
          <Route path='/excluirconta' element={<TelaExcluir />} />
          <Route path='/consultarcontas' element={<TelaConsultarContas />} />
          {/* AGÊNCIAS */}
          <Route path='/cadastraragencia' element={<TelaCadastrarAgencia />} />
          <Route path='/consultaragencias' element={<TelaConsultarAgencias />} />

          {/* <Route path='/' */}
          <Route path='*' element={<Tela404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
