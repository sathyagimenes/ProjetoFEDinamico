// window.commonForms = {
//     form: (children) => {
//         const form = document.createElement('form');
//         for (const child of children) {
//             form.appendChild(child);
//         }
//         return form;
//     },
// 	field: ({label, name, type = 'text', input}) => {
// 		const field = document.createElement('div');
// 		field.classList.add('field');
// 		const labelField = document.createElement('div');
// 		labelField.classList.add('labelField');
// 		const labelElement = document.createElement('label');
// 		labelElement.textContent = label;
// 		input.setAttribute('type', type);
// 		input.setAttribute('name', name);
// 		field.appendChild(labelField);
// 		labelField.appendChild(labelElement);
// 		field.appendChild(input);
// 		return field;
//     }
// }


window.field = {
	create: ({label, name, type = 'text', input}) => {
		const field = document.createElement('div');
		field.classList.add('field');
		const labelField = document.createElement('div');
		labelField.classList.add('labelField');
		const labelElement = document.createElement('label');
		labelElement.textContent = label;
		input.setAttribute('type', type);
		input.setAttribute('name', name);
		field.appendChild(labelField);
		labelField.appendChild(labelElement);
		field.appendChild(input);
		return field;
	}
};