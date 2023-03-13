 // Import the functions you need from the SDKs you need
 import { initializeApp, getApps, getApp } from "../../node_modules/firebase/firebase-app.js";
 import { getDatabase } from "../../node_modules/firebase/firebase-database.js";
 import { getAuth, createUserWithEmailAndPassword } from "../../node_modules/firebase/firebase-auth.js";
     // TODO: Add SDKs for Firebase products that you want to use
     // https://firebase.google.com/docs/web/setup#available-libraries

     // Your web app's Firebase configuration
     // For Firebase JS SDK v7.20.0 and later, measurementId is optional

 const firebaseConfig = initializeApp ({
     apiKey: "AIzaSyDy-YwzZAD-7kwfXJIDkYyl-pChGqOdr54",
     authDomain: "the-950ec.firebaseapp.com",
     databaseURL: "https://the-950ec-default-rtdb.firebaseio.com",
     projectId: "the-950ec",
     appId: "1:921933112776:web:4a9093a12226845ecb0cfd",
     measurementId: "G-XNLKNENNS7"
 });
 
     // Initialize Firebase
 const app = !getApps().length ? initializeApp( config ) : getApp();
     // make auth and database references
 const auth = getAuth (app);
 const database = getDatabase(app);
 database.settings({timestampsInSnapshots: true});

 signUp.addEventListener('submit', (e) => {
     var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;

     createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
             // Signed in 
             const user = userCredential.user;
             alert('user created!');
             // ...
     })
     .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          alert(errorMessage);
          // ..
      });
 })

 export { auth, database };









