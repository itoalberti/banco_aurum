import { Button, Col, Form, Row } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
// import listaContas from '../dados/mockContas.js';

export default function TelaCadastrarConta(props) {
  const [validado, setValidado] = useState(false);
  const [conta, setConta] = useState({
    num: '',
    cpf: '',
    email: '',
    nome: '',
    senha: '',
    ano: '',
    // incluir código da agência
  });

  function manipularMudanca(e) {
    const elemForm = e.currentTarget;
    const id = elemForm.id;
    const valor = elemForm.value;
    setConta({ ...conta, [id]: valor });
  }

  function manipulaSubmissao(e) {
    const form = e.currentTarget;
    if (form.checkValidity()) {
      // dados válidos → proceder com o cadastro
      let contas = props.listaContas;
      contas.push(conta);
      props.setConta(contas);
      setValidado(false);
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
        <h2>Cadastro de nova conta</h2>
        <br />
        <Form noValidate validated={validado} onSubmit={manipulaSubmissao}>
          {/* NOME */}
          <Form.Group className='mb-3' controlId='nome' style={{ width: '340px' }}>
            <Form.Label>Nome:</Form.Label>
            <Form.Control required type='text' id='nome' value={conta.nome} onChange={manipularMudanca} />
            <Form.Control.Feedback type='invalid'>Informe o nome do cliente!</Form.Control.Feedback>
          </Form.Group>

          {/* CPF */}
          <Form.Group className='mb-3' controlId='nome' style={{ width: '340px' }}>
            <Form.Label>CPF:</Form.Label>
            <Form.Control required type='text' id='cpf' value={conta.cpf} onChange={manipularMudanca} />
            <Form.Control.Feedback type='invalid'>Informe o CPF do cliente!</Form.Control.Feedback>
          </Form.Group>

          {/* ANO DE NASCIMENTO */}
          <Form.Group className='mb-3' controlId='ano' style={{ width: '150px' }}>
            <Form.Label>Ano de nascimento:</Form.Label>
            <Form.Control required id='ano' type='number' min='1900' value={conta.ano} onChange={manipularMudanca} />
            <Form.Control.Feedback type='invalid'>Informe o ano de nascimento!</Form.Control.Feedback>
          </Form.Group>

          {/* EMAIL */}
          <Form.Group className='mb-3' controlId='email' style={{ width: '340px' }}>
            <Form.Label>Email:</Form.Label>
            <Form.Control required type='email' id='email' value={conta.email} onChange={manipularMudanca} />
            <Form.Control.Feedback type='invalid'>Informe o email do cliente!</Form.Control.Feedback>
          </Form.Group>

          <Row>
            {/* SENHA */}
            <Col md='2'>
              <Form.Group className='mb-3' controlId='senha' style={{ width: '150px' }}>
                <Form.Label>Senha:</Form.Label>
                <Form.Control required type='password' id='senha' value={conta.senha} onChange={manipularMudanca} />
                <Form.Control.Feedback type='invalid'>Informe a sua senha!</Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* REPETIR A SENHA */}
            {/* <Col md='2'>
              <Form.Group className='mb-3' controlId='senha2' style={{ width: '150px' }}>
                <Form.Label>Repita a senha:</Form.Label>
                <Form.Control required type='password' id='senha2' onChange={manipularMudanca} />
                <Form.Control.Feedback type='invalid'>Repita a sua senha!</Form.Control.Feedback>
              </Form.Group>
            </Col> */}
          </Row>

          <br />
          <Row>
            {/* BOTÃO DE CADASTRAR */}
            <Col xs='auto'>
              <Button variant='dark' type='submit'>
                Cadastrar conta
              </Button>
            </Col>

            {/* BOTÃO DE CANCELAR */}
            <Col xs='auto'>
              <LinkContainer to='/'>
                <Button variant='secondary'>Cancelar</Button>
              </LinkContainer>
            </Col>
          </Row>
        </Form>
        <br />
      </Pagina>
    </>
  );
}
