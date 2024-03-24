let numero = parseInt(prompt('Digite um número inteiro:'));


  let antecessor = numero - 1;
  let sucessor = numero + 1;


  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `O número digitado foi ${numero}, seu antecessor é ${antecessor} e seu sucessor é ${sucessor}.`;
