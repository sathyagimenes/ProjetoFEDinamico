// window.filter = {
//   filterByCategory: (companies, selectedCategory) => {
//     filteredCompanies = companies.filter( company => company.category.name === selectedCategory);
//     return filteredCompanies;
//   },
//   FilterByKeyWord: (items, textoBusca) => {
//     let filteredItems = items;
//     filteredItems = filteredItems.filter(item => item.name.toLocaleLowerCase().includes(textoBusca.toLocaleLowerCase()));
  
//     return filteredItems;
//   },
//   FilterByUid: (items, uid) => {
//     let filteredItems = items;
//     filteredItems = filteredItems.filter(item => item.uid.toLocaleLowerCase().includes(uid.toLocaleLowerCase()));
  
//     return filteredItems;
//   }
// } 

function filterByCategory (companies, selectedCategory) {
  filteredCompanies = companies.filter( company => company.category.name === selectedCategory);
  
  return filteredCompanies;
  }
  
  function FilterByKeyWord(items, textoBusca) {
    let filteredItems = items;
    filteredItems = filteredItems.filter(item => item.name.toLocaleLowerCase().includes(textoBusca.toLocaleLowerCase()));
  
    return filteredItems;
  }
  
  function FilterByUid(items, uid) {
    let filteredItems = items;
    filteredItems = filteredItems.filter(item => item.uid.toLocaleLowerCase().includes(uid.toLocaleLowerCase()));
  
    return filteredItems;
  }

  function FilterCategoryByCode(items, codeCategory) {
    let filteredItems = items;
    filteredItems = filteredItems.filter(item => item.code.toLocaleLowerCase().includes(codeCategory.toLocaleLowerCase()));
  
    return filteredItems;
  }

  function FilterCategoryByName(items, categoryName) {
    let filteredItems = items;
    filteredItems = filteredItems.filter(item => item.name.toLocaleLowerCase().includes(categoryName.toLocaleLowerCase()));
  
    return filteredItems;
  }