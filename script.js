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
                texto: "Aperte o botão se você pudesse ter um aumento significativo na sua inteligência e criatividade, mas isso significaria não conseguir mais se conectar emocionalmente com as pessoas da mesma forma que antes.   ",
                afirmacao: "afirmação",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "  Aperte o botão se você pudesse assegurar a limpeza dos oceanos de todos os resíduos plásticos, mas isso implicaria na proibição de todos os plásticos novos por dez anos.   ",
                afirmacao: "afirmação",
            },
            {
                texto: " Aperte o botão se você pudesse garantir que todas as fontes de energia no planeta se tornassem 100% renováveis, mas isso exigiria que você não pudesse usar veículos particulares e precisasse depender exclusivamente de transporte público e alternativas sustentáveis.  ",
                afirmacao: "afirmação",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Aperte o botão se você pudesse ter acesso ilimitado a qualquer avanço tecnológico e inovações futuras, mas isso significaria que você teria que abrir mão de todos os dispositivos tecnológicos atuais por cinco anos.",
                afirmacao: "afirmação",
            },
            {
                texto: "Aperte o botão se você pudesse ter um dispositivo que automaticamente utiliza se a sua saúde e bem-estar com base em dados biométricos em tempo real, mas isso significaria que você teria que abrir mão de todos os aplicativos de redes sociais e de entretenimento.",
                afirmacao: "afirmação",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";
function mostraPergunta (){
    if(atual >= perguntas.length
    ){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    mostraAlternativa();
}

function mostraAlternativa (){
    for (const pergunta of perguntaAtual.alternativas) {
       const botaoAlternativa = document.createElement('button');
       botaoAlternativa.textContent = pergunta.texto;
       botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(pergunta));
      caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada (pergunta){
    const afirmacoes = pergunta.afirmacao; 
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
   }

   function mostraResultado (){
    caixaPerguntas.textContent = "em resumo, você escolheu ...";
    caixaResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
   }

mostraPergunta();