import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
        apiKey: "AIzaSyBHXrMUQ0lnPuUa0Xmidd0uR8O2SlWhdvE",
        authDomain: "norismells.firebaseapp.com",
        databaseURL: "https://norismells.firebaseio.com",
        projectId: "norismells",
        storageBucket: "norismells.appspot.com",
        messagingSenderId: "85576501651"
      }
var fire = firebase.initializeApp(config);

export default fire
