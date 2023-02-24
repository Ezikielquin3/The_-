
var firebaseConfig = {
    apiKey: "AIzaSyDy-YwzZAD-7kwfXJIDkYyl-pChGqOdr54",
    authDomain: "the-950ec.firebaseapp.com",
    databaseURL: "https://the-950ec-default-rtdb.firebaseio.com",
    projectId: "the-950ec",
    storageBucket: "the-950ec.appspot.com",
    messagingSenderId: "921933112776",
    appId: "1:921933112776:web:4a9093a12226845ecb0cfd",
    measurementId: "G-XNLKNENNS7"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  // Initialize variables 
  const auth = firebase.auth()
  const database = firebase.database()

  //Set up our register function 
  function register(){
    // Get all our input fields 
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    if(validate_email(email) == false || validate_password(password) == false) {
     alert ('Email or Password is Invalid')
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

  // Validate input fields 

  function validate_email(email){
   expression = /^[^@]+@\w+(\.\w+)+\w$/
   if(expression.test(email)== true){
    // Email is good 
    return true 
   } else {
    //Email is not good 
    return false
   }
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


