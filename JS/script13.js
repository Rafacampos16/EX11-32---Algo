let nome = prompt('Digite seu nome')
console.log(nome, typeof nome);

let idade = prompt('Digite sua idade')
console.log(idade, typeof idade);


document.getElementById('resultado').innerHTML = " <strong>Nome: </strong> " + nome + " <strong>Idade: </strong> " + idade 

