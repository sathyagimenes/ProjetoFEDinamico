(() => {
  for (const file of [
    'common/Utils.js'
  ]) {
    const script = document.createElement('script')
    script.setAttribute('src', `../../../${file}`)

    document.head.appendChild(script)
  }

  window.addEventListener('load', () => {

    const body = document.querySelector('body');
    const main = document.createElement('main');
    body.appendChild(main);

    const containerBusca = CreateElementWithAttribute('div', 'class', 'search-container');

    const categoryFilter = document.createElement('select');
    const optionDefault = CreateElementWithAttribute('option', 'value', 'Default');
    optionDefault.innerText = "Filtro por Categoria";
    categoryFilter.appendChild(optionDefault);

    fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/category/list', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: "",
        group: {
          uid: "3513d2d8-d47e-4da4-a61e-0ed144dd1c7f"
        }
      })
    }).then((response) => {
      if(response.ok){
        response.json().then( data => {
          data.forEach( category => {
            const option = document.createElement('option');
            option.setAttribute('value', category.name);
            option.innerText = category.name;
            categoryFilter.appendChild(option);
          })
        })
      } else {
        response.json().then( data => {
          error.log('Text:', JSON.stringify(data));
        })
      }
    })

    
    const searchInput = document.createElement('input');
    searchInput.setAttribute('placeholder', 'buscar por...')
    const addButton = document.createElement('button');
    addButton.innerText = "Adicionar novo Estabelecimento";

    containerBusca.appendChild(categoryFilter);
    containerBusca.appendChild(searchInput);
    containerBusca.appendChild(addButton);

    main.appendChild(containerBusca);

    const tableContainer = document.createElement('div');
    tableContainer.setAttribute('style', 'width: 80%; margin: auto;')
    main.appendChild(tableContainer);

    const tableHeaderData = ['Categoria', 'Nome', 'Endereço', 'CEP', 'Telefone', 'E-mail', 'Ação'];

    const companies = [
      {
        categoria: 'Categoria1',
        nome: 'Nome1',
        endereco: 'Endereço1',
        cep: '123456-111',
        telefone: '14 1111-2222',
        email: 'empresa1@email.com'
      },
      {
        categoria: 'Categoria2',
        nome: 'Nome2',
        endereco: 'Endereço2',
        cep: '2223456-2',
        telefone: '14 2222-2222',
        email: 'empresa2@email.com'
      },
      {
        categoria: 'Categoria1',
        nome: 'Nome3',
        endereco: 'Endereço3',
        cep: '123456-113',
        telefone: '14 1111-2223',
        email: 'empresa3@email.com'
      },
    ];

    let filteredCompanies = companies;

    tableCreation();

    function tableCreation() {

      const table = document.createElement('table');
      table.setAttribute('style', 'width:100%; border: 2px solid #000;border-collapse: collapse;')

      const thead = document.createElement('thead');

      tableHeaderData.forEach(dado => {
        const th = document.createElement('th');
        th.innerText = dado;
        th.setAttribute('style', 'padding: 10px; text-align: center; border: 2px solid #000;');
        thead.appendChild(th);
      });
      table.appendChild(thead);

      const tbody = document.createElement('tbody');
      filteredCompanies.forEach(company => {
        const tr = document.createElement('tr');
        tr.setAttribute('style', 'padding: 10px; text-aling: center; border:2px solid #000;');

        for (let key in company) {
          const dado = document.createElement('td');
          dado.innerText = company[key];
          dado.setAttribute('style', 'padding: 10px; text-aling: center; border:2px solid #000;');
          tr.appendChild(dado);
        }
        const containerIcons = document.createElement('td');
        containerIcons.setAttribute('style', 'display:flex; align-items: center; justify-content: space-around;');

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