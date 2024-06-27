const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
         enunciado:"Depressão é:",
         alternativas:[
            "Medo do passado",
            "Medo do futuro"
        ]
    },
    {
         enunciado:"Você acredita que o uso excessivo de celular afeta  a saúde mental?",
         alternativas:[
            "Sim",
            "Não"
        ]
    }
];