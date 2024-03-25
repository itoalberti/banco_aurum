import { Container } from 'react-bootstrap';
import Cabecalho from './Cabecalho';
import Menu from './Menu';

export default function Pagina(props) {
  return (
    <>
      <Cabecalho texto='BANCO AURUM' />
      <Menu />
      <Container>{props.children}</Container>
    </>
  );
}
