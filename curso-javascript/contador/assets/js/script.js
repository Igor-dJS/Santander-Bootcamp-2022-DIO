var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


function increment(){
    if(currentNumber + 1 <= 10){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber; 
    }

    if(currentNumber >= 0){
        currentNumberWrapper.style.color = 'black';
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber; 
    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    }
}

var btSub = document.getElementById("subtrair");
btSub.addEventListener("click", decrement);
var btSom = document.getElementById("adicionar");
btSom.addEventListener("click", increment);

