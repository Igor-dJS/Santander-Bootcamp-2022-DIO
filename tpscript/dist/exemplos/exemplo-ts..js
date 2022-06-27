"use strict";
var button = document.getElementById('button');
var input1 = document.getElementById('1');
var input2 = document.getElementById('2');
function adicionarNumeros(numero1, numero2, devePrintar, frase) {
    var resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return resultado;
}
var devePrintar = true;
var frase = 'O resultado é: ';
if (button) {
    button.addEventListener('click', function () {
        if (input1 && input2) {
            adicionarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase);
        }
    });
}
