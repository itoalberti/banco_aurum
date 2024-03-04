import jwt from 'jsonwebtoken';

// não se devem manter senhas e segredos no código fonte

export function assinar(usuario) {
  const token = jwt.sign({ usuario }, 'minhaChaveSecreta', { expiresIn: '300s' });
  return token;
}

export function verificarAssinatura(usuario) {
  return jwt.verify(token, 'minhaChaveSecreta');
}
