const titulo = document.querySelector('#titulo');
const button = document.querySelector('button');
const text = document.querySelector('#input');
const num = document.querySelector('#num');


button.addEventListener("click", ()=> {
    const nome = text.value;
    const salario = num.value;

    titulo.innerHTML = `Nome do funcionário: ${nome} <br>
    Salário: R$${salario} <br>
    O funcionário ${nome} tem um salário de R$${salario} em Abril. `
})