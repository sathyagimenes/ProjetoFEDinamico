(() => {
  for (const file of [
    'common/Utils.js',
    'common/Filters.js',
    'common/services.js',
  ]) {
    const script = document.createElement('script')
    script.setAttribute('src', `../../../${file}`)

    document.head.appendChild(script)
  }

  window.addEventListener('load', async () => {

    const body = document.querySelector('body');
    const main = document.createElement('main');
    body.appendChild(main);

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

    const tableContainer = document.createElement('div');
    tableContainer.setAttribute('style', 'width: 80%; margin: auto;')
    main.appendChild(tableContainer);

    const tableHeaderData = ['Categoria', 'Nome', 'Endereço', 'CEP', 'Telefone', 'E-mail', 'Ação'];

    const companies = await GetCompanies();

    let filteredCompanies = companies;

    tableCreation();

    function tableCreation() {

      const table = document.createElement('table');

      const thead = document.createElement('thead');

      tableHeaderData.forEach(dado => {
        const th = document.createElement('th');
        th.innerText = dado;
        thead.appendChild(th);
      });
      table.appendChild(thead);

      const tbody = document.createElement('tbody');
      filteredCompanies.forEach(company => {
        const tr = document.createElement('tr');

        tableData = {
          category: company.category.name,
          name: company.name,
          address: company.address,
          postalCode: company.postal_code,
          phone: company.phone,
          email: company.email
        };

        for (let key in tableData) {
          const dado = document.createElement('td');
          dado.innerText = tableData[key];
          tr.appendChild(dado);
        }

        const containerIcons = document.createElement('td');

        const buttonEdit = document.createElement('button');
        const iconEdit = document.createElement('img');
        // iconEdit.setAttribute('src', './edit_icon.svg');
        buttonEdit.appendChild(iconEdit);
        buttonEdit.innerText = 'Editar';
        containerIcons.appendChild(buttonEdit);

        const buttonDelete = document.createElement('button');
        const iconDelete = document.createElement('img');
        // iconDelete.setAttribute('src', './delete_icon.svg');
        buttonDelete.appendChild(iconDelete);
        buttonDelete.innerText = 'Apagar';
        containerIcons.appendChild(buttonDelete);

        tr.appendChild(containerIcons);


        tbody.appendChild(tr);
      });
      table.appendChild(tbody);

      tableContainer.appendChild(table);

    }

    function clearTable() {
      const table = document.querySelector('table');
      table.remove();
    }

    categoryFilter.addEventListener('change', filterByCategory);


    searchInput.addEventListener('keyup', filterByKeyWords);


    function filterByCategory() {
      if (categoryFilter.value === 'Default') {
        filteredCompanies = companies.filter(company => company.nome.toLocaleLowerCase().includes(searchInput.value.toLocaleLowerCase()));
      } else {
        filteredCompanies = companies.filter(company => company.categoria === categoryFilter.value);
      }
      clearTable();
      tableCreation();
    }

    function filterByKeyWords() {
      if (searchInput.value.length < 3) {
        filterByCategory();
      } else {
        filteredCompanies = filteredCompanies.filter(company => company.nome.toLocaleLowerCase().includes(searchInput.value.toLocaleLowerCase()));
      }
      clearTable();
      tableCreation();
    }

    CallCSS('./companiesList.css')
  })
})();