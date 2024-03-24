let numero1 = parseInt(prompt('Digite o primeiro número inteiro:'));
console.log("Número 1:", numero1);

let numero2 = parseInt(prompt('Digite o segundo número inteiro:'));
console.log("Número 2:", numero2);

let numero3 = parseInt(prompt('Digite o terceiro número inteiro:'));
console.log("Número 3:", numero3);

let numero4 = parseInt(prompt('Digite o quarto número inteiro:'));
console.log("Número 4:", numero4);

let numero5 = parseInt(prompt('Digite o quinto número inteiro:'));
console.log("Número 5:", numero5);

let soma = numero1 + numero2 + numero3 + numero4 + numero5

document.getElementById('resultado').innerHTML = `
    <strong>Os números digitados foram:</strong>${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5}, e sua soma é:${soma}
`;