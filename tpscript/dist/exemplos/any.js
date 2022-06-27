"use strict";
var valorAny;
valorAny = 1;
valorAny = 'olá';
valorAny = true;
var valorString = 'teste';
valorString = valorAny;
var valorString2 = 'testao';
valorString2 = valorAny;
function somarStrings(string1, string2) {
    console.log(string1 + string2);
}
somarStrings(valorString, valorString2);
