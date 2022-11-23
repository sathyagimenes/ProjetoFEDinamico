
window.Page.companiesRegister = async () => {

    main.innerHTML = '';

    const container = document.createElement("div");
    container.setAttribute('class', 'container');
    const formsTitle = document.createElement("h2");
    formsTitle.setAttribute('class', 'titleCadastroC');
    const form = document.createElement("form");

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

    main.appendChild(container);
    container.appendChild(formsTitle);
    // container.appendChild(categoryFilter);
    container.appendChild(form);

    formsTitle.textContent = "Cadastre seu estabelecimento";
    const row1 = createRows("row1");
    const row2 = createRows("row2");
    const row3 = createRows("row3");
    const row4 = createRows("row4");

    row1.appendChild(categoryFilter);
    row2.appendChild(
      createFields({
        fieldName: "fieldName",
        title: "Nome",
        inputName: "inputName",
      })
    );
    row2.appendChild(
      createFields({
        fieldName: "divEmail",
        title: "E-mail",
        inputName: "inputEmail",
        inputType: "email",
      })
    );
    row3.appendChild(
      createFields({
        fieldName: "divTelephone",
        title: "Telefone",
        inputName: "inputTelephone",
      })
    );
    row3.appendChild(
      createFields({
        fieldName: "divCEP",
        title: "CEP",
        inputName: "inputCEP",
        inputType: "number",
      })
    );
    row4.appendChild(
      createFields({
        fieldName: "divAddress",
        title: "Endereço",
        inputName: "inputAddress",
      })
    );

    form.append(row1, row2, row3, row4);

    const divButton = document.createElement("div");
    const btnRegister = CreateButton("Cadastrar");
    btnRegister.setAttribute('class', 'btnCadastroC');
    divButton.appendChild(btnRegister);
    form.appendChild(divButton);

    function register(inCategory, inName, inEmail, inPhone, inCEP, inAddress) {
      const newObj = { category: inCategory, name: inName, email: inEmail, phone: inPhone, cep: inCEP, address: inAddress};
      PostCompany(newObj);
      window.alert("Estabelecimento adicionada com sucesso!");
    }


    btnRegister.addEventListener("click", () => {
      const inputName = form.querySelector("[name='inputName']");
      const inputEmail = form.querySelector("[name='inputEmail']");
      const inputPhone = form.querySelector("[name='inputTelephone']");
      const inputCEP = form.querySelector("[name='inputCEP']");
      const inputAddress = form.querySelector("[name='inputAddress']");
      const categoryData = categories.filter( item => item.name == categoryFilter.value)[0];


      if (inputName.value.length <= 1) {
        window.alert("Nome inválido.");
        //window.alert(categoryFilter.value);
      } else if (inputEmail.value.length <= 1) {
        window.alert("E-mail inválido.");
      } else if (inputPhone.value.length <= 1) {
        window.alert("Telefone inválido.");
      } else if (inputCEP.value.length <= 1) {
        window.alert("CEP inválido.");
      } else if (inputAddress.value.length <= 1) {
        window.alert("Endereço inválido.");
      } else {
        register(categoryData.uid, inputName.value, inputEmail.value, inputPhone.value, inputCEP.value, inputAddress.value);
        inputCategory.value = "";
        inputName.value = "";
        inputEmail.value = "";
        inputPhone.value = "";
        inputCEP.value = "";
        inputAddress.value = "";
      }
      Page.companiesRegister();
    });
  }

