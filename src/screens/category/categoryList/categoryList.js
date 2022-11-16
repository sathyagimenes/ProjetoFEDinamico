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
const searchDiv = document.createElement('div');
searchDiv.setAttribute('id', 'search');
const editDiv = document.createElement('div');
editDiv.setAttribute('id', 'edit');
const input = document.createElement('input');
input.setAttribute('placeholder', 'Buscar palavra-chave...')
const btnSearch = document.createElement('button');
btnSearch.textContent = 'Buscar';
const btnEdit = document.createElement('button');
btnEdit.textContent = 'Editar';
const btnDelete = document.createElement('button');
btnDelete.textContent = 'Remover';

// asideDiv.appendChild(select)
searchDiv.appendChild(input)
searchDiv.appendChild(btnSearch)
asideDiv.appendChild(searchDiv)
editDiv.appendChild(btnEdit)
editDiv.appendChild(btnDelete)
asideDiv.appendChild(editDiv)
main.appendChild(asideDiv)
document.body.appendChild(main);


/* Chamando o CSS */
const head = document.getElementsByTagName('head')[0];
const link = document.createElement('link');

link.rel = 'stylesheet';
link.type = 'text/css';
link.href = './categoryList.css';

head.appendChild(link);