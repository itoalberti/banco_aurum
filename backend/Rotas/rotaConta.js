// OK
import { Router } from 'express';
import ContaCtrl from '../Controle/contaCtrl.js';

const rotaConta = new Router();
const contaCtrl = new ContaCtrl();

rotaConta.get('/', contaCtrl.consultar).post('/', contaCtrl.cadastrar).put('/', contaCtrl.alterar).delete('/', contaCtrl.excluir);
rotaConta.get('/consultarParaAlterar/:num', contaCtrl.consultarParaAlterar);

export default rotaConta;
