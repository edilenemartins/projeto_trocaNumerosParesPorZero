/*
Objetivo: pegar todos os números pares enviados no array e trocar pelo número 0.
Se o array vier vazio, será retornado -1
*/
function trocaValorPorZero(array) {
    if (!array) return "-1";

    for (let i=0; i < array.length; i++) {
        if (array[i] != 0 && array[i] % 2 === 0) {
            array[i] = 0;
        }
    }
    
    return array;
}

var array = [1, 3, 4, 6, 80, 33, 23, 90];

document.getElementById('array').innerHTML = 'Novo Array: [' + trocaValorPorZero(array) + ']';