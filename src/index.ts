// Crie uma função que receba 2 números e retorne a média.


let num1: number = 3
let num2: number = 2

function media(num1: number, num2: number) {
    let mediaNumeros = (num1 + num2) / 2
    return mediaNumeros
}

console.log(media(num1, num2));

// Crie uma função que receba uma nota (número), caso essa nota seja menor que 6, 
// exiba um console dizendo reprovado.

function aprovadoOuNao(nota: number): void {
    if (nota < 6) {
        console.log("reprovado");
    } else {
        console.log("aprovado");
    }
}

aprovadoOuNao(5);
