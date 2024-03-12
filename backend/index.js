import express from 'express';
import rotaCliente from './Rotas/rotaCliente.js';
import rotaAgencia from './Rotas/rotaAgencia.js';
import rotaProduto from './Rotas/rotaProduto.js';
import rotaLogin from './Rotas/rotaLogin.js';
import cors from 'cors';
import dotenv from 'dotenv';
import session from 'express-session';
import { verificarAcesso } from './Seguranca/Autenticacao.js';

console.log('dotenv.config():');
dotenv.config();
console.log('process.env():');
console.log(process.env);

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SEGREDO,
    resave: false,
    saveUninitialized: true,
    maxAge: 1000 * 60 * 5,
  })
);

// app.use('/login', rotaLogin);
app.use('/login', rotaLogin);
app.use('/agencia', verificarAcesso, rotaAgencia);
app.use('/cliente', verificarAcesso, rotaCliente);
app.use('/produto', verificarAcesso, rotaProduto);

const porta = 3001;
const hostname = 'localhost';

// aluno36-pfsii    |     porta 4036
// const porta = 4036;
// const hostname = '129.146.68.51';
// const hostname = '129.146.68.51:8443';

app.listen(porta, hostname, () => {
  console.log(`Backend ouvindo em http://${hostname}:${porta}`);
});
