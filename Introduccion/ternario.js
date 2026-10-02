const boleto = 'vip';
// let codigoDeAcceso; //Con let por que const necesita un valor desde el inicio

// if (boleto === 'vip') {
//   codigoDeAcceso = 'VIP-123-456';
// } else {
//   codigoDeAcceso = 'Regular-456-789';
// }

const codigoDeAcceso = boleto === 'vip' ? 'VIP-123-456' : 'REGULAR-456-789';
// const (codigoDeAcceso = boleto) == 'vip' ? 'VIP-123-456' : 'REGULAR-456-789';
console.log(codigoDeAcceso);

// ternario no solamente se utiliza en constantes, tambien en condicionales

boleto === 'vip'
  ? console.log('tu boleto es de tipo VIP')
  : console.log('tu boleto es de tipo regular');
