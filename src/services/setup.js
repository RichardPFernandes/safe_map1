import firebase  from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

export const firebaseConfig = {
    apiKey: "AIzaSyCcyJdC-faISpVfVhM4zjuI-38ymzEfcZA",
    authDomain: "safe-map15.firebaseapp.com",
    projectId: "safe-map15",
    storageBucket: "safe-map15.appspot.com",
    messagingSenderId: "744724782862",
    appId: "1:744724782862:web:c50acca6f385b60731815f",
    measurementId: "G-PX2MV0L4M7"
};

if (!firebase.app.length){
    firebase.initializeApp(firebaseConfig)
}