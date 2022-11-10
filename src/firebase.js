import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6NdzojUt98yNUMlcVr-blKNI3pdEp5Qo",
  authDomain: "auth-login-firebase-2dfee.firebaseapp.com",
  projectId: "auth-login-firebase-2dfee",
  storageBucket: "auth-login-firebase-2dfee.appspot.com",
  messagingSenderId: "797024940028",
  appId: "1:797024940028:web:b808b55879b614c0bd8c79"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default auth;