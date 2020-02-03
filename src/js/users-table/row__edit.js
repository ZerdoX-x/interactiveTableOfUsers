import { rowSaveButtonClickHandler } from './row__save';

function rowEditButtonClickHandler() {
  const currentRow = this.parentElement.parentElement;
  const userName = currentRow.querySelector('.row__name');
  const userTel = currentRow.querySelector('.row__tel');

  // make values editable (replace text with input field)
  const userNameEditable = createEditableValue(userName, 'row__name-input');
  const userTelEditable = createEditableValue(userTel, 'row__tel-input');
  currentRow.replaceChild(userNameEditable, userName);
  currentRow.replaceChild(userTelEditable, userTel);

  // change the button
  this.innerHTML = 'Save';
  this.classList.add('row__save');
  this.addEventListener(
    'click',
    rowSaveButtonClickHandler.bind(this, userNameEditable, userTelEditable),
    { once: true },
  ); // pass handling to saveButtonClickHandler
}


function createEditableValue(element, classList) {
  const editableValue = document.createElement('input');
  editableValue.value = element.innerHTML;
  editableValue.required = true;
  editableValue.classList = classList;

  return editableValue;
}

export { rowEditButtonClickHandler };
