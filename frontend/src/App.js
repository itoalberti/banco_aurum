import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TelaInicial from './telas/TelaInicial';
import TelaCadastrarCliente from './telas/TelaCadastrarCliente';
import TelaAlterarCliente from './telas/TelaAlterarCliente';
import TelaConsultarProdutos from './telas/TelaConsultarProdutos';
import TelaConsultarAgencias from './telas/TelaConsultarAgencias';
import Tela404 from './telas/Tela404';
import TelaCadastrarAgencia from './telas/TelaCadastrarAgencia';
import TelaExcluirCliente from './telas/TelaExcluirCliente';
import TelaAlterarAgencia from './telas/TelaAlterarAgencia';
import TelaConsultarClientes from './telas/TelaConsultarClientes';
import TelaCadastrarProduto from './telas/TelaCadastrarProduto';
import TelaExcluirProduto from './telas/TelaExcluirProduto';
import TelaContratarProduto from './telas/TelaContratarProduto';
import TelaCadastrarProdEmAgencia from './telas/TelaCadastrarProdEmAgencia';
// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

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
          <Route path='/consultarclientes' element={<TelaConsultarClientes />} />
          <Route path='/contratarproduto' element={<TelaContratarProduto />} />

          {/* PRODUTOS */}
          <Route path='/cadastrarproduto' element={<TelaCadastrarProduto />} />
          <Route path='/excluirproduto' element={<TelaExcluirProduto />} />
          <Route path='/consultarprodutos' element={<TelaConsultarProdutos />} />

          {/* AGÊNCIAS */}
          <Route path='/cadastraragencia' element={<TelaCadastrarAgencia />} />
          <Route path='/consultaragencias' element={<TelaConsultarAgencias />} />
          <Route path='/alteraragencia' element={<TelaAlterarAgencia />} />
          <Route path='/cadastrarprodutoemagencia' element={<TelaCadastrarProdEmAgencia />} />

          {/* <Route path='/' */}
          <Route path='*' element={<Tela404 />} />
        </Routes>
      </BrowserRouter>
    </>
    // <Navbar expand='lg' className='bg-body-tertiary'>
    //   <Container>
    //     <Navbar.Brand href='TelaCadastrarCliente'>BANCO AURUM</Navbar.Brand>
    //     <Navbar.Toggle aria-controls='basic-navbar-nav' />
    //     <Navbar.Collapse id='basic-navbar-nav'>
    //       <Nav className='me-auto'>
    //         {/* <Nav.Link href='#home'>Home</Nav.Link> */}
    //         <Nav.Link href='/cadastrarcliente'>Link</Nav.Link>
    //         <NavDropdown title='Clientes' id='basic-nav-dropdown'>
    //           <NavDropdown.Item href='/cadastrarcliente'>Cadastrar Cliente</NavDropdown.Item>
    //           <NavDropdown.Item href='#action/3.2'>Alterar Cliente</NavDropdown.Item>
    //           <NavDropdown.Item href='#action/3.2'>Excluir Cliente</NavDropdown.Item>
    //           <NavDropdown.Item href='#action/3.2'>Consultar Clientes</NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default App;
