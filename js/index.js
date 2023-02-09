import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);