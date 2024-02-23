import conectar from '../Persistencia/Conexao.js';
import AgenciaBD from '../Persistencia/AgenciaBD.js';

export default class Agencia {
  #codigo;
  #endereco;
  #cidade;
  #uf;

  constructor(codigo, endereco, cidade, uf) {
    this.#codigo = codigo;
    this.#endereco = endereco;
    this.#cidade = cidade;
    this.#uf = uf;
  }

  // MÉTODOS PÚBLICOS

  // CÓDIGO DA AGÊNCIA
  get codigo() {
    return this.#codigo;
  }
  set codigo(novoCodigo) {
    this.#codigo = novoCodigo;
  }

  // ENDEREÇO DA AGÊNCIA
  get endereco() {
    return this.#endereco;
  }
  set endereco(novoEndereco) {
    this.#endereco = novoEndereco;
  }

  // CIDADE DA AGÊNCIA
  get cidade() {
    return this.#cidade;
  }
  set cidade(novaCidade) {
    this.#cidade = novaCidade;
  }

  // UF DA AGÊNCIA
  get uf() {
    return this.#uf;
  }
  set uf(novaUf) {
    this.#uf = novaUf;
  }

  toJSON() {
    return {
      codigo: this.#codigo,
      endereco: this.#endereco,
      cidade: this.#cidade,
      uf: this.#uf,
    };
  }

  // CADASTRAR AGÊNCIA ------------------------------------------------------------------------------
  async cadastrarBD() {
    const agenciaBD = new AgenciaBD();
    this.codigo = await agenciaBD.cadastrar(this);
  }

  // // ALTERAR AGÊNCIA ------------------------------------------------------------------------------
  async alterarBD() {
    const agenciaBD = new AgenciaBD();
    await agenciaBD.alterar(this);
  }
  // // EXCLUIR AGÊNCIA ------------------------------------------------------------------------------
  async excluirBD() {
    const agenciaBD = new AgenciaBD();
    await agenciaBD.excluir(this);
  }

  // CONSULTAR AGÊNCIAS ------------------------------------------------------------------------------
  async consultarBD(codigo) {
    if (codigo == undefined) {
      const conexao = await conectar();
      const sql = 'SELECT * FROM Agencia';
      const parametros = ['%'];
      const [rows] = await conexao.query(sql, parametros);
      const listaAgencias = [];
      for (const row of rows) {
        const agencia = new Agencia(row['codigo'], row['endereco'], row['cidade'], row['uf']);
        listaAgencias.push(agencia);
      }
      return listaAgencias;
    } else {
      const conexao = await conectar();
      const sql = 'SELECT * FROM Agencia WHERE codigo=?';
      const parametros = [codigo];
      const [rows] = await conexao.query(sql, parametros);
      const listaAgencias = [];
      for (const row of rows) {
        const agencia = new Agencia(row['codigo'], row['endereco'], row['cidade'], row['uf']);
        listaAgencias.push(agencia);
      }
      return listaAgencias[0];
    }
  }
}
