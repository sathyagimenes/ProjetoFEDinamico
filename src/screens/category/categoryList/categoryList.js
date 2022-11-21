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
        const searchInput = CreateElementWithAttribute('input','placeholder', 'Buscar palavra-chave...')
        const addButton = CreateButton('Adicionar')
        addButton.setAttribute('onclick', "location.href = '../categoryRegister/categoryRegister.html'")
        searchDiv.append(searchInput, addButton)
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

        let newTable = CreateTable(categories, tableHeadNames, 'category')
        tableDiv.appendChild(newTable)
        
        // const botao = document.querySelector()

        /* Busca */
        searchInput.addEventListener('keyup', TextChange)

        function TextChange(e){
            filteredCategories = FilterByKeyWord(categories, e.target.value);
            RecreateTable(newTable, filteredCategories, tableHeadNames, tableDiv);
        }

        /* Edição */
        const editDiv = CreateElementWithAttribute('div', 'id', 'edit')
        const idInput = CreateElementWithAttribute('input', 'id', 'id-input');
        const nameInput = CreateElementWithAttribute('input', 'id', 'name-input');
        const editButton = CreateButton('Editar')
        editButton.setAttribute('id', 'enviar')
        editDiv.append(idInput, nameInput, editButton);
        main.append(editDiv)
        editDiv.style.display = 'none'
        
        CallCSS('./categoryList.css')
        CallCSS('../../../styles/lists.css')
    })

})();