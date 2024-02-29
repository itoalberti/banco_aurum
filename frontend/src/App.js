import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TelaInicial from './telas/TelaInicial';
import TelaCadastrarCliente from './telas/TelaCadastrarCliente';
import TelaAlterarCliente from './telas/TelaAlterarCliente';
import TelaCadastrarConta from './telas/TelaCadastrarConta';
import TelaAlterarConta from './telas/TelaAlterarConta';
import TelaConsultarContas from './telas/TelaConsultarContas';
import TelaExcluirConta from './telas/TelaExcluirConta';
import TelaConsultarAgencias from './telas/TelaConsultarAgencias';
import Tela404 from './telas/Tela404';
import TelaCadastrarAgencia from './telas/TelaCadastrarAgencia';
import TelaExcluirCliente from './telas/TelaExcluirCliente';

// banco de dados: backendpfs2
// user: mauricioalberti
// senha: mauricioalbertipfs2

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TelaInicial />} />
          {/* CLIENTES */}
          <Route path='/cadastrarcliente' element={<TelaCadastrarCliente />} />
          <Route path='/alterarcliente' element={<TelaAlterarCliente />} />
          <Route path='/excluircliente' element={<TelaExcluirCliente />} />

          {/* CONTAS */}
          <Route path='/cadastrarconta' element={<TelaCadastrarConta />} />
          <Route path='/alterarconta' element={<TelaAlterarConta />} />
          <Route path='/excluirconta' element={<TelaExcluirConta />} />
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
