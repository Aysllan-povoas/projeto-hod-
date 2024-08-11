/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente    
 - passo 1 - dar um jeito de pegar o elemento HTML dos botões
 - passo 2 - dar um jeito de identificar o clique do usuário no botão
 - passo 3 - desmarcar o botão selecionado anterior
 - passo 4 - marcar o botão clicado como se estivesse selecionado
 - passo 5 - esconder a imagem anteriormente selecionada
 - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
 - passo 7 - esconder a informação do dragão anteriormente selecionado
 - passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

//- passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoescarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

//- passo 2 - dar um jeito de identificar o clique do usuário no botão
botoescarrossel.forEach((botao, indece) => {
    botao.addEventListener("click", () => {
        // - passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoselecionado();

        //- passo 4 - marcar o botão clicado como se estivesse selecionado
        marcarBotaoComoselecionado(botao);

        //- passo 5  esconder a imagem anteriormente selecionada
        esconderImagemativa();

        //- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        mostrarImagemdefundo(indece);

        //- passo 7 - esconder a informação do dragão anteriormente selecionado
        escondendoAsinformacoesativa();

        // - passo 8 - mostrar a informação do dragão referente ao botão clicado
        mostrarInformacoes(indece);
    });
})



function marcarBotaoComoselecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indece) {
    informacoes[indece].classList.add("ativa");
}

function escondendoAsinformacoesativa() {
    const informacoesativa = document.querySelector(".informacoes.ativa");
    informacoesativa.classList.remove("ativa");
}

function mostrarImagemdefundo(indece) {
    imagens[indece].classList.add("ativa");
}

function esconderImagemativa() {
    const imagemativa = document.querySelector(".ativa");
    imagemativa.classList.remove("ativa");
}

function desativarBotaoselecionado() {
    const botaoselecionado = document.querySelector(".selecionado");
    botaoselecionado.classList.remove("selecionado");
}

