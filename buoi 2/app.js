import { auth, createUser } from "./firebaseConfig.js";

const button = document.querySelector(".login");
button.addEventListener("click", function () {
  const email = document.querySelector("#form2Example11").value;
  const password = document.querySelector("#form2Example22").value;
  createUser(auth, email, password);
});
