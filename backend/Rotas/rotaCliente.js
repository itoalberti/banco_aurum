import { Router } from 'express';

const rotaCliente = new Router();
// const clienteCtrl = new ClienteCtr();
const clienteCtrl = new ClienteCtrl();

rotaCliente.get('/', clienteCtrl.consultar).post('/', clienteCtrl.cadastrar).put('/', clienteCtrl.alterar).delete('/', clienteCtrl.excluir);
rotaCliente.get('/consultarParaAlterar/:codigo', clienteCtrl.consultarParaAlterar);

export default rotaCliente;
