import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
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
    })
    .catch((error) => {
      alert("Dang ky that bai");
      console.log(error.code);
    });
};
//   createUserWithEmailAndPassword(auth, email, password);
