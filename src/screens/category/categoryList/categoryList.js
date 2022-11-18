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

        const main = document.createElement('main');
        const searchDiv = CreateElementWithAttribute('div', 'id', 'search')
        const tableDiv = CreateElementWithAttribute('div', 'id', 'table')
        const input = CreateElementWithAttribute('input','placeholder', 'Buscar palavra-chave...')
        const button = CreateButton('Adicionar')
        searchDiv.append(input, button)
        main.append(searchDiv, tableDiv)
        document.body.appendChild(main);

        /* Listagem */        
        const categoryList = await GetCategories();

        categoryList.forEach(element => {
                categories.push({
                uid: element.uid,
                code: element.code,
                name: element.name
            })
        });        

        let newTable = CreateTable(categories, tableHeadNames)
        tableDiv.appendChild(newTable)
        
        /* Busca */
        input.addEventListener('keyup', TextChange)

        function TextChange(e){
            filteredCategories = FilterByKeyWord(categories, e.target.value);
            RecreateTable(newTable, filteredCategories, tableHeadNames, tableDiv);
        }
        
        CallCSS('./categoryList.css')
        CallCSS('../../../styles/lists.css')
    })

})();