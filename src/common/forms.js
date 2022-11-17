function createRows (rowName) {
    const rows = document.createElement('div');
    rows.classList.add('div');
    rows.setAttribute('name', rowName);
    return rows;
}


function createFields ({fieldName, title, inputType = 'text', inputName}) {
    const field = document.createElement('field');
    field.classList.add('field');
    field.setAttribute('name', fieldName);
    const titleElement = document.createElement('h3');
    titleElement.setAttribute('name', 'label');
    titleElement.textContent = title +':';
    field.appendChild(titleElement);
    const input = document.createElement('input');
    input.type = inputType;
    input.name = inputName;
    field.appendChild(input)
    return field;
}