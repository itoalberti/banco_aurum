import ProdutoCtrl from '../Controle/produtoCtrl.js';
import { Router } from 'express';

const rotaProduto = new Router();
const produtoCtrl = new ProdutoCtrl();

rotaProduto.get('/', produtoCtrl.consultar).post('/', produtoCtrl.cadastrar).delete('/', produtoCtrl.excluir);

export default rotaProduto;
