import { initializeApp } from "../node_modules/firebase/app";
import { getdatabase } from "../node_modules/firebase/database";
import { getauth } from "../node_modules/firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDy-YwzZAD-7kwfXJIDkYyl-pChGqOdr54",
    authDomain: "the-950ec.firebaseapp.com",
    databaseURL: "https://the-950ec-default-rtdb.firebaseio.com",
    projectId: "the-950ec",
    storageBucket: "the-950ec.appspot.com",
    messagingSenderId: "921933112776",
    appId: "1:921933112776:web:4a9093a12226845ecb0cfd",
    measurementId: "G-XNLKNENNS7"
  };
  
  firebase.intializeApp(firebaseConfig);
  
  // Initialize variables 
  const auth = firebase.auth()
  const database = firebase.database()

function register(){
    // Get all our input fields 
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    if(validate_email(email) == false || validate_password(password) == false) {
     alert ('Email or Password is Outta Line!!')
      return
    }
  
    // Move on with Auth 
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
  
      var user = auth.currentUser
  
      // Add this user to Firebase Database 
      var database_ref = database.ref()
  
      //Create User Data 
      var user_data = {
        email : email,
        last_login : Date.now()
      }
      
      database_ref.child('users/' + user.uid).set(user_data)
  
      alert('User Created !!')
    })
   
   
    .catch(function(error) {
    var error_code = error.code 
    var error_message = error.message 
  
    alert(error_message)
    })
  
  }

  function validate_password(password){
    //Firebase only accepts length greater than 6 
    if(password < 6){
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field){
    if(field == null){
      return false
    }
    if (field.length <= 0){
      return false
    } else {
      return true
    }
  
  }

const signupForm = document.querySelector('#signup');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    
    // sign up the user 
    AuthenticatorAssertionResponse.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        const modal = document.querySelector('#modal-signup');
        Map.Modal.getInstance(modal).close();
        signupForm.reset();
    })
})