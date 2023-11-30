// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj2W4NOVBUaZWwI63jwVnyAlMNzxPykfc",
  authDomain: "loginregistration-20093.firebaseapp.com",
  projectId: "loginregistration-20093",
  storageBucket: "loginregistration-20093.appspot.com",
  messagingSenderId: "283082575786",
  appId: "1:283082575786:web:dcef569175dde65daea5d3",
  measurementId: "G-GESHTNCP32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
const auth = getAuth();
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

var element = document.getElementById('signUp');

element.addEventListener('click', (e)=>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert('user created');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage);
    });
})
// var firebase = require('firebase');
// var firebaseui = require('firebaseui');
// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//       firebase.auth.EmailAuthProvider.PROVIDER_ID
//     ],
//     // Other config options...
//   });
// // Is there an email link sign-in?
// if (ui.isPendingRedirect()) {
//     ui.start('#firebaseui-auth-container', uiConfig);
//   }
//   // This can also be done via:
//   if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
//     ui.start('#firebaseui-auth-container', uiConfig);
//   }
