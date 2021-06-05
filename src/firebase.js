import firebase from "firebase";
  
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDYBhEWDlVqc77HPu-thSBk__Yngt6vSdo",
    authDomain: "instagram-clone-react-5c6aa.firebaseapp.com",
    projectId: "instagram-clone-react-5c6aa",
    storageBucket: "instagram-clone-react-5c6aa.appspot.com",
    messagingSenderId: "881362888776",
    appId: "1:881362888776:web:439665142a3d6da83b507d",
    measurementId: "G-EWKTX96WLV"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };