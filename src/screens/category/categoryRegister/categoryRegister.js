window.Page.categoryRegister = async () => {
  main.innerHTML = '';

  const container = CreateElementWithAttribute(
    'div',
    'class',
    'containerCategory'
  );
  main.appendChild(container);

  const title = CreateElementWithAttribute('h1', 'class', 'titleCategory');
  title.textContent = 'Cadastro de Categorias';
  container.appendChild(title);

  const form = CreateElementWithAttribute('form', 'class', 'forms');
  container.appendChild(form);

  const divId = createRows('divId');
  const divCategory = createRows('divCategory');
  const divBtn = document.createElement('div');
  const btnInsert = CreateButton('Cadastrar', 'btnCadastrar');
  divBtn.appendChild(btnInsert);

  divId.appendChild(
    createFields({
      fieldName: 'divCodigo',
      title: 'Código',
      inputName: 'inputCodigo',
      inputType: 'number',
    })
  );
  divCategory.appendChild(
    createFields({
      fieldName: 'divCategoria',
      title: 'Categoria',
      inputName: 'inputCategoria',
    })
  );
  form.append(divId, divCategory, divBtn);

  function register(inId, inName) {
    const body = JSON.stringify({
      code: inId,
      name: inName,
      group: {
        uid: groupCode,
      },
    });
    CallApi({ method: 'POST', service: 'category', body });
    window.alert('Categoria adicionada com sucesso!');
  }

  const categories = await CallApi({
    service: 'category/list',
    body: getCategoryBody
  });

  btnInsert.addEventListener('click', insertCategory);

  async function insertCategory() {
    const inputId = form.querySelector("[name='inputCodigo']");
    const inputName = form.querySelector("[name='inputCategoria']");
    const sameId = FilterCategoryByCode(categories, inputId.value);
    const sameName = FilterCategoryByName(categories, inputName.value);
    if (inputId.value.length < 1) {
      window.alert('O código deve ter, pelo menos, um número');
    } else if (inputName.value.length <= 2) {
      window.alert('O nome da categoria deve ter, pelo menos, três letras');
    } else if (sameId.length > 0) {
      window.alert(
        `O codigo ${inputId.value} já existe. Insira um novo código`
      );
    } else if (sameName.length > 0) {
      window.alert(`A categoria ${inputName.value} já existe`);
    } else {
      register(inputId.value, inputName.value);
    }
    Page.categoryRegister();
  }
};
