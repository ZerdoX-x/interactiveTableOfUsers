const form = document.getElementById('form');
export { form };
const userNameInput = form.querySelector('#form__user-name');
const userTelInput = form.querySelector('#form__user-tel');
const usersList = document.getElementById('users-table__body');

form.addEventListener('submit', formSubmitHandler);

import { validateForm } from './form-validation';
import { showError, clearErrors } from './show-error';

function formSubmitHandler(event) {
  event.preventDefault();
  const { userName, userTel } = formatUserValues(userNameInput.value, userTelInput.value);
  const { errors: formErrors, isValid: isFormValid } = validateForm(userName,  userTel);
  if (isFormValid) {
    [userNameInput.value, userTelInput.value] = ['', ''];
    addUser(userName, userTel);
    clearErrors();
  } else {
    showError(formErrors);
  }
}

function formatUserValues(userName, userTel) {
  [userName, userTel] = [userName.trim(), userTel.trim()];
  userName = userName.split(' ')
    .map(word => word.replace(/^./u, char => char.toUpperCase())) // uppercase first char
    .map(word => word.replace(/(?<=^.)(.*)/u, char => char.toLowerCase())) // lowercase other chars
    .join(' ');
  return { userName, userTel };
}

import { rowEditButtonClickHandler } from '../users-table/edit';
import { rowRemoveButtonClickHandler } from '../users-table/remove';

function addUser(userName, userTel) {
  const user = document.createElement('tr');
  user.classList.add('users-table__row', 'row');
  user.innerHTML = `
    <td class="row__name">${userName}</td>
    <td class="row__tel">${userTel}</td>
    <td><button class="row__edit" title="Edit">Edit</button></td>
    <td><button class="row__remove" title="Remove">Remove</button></td>
  `;
  usersList.append(user);

  // add listeners so new buttons will work properly
  const rowEditButton = user.querySelector('.row__edit');
  const rowRemoveBtn = user.querySelector('.row__remove');
  rowEditButton.addEventListener('click', rowEditButtonClickHandler, { once: true });
  rowRemoveBtn.addEventListener('click', rowRemoveButtonClickHandler, );
}
