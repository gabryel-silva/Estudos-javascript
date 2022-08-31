const usuarioLogado = true;
const contapaga = false;

// truthy ou falsy

// 0 => false
// 1 => true

console.log(0 == false);
console.log("" == false);
console.log(1 == true);

// null ==> vazio ou nada
// undefined ==> valor não definivo

let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);

let numero = 3;
let texto = 'Altura';

console.log(typeof numero);
console.log(typeof texto);

console.log(typeof varNull);// OBS: bug do js ao EXECUTAR ESTE CÓDIGO - em vez de mostrar type null irá mostra type object.
