import { rowEditButtonClickHandler } from './row__edit';

function rowSaveButtonClickHandler(userNameEditable, userTelEditable) {
  const currentRow = this.parentElement.parentElement;

  // replace input values with plain text
  const userName = createValueElement(userNameEditable, 'row__name');
  const userTel = createValueElement(userTelEditable, 'row__tel');
  currentRow.replaceChild(userName, userNameEditable);
  userTelEditable.parentElement.replaceChild(userTel, userTelEditable);

  // change the button
  this.innerHTML = 'Edit';
  this.classList.add('row__edit');
  this.addEventListener(
    'click',
    rowEditButtonClickHandler,
    { once: true },
  ); // pass handling to EditButtonClickHandler
}

function createValueElement(element, classList) {
  const valueElement = document.createElement('td');
  valueElement.innerHTML = element.value;
  valueElement.classList = classList;

  return valueElement;
}

export { rowSaveButtonClickHandler };
