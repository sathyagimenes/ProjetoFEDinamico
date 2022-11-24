function createRows(rowName) {
  const rows = CreateElementWithAttribute('div', 'name', rowName);
  rows.classList.add('div');
  return rows;
}

function createFields({ fieldName, title, inputType = 'text', inputName }) {
  const field = CreateElementWithAttribute('fieldset', 'name', fieldName);
  field.classList.add('field');
  const titleElement = CreateElementWithAttribute('h3', 'name', 'label');
  titleElement.textContent = title + ':';
  field.appendChild(titleElement);
  const input = CreateElementWithAttribute('input', 'name', inputName);
  input.type = inputType;
  input.name = inputName;
  field.appendChild(input);
  return field;
}
