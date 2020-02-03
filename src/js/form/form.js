const form = document.getElementById('form');
const userNameInput = form.querySelector('#form__user-name');
const userTelInput = form.querySelector('#form__user-tel');
const usersList = document.getElementById('users-table__body');

form.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
  const userName = userNameInput.value;
  const userTel = userTelInput.value;
  [userNameInput.value, userTelInput.value] = ['', ''];
  addUser(userName, userTel);

  event.preventDefault();
}


import { rowEditButtonClickHandler } from '../users-table/row__edit';
import { rowRemoveButtonClickHandler } from '../users-table/row__remove';

function addUser(userName, userTel) {
  console.log(userName,  userTel);
  const user = document.createElement('tr');
  user.classList.add('users-table__row', 'row');
  user.innerHTML = `
    <td class="row__name">${userName}</td>
    <td class="row__tel">${userTel}</td>
    <td><button class="row__edit">Edit</button></td>
    <td><button class="row__remove">Remove</button></td>
  `;
  usersList.append(user);

  // add listeners so new buttons will work properly
  const rowEditButton = user.querySelector('.row__edit');
  const rowRemoveBtn = user.querySelector('.row__remove');
  rowEditButton.addEventListener('click', rowEditButtonClickHandler, { once: true });
  rowRemoveBtn.addEventListener('click', rowRemoveButtonClickHandler, );
}
