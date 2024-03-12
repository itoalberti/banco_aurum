import Cliente from '../Modelo/Cliente.js';
import conectar from './Conexao.js';

export default class ClienteBD {
  // CADASTRAR CLIENTE NO BANCO DE DADOS
  async cadastrar(cliente) {
    if (cliente instanceof Cliente) {
      const conexao = await conectar();
      const sql = 'INSERT INTO Cliente (cod_cli, nome, cpf, dataNasc, endereco, cidade, uf, email, telefone, senha, cod_ag) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
      const parametros = [cliente.cod_cli, cliente.nome, cliente.cpf, cliente.dataNasc, cliente.endereco, cliente.cidade, cliente.uf, cliente.email, cliente.telefone, cliente.senha, cliente.cod_ag];
      const resultado = await conexao.query(sql, parametros);
      // O QUE É O poolConexoes E releaseConnection?
      global.poolConexoes.pool.releaseConnection(conexao);
      return await resultado[0].insertId;
    }
  }

  // ALTERAR  CLIENTE NO BANCO DE DADOS
  async alterar(cliente) {
    if (cliente instanceof Cliente) {
      const conexao = await conectar();
      const sql = 'UPDATE TABLE Cliente SET endereco=?, cidade=?, uf=?, email=?, telefone=?, senha=?, cod_ag=? WHERE cod_cli=?';
      const parametros = [cliente.endereco, cliente.cidade, cliente.uf, cliente.email, cliente.telefone, cliente.senha, cliente.cod_ag, cliente.cod_cli];
      await conexao.query(sql, parametros);

      // O QUE É O poolConexoes E releaseConnection?
      global.poolConexoes.pool.releaseConnection(conexao);
    }
  }

  //EXCLUIR CLIENTE DO BANCO DE DADOS
  async excluir(cliente) {
    if (cliente instanceof Cliente) {
      const conexao = await conectar();
      const sql = 'DELETE FROM Cliente WHERE cod_cli=?';
      const parametros = [cliente.cod_cli];
      await conexao.query(sql, parametros);

      // O QUE É O poolConexoes E releaseConnection?
      global.poolConexoes.pool.releaseConnection(conexao);
    }
  }

  // CONSULTAR CLIENTES NO BANCO DE DADOS
  async consultar() {
    const conexao = await conectar();
    const sql = 'SELECT * FROM Cliente';
    const parametros = ['%'];
    const [rows] = await conexao.query(sql, parametros);
    const listaClientes = [];
    for (const row of [rows]) {
      const cliente = new Cliente(row['cod_cli'], row['nome '], row['cpf'], row['dataNasc'], row['endereco'], row['cidade'], row['uf'], row['email'], row['telefone'], row['senha'], row['cod_ag']);
      listaClientes.push(cliente);
    }

    // O QUE É O poolConexoes E releaseConnection?
    global.poolConexoes.pool.releaseConnection(conexao);
    return listaClientes;
  }
}