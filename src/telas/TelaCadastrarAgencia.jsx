import { Button, Col, Form, Row } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
// import listaContas from '../dados/mockContas.js';

export default function TelaCadastrarAgencia(props) {
  const [validado, setValidado] = useState(false);
  const [agencia, setAgencia] = useState({
    // incluir código da agência → autoincrement, não definido pelo usuário
    codigo: '',
    endereco: '',
    cidade: '',
    uf: '',
  });

  function manipularMudanca(e) {
    const elemForm = e.currentTarget;
    const id = elemForm.id;
    const valor = elemForm.value;
    setAgencia({ ...agencia, [id]: valor });
  }

  function manipulaSubmissao(e) {
    const form = e.currentTarget;
    if (form.checkValidity()) {
      // dados válidos → proceder com o cadastro
      let agencias = props.listaAgencias;
      agencias.push(agencia);
      props.setAgencia(agencias);
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
        <h2>Cadastro de nova agência</h2>
        <br />
        <Form noValidate validated={validado} onSubmit={manipulaSubmissao}>
          {/* ENDEREÇO */}
          <Form.Group className='mb-3' controlId='endereco' style={{ width: '340px' }}>
            <Form.Label>Nome:</Form.Label>
            <Form.Control required type='text' id='endereco' value={agencia.endereco} onChange={manipularMudanca} />
            <Form.Control.Feedback type='invalid'>Informe o endereço da agência!</Form.Control.Feedback>
          </Form.Group>

          {/* CIDADE */}
          <Form.Group className='mb-3' controlId='cidade' style={{ width: '340px' }}>
            <Form.Label>Email:</Form.Label>
            <Form.Control required type='email' id='cidade' value={agencia.cidade} onChange={manipularMudanca} />
            <Form.Control.Feedback type='invalid'>Informe a cidade da agência!</Form.Control.Feedback>
          </Form.Group>

          <Row>
            {/* UF */}
            <Col md='2'>
              <Form.Group className='mb-3' controlId='uf' style={{ width: '150px' }}>
                <Form.Label>Senha:</Form.Label>
                <Form.Control required type='text' id='uf' value={agencia.uf} onChange={manipularMudanca} />
                <Form.Control.Feedback type='invalid'>Informe o estado da agência!</Form.Control.Feedback>
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

          {/* ANO DE NASCIMENTO */}
          <Form.Group className='mb-3' controlId='ano' style={{ width: '150px' }}>
            <Form.Label>Ano de nascimento:</Form.Label>
            <Form.Control required id='ano' type='number' min='1900' value={agencia.ano} onChange={manipularMudanca} />
            <Form.Control.Feedback type='invalid'>Informe o ano de nascimento!</Form.Control.Feedback>
          </Form.Group>

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
      </Pagina>
    </>
  );
}
