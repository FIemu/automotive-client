import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAW-9xVHyP70ZA4Cbk-OYlwcC3xr8hIZLA",
    authDomain: "automotive-auth-a7469.firebaseapp.com",
    projectId: "automotive-auth-a7469",
    storageBucket: "automotive-auth-a7469.appspot.com",
    messagingSenderId: "36079819602",
    appId: "1:36079819602:web:6f5097714e5291ad59788b"
  };

const App = initializeApp(firebaseConfig);
const auth = getAuth(App);

export default auth;