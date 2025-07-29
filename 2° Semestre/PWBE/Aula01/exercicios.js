//EXERCICIO 1//
const nome = "Henrique";
console.log("Olá, " + nome);

//EXERCICIO 2//
const nA = 5;
const nB = 10;
const soma = nA + nB;
console.log("A soma de " + nA + " e " + nB + " é: " + soma);
const divisao = nB / nA;
console.log("A divisão de " + nB + " por " + nA + " é: " + divisao);

//EXERCICIO 3//
const altura = 1.75; 
const largura = 1.5;
const area = altura * largura;
console.log("A área do restangulo é: " + area + " metros quadrados");

//EXERRCICIO 4//
const nascimento = 2000;
const anoAtual = 2025;
const idade = anoAtual - nascimento;
if (idade >= 18) {
    console.log("Você é maior de idade");
}
else {
    console.log("Você é menor de idade");
}

//* EXERCICIO 5*//
const numero = 13;
if (numero % 2 === 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}

//* EXERCICIO 6*//
const numero1 = 10;
const numero2 = 20;
const numero3 = 30;
const somaNumeros = numero1 + numero2 + numero3;
const media = somaNumeros / 3;
console.log("A média é: " + media);

//* EXERCICIO 7*//
for (let i = 30; i >= 0; i--) {
    console.log(i);
}

//* EXERCICIO 8*//
for (let i = 0; i <= 500; i += 3) {
    console.log(i);
}   


//* EXERCICIO 9*//
for (let i = 1; i <= 300; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//* EXERCICIO 10*//
var fat = 1;
for (let i = 5; i >= 1; i--) {
    fat *= i;
}
console.log(fat);
