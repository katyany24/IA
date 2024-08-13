const caixaPrincipal = document.querySelector ('.caixa-principal');
const caixaPerguntas = document.querySelector ('.caixa-perguntas');
const caixaAlternativas = document.querySelector ('.caixa-alternativas');
const caixaResultado = document.querySelector ('.caixa-resultado');
const textoResultado = document.querySelector ('.texto-resultado');

const perguntas = [
    {
        enunciado: "Em uma rua deserta tinha uma casa abandonada, as pessoas que passavam pela aquela rua sempre ouviam gritos bizarros. Um certo dia uma pessoa escutou gritos de socorro vindo da casa... ",
        alternativas: [
            "Entraria",
            "Nao entraria"
        ]
    },
    {
        enunciado: "Entrando la, ele viu que a casa estava muito baguncada e os gritos estavam mais altos do que antes. Ele subiu para o andar de cima, chegando sentiu uma energia muito pesada",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    }, 
    {
        enunciado: "pergunta 3",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    }, 
    {
        enunciado: "pergunta 4",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    }, 
    {
        enunciado: "pergunta 5",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    }
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();