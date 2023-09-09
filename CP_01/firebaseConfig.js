import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBsZtMFYigK2f2RpB0UCGMXmT4jqqtTIN4",
  authDomain: "cp01-kien.firebaseapp.com",
  projectId: "cp01-kien",
  storageBucket: "cp01-kien.appspot.com",
  messagingSenderId: "301102889733",
  appId: "1:301102889733:web:bceac1f3ea8306e137956c",
  measurementId: "G-9W02MQ8190",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

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
