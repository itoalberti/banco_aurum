import { Button, Container, Table } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';
import { useEffect, useState } from 'react';
import agencias from '../dados/mock';
// import listaContas from '../dados/mockContas.js';

export default function TelaConsultarAgencias(props) {
  const [agencias, setAgencias] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    fetch('http://localhost:3001/agencias')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao carregar agências');
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setAgencias(data);
        setLoad(false);
      });
  }, []);

  return (
    <Pagina>
      <Container>
        <br />
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th style={{ width: '10%' }}>Agência código:</th>
              <th style={{ width: '40%' }}>Endereço</th>
              <th style={{ width: '25%' }}>Cidade</th>
              <th style={{ width: '15%' }}>UF</th>
            </tr>
          </thead>
          <tbody>
            {/* ? →  método map só será chamado se listaClientes for um atributo válido */}
            {load ? (
              <tr>
                <td>carregando</td>
              </tr>
            ) : (
              agencias?.map((agencia) => {
                return (
                  //   necessário identificar cada linha da tabela usando "key"
                  // key → ajuda o React na renderização dos componentes no DOM virtual
                  <tr>
                    <td>{agencia.codigo}</td>
                    <td>{agencia.endereco}</td>
                    <td>{agencia.cidade}</td>
                    <td>{agencia.uf}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
      </Container>
      <LinkContainer to='/'>
        <Button variant='dark'>Voltar</Button>
      </LinkContainer>
    </Pagina>
  );
}
