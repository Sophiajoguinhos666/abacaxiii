const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoReultado = document.querySelector('.texto-reultado');

const perguntas = [
    {
        enunciado: "No ambito social, voce prefere:",
        alternativas: [
            {
                texto: " Aperte o botão se você pudesse garantir a promoção de uma cultura de respeito e empatia em todos os ambientes de trabalho, mas isso significaria que você teria que abrir mão de algumas liberdades pessoais, como discutir opiniões controversas publicamente.",
                afirmação: "afirmação",
            },
            {
                texto: "Aperte o botão se você pudesse ter um aumento significativo na sua inteligência e criatividade, mas isso significaria não conseguir mais se conectar emocionalmente com as pessoas da mesma forma que antes.",
                afirmação: "afirmação",
            },
        ]
    },

    {
        enunciado: "No ambito ambiental, voce prefere:",
        alternativas: [
            {
                texto: "  Aperte o botão se você pudesse assegurar a limpeza dos oceanos de todos os resíduos plásticos, mas isso implicaria na proibição de todos os plásticos novos por dez anos.",
                afirmação: "afirmação",
            },
            {
                texto: " Aperte o botão se você pudesse garantir que todas as fontes de energia no planeta se tornassem 100% renováveis, mas isso exigiria que você não pudesse usar veículos particulares e precisasse depender exclusivamente de transporte público e alternativas sustentáveis.",
                afirmação: "afirmação",
            },
        ]
    },

    {
        enunciado: "No ambito tecnologico, voce prefere:",
        alternativas: [
            {
                texto: "  Aperte o botão se você pudesse ter acesso ilimitado a qualquer avanço tecnológico e inovações futuras, mas isso significaria que você teria que abrir mão de todos os dispositivos tecnológicos atuais por cinco anos.",
                afirmação: "afirmação",
            },
            {
                texto: " Aperte o botão se você pudesse ter um dispositivo que automaticamente utiliza se a sua saúde e bem-estar com base em dados biométricos em tempo real, mas isso significaria que você teria que abrir mão de todos os aplicativos de redes sociais e de entretenimento.",
                afirmação: "afirmação",
            },
        ]
    },
]
let atual = 0;
let perguntaAtual;

function mostraPergunta (){
      perguntaAtual = perguntas[atual];
      caixaPerguntas.texteContent = perguntaAtual.enunciado;
}

mostraPergunta();