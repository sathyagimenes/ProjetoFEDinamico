function clearTable() {
    const table = document.querySelector('table');
    table.remove(); 
}

function filterByCategory () {
if(categoryFilter.value === 'Default') {
    filteredCompanies = companies.filter(company => company.nome.toLocaleLowerCase().includes(searchInput.value.toLocaleLowerCase()));
} else {
filteredCompanies = companies.filter( company => company.categoria === categoryFilter.value);
}
clearTable();
tableCreation();
}

function filterByKeyWords () {
    if(searchInput.value.length < 3){
      filterByCategory();
    } else {
      filteredCompanies = filteredCompanies.filter(company => company.nome.toLocaleLowerCase().includes(searchInput.value.toLocaleLowerCase())); 
    }
    clearTable();
    tableCreation();
}

//ver como deixar global
function FilterCategoriesByName(e) {
    //let tableHeadNames = variável informada
    //let filteredCategories = variável informada
    let filteredCategories = categories;
    filteredCategories = filteredCategories.filter(category => category.name.toLocaleLowerCase().includes(e.target.value));
    clearTable();
    //newTable seria substituído por uma tabela global
    newTable = CreateTable(filteredCategories, tableHeadNames)
    //tableDiv seria substituído pelo append na tag de destino
    tableDiv.appendChild(newTable)
}