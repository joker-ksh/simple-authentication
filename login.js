//first change 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD3WPGo4C27MBGPF24fR39g6FbmjjNS-k",
  authDomain: "simplelogin-33e71.firebaseapp.com",
  projectId: "simplelogin-33e71",
  storageBucket: "simplelogin-33e71.appspot.com",
  messagingSenderId: "654319566929",
  appId: "1:654319566929:web:a9dcddac1ae23712cef870",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let signin = document.getElementById("in-btn");
signin.addEventListener("click", function (event) {
  const e = document.getElementById("Email");
  const p = document.getElementById("pass");
  e.value = "";
  p.value = ""; 
  let tittle = document.getElementById("tittle");
  window.nameField.style.maxHeight = "0";
  let text = "Sign In";
  tittle.innerText = text;
  
  const email1 = document.getElementById("Email").value;
  const password1 = document.getElementById("pass").value;
  if (email1 != "" || password1 != "") {
    signInWithEmailAndPassword(auth, email1, password1)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Signed in");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
});


