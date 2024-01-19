const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
  } else {
    console.log("Email:", `${email}, Password: ${password}`);
  }

//   const formData = {};
//   Array.from(form.elements).forEach((element) => {
//     if (element.type !== "submit" && element.type !== "reset") {
//       formData[element.name] = element.value;
//     }
//   });

//   console.log("Form Data:", formData);
  form.reset();
}
