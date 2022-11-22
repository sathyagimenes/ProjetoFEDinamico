window.Page.companiesList = async (filter = "") => {

    main.innerHTML = '';

    const containerCompaniesListPage = CreateElementWithAttribute('div', 'class', 'page-container-companiesList');
    main.appendChild(containerCompaniesListPage);

    const containerBusca = CreateElementWithAttribute('div', 'class', 'search-container-companiesList');

    const categoryFilter = CreateElementWithAttribute('select','class', 'select-companiesList');
    const optionDefault = CreateElementWithAttribute('option', 'value', 'Default');
    optionDefault.innerText = "Filtro por Categoria";
    categoryFilter.appendChild(optionDefault);

    const categories = await GetCategories();

    categories.forEach( category => {
      const option = document.createElement('option');
      option.setAttribute('value', category.name);
      option.innerText = category.name;
      categoryFilter.appendChild(option);
    });
    
    const searchInput = CreateElementWithAttribute('input', 'placeholder', 'buscar por...');
    searchInput.setAttribute('class', 'searchInput-companiesList');
    const addButton = CreateButton('Cadastro', 'AddButton-companiesList');


    addButton.addEventListener('click', () =>{Page.companiesRegister()});

    containerBusca.appendChild(categoryFilter);
    containerBusca.appendChild(searchInput);
    containerBusca.appendChild(addButton);

    containerCompaniesListPage.appendChild(containerBusca);

    const tableContainer = CreateElementWithAttribute('div', 'class', 'table-container-companiesList');
    containerCompaniesListPage.appendChild(tableContainer);

    const tableHeaderData = ['Categoria', 'Nome', 'Endereço', 'CEP', 'Telefone', 'E-mail'];

    const companies = await GetCompanies();

    let filteredCompanies = companies;

    function selectDataToTable(companies) {
      return companies.map( company => {
        return {
          uid: company.uid,
          category: company.category.name,
          name: company.name,
          address: company.address,
          postalCode: company.postal_code,
          phone: company.phone,
          email: company.email
        }
      });
    }

    if(filter){
      categoryFilter.value = filter;
      filterSelectedCategory()
    }else{
      const tableData = selectDataToTable(filteredCompanies);
      const table = CreateTable(tableData, tableHeaderData);
      table.setAttribute('class', 'table-companiesList');
      tableContainer.appendChild(table);
    }

    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal-companyData');
    modal.setAttribute('style', 'display: none;');
    containerCompaniesListPage.appendChild(modal);

    categoryFilter.addEventListener('change', filterSelectedCategory);

    searchInput.addEventListener('keyup', searchData);

    function filterSelectedCategory() {
      const previousTable = document.querySelector('table');
      if(previousTable){
        previousTable.remove();
      }
      if (categoryFilter.value === 'Default') {
        filteredCompanies = companies;
      } else {
        filteredCompanies = filterByCategory(companies, categoryFilter.value);
      }
      const tableData = selectDataToTable(filteredCompanies);
      const table = CreateTable(tableData, tableHeaderData);
      table.setAttribute('class', 'table-companiesList');
      tableContainer.appendChild(table);
      }


    function searchData() {
      filteredCompaniesByKeyWords = FilterByKeyWord(filteredCompanies, searchInput.value);
      const tableData = selectDataToTable(filteredCompaniesByKeyWords);
      RecreateTable(table, tableData, tableHeaderData, tableContainer);
    }
}