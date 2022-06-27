let button = document.getElementById('button');
let input1 = document.getElementById('1') as HTMLInputElement;
let input2 = document.getElementById('2') as HTMLInputElement;

function adicionarNumeros(numero1: number, numero2: number, devePrintar: boolean, frase:string){
    let resultado = numero1 + numero2
    if(devePrintar){
        console.log(frase + resultado)
    }
    return resultado;
}

let devePrintar = true;
let frase = 'O resultado é: '

if(button){
    button.addEventListener('click', () => {
        if(input1 && input2){
            adicionarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase);
        }
    }) 
}

