// import { Button, Col, Form, Row } from 'react-bootstrap';

// export default function FormCliente() {
//   return (
//     <Form className='m-5'>
//       <Row>
//         {/* ********** NOME ********** */}
//         <Col>
//           <Form.Group className='mb-3' controlId='nome'>
//             <Form.Label>Nome:</Form.Label>
//             <Form.Control type='text' placeholder='Digite aqui o nome do cliente' />
//             <Form.Control.Feedback>OK!</Form.Control.Feedback>
//           </Form.Group>
//         </Col>

//         {/* ********** SEXO ********** */}
//         <Col>
//           <fieldset>
//             <Form.Group controlId='sexo'>
//               <Form.Label class='text-top' column sm={1}>
//                 Sexo:
//               </Form.Label>
//               <Form.Check type='radio' label='Masculino' name='sexo' id='masculino' />
//               <Form.Check type='radio' label='Feminino' name='sexo' id='feminino' />
//             </Form.Group>
//           </fieldset>
//         </Col>
//       </Row>

//       <Row>
//         {/* ********** CPF ********** */}
//         <Col>
//           <Form.Group className='mb-3' style={{ width: '135px' }} controlId='cpf'>
//             <Form.Label>CPF:</Form.Label>
//             <Form.Control type='text' placeholder='000.000.000-00' />
//             <Form.Control.Feedback>OK!</Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//       </Row>

//       {/* ********** ENDEREÇO - RUA ********** */}
//       <Row>
//         <Col xs={4}>
//           <Form.Group className='mb-3' controlId='end_rua'>
//             <Form.Label>Rua:</Form.Label>
//             <Form.Control type='text' placeholder='Digite aqui o nome da sua rua' />
//             <Form.Control.Feedback>OK!</Form.Control.Feedback>
//           </Form.Group>
//         </Col>

//         {/* ********** ENDEREÇO - NÚMERO ********** */}
//         <Col xs={2}>
//           <Form.Group className='mb-2' controlId='end_numero'>
//             <Form.Label>Número:</Form.Label>
//             <Form.Control type='text' placeholder='Digite aqui o número' />
//             <Form.Control.Feedback>OK!</Form.Control.Feedback>
//           </Form.Group>
//         </Col>

//         {/* ********** ENDEREÇO - COMPLEMENTO ********** */}
//         <Col xs={3}>
//           <Form.Group className='mb-2' controlId='end_comp'>
//             <Form.Label>Complemento:</Form.Label>
//             <Form.Control type='text' placeholder='Apto, bloco, casa etc.' />
//             <Form.Control.Feedback>OK!</Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//       </Row>

//       <Row>
//         {/* ********** ENDEREÇO - CIDADE ********** */}
//         <Col xs={3}>
//           <Form.Group className='mb-3' controlId='end_cid'>
//             <Form.Label>Cidade:</Form.Label>
//             <Form.Control type='text' placeholder='Digite aqui a sua cidade' />
//             <Form.Control.Feedback>OK!</Form.Control.Feedback>
//           </Form.Group>
//         </Col>

//         {/* ********** ENDEREÇO - ESTADO ********** */}
//         <Col>
//           <Form.Label>Estado:</Form.Label>
//           <Form.Group style={{ width: '80px' }} controlId='end_uf'>
//             <Form.Select aria-label='Estado'>
//               <option value='AC'>AC</option>
//               <option value='AL'>AL</option>
//               <option value='AP'>AP</option>
//               <option value='AM'>AM</option>
//               <option value='BA'>BA</option>
//               <option value='CE'>CE</option>
//               <option value='DF'>DF</option>
//               <option value='ES'>ES</option>
//               <option value='GO'>GO</option>
//               <option value='MA'>MA</option>
//               <option value='MT'>MT</option>
//               <option value='MS'>MS</option>
//               <option value='MG'>MG</option>
//               <option value='PA'>PA</option>
//               <option value='PB'>PB</option>
//               <option value='PR'>PR</option>
//               <option value='PE'>PE</option>
//               <option value='PI'>PI</option>
//               <option value='RJ'>RJ</option>
//               <option value='RN'>RN</option>
//               <option value='RS'>RS</option>
//               <option value='RO'>RO</option>
//               <option value='RR'>RR</option>
//               <option value='SC'>SC</option>
//               <option value='SP'>SP</option>
//               <option value='SE'>SE</option>
//               <option value='TO'>TO</option>
//             </Form.Select>
//           </Form.Group>
//         </Col>
//       </Row>
//       <br />
//       <Button variant='primary' type='submit'>
//         Submeter formulário
//       </Button>
//     </Form>
//   );
// }
