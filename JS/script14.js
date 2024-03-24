let numero1 = parseInt(prompt('Digite o primeiro número inteiro:'));
console.log("Número 1:", numero1);

let numero2 = parseInt(prompt('Digite o segundo número inteiro:'));
console.log("Número 2:", numero2);

document.getElementById('resultado').innerHTML = `
    <strong>Número 1: </strong>${numero1}<br>
    <strong>Número 2: </strong>${numero2}<br>
`;

numero1++;
numero2--;

document.getElementById('resultado').innerHTML += `
    <strong>Número 1 Acrescido de 1: </strong>${numero1}<br>
    <strong>Número 2 Decrescido de 1: </strong>${numero2}<br>
`;

console.log("Número 1 acrescido de 1:", numero1);
console.log("Número 2 decrescido de 1:", numero2);