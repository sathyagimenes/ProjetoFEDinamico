/* Chamando o CSS */
function CallCSS(reference) {
    const link = document.createElement('link')
    SetMultipleAttributes(link, {
        'rel': 'stylesheet',
        'type': 'text/css',
        'href': reference  
    })
    document.head.appendChild(link);   
}

function SetMultipleAttributes(el, attrs) {
    for(const key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}

function CreateElementWithAttribute (elName, attrType, attrName) {
    const newElement = document.createElement(elName);
    newElement.setAttribute(attrType, attrName)
    return newElement;
}

function CreateButton (btnText, className = '') {
    const newButton = document.createElement('button');
    newButton.textContent = btnText;
    newButton.setAttribute('class', className);
    return newButton;
}

function CreateTable (row, tableHead, type) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    tableHead.forEach(item => {
        const th = document.createElement('th')
        th.innerText = item;
        thead.appendChild(th);
    });

    for (let i = 0; i < row.length; i++) {
        const tr = document.createElement("tr");
        for(let j = 1; j < tableHead.length + 1; j++) {
            const td = document.createElement("td");
            const texto = document.createTextNode(Object.values(row[i])[j]);
            td.appendChild(texto);
            tr.appendChild(td);
            if (j == tableHead.length ) {
                const buttonsTd = document.createElement("td");
                const buttonEdit = document.createElement('button');
                const iconEdit = document.createElement('img');
                iconEdit.setAttribute('src', './src/assets/imgs/edit_icon.svg');
                buttonEdit.setAttribute('class',Object.values(row[i])[0]);
                buttonEdit.appendChild(iconEdit);
                buttonEdit.setAttribute('onclick', type == 'category' ? 'EditCategory(this.className)' : 'EditCompany(this.className)')
                buttonsTd.appendChild(buttonEdit);        
                const buttonDelete = document.createElement('button');
                const iconDelete = document.createElement('img');
                iconDelete.setAttribute('src', './src/assets/imgs/delete_icon.svg');
                buttonDelete.setAttribute('class',Object.values(row[i])[0]);
                buttonDelete.setAttribute('onclick', type == 'category' ? "DeleteCategory(this.className)" : "DeleteCompany(this.className)")
                buttonDelete.appendChild(iconDelete);
                buttonsTd.appendChild(buttonDelete);
                tr.appendChild(buttonsTd);
            }
            
        }
        tbody.appendChild(tr);
    }

    table.appendChild(thead)
    table.appendChild(tbody)

    return table;
};

function clearTable() {
    const table = document.querySelector('table');
    table.remove();
  }

function RecreateTable(table, items, headNames, tag, type) {
    clearTable();
    table = CreateTable(items, headNames, type)
    tag.appendChild(table)
}

async function EditCategory(uid) {
    const categoryList = await GetCategories();
    let chosenCategory = FilterByUid(categoryList, uid)

    const editDiv = document.getElementById('edit')
    editDiv.innerHTML = '';
    const idInput = CreateElementWithAttribute('input', 'id', 'id-input');
    const nameInput = CreateElementWithAttribute('input', 'id', 'name-input');
    const editButton = CreateButton('Editar')
    editButton.setAttribute('id', 'enviar')

    idInput.value = chosenCategory[0].code
    nameInput.value = chosenCategory[0].name

    editButton.addEventListener('click', CallEditService)
    
    async function CallEditService(){
        const codes = FilterCategoryByCode(categoryList, idInput.value);
        if (idInput.value.length < 1) {
            window.alert("O código deve ter, pelo menos, um número");
        } else if (nameInput.value.length <= 2) {
            window.alert("O nome da categoria deve ter, pelo menos, três letras");
        } else if (codes.length > 0 && chosenCategory[0].code != idInput.value) {
            window.alert(`O codigo ${idInput.value} já existe. Insira um novo código`);
        } else if (chosenCategory[0].code == idInput.value && chosenCategory[0].name == nameInput.value) {
            window.alert('Não há alterações a serem realizadas.');
        } else {
            await UpdateCategories({uid: uid, code: idInput.value, name: nameInput.value});
            window.alert('Categoria alterada com sucesso');
            setTimeout((() => {
                Page.categoryList(); 
            }), 1000)
        }        
    }
    editDiv.append(idInput, nameInput, editButton);
}

async function EditCompany(companyUid) {
    const companiesList = await GetCompanies();
    const categories =  await GetCategories();
    const chosenCompany = FilterByUid(companiesList, companyUid)[0];

    const modal = document.querySelector('.modal-companyData')

    modal.innerHTML = '';

    const relationName = {uid: 'uid', address: 'Endereço', phone: 'Telefone', name: 'Nome', category: 'Categoria', postal_code: 'CEP', email: 'email', code: 'Código Categoria'};
    modal.innerHTML = '';

    for( const key in chosenCompany){
        const containerData = document.createElement('div');
        if(key == "category"){
            containerData.classList.add('category-info-container');
            for( const chaveDadoCategoria in chosenCompany[key]){
                if(chaveDadoCategoria == 'name'){
                    const label = document.createElement('label');
                    label.textContent = 'Categoria';
                    const categorySelection = document.createElement('select');
                    categorySelection.setAttribute('id', 'categorySelectionField');
                    const optionDefault = CreateElementWithAttribute('option', 'value', chosenCompany[key][chaveDadoCategoria]);
                    optionDefault.innerText = chosenCompany[key][chaveDadoCategoria];
                    categorySelection.appendChild(optionDefault);

                    categories.forEach( category => {
                    const option = document.createElement('option');
                    option.setAttribute('value', category.name);
                    option.innerText = category.name;
                    categorySelection.appendChild(option);
                    }); 

                    containerData.appendChild(label);
                    containerData.appendChild(categorySelection);
                    modal.appendChild(containerData);
                }
            }
            continue;
        }
        const label = document.createElement('label');
        label.textContent = relationName[key]; 
        const input = document.createElement('input');
        input.value = chosenCompany[key];
        input.name = `modal-${key}`;
        containerData.appendChild(label);
        containerData.appendChild(input);
        modal.appendChild(containerData);
    }
    
    modal.setAttribute('style', 'display: flex;')

    const buttonUpdate = CreateButton('Atualizar', 'update-company-modal');
    buttonUpdate.addEventListener('click', () => {
        const modalCategoryName = document.getElementById('categorySelectionField').value;

        const categoryData = categories.filter( item => item.name == modalCategoryName)[0];

        const modalUid = document.getElementsByName('modal-uid')[0];
        const modalAdrdess = document.getElementsByName('modal-address')[0]; 
        const modalPhone = document.getElementsByName('modal-phone')[0]; 
        const modalName = document.getElementsByName('modal-name')[0];
        const modalCategoryId = categoryData.uid; 
        const modalPostalCode = document.getElementsByName('modal-postal_code')[0]; 
        const modalEmail = document.getElementsByName('modal-email')[0]; 
        const updateData = {
            uid: modalUid.value, 
            address: modalAdrdess.value, 
            phone: modalPhone.value, 
            name: modalName.value, 
            categoryUid: modalCategoryId, 
            postal_code: modalPostalCode.value, 
            email: modalEmail.value 
        };
        UpdateCompany(updateData);
        modal.setAttribute('style', 'display: none');
        Page.companiesList();
    })

    modal.appendChild(buttonUpdate);	

    const buttonCancel = CreateButton('Cancelar', 'delete-company-modal');
    buttonCancel.addEventListener('click', () => {
        modal.setAttribute('style', 'display: none');
    })
    modal.appendChild(buttonCancel);
}

async function DeleteCategory(uid) {
    if (confirm("Deseja realmente deletar essa categoria?")) { 
        CallDeleteService(uid, 'category')  
    }   
}    

async function DeleteCompany(uid) {
    if (confirm("Deseja realmente deletar esse estabelecimento?")) {  
        CallDeleteService(uid, 'company')  
    }   
}    

async function CallDeleteService(uid, type){
        if (type == 'category') {
            await DeleteCategories(uid);
            setTimeout((() => {
                Page.categoryList(); 
            }), 1000)            
        }
        else {
            await DeleteCompanies(uid);
            setTimeout((() => {
                Page.companiesList(); 
              }), 1000)            
        }
    }