import conectar from '../Persistencia/Conexao.js';
import ContaBD from '../Persistencia/___ContaBD.js';

export default class Conta {
  #num;
  #email;
  #nome;
  #senha;
  #ano;
  // código da agência:
  #codigo; //objeto do tipo codigo

  constructor(num, email, nome, senha, ano, codigo) {
    this.#num = num;
    this.#email = email;
    this.#nome = nome;
    this.#senha = senha;
    this.#ano = ano;
    // código da agência:
    this.#codigo = codigo;
  }

  // MÉTODOS PÚBLICOS

  // NÚMERO DA CONTA
  get num() {
    return this.#num;
  }
  set num(novoNum) {
    this.#num = novoNum;
  }

  // EMAIL
  get email() {
    return this.#email;
  }
  set email(novoEmail) {
    this.#email = novoEmail;
  }

  // NOME
  get nome() {
    return this.#nome;
  }
  set nome(novoNome) {
    this.#nome = novoNome;
  }

  // SENHA
  get senha() {
    return this.#senha;
  }
  set senha(novaSenha) {
    this.#senha = novaSenha;
  }

  // ANO
  get ano() {
    return this.#ano;
  }
  set ano(novoAno) {
    this.#ano = novoAno;
  }

  // CÓDIGO DA AGÊNCIA
  get codigo() {
    return this.#codigo;
  }
  set codigo(novoCodigo) {
    this.#codigo = novoCodigo;
  }

  toJSON() {
    return {
      num: this.#num,
      email: this.#email,
      nome: this.#nome,
      senha: this.#senha,
      ano: this.#ano,
      codigo: this.#codigo,
    };
  }

  // CADASTRAR CONTA ------------------------------------------------------------------------------
  async cadastrarBD() {
    const contaBD = new ContaBD();
    this.num = await contaBD.cadastrar(this);
  }

  // ALTERAR CONTA ------------------------------------------------------------------------------
  async alterarBD() {
    const contaBD = new ContaBD();
    await contaBD.alterar(this);
  }
  // EXCLUIR CONTA ------------------------------------------------------------------------------
  async excluirBD() {
    const contaBD = new ContaBD();
    await contaBD.excluir(this);
  }
  // CONSULTAR CONTAS ------------------------------------------------------------------------------
  async consultarBD(num) {
    if (num == undefined) {
      const conexao = await conectar();
      const sql = 'SELECT * FROM Tabela_Conta';
      const parametros = ['%'];
      const [rows] = await conexao.query(sql, parametros);
      const listaContas = [];
      for (const row of rows) {
        const conta = new Conta(row['num'], row['email'], row['nome'], row['senha'], row['ano'], row['codigo']);
        listaContas.push(conta);
      }
      return listaContas;
    } else {
      const conexao = await conectar();
      const sql = 'SELECT * FROM Tabela_Conta WHERE num=?';
      const parametros = [num];
      const [rows] = await conexao.query(sql, parametros);
      const listaContas = [];
      for (const row of rows) {
        const conta = new Conta(row['num'], row['email'], row['nome'], row['senha'], row['ano'], row['codigo']);
        listaContas.push(conta);
      }
      return listaContas[0];
    }
  }
}
