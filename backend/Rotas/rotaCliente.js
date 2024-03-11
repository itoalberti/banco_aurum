import ClienteCtrl from '../Controle/clienteCtrl';
import { Router } from 'express';

const rotaCliente = new Router();
const clienteCtrl = new ClienteCtrl();

rotaCliente.get('/', clienteCtrl.consultar).post('/', clienteCtrl.cadastrar).put('/', clienteCtrl.alterar).delete('/', clienteCtrl.excluir);
rotaCliente.get('/consultarParaAlterar/:cod_cli', clienteCtrl.consultarParaAlterar);

export default rotaCliente;
