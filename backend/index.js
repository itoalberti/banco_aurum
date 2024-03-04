import express from 'express';
import Conta from './Modelo/Conta.js';
import rotaConta from './Rotas/rotaConta.js';
import rotaAgencia from './Rotas/rotaAgencia.js';
import cors from 'cors';
import { configDotenv } from 'dotenv';

// dotenv.config()
// configDotenv();
// console.log(process.env);

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/contas', rotaConta);
app.use('/agencias', rotaAgencia);

const porta = 3001;
const hostname = 'localhost';

// aluno36-pfsii    |     porta 4036
// const porta = 4036;
// const hostname = '129.146.68.51';
// const hostname = '129.146.68.51:8443';

app.listen(porta, hostname, () => {
  console.log(`Backend ouvindo em http://${hostname}:${porta}`);
});
