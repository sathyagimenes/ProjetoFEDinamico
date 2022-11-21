window.Page.categoryRegister = () => {

    main.innerHTML = '';
  
    let categories = [
      {
        id: "1",
        name: "Restaurantes",
      },
    ];

    const container = document.createElement("div");
    main.appendChild(container);

    const title = document.createElement("h1");
    title.textContent = "Cadastro de Categorias";
    container.appendChild(title);

    const form = document.createElement("form");
    container.appendChild(form);

    const divId = createRows("divId");
    const divCategory = createRows("divCategory");
    const divBtn = document.createElement("div");
    const btnInsert = CreateButton("Cadastrar");
    divBtn.appendChild(btnInsert);

    divId.appendChild(
      createFields({
        fieldName: "divCodigo",
        title: "Código",
        inputName: "inputCodigo",
        inputType: "number",
      })
    );
    divCategory.appendChild(
      createFields({
        fieldName: "divCategoria",
        title: "Categoria",
        inputName: "inputCategoria",
      })
    );
    form.append(divId, divCategory, divBtn);

    function register(inId, inName) {
      const newObj = { id: inId, name: inName };
      PostCategory(newObj);
      categories.push(newObj); //adicionar via api
      checkResgiter(); //excluir depois
      window.alert("Categoria adicionada com sucesso!");
    }

    function checkResgiter() {
      for (let i = 0; i < categories.length; i++) {
        console.log(
          "id: " + categories[i].id + "\nname: " + categories[i].name
        );
      }
    }

    btnInsert.addEventListener("click", () => {
      const inputId = form.querySelector("[name='inputCodigo']");
      const inputName = form.querySelector("[name='inputCategoria']");
      if (inputId.value.length < 1) {
        window.alert("O código deve ter, pelo menos, um número");
      } else if (inputName.value.length <= 2) {
        window.alert("O nome deve ter, pelo menos, três letras");
      } else {
        register(inputId.value, inputName.value);
        inputId.value = "";
        inputName.value = "";
      }
      //adicionar verificação de codigo e nome já inseridos anteriormente
    });

    
}
