const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhado = true;
let temPassagemComprada = false;
const destino = "Salvador";
const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false;
//Laço de repetição com while
while(contador < 3){//WHILE => Enquanto

    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;//O comando break interrompe o fluxo de execução do laço de maneira forçada, sem precisarmos atingir a condição de saída
    }

    contador += 1;
}

console.log("Destino existe: ", destinoExiste); 

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Desculpe tivemos um erro!")
}
//Laço de repetição com for
for(let i = 0; i < 3; i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
    }
}