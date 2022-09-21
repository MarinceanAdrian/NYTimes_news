// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj6NhMOvdZLO8RhO7AXje3ORy2SuAhAyk",
  authDomain: "ny-times-top-stories.firebaseapp.com",
  projectId: "ny-times-top-stories",
  storageBucket: "ny-times-top-stories.appspot.com",
  messagingSenderId: "1003231622608",
  appId: "1:1003231622608:web:49ef3ebfef63c5762235d5",
  measurementId: "G-7SW4VQST0S",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// this returns all the data we need from the user
export const signInWithFirebase = async () => {
  try {
    const user = await signInWithPopup(auth, provider);
    console.log('signInWithPopup', user);
    return user.user;
  } catch (err) {
    console.log("firebase fetching error", err);
  }
};
