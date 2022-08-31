// tipo de dados
// booleanos

// conversão implicita
const numero = 456;
const numeroString = "456";

console.log(numero + numeroString); // Neste caso o js está convertendo a const numero em string e concatenando com numeroString.

//conversão explicita
console.log(numero + Number(numeroString)); // Já aqui o Number() esá convertendo a String em um numero e somando os dois numeros.

//Number()
//String()
