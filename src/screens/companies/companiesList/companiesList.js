(() => {
  const body = document.querySelector('body');
  const main = document.createElement('main');
  body.appendChild(main);
  main.setAttribute('style', 'display: flex; flex-direction: column; align-items: flex-start; justify-content: center;')


  const containerBuscaAdd = document.createElement('div');
  containerBuscaAdd.setAttribute('style', 'margin: 10px 0 20px 150px; display: flex; width: 50%; justify-content: space-between; align-items: center;')

  const categoryFilter = document.createElement('select');
  const optionDefault = document.createElement('option');
  optionDefault.setAttribute('value', 'Default');
  optionDefault.innerText = "Filtro por Categoria";
  categoryFilter.appendChild(optionDefault);
  const option1 = document.createElement('option');
  option1.setAttribute('value', 'Categoria1');
  option1.innerText = "Categoria1";
  categoryFilter.appendChild(option1);
  const option2 = document.createElement('option');
  option2.setAttribute('value', 'Categoria2');
  option2.innerText = "Categoria2";
  categoryFilter.appendChild(option2);

  const searchInput = document.createElement('input');
  searchInput.setAttribute('placeholder', 'buscar por...')
  const addButton = document.createElement('button');
  addButton.innerText = "Adicionar novo Estabelecimento";

  containerBuscaAdd.appendChild(categoryFilter);
  containerBuscaAdd.appendChild(searchInput);
  containerBuscaAdd.appendChild(addButton);

  main.appendChild(containerBuscaAdd);

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

  function tableCreation () {

    const table = document.createElement('table');
  table.setAttribute('style', 'width:100%; border: 2px solid #000;border-collapse: collapse;')

  const thead = document.createElement('thead');

  tableHeaderData.forEach( dado => {
      const th = document.createElement('th');
      th.innerText = dado;
      th.setAttribute('style', 'padding: 10px; text-align: center; border: 2px solid #000;');
      thead.appendChild(th);
  });
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  filteredCompanies.forEach( company => {
      const tr = document.createElement('tr');
      tr.setAttribute('style', 'padding: 10px; text-aling: center; border:2px solid #000;');

      for (let key in company){
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
    
}) ();