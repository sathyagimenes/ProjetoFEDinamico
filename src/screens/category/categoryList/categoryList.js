// for (const file of [
//     'common/setAttributes.js'
// ]) {
//     const script = document.createElement('script')
//     script.setAttribute('src', `./${file}`)

//     document.body.appendChild(script)
// }

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
const tableDiv = CreateElementWithAttribute('div', 'id', 'table')
// const select = document.createElement('select');

function CreateTable (row, tableHead) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    tableHead.forEach(item => {
        const th = document.createElement('th')
        th.innerText = item;
        thead.appendChild(th);
        // const option = document.createElement('option')
        // option.innerText = item;
        // select.appendChild(option);
    });

    for (let i = 0; i < row.length; i++) {
        const tr = document.createElement("tr");
        for(let j = 0; j < tableHead.length; j++) {
            const td = document.createElement("td");
            const texto = document.createTextNode(Object.values(row[i])[j]);
            td.appendChild(texto);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);

    }

    table.append(thead, tbody)

    return table;
};

const newTable = CreateTable(categories, tableHeadNames)
tableDiv.appendChild(newTable)
main.appendChild(tableDiv)

/* Botões e busca */

function CreateButton (btnText) {
   const newButton = document.createElement('button');
   newButton.textContent = btnText;
   return newButton;
}

function CreateElementWithAttribute (elName, attrType = '', attrName = '') {
    const newElement = document.createElement(elName);
    newElement.setAttribute(attrType, attrName)
    return newElement;
}

const asideDiv = CreateElementWithAttribute('div', 'id', 'aside')
const searchDiv = CreateElementWithAttribute('div', 'id', 'search')
const editDiv = CreateElementWithAttribute('div', 'id', 'edit')
const input = CreateElementWithAttribute('input','placeholder', 'Buscar palavra-chave...')
const btnSearch = CreateButton ('Buscar')
const btnEdit = CreateButton ('Editar')
const btnDelete = CreateButton ('Remover')

searchDiv.append(input, btnSearch)
editDiv.append(btnEdit, btnDelete)
asideDiv.append(searchDiv, editDiv)
main.appendChild(asideDiv)
document.body.appendChild(main);


/* Chamando o CSS */
const link = document.createElement('link')

function SetMultipleAttributes(el, attrs) {
    for(const key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}

SetMultipleAttributes(link, {
    'rel': 'stylesheet',
    'type': 'text/css',
    'href': './categoryList.css'  
})

document.body.appendChild(link);