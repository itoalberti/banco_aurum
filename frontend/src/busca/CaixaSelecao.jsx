import { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';

export default function CaixaSelecao({ endFonteDados, campoChave, campoExibicao, funcaoSelecao }) {
  const [valorSelecionado, setValorSelecionado] = useState({ [campoChave]: 0, [campoExibicao]: 'Não foi possível obter os dados do backend' });
  const [carregandoDados, setCarregandoDados] = useState(false);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    try {
      setCarregandoDados(true);
      fetch(endFonteDados, { method: 'GET' })
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          } else {
            return [{ [campoChave]: 0, [campoExibicao]: 'Não foi possível obter os dados do backend' }];
          }
        })
        .then((listaDados) => {
          setCarregandoDados(false);
          setDados(listaDados);
        });
    } catch (erro) {
      setCarregandoDados(false);
      setDados([
        {
          [campoChave]: 0,
          [campoExibicao]: 'Não foi possível obter os dados do backend',
        },
      ]);
    }
  }, []);

  return (
    <Container border>
      <Row>
        <Col md={11}>
          <Form.Select value={valorSelecionado[campoChave]}>
            {dados.map((item) => {
              return (
                <option key={item[campoChave]} value={item[campoChave]}>
                  {item[campoExibicao]}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Col md={1}>
          <Spinner className={carregandoDados ? 'visible' : 'invisible'}></Spinner>
        </Col>
      </Row>
    </Container>
  );
}
