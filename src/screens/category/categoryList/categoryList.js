const tableHeadNames = ['ID', 'Categoria']

let categories= [
	{
		id: '1',
		name: 'Restaurantes'
	},
    {
        id: '2',
        name: 'Hospitais'
    }
]

/* Listagem */
const main = document.createElement('main');
const tableDiv = document.createElement('div');
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
// const select = document.createElement('select');
tableDiv.setAttribute('id', 'table');   


tableHeadNames.forEach(item => {
    const th = document.createElement('th')
    th.innerText = item;
    thead.appendChild(th);
    // const option = document.createElement('option')
    // option.innerText = item;
    // select.appendChild(option);
});

for (let i = 0; i < categories.length; i++) {
    const tr = document.createElement("tr");
    for(let j = 0; j < tableHeadNames.length; j++) {
        const t = document.createElement("td");
        const texto = document.createTextNode(Object.values(categories[i])[j]);
        t.appendChild(texto);
        tr.appendChild(t);
    }
    tbody.appendChild(tr);
}

table.appendChild(thead)
table.appendChild(tbody)
tableDiv.appendChild(table)
main.appendChild(tableDiv)

/* Botões e busca */
const asideDiv = document.createElement('div');
asideDiv.setAttribute('id', 'aside');
const h3 = document.createElement('h3');
h3.innerText = 'Buscar por palavra-chave:'
const searchDiv = document.createElement('div');
const editDiv = document.createElement('div');
const input = document.createElement('input');
const btnSearch = document.createElement('button');
btnSearch.textContent = 'Buscar';
const btnEdit = document.createElement('button');
btnEdit.textContent = 'Editar';
const btnDelete = document.createElement('button');
btnDelete.textContent = 'Remover';

// asideDiv.appendChild(select)
searchDiv.appendChild(h3)
searchDiv.appendChild(input)
searchDiv.appendChild(btnSearch)
asideDiv.appendChild(searchDiv)
editDiv.appendChild(btnEdit)
editDiv.appendChild(btnDelete)
asideDiv.appendChild(editDiv)
main.appendChild(asideDiv)
document.body.appendChild(main);


/* Style */
Object.assign(main.style, {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '10vw 15vw'
    })

Object.assign(table.style, {
    border: '10px solid black',
    'font-size': '30px',
    textAlign: 'center',
    width: '35vw',
    margin: '20px'
    })

Object.assign(searchDiv.style, {
    padding: '10px',
    })

Object.assign(editDiv.style, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    padding: '10px',
    })

Object.assign(thead.style, {
    'font-size': '30px',
})

document.querySelector('table').style.border = 'solid 5px black';
document.querySelector('table').style.borderCollapse = 'collapse';
let celulas = document.querySelectorAll('tr');
for(let i = 0; i < celulas.length; i++){
    celulas[i].style.border = 'solid 1px black';
}
celulas = document.querySelectorAll('td');
for(let i = 0; i < celulas.length; i++){
    celulas[i].style.border = 'solid 1px black';
}

const button = document.querySelectorAll('button');
for(let i = 0; i < button.length; i++){
    button[i].style.width = '70px';
    button[i].style.margin = '10px';
}