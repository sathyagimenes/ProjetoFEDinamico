function filterByCategory (companies, selectedCategory) {
filteredCompanies = companies.filter( company => company.category.name === selectedCategory);

return filteredCompanies;
}

function FilterByKeyWord(items, textoBusca) {
  let filteredItems = items;
  filteredItems = filteredItems.filter(item => item.name.toLocaleLowerCase().includes(textoBusca.toLocaleLowerCase()));

  return filteredItems;
}      