// import jwt from 'jsonwebtoken';
import jwt from 'jsonwebtoken';

// Não se devem manter senhas e segredos no código fonte
// Informações sensíveis devem ser armazenadas em variáveis de ambiente

export function assinar(usuario) {
  const token = jwt.sign({ usuario }, process.env.SEGREDO, { expiresIn: '300s' });
  return token;
}

export function verificarAssinatura(token) {
  return jwt.verify(token, process.env.SEGREDO);
}
