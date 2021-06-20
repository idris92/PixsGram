 import firebase from 'firebase/app'
 import 'firebase/storage'
 import  'firebase/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC6Kt9ZFmiA6_C1dpJqd8mZ2GVZfsmX4sc",
    authDomain: "firegram-5809f.firebaseapp.com",
    projectId: "firegram-5809f",
    storageBucket: "firegram-5809f.appspot.com",
    messagingSenderId: "740461338329",
    appId: "1:740461338329:web:5aa8ef90995db7f23de8c8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};