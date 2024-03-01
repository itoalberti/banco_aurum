import { Row, Button, Col, Image } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
import listaContas from '../dados/mockContas';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TelaInicial(props) {
  const [exibirTabela, setExibirTabela] = useState(true);
  const [contas, setContas] = useState(listaContas);

  return (
    <Pagina>
      <Row md='5'>
        <Col>
          {/* ______________________________CLIENTE______________________________ */}
          {/* CADASTRAR CLIENTE */}
          <Row className='justify-content-md-center p-2' md='1'>
            <LinkContainer to='/cadastrarcliente'>
              <Button variant='dark'>Cadastrar cliente</Button>
            </LinkContainer>
          </Row>
          {/* ALTERAR CLIENTE */}
          <Row className='justify-content-md-center p-2' md='1'>
            <LinkContainer to='/alterarcliente'>
              <Button variant='dark'>Alterar cliente</Button>
            </LinkContainer>
          </Row>
          {/* EXCLUIR CLIENTE */}
          <Row className='justify-content-md-center p-2' md='1'>
            <LinkContainer to='/excluircliente'>
              <Button variant='dark'>Excluir cliente</Button>
            </LinkContainer>
          </Row>
          {/* CONSULTAR CLIENTES */}
          <Row className='justify-content-md-center p-2' md='1'>
            <LinkContainer to='/consultarclientes'>
              <Button
                variant='dark'
                // onClick={() => {
                //   exibirTabela(true);
                // }}
              >
                Consultar clientes
              </Button>
            </LinkContainer>
          </Row>
        </Col>
        <Col>
          {/* ______________________________CONTA______________________________ */}
          {/* CADASTRAR CONTA */}
          <Row className='justify-content-md-center p-2' md='1'>
            <LinkContainer to='/cadastrarconta'>
              <Button variant='dark'>Cadastrar conta</Button>
            </LinkContainer>
          </Row>
          {/* ALTERAR CONTA */}
          <Row className='justify-content-md-center p-2' md='1'>
            <LinkContainer to='/alterarconta'>
              <Button variant='dark'>Alterar conta</Button>
            </LinkContainer>
          </Row>
          {/* EXCLUIR CONTA */}
          <Row className='justify-content-md-center p-2' md='1'>
            <LinkContainer to='/excluirconta'>
              <Button variant='dark'>Excluir conta</Button>
            </LinkContainer>
          </Row>
          {/* CONSULTAR CONTAS */}
          <Row className='justify-content-md-center p-2' md='1'>
            <LinkContainer to='/consultarcontas'>
              <Button
                variant='dark'
                // onClick={() => {
                //   exibirTabela(true);
                // }}
              >
                Consultar contas
              </Button>
            </LinkContainer>
          </Row>
          <br />
          <br />
        </Col>
        <Col>
          {/* ______________________________AGÊNCIA______________________________ */}
          {/* CADASTRAR AGÊNCIA */}
          <Row className='justify-content-md-center p-2' md='1'>
            <LinkContainer to='/cadastraragencia'>
              <Button variant='dark'>Cadastrar nova agência</Button>
            </LinkContainer>
          </Row>
          {/* CONSULTAR AGÊNCIAS */}
          <Row className='justify-content-md-center p-2' md='1'>
            <LinkContainer to='/consultaragencias'>
              <Button variant='dark'>Consultar agências</Button>
            </LinkContainer>
          </Row>
          {/* ALTERAR AGÊNCIA */}
          <Row className='justify-content-md-center p-2' md='1'>
            <LinkContainer to='/alteraragencia'>
              <Button variant='dark'>Alterar agência</Button>
            </LinkContainer>
          </Row>
          {/* EXCLUIR AGÊNCIA */}
          <Row className='justify-content-md-center p-2' md='1'>
            <LinkContainer to='/excluirconta'>
              <Button variant='dark'>Excluir agência</Button>
            </LinkContainer>
          </Row>
        </Col>
        <Col className='d-flex align-items-center justify-content-center' md='3'>
          <Image src='https://cdn.icon-icons.com/icons2/2104/PNG/512/bank_icon_129525.png' width={400} fluid />
        </Col>
      </Row>
    </Pagina>
  );
}
