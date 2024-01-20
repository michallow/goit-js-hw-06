const loginForm = document.querySelector(".login-form");
const userCredentials = {};

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
  } else {
    
    userCredentials.email = email;
    userCredentials.password = password;

    console.log("User Credentials:", userCredentials);
  }

  form.reset();
}
