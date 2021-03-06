// Verifica se o usuário está logado

if (localStorage.getItem("acesso") != "true") {
    alert("Você não tem acesso. Faça o login para continuar.")
    window.location.href = "./index.html"
}

// Inicializa as funções que devem funcionar ao carregar a página
function startBody() {
    // Dá boas vindas ao usuário
    if (localStorage.getItem("acessoAdmin") == "true") {
        document.querySelector(".boasvindas").innerHTML = `Bem vindo(a), Admin (<a onclick="deslogar()" class="sair">sair</a>)`
    } else {
        let usuario = localStorage.getItem("nome")
        document.querySelector(".boasvindas").innerHTML = `Bem vindo(a), ${usuario} (<a onclick="deslogar()" class="sair">sair</a>)`
    }
    // Verifica o colormode selecionado
    if (localStorage.getItem("colormode") == "black") {
        DarkMode()
    } else if (localStorage.getItem("colormode") == "white") {
        LightMode()
    }
}

// Desloga ao clicar em sair
function deslogar() {
    localStorage.removeItem("acesso")
    localStorage.removeItem("acessoAdmin")
    localStorage.removeItem("colormode")
    alert("Você foi deslogado com sucesso")
    window.location.href = "./index.html"
}

// Adiciona um botão para atualizar/voltar a página

function Voltar() {
    location.reload();
}