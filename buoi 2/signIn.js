import { auth, createUser, signInUser } from "./firebaseConfig.js";

const button = document.querySelector(".signIn");
button.addEventListener("click", function () {
  const email = document.querySelector("#form3Example3c").value;
  const password = document.querySelector("#form3Example4c").value;
  createUser(auth, email, password);
});
