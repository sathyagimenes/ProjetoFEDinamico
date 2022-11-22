window.Page.categoryList = async () => {

    main.innerHTML = '';    
        const tableHeadNames = ['ID', 'Categoria']
        let categories= []

        const searchDiv = CreateElementWithAttribute('div', 'id', 'search')
        const tableDiv = CreateElementWithAttribute('div', 'id', 'table')
        const searchInput = CreateElementWithAttribute('input','placeholder', 'Buscar palavra-chave...')
        const addButton = CreateButton('Adicionar')
        addButton.setAttribute('onclick', "location.href = '../categoryRegister/categoryRegister.html'")
        searchDiv.append(searchInput, addButton)
        main.append(searchDiv, tableDiv)

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

        /* Busca */
        searchInput.addEventListener('keyup', TextChange)

        function TextChange(e){
            filteredCategories = filter.FilterByKeyWord(categories, e.target.value);
            RecreateTable(newTable, filteredCategories, tableHeadNames, tableDiv, 'category');
        }

        /* Edição */
        const editDiv = CreateElementWithAttribute('div', 'id', 'edit')
        const idInput = CreateElementWithAttribute('input', 'id', 'id-input');
        const nameInput = CreateElementWithAttribute('input', 'id', 'name-input');
        const editButton = CreateButton('Editar')
        editButton.setAttribute('id', 'enviar')
        // editButton.addEventListener('click', UpdateTable)    
        // async function UpdateTable(){
        //     const newCategoryList = await GetCategories();
        //     console.log(newCategoryList)
        //     RecreateTable(newTable, newCategoryList, tableHeadNames, tableDiv);
        // }
        editDiv.append(idInput, nameInput, editButton);
        main.append(editDiv)
        editDiv.style.display = 'none'
        
     

};