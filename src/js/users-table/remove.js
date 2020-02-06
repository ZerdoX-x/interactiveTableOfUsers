const rowRemoveButtons = document.getElementById('users-table').querySelectorAll('.row__remove');

for (let button of rowRemoveButtons) {
  button.addEventListener('click', rowRemoveButtonClickHandler, { once: true });
}

function rowRemoveButtonClickHandler() {
  this.parentElement.parentElement.remove();
}

export { rowRemoveButtonClickHandler };
