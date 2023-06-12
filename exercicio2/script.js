// # Exercício 2
// Crie um array de números que contenha 8 números.
// Com este array e utilizando o `map()`, retorne os arrays abaixo:

// 1. Retorne um novo array contendo os números multiplicados por 5. Guarde esse array dentro de uma variável `const quintuplos`.
// 2. Retorne um novo array contendo os números divididos por 2. Guarde esse array dentro de uma variável `const metades`.


const arrayNumerico = [2, 4, 6, 8, 10, 12, 14, 16]

const quintuplos = arrayNumerico.map((numeros) => {
    return numeros * 5

})

console.log(quintuplos);

const metades = arrayNumerico.map((numeros) => { 
    return numeros / 2

})

console.log(metades);
