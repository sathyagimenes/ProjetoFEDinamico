window.Page.companiesList = async () => {

    main.innerHTML = '';

    const containerBusca = CreateElementWithAttribute('div', 'class', 'search-container');

    const categoryFilter = document.createElement('select');
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
    const addButton = document.createElement('button');
    addButton.innerText = "Adicionar";

    containerBusca.appendChild(categoryFilter);
    containerBusca.appendChild(searchInput);
    containerBusca.appendChild(addButton);

    main.appendChild(containerBusca);

    const tableContainer = CreateElementWithAttribute('div', 'class', 'table-container');
    main.appendChild(tableContainer);

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

    const tableData = selectDataToTable(filteredCompanies);

    const table = CreateTable(tableData, tableHeaderData);

    tableContainer.appendChild(table);

    categoryFilter.addEventListener('change', filterSelectedCategory);

    searchInput.addEventListener('keyup', searchData);

    function filterSelectedCategory() {
      if (categoryFilter.value === 'Default') {
        filteredCompanies = companies;
      } else {
        filteredCompanies = filterByCategory(companies, categoryFilter.value);
      }
      const tableData = selectDataToTable(filteredCompanies);
      RecreateTable(table, tableData, tableHeaderData, tableContainer);
      }


    function searchData() {
      filteredCompaniesByKeyWords = FilterByKeyWord(filteredCompanies, searchInput.value);
      const tableData = selectDataToTable(filteredCompaniesByKeyWords);
      RecreateTable(table, tableData, tableHeaderData, tableContainer);
    }

    
    
}