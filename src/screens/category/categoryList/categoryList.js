window.Page.categoryList = async () => {

    main.innerHTML = '';

    const contentDiv = CreateElementWithAttribute('div', 'id', 'categoryListContent');

    main.appendChild(contentDiv);

    const tableHeadNames = ['ID', 'Categoria']
    let categories= []

    const searchDiv = CreateElementWithAttribute('div', 'id', 'searchDiv');
    const tableDiv = CreateElementWithAttribute('div', 'id', 'tableDiv');
    const searchInput = CreateElementWithAttribute('input','placeholder', 'Buscar palavra-chave...');
    searchInput.setAttribute('class', 'searchInputCategory');
    const addButton = CreateButton('Adicionar', 'addButtonCategory');
    addButton.addEventListener('click', () => {window.Page.categoryRegister()})

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

    let newTable = CreateTable(categories, tableHeadNames, 'category');

    newTable.setAttribute('class', 'table-categories');

    searchDiv.append(searchInput, addButton)
    tableDiv.appendChild(newTable)        
    contentDiv.append(searchDiv, tableDiv)

    /* Busca */
    searchInput.addEventListener('keyup', TextChange)

    function TextChange(e){
        filteredCategories = FilterByKeyWord(categories, e.target.value);
        RecreateTable(newTable, filteredCategories, tableHeadNames, tableDiv, 'category');
    }  

    /* Edição */
    const editDiv = CreateElementWithAttribute('div', 'id', 'edit')
    contentDiv.appendChild(editDiv)
};