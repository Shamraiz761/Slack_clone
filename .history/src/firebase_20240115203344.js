// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBUKwJ_cpgaAY10Z8FYdqDtP6q4wbr_a2s",
    authDomain: "slack-clone-a8823.firebaseapp.com",
    projectId: "slack-clone-a8823",
    storageBucket: "slack-clone-a8823.appspot.com",
    messagingSenderId: "487451737045",
    appId: "1:487451737045:web:476e2feaec93a103ae9b5c",
    measurementId: "G-0LWJMVWHN5"
    });


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const analytics = getAnalytics(app);

export { auth, provider };
export default db;