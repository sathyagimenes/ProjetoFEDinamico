(() => {
    for (const file of [
        'common/Utils.js',
        'common/filters.js',
        'common/services.js'
    ]) {
        const script = document.createElement('script')
        script.setAttribute('src', `../../../${file}`)

        document.head.appendChild(script)
    }

    window.addEventListener('load', async ()=> {
        const tableHeadNames = ['ID', 'Categoria']
        let categories= []

        /* Listagem */
        const main = document.createElement('main');
        const tableDiv = CreateElementWithAttribute('div', 'id', 'table')
        const categoryList = await GetCategories();

        categoryList.forEach(element => {
                categories.push({
                code: element.code,
                name: element.name
            })
        });        

        let newTable = CreateTable(categories, tableHeadNames)
        tableDiv.appendChild(newTable)
        main.appendChild(tableDiv)
        console.log(categories)
        console.log(categories.length)

        
        //ver como deixar global
        // function FilterCategoriesByName(e) {
        //     //let tableHeadNames = variável informada
        //     //let filteredCategories = variável informada
        //     let filteredCategories = categories;
        //     filteredCategories = filteredCategories.filter(category => category.name.toLocaleLowerCase().includes(e.target.value));

        //     RecreateTable(newTable, filteredCategories, tableHeadNames, tableDiv)
        // }      

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
        
        input.addEventListener('keyup', TextChange)

        function TextChange(e){
            filteredCategories = FilterCategoriesByName(categories, e.target.value);
            RecreateTable(newTable, filteredCategories, tableHeadNames, tableDiv);
        }
        
        CallCSS('./categoryList.css')
        CallCSS('../../../styles/lists.css')
    })

})();