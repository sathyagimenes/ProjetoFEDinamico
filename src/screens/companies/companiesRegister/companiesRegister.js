(() => {
  for (const file of ["common/forms.js", "common/Utils.js"]) {
    const script = document.createElement("script");
    script.setAttribute("src", `../../../${file}`);

    document.head.appendChild(script);
  }

  window.addEventListener("load", () => {
    const body = document.getElementsByTagName("body")[0];
    const main = document.createElement("main");
    const container = document.createElement("div");
    const formsTitle = document.createElement("h2");
    const form = document.createElement("form");

    body.appendChild(main);
    main.appendChild(container);
    container.appendChild(formsTitle);
    container.appendChild(form);

    formsTitle.textContent = "Cadastre seu estabelecimento";


    const row1 = createRows("row1");
    const row2 = createRows("row2");
    const row3 = createRows("row3");
    const row4 = createRows("row4");

    row1.appendChild(
      createFields({
        fieldName: "divCategory",
        title: "Categoria",
        inputName: "inputCategory",
      })
    );
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
        inputType: "number",
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
    divButton.appendChild(btnRegister);
    form.appendChild(divButton);

    btnRegister.addEventListener("click", () => {
      const inputCategory = form.querySelector("[name='inputCategory']");
      const inputName = form.querySelector("[name='inputName']");
      const inputEmail = form.querySelector("[name='inputEmail']");
      const inputPhone = form.querySelector("[name='inputTelephone']");
      const inputCEP = form.querySelector("[name='inputCEP']");
      const inputAddress = form.querySelector("[name='inputAddress']");

      if (inputCategory.value.length < 1) {
        window.alert("Categoria inválida");
      } else if (inputName.value.length <= 1) {
        window.alert("Nome inválido.");
      } else if (inputEmail.value.length <= 1) {
        window.alert("E-mail inválido.");
      } else if (inputPhone.value.length <= 1) {
        window.alert("Telefone inválido.");
      } else if (inputCEP.value.length <= 1) {
        window.alert("CEP inválido.");
      } else if (inputAddress.value.length <= 1) {
        window.alert("Endereço inválido.");
      } else {
        register(inputCategory.value, inputName.value, inputEmail.value, inputPhone.value, inputCEP.value, inputAddress.value);
        inputCategory.value = "";
        inputName.value = "";
        inputEmail.value = "";
        inputPhone.value = "";
        inputCEP.value = "";
        inputAddress.value = "";
      }
    });

    CallCSS("./companiesRegister.css");
  });
})();
