# Funções em TypeScript

Aqui estão duas funções simples escritas em TypeScript para calcular a média de dois números e verificar se uma nota é aprovativa. Esta foi a primeira atividade realizada com TypeScript.

```typescript
// Crie uma função que receba 2 números e retorne a média.

let num1: number = 3;
let num2: number = 2;

function media(num1: number, num2: number): number {
    let mediaNumeros = (num1 + num2) / 2;
    return mediaNumeros;
}

console.log(media(num1, num2));

// Crie uma função que receba uma nota (número), caso essa nota seja menor que 6, 
// exiba um console dizendo reprovado.

function aprovadoOuNao(nota: number): void {
    if (nota < 6) {
        console.log("Reprovado");
    } else {
        console.log("Aprovado");
    }
}

aprovadoOuNao(5);

Essas funções são simples e mostram alguns conceitos básicos de TypeScript, como tipagem de variáveis e definição de tipos de retorno.
A primeira função calcula a média de dois números, e a segunda função verifica se uma nota é menor que 6, exibindo "Reprovado" ou "Aprovado" no console, conforme necessário.
