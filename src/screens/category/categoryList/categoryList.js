window.Page.categoryList = async () => {

    main.innerHTML = '';    
        const tableHeadNames = ['ID', 'Categoria']
        let categories= []

        const searchDiv = CreateElementWithAttribute('div', 'id', 'search')
        const tableDiv = CreateElementWithAttribute('div', 'id', 'table')
        const searchInput = CreateElementWithAttribute('input','placeholder', 'Buscar palavra-chave...')
        const addButton = CreateButton('Adicionar')
        addButton.setAttribute('onclick', "location.href = '../categoryRegister/categoryRegister.html'")

        /* Listagem */        
        const categoryList = await GetCategories();
        categoryList.sort((a,b) => a.code - b.code);

        categoryList.forEach(element => {
                categories.push({
                uid: element.uid,
                code: element.code,
                name: element.name
            })
        });        

        let newTable = CreateTable(categories, tableHeadNames, 'category')

        searchDiv.append(searchInput, addButton)
        tableDiv.appendChild(newTable)        
        main.append(searchDiv, tableDiv)

        /* Busca */
        searchInput.addEventListener('keyup', TextChange)

        function TextChange(e){
            filteredCategories = FilterByKeyWord(categories, e.target.value);
            RecreateTable(newTable, filteredCategories, tableHeadNames, tableDiv, 'category');
        }  

        /* Edição */
        const editDiv = CreateElementWithAttribute('div', 'id', 'edit')
        main.appendChild(editDiv)
};