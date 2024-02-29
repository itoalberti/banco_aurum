import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
// import listaContas from '../dados/mockContas.js';

export default function TelaCadastrarCliente(props) {
  const [validado, setValidado] = useState(false);
  const [cliente, setCliente] = useState({
    // incluir código da agência → autoincrement, não definido pelo usuário
    nome: '',
    cpf: '',
    dataNasc: '',
    endereco: '',
    cidade: '',
    uf: '',
    email: '',
    telefone: '',
  });

  function manipularMudanca(e) {
    const elemForm = e.currentTarget;
    const id = elemForm.id;
    const valor = elemForm.value;
    setCliente({ ...cliente, [id]: valor });
  }

  function manipulaSubmissao(e) {
    const form = e.currentTarget;
    if (form.checkValidity()) {
      // dados válidos → proceder com o cadastro
      let clientes = props.listaClientes;
      clientes.push(cliente);
      props.setCliente(clientes);
      setValidado(false);
      // não encontrei exibirTabela em nenhum lugar
      props.exibirTabela(true);
    } else {
      setValidado(true);
    }
    e.preventDefault();
    e.stopPropagation();
  }

  //
  // RETURN
  //
  return (
    <>
      <Pagina>
        <h2>Cadastro de novo cliente</h2>
        <br />
        <Form noValidate validated={validado} onSubmit={manipulaSubmissao}>
          {/* NOME */}
          <Form.Group className='mb-3' controlId='nome' style={{ width: '340px' }}>
            <Form.Label>Nome:</Form.Label>
            <Form.Control required type='text' id='nome' value={cliente.nome} onChange={manipularMudanca} />
            <Form.Control.Feedback type='invalid'>Informe o nome do cliente!</Form.Control.Feedback>
          </Form.Group>

          {/* CPF */}
          <Form.Group className='mb-3' controlId='cpf' style={{ width: '140px' }}>
            <Form.Label>CPF:</Form.Label>
            <Form.Control required type='text' id='cpf' value={cliente.cpf} onChange={manipularMudanca} />
            <Form.Control.Feedback type='invalid'>Informe o CPF do cliente!</Form.Control.Feedback>
          </Form.Group>

          {/* DATA DE NASCIMENTO */}
          <Form.Group className='mb-3' controlId='dataNasc' style={{ width: '160px' }}>
            <Form.Label>Data de nascimento:</Form.Label>
            <Form.Control required type='date' id='dataNasc' value={cliente.dataNasc} onChange={manipularMudanca} />
            <Form.Control.Feedback type='invalid'>Informe a data de nascimento do cliente!</Form.Control.Feedback>
          </Form.Group>

          {/* ENDEREÇO */}
          <Form.Group className='mb-3' controlId='endereco' style={{ width: '340px' }}>
            <Form.Label>Endereço:</Form.Label>
            <Form.Control required type='text' id='endereco' value={cliente.endereco} onChange={manipularMudanca} />
            <Form.Control.Feedback type='invalid'>Informe o endereço do cliente!</Form.Control.Feedback>
          </Form.Group>

          {/* CIDADE */}
          {/* <Row> */}
          <Col md='2'>
            <Form.Group className='mb-3' controlId='cidade' style={{ width: '340px' }}>
              <Form.Label>Cidade:</Form.Label>
              <Form.Control required type='cidade' id='cidade' value={cliente.cidade} onChange={manipularMudanca} />
              <Form.Control.Feedback type='invalid'>Informe a cidade onde o cliente reside!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md='2'>
            {/* <Row> */}
            {/* UF */}
            <Form.Group className='mb-3' controlId='uf'>
              <Form.Label style={{ width: '50px' }}>UF:</Form.Label>
              <select className='mb-3' id='uf'>
                <option></option>
                <option value='SP'>SP</option>
                <option value='SP'>PR</option>
                <option value='SP'>MG</option>
              </select>
              {/* <Dropdown.Toggle required id='uf'>
                  akjsdh
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href='AC'>AC</Dropdown.Item>
                  <Dropdown.Item>AL</Dropdown.Item>
                  <Dropdown.Item>AP</Dropdown.Item>
                  <Dropdown.Item>AM</Dropdown.Item>
                  <Dropdown.Item>BA</Dropdown.Item>
                  <Dropdown.Item>CE</Dropdown.Item>
                  <Dropdown.Item>ES</Dropdown.Item>
                  <Dropdown.Item>GO</Dropdown.Item>
                  <Dropdown.Item>MA</Dropdown.Item>
                  <Dropdown.Item>MT</Dropdown.Item>
                  <Dropdown.Item>MS</Dropdown.Item>
                  <Dropdown.Item>MG</Dropdown.Item>
                  <Dropdown.Item>PA</Dropdown.Item>
                  <Dropdown.Item>PB</Dropdown.Item>
                  <Dropdown.Item>PR</Dropdown.Item>
                  <Dropdown.Item>PE</Dropdown.Item>
                  <Dropdown.Item>PI</Dropdown.Item>
                  <Dropdown.Item>RJ</Dropdown.Item>
                  <Dropdown.Item>RN</Dropdown.Item>
                  <Dropdown.Item>RS</Dropdown.Item>
                  <Dropdown.Item>RO</Dropdown.Item>
                  <Dropdown.Item>RR</Dropdown.Item>
                  <Dropdown.Item>SC</Dropdown.Item>
                  <Dropdown.Item>SP</Dropdown.Item>
                  <Dropdown.Item>SE</Dropdown.Item>
                  <Dropdown.Item>TO</Dropdown.Item>
                  <Dropdown.Item>DF</Dropdown.Item>
                </Dropdown.Menu> */}
              <Form.Control.Feedback type='invalid'>Informe o estado da agência!</Form.Control.Feedback>
            </Form.Group>
            {/* EMAIL */}
            <Form.Group className='mb-3' controlId='email' style={{ width: '240px' }}>
              <Form.Label>Email:</Form.Label>
              <Form.Control required type='email' id='email' value={cliente.email} onChange={manipularMudanca} />
              <Form.Control.Feedback type='invalid'>Informe o email do cliente !</Form.Control.Feedback>
            </Form.Group>

            {/* TELEFONE */}
            <Form.Group className='mb-3' controlId='telefone' style={{ width: '240px' }}>
              <Form.Label>Telefone:</Form.Label>
              <Form.Control required type='number' id='telefone' value={cliente.telefone} onChange={manipularMudanca} />
              <Form.Control.Feedback type='invalid'>Informe o telefone do cliente !</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <br />
          <Row>
            {/* BOTÃO DE CADASTRAR */}
            <Col xs='auto'>
              <Button variant='dark' type='submit'>
                Cadastrar cliente
              </Button>
            </Col>

            {/* BOTÃO DE CANCELAR */}
            <Col xs='auto'>
              <LinkContainer to='/'>
                <Button variant='secondary'>Cancelar</Button>
              </LinkContainer>
            </Col>
          </Row>
          <br />
          {/* <br /> */}
        </Form>
      </Pagina>
    </>
  );
}
