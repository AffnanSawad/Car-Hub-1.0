// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfTyJHwHj7lRvNKFBzUo62yeEMw-NIS5Q",
  authDomain: "car-hub-1-c89ca.firebaseapp.com",
  projectId: "car-hub-1-c89ca",
  storageBucket: "car-hub-1-c89ca.appspot.com",
  messagingSenderId: "498358379267",
  appId: "1:498358379267:web:14578d074e3a885a1bbf36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;