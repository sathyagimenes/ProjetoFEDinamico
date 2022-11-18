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

function FilterByKeyWord(items, textoBusca) {
  let filteredItems = items;
  filteredItems = filteredItems.filter(item => item.name.toLocaleLowerCase().includes(textoBusca.toLocaleLowerCase()));

  return filteredItems;
}      