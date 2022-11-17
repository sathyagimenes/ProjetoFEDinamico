(() => {
  for (const file of ["common/forms.js"]) {
    const script = document.createElement("script");
    script.setAttribute("src", `../../../${file}`);
    document.head.appendChild(script);
  }

  window.addEventListener("load", () => {
    let categories = [
      {
        id: "1",
        name: "Restaurantes",
      },
    ];

    const main = document.createElement("main");
    const container = document.createElement("div");
    const title = document.createElement("h1");
    const form = document.createElement("form");
    const divBtn = document.createElement("div");
    const btnInsert = document.createElement("button");

    title.textContent = "Cadastro de Categorias";
    btnInsert.textContent = "Cadastrar";
    divBtn.appendChild(btnInsert);

    document.body.appendChild(main);
    main.appendChild(container);
    container.appendChild(title);
    container.appendChild(form);

    const id = createRows("id");
    const category = createRows("category");

    id.appendChild(
      createFields({
        fieldName: "divCodigo",
        title: "Código",
        inputName: "inputCodigo",
        inputType: "number",
      })
    );
    category.appendChild(
      createFields({
        fieldName: "divCategoria",
        title: "Categoria",
        inputName: "inputCategoria",
      })
    );

    form.append(id, category, divBtn);

    function register(inId, inName) {
      const newObj = { id: inId, name: inName };
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

    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
		html, body {
			font-family: Verdana;
		}
		main {
			font-size: 30px;
			color: #black;
			margin: 20px;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
		h1 {
			margin: 5rem;
			text-align: center;
		}
		label {
			margin: 2px;
		}
		input {
			height: 20px;
			widht: 200px;
			padding: 8px;
			font-size: 20px;
			text-align: center;
			margin-bottom: 50px;
		}
		button {
			font-size: 20px;
			width: 150px;
			margin: 1rem;
			padding: 6px;
			border-radius: 10px;
			box-shadow: 0px 5px 10px 1px rgba(68, 20, 13, 0.199);
		}
		`;
    document.body.appendChild(styleTag);

    window.addEventListener("resize", () => {
      if (window.innerWidth < 600) {
        styleTag.innerHTML = `
			html, body {
				font-family: Verdana;
			}
			main {
				font-size: 20px;
				color: #black;
				margin: 20px;
				display: flex;
				flex-direction: column;
				align-items: center;
				text-align: center;
			}
			h1 {
				margin: 5rem;
				text-align: center;
			}
			label {
				margin: 2px;
			}
			input {
				height: 20px;
				widht: 100px;
				padding: 8px;
				font-size: 20px;
				text-align: center;
				margin-bottom: 50px;
			}
			button {
				font-size: 20px;
				width: 150px;
				margin: 1rem;
				padding: 6px;
				border-radius: 10px;
				box-shadow: 0px 5px 10px 1px rgba(68, 20, 13, 0.199);
			}
			`;
      } else {
        styleTag.innerHTML = `
			html, body {
				font-family: Verdana;
			}
			main {
				font-size: 30px;
				color: #black;
				margin: 20px;
				display: flex;
				flex-direction: column;
				align-items: center;
				text-align: center;
			}
			h1 {
				margin: 5rem;
				text-align: center;
			}
			label {
				margin: 2px;
			}
			input {
				height: 20px;
				widht: 200px;
				padding: 8px;
				font-size: 20px;
				text-align: center;
				margin-bottom: 50px;
			}
			button {
				font-size: 20px;
				width: 150px;
				margin: 1rem;
				padding: 6px;
				border-radius: 10px;
				box-shadow: 0px 5px 10px 1px rgba(68, 20, 13, 0.199);
			}
			`;
      }
    });
  });
})();
