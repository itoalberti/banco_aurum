import mysql from 'mysql2/promise';

export default async function conectar() {
  if (global.conexao && global.conexao.state !== 'disconnected') {
    return global.conexao;
  }
  const conn = await mysql.createPool({
    // const conn = mysql.createPool({

    // PARA USAR O BANCO LOCAL:
    host: '129.146.68.51',
    // user: 'mauricioalberti',
    // password: 'mauricioalbertipfs2',
    user: process.env.USUARIO_BD,
    password: process.env.SENHA_BD,
    database: 'backendpfs2',
    port: 3306,

    // waitForConnections: true,
    // connectionLimit: 10,
    // queueLimit: 0,
  });

  global.conexao = conn;
  return conn;
}

// CÓDIGO RENATO:
// export default async function conectar() {
//   if (global.poolConexoes) {
//     return await global.poolConexoes.getConnection();
//   }
//   else {
//     const pool = mysql.createPool({
//       host: '129.146.68.51',
//       user: 'aluno0-pfsii',
//       password: 'aluno0-pfsii',
//       waitForConnections: true,
//       connectionLimit: 10,
//       maxIdle: 10,
//       idleTimeout: 60000,
//       queueLimit: 0,
//       enableKeepAlive: true,
//       keepAliveInitialDelay: 0
//     })

//     global.poolConexoes = pool
//     return pool
//   }
// }
