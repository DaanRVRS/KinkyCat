import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyCgObuuUVKgytm8ozKAdV_HXmySJjE1YA8",
    authDomain: "kinkycat-216e8.firebaseapp.com",
    projectId: "kinkycat-216e8",
    storageBucket: "kinkycat-216e8.appspot.com",
    messagingSenderId: "949576085738",
    appId: "1:949576085738:web:bcf18586cb4c9c75902793",
    measurementId: "G-9THQPTQRQE" 
  })

// used for the firestore refs
export const db = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider();


// here we can export reusable database references
export const postsRef = collection(db, 'Posts')
export const usersRef = collection(db, 'users')