import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCP71NEsMqTzTHVnZJe2qSup8oktdGmWWY",
    authDomain: "marnnn-todo-app.firebaseapp.com",
    databaseURL: "https://marnnn-todo-app.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Graham',
    age: 28
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

var newTodosRef = todosRef.push({
  text: 'Walk the dog'
});

console.log(newTodosRef.key)
