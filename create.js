// Core JS used for making the page
// let signup = document.getElementById("up-btn");
// let signin = document.getElementById("in-btn");
// let nameField = document.getElementById("nameField");
// let tittle = document.getElementById("tittle");

// signin.onclick = function () {
//   nameField.style.maxHeight = "0";
//   let text = "Sign In";
//   tittle.innerText = text;
// };

// signup.onclick = function () {
// nameField.style.maxHeight = "60px";
// let text = "Sign Up";
// tittle.innerText = text;
// };

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
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
let nameField = document.getElementById("Name");


let signup = document.getElementById("up-btn");
signup.addEventListener("click", function (event) {
  const email = document.getElementById("Email").value;
  const password = document.getElementById("pass").value;

  // let nameField = document.getElementById("Name");
  window.nameField.style.maxHeight = "60px"; //this is how to make a global varible in two seperate js files
  let text = "Sign Up";
  let tittle = document.getElementById("tittle");

  if (email != "" || password != "") {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("Signed up");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error: " + errorMessage);
        // ..
      });
  }
});
