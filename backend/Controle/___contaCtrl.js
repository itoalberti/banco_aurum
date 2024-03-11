import Conta from '../Modelo/Conta.js';

export default class ContaCtrl {
  // GRAVAR A CONTA NO BANCO DE DADOS------------------------------------------------------------------------
  cadastrar(req, resp) {
    resp.type('application/json');
    if (req.method === 'POST' && req.is('application/json')) {
      const dados = req.body;
      const email = dados.email;
      const nome = dados.nome;
      const senha = dados.senha;
      const ano = dados.ano;
      const codigo = dados.codigo;
      if (email && nome && senha && ano && codigo) {
        // gravar as informações da conta
        const conta = new Conta(0, email, nome, senha, ano, codigo);
        conta
          .cadastrarBD()
          .then(() => {
            resp.status(200).json({
              status: true,
              num: conta.num,
              msg: 'Conta criada com sucesso!',
            });
          })
          .catch((erro) => {
            resp.status(500).json({
              status: false,
              msg: erro.message,
            });
          });
      } else {
        resp.status(400).json({
          status: false,
          msg: 'Informe todos os dados da conta: email, nome do usuário, senha, ano de nascimento e código da agência bancária',
        });
      }
    } else {
      // 4xx = 'Client error'
      resp.status(400).json({
        status: false,
        msg: 'O método não é permitido ou conta no formato JSON não foi fornecida. Consulte a documentação da API!',
      });
    }
  }

  // ---------------------------------ALTERAR A CONTA NO BANCO DE DADOS---------------------------------
  alterar(req, resp) {
    resp.type('application/json');
    if (req.method === 'PUT' && req.is('application/json')) {
      const dados = req.body;
      const num = dados.num;
      const email = dados.email;
      const nome = dados.nome;
      const senha = dados.senha;
      const ano = dados.ano;
      const codigo = dados.codigo;
      if (email && nome && senha && ano && codigo) {
        // alterar as informações da conta
        const conta = new Conta(num, email, nome, senha, ano, codigo);
        // chamando o método assíncrono alterar da camada de persistência
        conta
          .alterarBD()
          .then(() => {
            resp.status(200).json({
              status: true,
              msg: 'Conta alterada com sucesso!',
            });
          })
          .catch((erro) => {
            resp.status(500).json({
              status: false,
              msg: erro.message,
            });
          });
      } else {
        resp.status(400).json({
          status: false,
          msg: 'Informe todos os dados da conta: email, nome, senha e ano de nascimento',
        });
      }
    } else {
      // 4xx = 'Client error'
      resp.status(400).json({
        status: false,
        msg: 'O método não é permitido ou conta no formato JSON não foi fornecida. Consulte a documentação da API!',
      });
    }
  }

  // ---------------------------------EXCLUIR A CONTA DO BANCO DE DADOS---------------------------------
  excluir(req, resp) {
    resp.type('application/json');
    if (req.method === 'DELETE' && req.is('application/json')) {
      const dados = req.body;
      if (dados.num) {
        const conta = new Conta();
        conta.num = dados.num;
        // chamando o método assíncrono excluir da camada de persistência
        conta
          .excluirBD()
          .then(() => {
            resp.status(200).json({
              status: true,
              msg: 'Conta excluída com sucesso!',
            });
          })
          .catch((erro) => {
            resp.status(500).json({
              status: false,
              msg: erro.message,
            });
          });
      } else {
        resp.status(400).json({
          status: false,
          msg: 'Informe o número da conta a ser excluída.',
        });
      }
    } else {
      // 4xx = 'Client error'
      resp.status(400).json({
        status: false,
        msg: 'O método não é permitido ou conta no formato JSON não foi fornecida. Consulte a documentação da API!',
      });
    }
  }

  // ---------------------------------LISTAR TODAS AS CONTAS---------------------------------
  consultar(req, resp) {
    resp.type('application/json');

    if (req.method === 'GET') {
      const conta = new Conta();
      // // método assíncrono consultar da camada de persistência
      conta
        .consultarBD()
        .then((contas) => {
          resp.status(200).json(contas);
        })
        .catch((erro) => {
          resp.status(500).json({
            status: false,
            msg: erro.message,
          });
        });
    } else {
      resp.status(400).json({
        status: false,
        msg: 'O método não é permitido! Consulte a documentação da API!',
      });
    }
  }

  // CONSULTAR PARA ALTERAR CONTA
  consultarParaAlterar(req, resp) {
    resp.type('application/json');

    if (req.method === 'GET') {
      const num = req.params.num;
      const conta = new Conta();
      // // método assíncrono consultar da camada de persistência
      conta
        .consultarBD(num)
        .then((contas) => {
          resp.status(200).json(contas);
        })
        .catch((erro) => {
          resp.status(500).json({
            status: false,
            msg: erro.message,
          });
        });
      // console.log('backend funcionando para GET');
    } else {
      resp.status(400).json({
        status: false,
        msg: 'O método não é permitido! Consulte a documentação da API!',
      });
    }
  }
}
