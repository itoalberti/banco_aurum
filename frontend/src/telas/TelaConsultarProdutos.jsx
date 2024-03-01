import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
import listaProdutos from '../dados/mockProdutos';

export default function TelaConsultarProdutos(props) {
  const [produtos, setProdutos] = useState([]);

  return (
    <Pagina>
      <Container>
        <br />
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th style={{ width: '10%' }}>Código</th>
              <th style={{ width: '40%' }}>Nome</th>
            </tr>
          </thead>
          <tbody>
            {/* ? →  método map só será chamado se listaClientes for um atributo válido */}
            {listaProdutos?.map((produto) => {
              return (
                //   necessário identificar cada linha da tabela usando "key"
                // key → ajuda o React na rendereização dos componentes no DOM virtual
                <tr key={produto.cod_prod}>
                  <td>{produto.cod_prod}</td>
                  <td>{produto.nome}</td>
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
