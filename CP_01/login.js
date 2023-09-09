import { auth, signInUser } from "./firebaseConfig.js";

const button = document.querySelector(".login");
button.addEventListener("click", function () {
  const email = document.querySelector("#form3Example3").value;
  const password = document.querySelector("#form3Example4").value;
  signInUser(auth, email, password);
});
