/*var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;*/
let area;
const forma = 'triangulo';
const altura = 5;
const comprimento = 7;

if (forma === 'retangulo'){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);