import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgKCNGV48yd0uH9AizELKmwnm7WQhxL4Q",
  authDomain: "zetizo.firebaseapp.com",
  projectId: "zetizo",
  storageBucket: "zetizo.firebasestorage.app",
  messagingSenderId: "979507472726",
  appId: "1:979507472726:web:02520123357e853c060ef7",
  measurementId: "G-KQSE14S6LC"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const provider =new GoogleAuthProvider()

export {auth,provider}

