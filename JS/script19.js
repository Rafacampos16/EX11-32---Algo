
    let base = parseFloat(prompt('Digite o valor da base do retângulo:'));
    let altura = parseFloat(prompt('Digite o valor da altura do retângulo:'));
  

    let area = base * altura;
    let perimetro = 2 * (base + altura);
  

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `
      <p>Área do retângulo: ${area}</p>
      <p>Perímetro do retângulo: ${perimetro}</p>
    `;

  