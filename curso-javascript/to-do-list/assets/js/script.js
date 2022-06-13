const form = document.getElementById('task-form');
const taskList = document.getElementsByClassName('div-lista')[0];

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('campo-entrada');
    if(inputField.value != ""){
        addTask(inputField.value);
        form.reset();
    }
};

var larguraDivEntrada = document.getElementsByClassName('entrada')[0].offsetWidth;
var lista = document.getElementsByClassName('div-lista')[0];
lista.style.width = `${larguraDivEntrada}px`;

var botao = document.getElementById('btn');
var campoInput = document.getElementById('campo-entrada');

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}

botao.addEventListener("click", () => {
    botao.style.animation = "";
    setTimeout(() => botao.style.animation = "botaoClicado 300ms linear", 5);
})
