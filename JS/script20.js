
let passosNorte = 10;
let passosLeste = 5;

let totalPassos = passosNorte + passosLeste;


let resultadoPassosElement = document.getElementById('resultadoPassos');

resultadoPassosElement.innerHTML = `<strong>Total de passos necessários: </strong>${totalPassos}`;

