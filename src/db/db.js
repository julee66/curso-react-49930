import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB991gTtF_1tSGzpgDj1_u6rMT1q3JpTBA",
    authDomain: "fitlife-49930.firebaseapp.com",
    projectId: "fitlife-49930",
    storageBucket: "fitlife-49930.appspot.com",
    messagingSenderId: "1027760230432",
    appId: "1:1027760230432:web:64878b052065a098cf6c45"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db