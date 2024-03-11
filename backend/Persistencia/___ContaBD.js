import Conta from '../Modelo/___Conta.js';
import conectar from './Conexao.js';

export default class ContaBD {
  // CADASTRAR CONTA NO BANCO DE DADOS OK
  async cadastrar(conta) {
    if (conta instanceof Conta) {
      const sql = 'INSERT INTO Tabela_Conta (email, nome, senha, ano, codigo) VALUES(?,?,?,?,?)';
      const conexao = await conectar();
      const parametros = [conta.email, conta.nome, conta.senha, conta.ano, conta.codigo];
      const resultado = await conexao.query(sql, parametros);
      global.poolConexoes.pool.releaseConnection(conexao);
      return await resultado[0].insertId;
    }
  }

  // ALTERAR CONTA NO BANCO DE DADOS OK
  async alterar(conta) {
    if (conta instanceof Conta) {
      const conexao = await conectar();
      const sql = 'UPDATE Tabela_Conta SET email=?, senha=?, codigo WHERE num=?';
      const parametros = [conta.email, conta.senha, conta.codigo, conta.num];
      await conexao.query(sql, parametros);
      global.poolConexoes.pool.releaseConnection(conexao);
    }
  }

  // EXCLUIR CONTA DO BANCO DE DADOS
  async excluir(conta) {
    if (conta instanceof Conta) {
      const conexao = await conectar();
      const sql = 'DELETE FROM Tabela_Conta WHERE num=?';
      const parametros = [conta.num];
      await conexao.query(sql, parametros);
      global.poolConexoes.pool.releaseConnection(conexao);
    }
  }

  // CONSULTAR CONTAS NO BANCO DE DADOS
  async consultar() {
    const conexao = await conectar();
    const sql = 'SELECT * FROM Tabela_Conta';
    const parametros = ['%'];
    const [rows] = await conexao.query(sql, parametros);
    // global.poolConexoes.pool.releaseConnection(conexao);
    const listaContas = [];
    for (const row of rows) {
      const conta = new Conta(row['num'], row['email'], row['nome'], row['senha'], row['ano'], row['codigo']);
      listaContas.push(conta);
    }
    global.poolConexoes.pool.releaseConnection(conexao);
    return listaContas;
  }
}
