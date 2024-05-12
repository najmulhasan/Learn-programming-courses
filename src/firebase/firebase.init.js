// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAq3a_45UMyh8IG63-lcn4bX-CL4OFKcP0",
    authDomain: "learning-programming-carrier.firebaseapp.com",
    projectId: "learning-programming-carrier",
    storageBucket: "learning-programming-carrier.appspot.com",
    messagingSenderId: "1068671688597",
    appId: "1:1068671688597:web:ee83a9e9a7af03cd0a209c",
    measurementId: "G-K0PXSL8VMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;