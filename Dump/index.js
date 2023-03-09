import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


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

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
