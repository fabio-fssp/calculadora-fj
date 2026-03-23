function calcular(operacao) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let resultado;

  if (isNaN(num1) || isNaN(num2)) {
    resultado = "Por favor, insira dois números válidos.";
  } else {
    switch (operacao) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        resultado = num2 !== 0 ? num1 / num2 : "Erro: divisão por zero.";
        break;
    }
  }
  document.getElementById('resultado').innerText = "Resultado: " + resultado;
}

function adicionar(valor) {
  document.getElementById('display').value += valor;
}

function calcular() {
  try {
    let res = eval(display.value);
    display.value = res;
    display.classList.add("resultado"); // aplica estilo
  } catch (e) {
    display.value = "Erro";
  }
}

function adicionar(valor) {
  // sempre que o usuário digitar, remove o estilo de resultado
  display.classList.remove("resultado");
  display.value += valor;
}


function limpar() {
  document.getElementById('display').value = "";
}