let lado = parseFloat(prompt('Digite o valor do lado do quadrado:'));


  let area = lado * lado;
  let perimetro = 4 * lado;


  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `
    <p>Área do quadrado: ${area}</p>
    <p>Perímetro do quadrado: ${perimetro}</p>
  `;