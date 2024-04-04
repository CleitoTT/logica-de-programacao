const texto = document.querySelector('#titulo');
const button = document.querySelector('button');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');

function logica(){
    const primeiroValor = parseInt(num1.value);
    const segundoValor = parseInt(num2.value);

    const soma = primeiroValor + segundoValor;

    texto.innerHTML = `A soma de ${primeiroValor} mais ${segundoValor} é de ${soma}`
}

button.addEventListener("click", logica)