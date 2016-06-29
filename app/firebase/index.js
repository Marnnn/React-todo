import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCP71NEsMqTzTHVnZJe2qSup8oktdGmWWY",
    authDomain: "marnnn-todo-app.firebaseapp.com",
    databaseURL: "https://marnnn-todo-app.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
