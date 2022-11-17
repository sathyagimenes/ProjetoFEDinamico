(() => {
	const fieldJS = document.createElement('script');
	fieldJS.setAttribute('src', 'commonForms.js');
	document.body.appendChild(fieldJS);

	window.addEventListener('load', ()=> {
		let categories= [
			{
				id: '1',
				name: 'Restaurantes'
			}
		]
	
		const main = document.createElement('main');
		const title = document.createElement('h1');
		const form = document.createElement('form');
		const divBtn = document.createElement('div');
		const btnInsert = document.createElement('button');
	
		title.textContent = 'Cadastro de Categorias';
		btnInsert.textContent = 'Cadastrar';
	
		document.body.appendChild(main);
		main.appendChild(title);
		main.appendChild(form);
	
		form.appendChild(field.create({
			label: 'Código',
			name : 'codigo',
			input: document.createElement('input'),
			type: 'number'
		}))
		form.appendChild(field.create({
			label: 'Categoria',
			name: 'categoria',
			input: document.createElement('input'),
			type: 'text'
		}))
		form.appendChild(divBtn);
		divBtn.appendChild(btnInsert);
	
		function register (inId, inName) {
			const newObj = { id: inId, name: inName };
			categories.push(newObj);//adicionar via api
			checkResgiter();//excluir depois
			window.alert('Categoria adicionada com sucesso!');
		}
	
		function checkResgiter () {
			for(let i = 0; i < categories.length; i++)
			{
				console.log('id: ' + categories[i].id + '\nname: ' + categories[i].name);
			}
		}
	
		btnInsert.addEventListener("click", () => {
			const inputId = form.querySelector("[name='codigo']");
			const inputName = form.querySelector("[name='categoria']");
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
				font-size: 40px;
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
	
		window.addEventListener('resize', () => {
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
					font-size: 40px;
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
		})
	})
})();
