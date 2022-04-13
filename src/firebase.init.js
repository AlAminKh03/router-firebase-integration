// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBe-iVg9j-LFWmq1RShXWWJY8DsOcbRrQI",
    authDomain: "router-firebase-intregra-191c9.firebaseapp.com",
    projectId: "router-firebase-intregra-191c9",
    storageBucket: "router-firebase-intregra-191c9.appspot.com",
    messagingSenderId: "426427962296",
    appId: "1:426427962296:web:92b4621b1ad83347bb354d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app