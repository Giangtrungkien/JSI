import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-SERVICE.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCOsRmVijgRAQTGdXqvCnBVTcQXYtgh99k",
  authDomain: "jsi-tt.firebaseapp.com",
  projectId: "jsi-tt",
  storageBucket: "jsi-tt.appspot.com",
  messagingSenderId: "1013603495537",
  appId: "1:1013603495537:web:3adb1dd50b16d024a735d0",
  measurementId: "G-F5YTF0BTNC",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const createUser = (auth, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      alert("Dang ky thanh cong");
      location.href = "index.html";
    })
    .catch((error) => {
      alert("Dang ky that bai");
      console.log(error.code);
    });
};
export const signInUser = (auth, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Dang nhap thanh cong");
      location.href = "home.html";
      localStorage.setItem("signIn", true);
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      alert("Dang nhap that bai");
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};
//   createUserWithEmailAndPassword(auth, email, password);
