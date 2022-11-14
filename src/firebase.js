// import firebase from 'firebase'
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyA0Fqkic4U57-qy3p2xF4E82gOY1q7CZIQ",
    authDomain: "info-channel-1ce7c.firebaseapp.com",
    projectId: "info-channel-1ce7c",
    storageBucket: "info-channel-1ce7c.appspot.com",
    messagingSenderId: "367508275758",
    appId: "1:367508275758:web:9f7013ded68fd560bf55bf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;