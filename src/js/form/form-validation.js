const userNameFormat = /^([a-z]|[а-я]){2,} *([a-z]|[а-я]){2,}$/iu;
// regular expression for phone number has taken from here - https://habr.com/ru/post/110731/
const userTelFormat = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;
function validateForm(userName, userTel) {
  const errors = [];
  if (!(userNameFormat.test(userName))) {
    errors.push(`
      Pattern for name: Aa-Zz, Аа-Яя, space<br>
      Example: Ed Davis
    `);
  } if (!(userTelFormat.test(userTel))) {
    errors.push(`
      Pattern for number: 0-9, brackets, dashes, plus<br>
      Example: +7(932)-481-39-41
    `);
  }
  return {
    isValid: errors.length === 0,
    errors,
  };
}

export { validateForm };
