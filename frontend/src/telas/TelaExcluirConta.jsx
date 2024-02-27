import { Button, Col, Form, Row } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';

export default function TelaExcluirConta() {
  return (
    <Pagina>
      <h2>Exclusão de conta</h2>
      <h4>Exibir nome e CPF do correntista</h4>
      <br />
      <Form>
        {/* EMAIL */}
        {/* <Form.Group className='mb-3' controlId='formEmail' style={{ width: '340px' }}>
          <Form.Label>Digite o email da conta que deseja excluir:</Form.Label>
          <Form.Control required type='email' />
          <Form.Control.Feedback type='invalid'>Informe o email do cliente!</Form.Control.Feedback>
        </Form.Group> */}

        {/* NÚMERO */}
        <Form.Group className='mb-3' controlId='formEmail' style={{ width: '140px' }}>
          <Form.Label>Digite o número da conta que deseja excluir:</Form.Label>
          <Form.Control required type='number' />
          <Form.Control.Feedback type='invalid'>Informe o número da conta a ser excluída!</Form.Control.Feedback>
        </Form.Group>

        <Row>
          {/* SENHA */}
          <Col md='2'>
            <Form.Group className='mb-3' controlId='formSenha' style={{ width: '150px' }}>
              <Form.Label>Senha:</Form.Label>
              <Form.Control required type='password' />
            </Form.Group>
          </Col>

          {/* REPETIR A SENHA */}
          <Col md='2'>
            <Form.Group className='mb-3' controlId='formSenha' style={{ width: '150px' }}>
              <Form.Label>Repita a senha:</Form.Label>
              <Form.Control required type='password' />
            </Form.Group>
          </Col>
        </Row>
        <br />
        <Row>
          {/* BOTÃO DE CONFIRMAR EXCLUSÃO */}
          <Col xs='auto'>
            <Button variant='danger' type='submit'>
              Confirmar exclusão
            </Button>
          </Col>

          {/* BOTÃO DE CANCELAR */}
          <Col xs='auto'>
            <LinkContainer to='/'>
              <Button variant='secondary' type='submit'>
                Cancelar
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Form>
    </Pagina>
  );
}
