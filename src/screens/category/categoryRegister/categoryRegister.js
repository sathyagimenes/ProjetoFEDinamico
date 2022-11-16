let categories= [
	{
		id: '1',
		name: 'Restaurantes'
	}
]

const body = document.getElementsByTagName('body')[0];
const main = document.createElement('main');
const title = document.createElement('h1');
const form = document.createElement('form');
const divId = document.createElement('div');
const pId = document.createElement('p');
const inputId = document.createElement('input');
const divName = document.createElement('div');
const pName = document.createElement('p');
const inputName = document.createElement('input');
const divBtn = document.createElement('div');
const btnInsert = document.createElement('button');

title.textContent = 'Cadastro de Categorias';
pId.textContent = 'Código';
inputId.name = 'id';
inputId.type = 'number';
pName.textContent = 'Nome';
inputName.name = 'name';
inputName.type = 'text';
btnInsert.textContent = 'Cadastrar';

body.appendChild(main);
main.appendChild(title);
main.appendChild(form);
form.appendChild(divId);
divId.appendChild(pId);
divId.appendChild(inputId);
form.appendChild(divName);
divName.appendChild(pName);
divName.appendChild(inputName);
form.appendChild(divBtn);
divBtn.appendChild(btnInsert);

function register (inId, inName) {
	const newObj = { id: inId, name: inName };
	categories.push(newObj);//adicionar via api
	checkResgiter();//excluir depois
	window.alert('Categoria adicionada com sucesso!');
}

function checkResgiter () {
	for(let i = 0; i < categories.length; i++)
	{
		console.log('id: ' + categories[i].id + '\nname: ' + categories[i].name);
	}
}

btnInsert.addEventListener("click", () => {
	if (inputId.value.length < 1) {
		window.alert("O código deve ter, pelo menos, um número");
	  } else if (inputName.value.length <= 2) {
		window.alert("O nome deve ter, pelo menos, três letras");
	  } else {
		register(inputId.value, inputName.value); 
		input.value = "";
	  }
	  //adicionar verificação de codigo e nome já inseridos anteriormente
});

const styleTag = document.createElement("style");
styleTag.innerHTML = `
main {
	font-size: 40px;
	color: #black;
	margin: 20px;
	display: flex;
	flex-direction: column;
	text-align: center
}
h1 {
	margin: 5rem;
}
p {
	margin: 2px;
}
input {
	height: 20px;
	widht: 200px;
	padding: 8px;
	font-size: 20px;
	text-align: center;
	margin-bottom: 50px;
}
button {
	font-size: 20px;
	width: 150px;
	margin: 1rem;
	padding: 6px;
	border-radius: 10px;
	box-shadow: 0px 5px 10px 1px rgba(68, 20, 13, 0.199);
}
`;
const headTag = document.querySelector('head');
headTag.appendChild(styleTag);