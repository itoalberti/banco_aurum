import express from 'express';
// import Conta from './Modelo/Conta.js';
// import rotaConta from './Rotas/rotaConta.js';
import rotaCliente from './Rotas/rotaCliente.js';
import rotaAgencia from './Rotas/rotaAgencia.js';
import cors from 'cors';
import dotenv from 'dotenv';
import session from 'express-session';
import rotaLogin from './Rotas/rotaLogin.js';

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
// app.use('/contas', rotaConta);
app.use('/clientes', rotaCliente);
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
