window.Page.categoryRegister = async () => {
  main.innerHTML = "";

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
    window.alert("Categoria adicionada com sucesso!");
  }

  const categories = await GetCategories();

  btnInsert.addEventListener("click", insertCategory);

  async function insertCategory() {
    const inputId = form.querySelector("[name='inputCodigo']");
    const inputName = form.querySelector("[name='inputCategoria']");
    const equal = FilterCategoryByCode(categories, inputId.value);
    if (inputId.value.length < 1) {
      window.alert("O código deve ter, pelo menos, um número");
    } else if (inputName.value.length <= 2) {
      window.alert("O nome da categoria deve ter, pelo menos, três letras");
    } else if (equal.length > 0) {
      window.alert(
        `O codigo ${inputId.value} já existe. Insira um novo código`
      );
    } else {
      register(inputId.value, inputName.value);
    }
    Page.categoryRegister();
  }
};
