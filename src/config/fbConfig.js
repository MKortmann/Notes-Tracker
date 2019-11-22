import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"


// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyD0H1WVBIhIFBsAPgdxsh9Evzc5R5O3r-k",
  authDomain: "notes-tracker-d796b.firebaseapp.com",
  databaseURL: "https://notes-tracker-d796b.firebaseio.com",
  projectId: "notes-tracker-d796b",
  // storageBucket: "notes-tracker-d796b.appspot.com",
  // messagingSenderId: "10466260938",
  // appId: "1:10466260938:web:d3c9eeb90cb3b8c27ec133",
  // measurementId: "G-BJEQKX44B3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export default firebase;
