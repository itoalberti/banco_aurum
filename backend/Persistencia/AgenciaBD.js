import Agencia from '../Modelo/Agencia.js';
import conectar from './Conexao.js';

export default class AgenciaBD {
  // CADASTRAR AGÊNCIA NO BANCO DE DADOS
  async cadastrar(agencia) {
    if (agencia instanceof Agencia) {
      const conexao = await conectar();
      const sql = 'INSERT INTO Tabela_Agencia (endereco, cidade) VALUES(?,?)';
      const parametros = [agencia.endereco, agencia.cidade];
      const resultado = await conexao.query(sql, parametros);
      global.poolConexoes.pool.releaseConnection(conexao);
      return await resultado[0].insertId;
    }
  }

  // ALTERAR AGÊNCIA NO BANCO DE DADOS
  async alterar(agencia) {
    if (agencia instanceof Agencia) {
      const conexao = await conectar();
      const sql = 'UPDATE Tabela_Agencia SET endereco=? WHERE cod_ag=?';
      const parametros = [agencia.endereco, agencia.cod_ag];
      await conexao.query(sql, parametros);
      // O QUE É poolConexoes?
      global.poolConexoes.pool.releaseConnection(conexao);
    }
  }

  // EXCLUIR AGÊNCIA DO BANCO DE DADOS
  async excluir(agencia) {
    if (agencia instanceof Agencia) {
      const conexao = await conectar();
      // const sql = 'DELETE FROM Tabela_Agencia WHERE endereco=? AND cidade=? AND codigo=?';
      const sql = 'DELETE FROM Tabela_Agencia WHERE cod_ag=?';
      const parametros = [agencia.cod_ag];
      await conexao.query(sql, parametros);
      global.poolConexoes.pool.releaseConnection(conexao);
    }
  }

  // CONSULTAR AGÊNCIAS NO BANCO DE DADOS
  async consultar() {
    const conexao = await conectar();
    const sql = 'SELECT * FROM Tabela_Agencia';
    const parametros = ['%'];
    const [rows] = await conexao.query(sql, parametros);
    const listaAgencias = [];
    for (const row of rows) {
      const agencia = new Agencia(row['cod_ag'], row['endereco'], row['cidade'], row['uf']);
      listaAgencias.push(agencia);
    }
    global.poolConexoes.pool.releaseConnection(conexao);
    return listaAgencias;
  }
}
