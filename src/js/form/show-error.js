const errorElement = document.getElementById('form__error');
function showError(error) {
  errorElement.innerHTML = error.join('<br> ');
}
function clearErrors() {
  errorElement.innerHTML = '';
}

export { showError, clearErrors };
