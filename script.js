const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
            {
                texto: "Aperte o botão se você pudesse garantir a promoção de uma cultura de respeito e empatia em todos os ambientes de trabalho, mas isso significaria que você teria que abrir mão de algumas liberdades pessoais, como discutir opiniões controversas publicamente.",
                afirmacao: "afirmação",
            },
            {
                texto: "alternativa 2",
                afirmacao: "afirmação",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "alternativa 3",
                afirmacao: "afirmação",
            },
            {
                texto: "alternativa 4",
                afirmacao: "afirmação",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "alternativa 5",
                afirmacao: "afirmação",
            },
            {
                texto: "alternativa 6",
                afirmacao: "afirmação",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    mostraAlternativa();
}

function mostraAlternativa (){
    for (const pergunta of perguntaAtual.alternativas) {
       const botaoAlternativa = document.createElement('button');
       botaoAlternativa.textContent = pergunta;
       caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();