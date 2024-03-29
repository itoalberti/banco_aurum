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
      <Row className='d-flex align-items-center justify-content-center'>
        <Col>
          {/* CADASTRAR CONTA */}
          <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/cadastrarconta'>
              <Button variant='dark'>Cadastrar nova conta</Button>
            </LinkContainer>
          </Row>

          {/* ALTERAR CONTA */}
          <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/alterarconta'>
              <Button variant='dark'>Alterar conta existente</Button>
            </LinkContainer>
          </Row>

          {/* EXCLUIR CONTA */}
          <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/excluirconta'>
              <Button variant='dark'>Excluir conta</Button>
            </LinkContainer>
          </Row>

          {/* CONSULTAR CONTAS */}
          <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/consultarcontas'>
              <Button
                variant='dark'
                // onClick={() => {
                //   exibirTabela(true);
                // }}
              >
                Consultar contas existentes
              </Button>
            </LinkContainer>
          </Row>
          <br />
          <br />

          {/* CADASTRAR AGÊNCIA */}
          <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/cadastraragencia'>
              <Button variant='dark'>Cadastrar nova agência</Button>
            </LinkContainer>
          </Row>

          {/* CONSULTAR AGÊNCIAS */}
          <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/consultaragencias'>
              <Button variant='dark'>Consultar agências</Button>
            </LinkContainer>
          </Row>
        </Col>
        <Col className='d-flex align-items-center justify-content-center'>
          <Image src='https://cdn.icon-icons.com/icons2/2104/PNG/512/bank_icon_129525.png' width={400} fluid />
        </Col>
      </Row>
    </Pagina>
  );
}
