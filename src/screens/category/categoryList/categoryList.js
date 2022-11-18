(() => {
    for (const file of [
        'common/Utils.js',
        'common/Filters.js'
    ]) {
        const script = document.createElement('script')
        script.setAttribute('src', `../../../${file}`)

        document.head.appendChild(script)
    }

    window.addEventListener('load', ()=> {
        const tableHeadNames = ['ID', 'Categoria']
        let categories= [{
            code: '1',
            name: 'teste'
        }]
        // let categories= []

        /* Listagem */
        const main = document.createElement('main');
        const tableDiv = CreateElementWithAttribute('div', 'id', 'table')

        fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/category/list', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: "",
            group: {
            uid: "3513d2d8-d47e-4da4-a61e-0ed144dd1c7f"
            }
        })
        }).then((response) => {
            if(response.ok){
                response.json().then(data => {
                    console.log(data)
                    data.forEach(element => {
                        categories.push({
                            code: element.code,
                            name: element.name
                        })
                    });
                    console.log(categories)
                    console.log(categories.length)
                })                    
            } else {
                response.json().then( data => {
                    error.log('Text:', JSON.stringify(data));
                })
            }
        })
        
        console.log(categories)
        console.log(categories.length)
        
        let newTable = CreateTable(categories, tableHeadNames)
        tableDiv.appendChild(newTable)
        main.appendChild(tableDiv)

        /* Botões e busca */
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

        input.addEventListener('keyup', FilterCategoriesByName)
        
        CallCSS('./categoryList.css')
    })

})();