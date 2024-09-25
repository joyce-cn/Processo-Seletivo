/*1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?*/

let INDICE = 13, SOMA = 0, K= 0

while(K < INDICE){
     K = K + 1; //5
     SOMA = SOMA + K;// 15
}
console.log("O valor final da variável SOMA é: " + SOMA)

console.log("")


/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/

let numeroEscolhido = 10;
let num1 = 0, num2 = 1, nextTerm;

for (let i = 0; i <= numeroEscolhido; i++) {
    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
}

if (nextTerm === num1) {
    console.log("Pertence à sequência de Fibonacci");
} else {
    console.log("Não pertence à sequência de Fibonacci");
}

console.log("")

/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/

const faturamento = require('./faturamento.json');

const faturamentosValidos = faturamento.filter(f => f.valor > 0);

if (faturamentosValidos.length > 0) {
    
    const valores = faturamentosValidos.map(f => f.valor);
    
    const menorFaturamento = Math.min(...valores);
    const maiorFaturamento = Math.max(...valores);
    
    const mediaMensal = valores.reduce((acc, f) => acc + f, 0) / valores.length;
    
    const diasAcimaMedia = faturamentosValidos.filter(f => f.valor > mediaMensal).length;

    console.log(`Menor Faturamento: ${menorFaturamento}`);
    console.log(`Maior Faturamento: ${maiorFaturamento}`);
    console.log(`Média Mensal: ${mediaMensal}`);
    console.log(`Dias acima da média: ${diasAcimaMedia}`);
} else {
    console.log("Não há faturamentos válidos para calcular.");
}

console.log("")

/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.*/

const fat = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const FaturamentoTotal = Object.values(fat).reduce((total, valor) => total + valor, 0);

console.log("Percentual de representação por estado:");
for (const estado in fat) {
    const percentual = ((fat[estado] / FaturamentoTotal) * 100).toFixed(2);
    console.log(`${estado}: ${percentual}%`);
}

console.log("")

/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/

const numeros = [13, 27, 9, 11, 7];

const numerosAoQuadrado = numeros.map(num => Math.pow(num, 2));

console.log("Array com números elevados ao quadrado:", numerosAoQuadrado);

