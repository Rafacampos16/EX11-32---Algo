let numero1 = parseInt(prompt('Digite o primeiro número inteiro:'));
console.log("Número 1:", numero1);

let numero2 = parseInt(prompt('Digite o segundo número inteiro:'));
console.log("Número 2:", numero2);

let soma = numero1 + numero2 
let sub = numero1 - numero2 
let mult = numero1 * numero2 
let div = numero1 / numero2 
let med = (numero1 + numero2) / 2

document.getElementById('resultado').innerHTML = `
    <strong>A soma dos números: </strong>${numero1}, ${numero2}, é: ${soma} 
    <br><strong>A subtração dos números: </strong>${numero1}, ${numero2}, é: ${sub} 
    <br><strong>A multiplicação dos números: </strong>${numero1}, ${numero2}, é: ${mult} 
    <br><strong>A divisão dos números: </strong>${numero1}, ${numero2}, é: ${div} 
    <br><strong>A média dos números: </strong>${numero1}, ${numero2}, é: ${med} 
`;