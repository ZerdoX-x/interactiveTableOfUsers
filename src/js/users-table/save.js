import { rowEditButtonClickHandler } from './edit';
import { validateForm } from '../form/form-validation';
import { showError, clearErrors } from '../form/show-error';

function rowSaveButtonClickHandler(userNameEditable, userTelEditable) {

  const currentRow = this.parentElement.parentElement;
  // validate and replace input values with plain text
  const userName = createValueElement(userNameEditable, 'row__name');
  const userTel = createValueElement(userTelEditable, 'row__tel');
  const { errors: formErrors, isValid: isFormValid } = validateForm(userName.innerHTML,  userTel.innerHTML);
  if (isFormValid) {
    clearErrors();
    currentRow.replaceChild(userName, userNameEditable);
    currentRow.replaceChild(userTel, userTelEditable);
    // change the button
    this.innerHTML = 'Edit';
    this.title = 'Edit';
    this.classList.add('row__edit');
    this.addEventListener(
      'click',
      rowEditButtonClickHandler,
      { once: true },
    ); // pass handling to EditButtonClickHandler
  } else {
    showError(formErrors);
    this.addEventListener(
      'click',
      rowSaveButtonClickHandler.bind(this, userNameEditable, userTelEditable),
      { once: true },
    );  /*add handler once again because it was
        added only with once flag in edit.js*/
  }

}

function createValueElement(element, classList) {
  const valueElement = document.createElement('td');
  valueElement.innerHTML = element.value.trim();
  valueElement.classList = classList;

  return valueElement;
}

export { rowSaveButtonClickHandler };
