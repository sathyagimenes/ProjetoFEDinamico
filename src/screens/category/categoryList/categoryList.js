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

        const newTable = CreateTable(categories, tableHeadNames)
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

        CallCSS('./categoryList.css')
    })

})();