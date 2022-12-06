// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB2xjfUueimfKZRyGzL9GKzXv1XNFGpEmI",
    authDomain: "learning-fb-todo-app.firebaseapp.com",
    projectId: "learning-fb-todo-app",
    storageBucket: "learning-fb-todo-app.appspot.com",
    messagingSenderId: "1054336048756",
    appId: "1:1054336048756:web:b0c8cb4bb303ac28bbfb21",
    measurementId: "G-4BF9ZX0RH7"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();

  export default db;