import { assinar } from './funcoesJWT';

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
