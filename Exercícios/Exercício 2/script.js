const titulo = document.querySelector('#titulo');
const button = document.querySelector('button');
const input = document.querySelector('#input');


button.addEventListener("click", ()=> {
    const nome = input.value

    titulo.innerHTML = `Olá ${nome}, é um prazer te conhecer!`
})