const validationInput = document.getElementById("validation-input");
validationInput.addEventListener("blur", validateInput);

function validateInput() {
  const expectedLength = parseInt(validationInput.getAttribute("data-length"));

  const inputValue = validationInput.value;

  if (inputValue.length === expectedLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
}
