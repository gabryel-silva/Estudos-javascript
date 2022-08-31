console.log(`Trabalhando com listas`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `Rio de Janeiro`
);//criando uma lista

listaDeDestinos.push(`Curitiba`);//adicionando itens para lista dinâmicamente

console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);//excluindo item da lista OBS: primeiro parametro diz a posição e o segundo é a quantidade de elemento para ser deletado

console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);//diz qual elemento quero que exiba na tela