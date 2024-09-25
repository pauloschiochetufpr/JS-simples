// Selecionando pelo ID do título
const title = document.getElementById("titulo");

const mensagem = document.getElementsByClassName("mensagem2");

const botaodecriarfrases = document.createElement('button');
botaodecriarfrases.textContent = 'Modificar frases';
document.querySelector('.container').appendChild(botaodecriarfrases);

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

botaodecriarfrases.addEventListener("click", function () {
    for (let i=0; i < mensagem.length; i++){
        mensagem[i].textContent = "Frase alterada " + (i+1) + " dentro no JS";
    }
});
