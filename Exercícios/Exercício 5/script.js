const texto = document.querySelector('#titulo');
const button = document.querySelector('button');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');

function logica(){
    const primeiroValor = parseInt(num1.value);
    const segundoValor = parseInt(num2.value);

    const media = (primeiroValor + segundoValor) / 2;

    texto.innerHTML = `A media entre ${primeiroValor} e ${segundoValor} é de ${media}`
}

button.addEventListener("click", logica)