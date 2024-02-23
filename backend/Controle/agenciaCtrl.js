import Agencia from '../Modelo/Agencia.js';

export default class AgenciaCtrl {
  // GRAVAR A AGÊNCIA NO BANCO DE DADOS------------------------------------------------------------------------
  cadastrar(req, resp) {
    resp.type('application/json');
    if (req.method === 'POST' && req.is('application/json')) {
      const dados = req.body;
      const endereco = dados.endereco;
      const cidade = dados.cidade;

      if (endereco && cidade) {
        // const agencia = new Agencia(0, endereco, cidade);
        const agencia = new Agencia(0, endereco, cidade);
        agencia
          .cadastrarBD()
          .then(() => {
            resp.status(200).json({
              status: true,
              codigo: agencia.codigo,
              msg: 'Agência criada com sucesso!',
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
          msg: 'Informe todos os dados da agência: endereço e cidade ',
        });
      }
    } else {
      // 4xx = 'Client error'
      resp.status(400).json({
        status: false,
        msg: 'O método não é permitido ou agência no formato JSON não foi fornecida. Consulte a documentação da API!',
      });
    }
  }

  // ---------------------------------ALTERAR A AGÊNCIA NO BANCO DE DADOS---------------------------------
  alterar(req, resp) {
    resp.type('application/json');
    if (req.method === 'PUT' && req.is('application/json')) {
      const dados = req.body;
      const codigo = dados.codigo;
      const endereco = dados.endereco;
      const cidade = dados.cidade;
      if (codigo && cidade) {
        // alterar as informações da agência
        const agencia = new Agencia(codigo, endereco, cidade);
        // chamando o método assíncrono alterar da camada de persistência
        agencia
          .alterarBD()
          .then(() => {
            resp.status(200).json({
              status: true,
              msg: 'Endereço da agência alterado com sucesso!',
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
          msg: 'Informe o novo endereço da agência.',
        });
      }
    } else {
      // 4xx = 'Client error'
      resp.status(400).json({
        status: false,
        msg: 'O método não é permitido ou agência no formato JSON não foi fornecida. Consulte a documentação da API!',
      });
    }
  }

  // ---------------------------------EXCLUIR A AGÊNCIA DO BANCO DE DADOS---------------------------------
  excluir(req, resp) {
    resp.type('application/json');
    if (req.method === 'DELETE' && req.is('application/json')) {
      const dados = req.body;
      // const codigo = dados.codigo;
      if (dados.codigo) {
        const agencia = new Agencia();
        agencia.codigo = dados.codigo;
        agencia
          .excluirBD()
          .then(() => {
            resp.status(200).json({
              status: true,
              msg: 'Agência excluída com sucesso!',
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
          msg: 'Informe o código da agência a ser excluída.',
        });
      }
    } else {
      // 4xx = 'Client error'
      resp.status(400).json({
        status: false,
        msg: 'O método não é permitido ou agência no formato JSON não foi fornecida. Consulte a documentação da API!',
      });
    }
  }

  // ---------------------------------LISTAR TODAS AS AGÊNCIAS---------------------------------
  consultar(req, resp) {
    resp.type('application/json');

    if (req.method === 'GET') {
      const agencia = new Agencia();
      // // método assíncrono consultar da camada de persistência
      agencia
        .consultarBD()
        .then((agencias) => {
          resp.status(200).json(agencias);
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

  // CONSULTAR PARA ALTERAR AGÊNCIA
  consultarParaAlterar(req, resp) {
    resp.type('application/json');

    if (req.method === 'GET') {
      const codigo = req.params.codigo;
      const agencia = new Agencia();
      // // método assíncrono consultar da camada de persistência
      agencia
        .consultarBD(codigo)
        .then((agencias) => {
          resp.status(200).json(agencias);
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
