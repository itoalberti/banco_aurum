import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
import listaClientes from '../dados/mockClientes';

export default function TelaConsultarClientes(props) {
  const [clientes, setClientes] = useState([]);

  return (
    <Pagina>
      <Container>
        <br />
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th style={{ width: '5%' }}>Conta</th>
              <th style={{ width: '5%' }}>Agência</th>
              <th style={{ width: '20%' }}>Nome</th>
              <th style={{ width: '10%' }}>CPF</th>
              <th style={{ width: '5%' }}>Data de nascimento</th>
              <th style={{ width: '20%' }}>Endereço</th>
              <th style={{ width: '10%' }}>Cidade</th>
              <th style={{ width: '5%' }}>UF</th>
              <th style={{ width: '10%' }}>Email</th>
              <th style={{ width: '10%' }}>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {/* ? →  método map só será chamado se listaClientes for um atributo válido */}
            {listaClientes?.map((cliente) => {
              return (
                //   necessário identificar cada linha da tabela usando "key"
                // key → ajuda o React na rendereização dos componentes no DOM virtual
                <tr key={cliente.cpf}>
                  <td>{cliente.cod_cli}</td>
                  <td>{cliente.cod_ag}</td>
                  <td>{cliente.nome}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.dataNasc}</td>
                  <td>{cliente.endereco}</td>
                  <td>{cliente.cidade}</td>
                  <td>{cliente.uf}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.telefone}</td>
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
