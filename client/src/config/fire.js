import firebase from "firebase";

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCXCWq1264u9c-05m8ESW_Zdev24xr3Avg",
    authDomain: "popup-5ed7f.firebaseapp.com",
    databaseURL: "https://popup-5ed7f.firebaseio.com",
    projectId: "popup-5ed7f",
    storageBucket: "popup-5ed7f.appspot.com",
    messagingSenderId: "813009629741"
  };
  const fire = firebase.initializeApp(config);
  export default fire;
