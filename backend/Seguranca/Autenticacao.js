import { assinar, verificarAssinatura } from './funcoesJWT.js';

export function autenticar(req, resp) {
  const usuario = req.body.usuario;
  const senha = req.body.senha;
  if (usuario === 'admin' && senha === 'admin') {
    req.session.usuarioAutenticado = usuario;
    resp.json({
      status: true,
      token: assinar({ usuario }),
    });
  } else {
    req.session.usuarioAutenticado = null;
    resp.status(401).json({
      status: false,
      mensagem: 'Usuário ou senha inválidos!',
    });
  }
}

export function verificarAcesso(req, resp, next) {
  const token = req.headers['authorization'];
  let tokenDecodificado = '';
  // const tokenDecodificado = verificarAssinatura(token);
  if (token) {
    tokenDecodificado = verificarAssinatura(token);
  }
  if (tokenDecodificado.usuario.usuario == req.session.usuarioAutenticado) {
    next();
  } else {
    resp.status(401).json({
      status: false,
      mensagem: 'Acesso não autorizado. Faça o login na aplicação!',
    });
  }
}
