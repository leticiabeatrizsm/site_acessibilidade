
let tamanhoFonte = 100;

function alterarFonte(valor) {
    tamanhoFonte += valor;

    if (tamanhoFonte > 150) {
        tamanhoFonte = 150;
    }

    if (tamanhoFonte < 80) {
        tamanhoFonte = 80;
    }

    document.documentElement.style.fontSize = tamanhoFonte + "%";
}

function alternarContraste() {
    const ativado = document.body.classList.toggle("alto-contraste");

    const botao = document.getElementById("contraste");

    botao.setAttribute("aria-pressed", ativado);

    if (ativado) {
        botao.textContent = "Desativar contraste";
    } else {
        botao.textContent = "Alto contraste";
    }
}
