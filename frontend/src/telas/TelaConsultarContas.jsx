import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
import listaContas from '../dados/mockContas';

export default function TelaConsultarContas(props) {
  const [contas, setContas] = useState([]);

  return (
    <Pagina>
      <Container>
        <br />
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th style={{ width: '10%' }}>Conta nº</th>
              <th style={{ width: '40%' }}>Nome</th>
              <th style={{ width: '25%' }}>Email</th>
              <th style={{ width: '15%' }}>Ano de nascimento</th>
            </tr>
          </thead>
          <tbody>
            {/* ? →  método map só será chamado se listaClientes for um atributo válido */}
            {listaContas?.map((conta) => {
              return (
                //   necessário identificar cada linha da tabela usando "key"
                // key → ajuda o React na rendereização dos componentes no DOM virtual
                <tr key={conta.num}>
                  <td>{conta.num}</td>
                  <td>{conta.nome}</td>
                  <td>{conta.email}</td>
                  <td>{conta.ano}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      <LinkContainer to='/'>
        <Button variant='dark'>Voltar</Button>
      </LinkContainer>
    </Pagina>
  );
}
