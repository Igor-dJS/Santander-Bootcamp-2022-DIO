const h1 = document.getElementById('page-title');
const btn = document.getElementById('mode-selector');
const ft = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];
const darkModeClass = 'dark-mode';

function changeMode(){
    changeClasses();
    chgangeTexts();
}

function changeClasses(){
    h1.classList.toggle(darkModeClass);
    btn.classList.toggle(darkModeClass);
    ft.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}

function chgangeTexts(){
    if(body.classList.contains(darkModeClass)){
        h1.innerHTML = "Dark Mode ON";
        btn.innerHTML = 'Light Mode';
    }else{
        h1.innerHTML = "Light Mode ON";
        btn.innerHTML = 'Dark Mode'
    }
}

btn.addEventListener("click", changeMode);






