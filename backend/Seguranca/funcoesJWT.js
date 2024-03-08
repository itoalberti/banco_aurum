import jwt from 'jsonwebtoken';

// não se devem manter senhas e segredos no código fonte
// informações sensíveis devem ser armazenadas em variáveis de ambiente

export function assinar(usuario) {
  const token = jwt.sign({ usuario }, process.env.SEGREDO, { expiresIn: '300s' });
  return token;
}

export function verificarAssinatura(usuario) {
  return jwt.verify(token, process.env.SEGREDO);
}
