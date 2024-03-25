import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

export default function Menu() {
  return (
    <Navbar className='m-0' bg='light' expand='lg'>
      <Container className='m-0'>
        <Navbar.Brand href='/'>HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavDropdown title='CLIENTES' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/cadastrarcliente'>Cadastrar novo cliente</NavDropdown.Item>
              <NavDropdown.Item href='/consultarclientes'>Consultar clientes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='AGÊNCIAS' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/cadastraragencia'>Cadastrar nova agência</NavDropdown.Item>
              <NavDropdown.Item href='/consultaragencias'>Consultar agências</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='PRODUTOS' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/cadastrarproduto'>Cadastrar novo produto</NavDropdown.Item>
              <NavDropdown.Item href='/consultarprodutos'>Consultar produtos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href='sair'>Sair</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
