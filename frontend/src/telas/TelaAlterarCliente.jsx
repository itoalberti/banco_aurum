import { Button, Col, Form, Row } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';

export default function TelaAlterarCliente() {
  return (
    <Pagina>
      <h2>Alteração de dados de cliente</h2>
      <br />
      <h4>Exibir aqui o nome e o CPF do correntista</h4>
      <br />
      <Form>
        {/* ENDEREÇO */}
        <Form.Group className='mb-3' controlId='endereco' style={{ width: '340px' }}>
          <Form.Label>Novo endereço:</Form.Label>
          <Form.Control required type='endereco' id='endereco' />
          <Form.Control.Feedback type='invalid'>Informe o endereço do cliente!</Form.Control.Feedback>
        </Form.Group>

        {/* CIDADE */}
        <Form.Group className='mb-3' controlId='cidade' style={{ width: '340px' }}>
          <Form.Label>Nova cidade:</Form.Label>
          <Form.Control required type='cidade' id='cidade' />
          <Form.Control.Feedback type='invalid'>Informe a cidade do cliente!</Form.Control.Feedback>
        </Form.Group>

        {/* UF */}
        <Form.Group className='mb-3' controlId='uf'>
          <Form.Label style={{ width: '50px' }}>UF:</Form.Label>
          <select className='mb-3' id='uf'>
            <option></option>
            <option value='SP'>SP</option>
            <option value='SP'>PR</option>
            <option value='SP'>MG</option>
          </select>
        </Form.Group>

        {/* EMAIL */}
        <Form.Group className='mb-3' controlId='email' style={{ width: '340px' }}>
          <Form.Label>Novo email:</Form.Label>
          <Form.Control required type='email' />
          <Form.Control.Feedback type='invalid'>Informe o novo email do cliente!</Form.Control.Feedback>
        </Form.Group>

        {/* TELEFONE */}
        <Form.Group className='mb-3' controlId='telefone' style={{ width: '140px' }}>
          <Form.Label>Novo telefone:</Form.Label>
          <Form.Control required type='number' />
          <Form.Control.Feedback type='invalid'>Informe o novo telfone do cliente!</Form.Control.Feedback>
        </Form.Group>

        {/* SENHA */}
        <Col md='2'>
          <Form.Group className='mb-3' controlId='formSenha' style={{ width: '150px' }}>
            <Form.Label>Nova senha:</Form.Label>
            <Form.Control required type='password' />
          </Form.Group>
        </Col>
        <br />

        <Row>
          {/* BOTÃO DE CONFIRMAR ALTERAÇÕES */}
          <Col xs='auto'>
            <Button variant='dark' type='submit'>
              Confirmar alterações
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
