window.Page.companiesRegister = () => {

    main.innerHTML = '';

    const container = document.createElement("div");
    const formsTitle = document.createElement("h2");
    const form = document.createElement("form");

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
        fieldName: "divState",
        title: "Estado",
        inputName: "inputState",
      })
    );
    row4.appendChild(
      createFields({
        fieldName: "divCity",
        title: "Cidade",
        inputName: "inputCity",
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

    (() => {
      const style = document.createElement("style");
      style.innerHTML = `
        html, body {
            font-family: Arial;
            font-size: 16px;
            margin: 0;
            padding: 0;
        }
        row2 {
            display: flex;
            flex-direction: rows;
        }
        form {
            width: 60%;
            margin: 20px auto;
            padding: 20px;
            background: #f1f1f1;
            border-radius: 20px;
            text-align: center;
        }
        div.field {
            margin-bottom: 10px;
        }
    `;
      document.body.appendChild(style);
    })();
}
