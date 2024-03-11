import { Router } from 'express';
import AgenciaCtrl from '../Controle/agenciaCtrl.js';

const rotaAgencia = new Router();
const agenciaCtrl = new AgenciaCtrl();

rotaAgencia.get('/', agenciaCtrl.consultar).post('/', agenciaCtrl.cadastrar).put('/', agenciaCtrl.alterar).delete('/', agenciaCtrl.excluir);
rotaAgencia.get('/consultarParaAlterar/:cod_ag', agenciaCtrl.consultarParaAlterar);

export default rotaAgencia;
