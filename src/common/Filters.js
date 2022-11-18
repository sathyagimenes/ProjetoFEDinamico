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
