const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Error (div 0)";
const promedio = (a, b) => (a + b) / 2;
const potencia = (a, b) => a ** b;
const calcular = operacion => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  // Validación de inputs
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('resultado').innerText = "Error";
    return;
  }
  let res = 0;
  if (operacion === 'sumar') res = sumar(num1, num2);
  if (operacion === 'restar') res = restar(num1, num2);
  if (operacion === 'multiplicar') res = multiplicar(num1, num2);
  if (operacion === 'dividir') res = dividir(num1, num2);
  if (operacion === 'promedio') res = promedio(num1, num2);
  if (operacion === 'potencia') res = potencia(num1, num2);

  // Limitar decimales para que quepa bien en la pantalla
  if (typeof res === 'number' && !Number.isInteger(res)) {
    res = parseFloat(res.toFixed(4));
  }
  document.getElementById('resultado').innerText = res;
};
const limpiar = () => {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('resultado').innerText = '0';
};