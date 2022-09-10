import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPhQ47we7S0T8w9gyt90a5XiCDIl6qwDY",
  authDomain: "devtube-5e9c7.firebaseapp.com",
  projectId: "devtube-5e9c7",
  storageBucket: "devtube-5e9c7.appspot.com",
  messagingSenderId: "35478302539",
  appId: "1:35478302539:web:e8f352e04982f50a5382ce",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app;
