
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBQfa8c27R3Gxu3FJpDIwiyM-wqVMF86IM",
    authDomain: "pro1-a38cb.firebaseapp.com",
    projectId: "pro1-a38cb",
    storageBucket: "pro1-a38cb.appspot.com",
    messagingSenderId: "853286455604",
    appId: "1:853286455604:web:1ad8850b8dbbacef673d61",
    measurementId: "G-XJHGQK3LY7"
  };

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
