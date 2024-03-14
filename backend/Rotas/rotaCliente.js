import ClienteCtrl from '../Controle/clienteCtrl.js';
import { Router } from 'express';
import ProdutoCtrl from '../Controle/produtoCtrl.js';

const rotaCliente = new Router();
const clienteCtrl = new ClienteCtrl();

rotaCliente.get('/', clienteCtrl.consultar).post('/', clienteCtrl.cadastrar).put('/', clienteCtrl.alterar).delete('/', clienteCtrl.excluir);
rotaCliente.post('/associarProdutoCliente', clienteCtrl.associarProdutoCliente);

rotaCliente.get('/consultarParaAlterar/:cod_cli', clienteCtrl.consultarParaAlterar);

export default rotaCliente;
