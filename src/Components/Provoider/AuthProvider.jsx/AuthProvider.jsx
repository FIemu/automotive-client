import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../Cofiq/FirebaseConfiq";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  console.log(user)

  // google popUp sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

    // logOut
    const userLogOut = ()=>{
        return signOut(auth)
    }


  // user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const authentication = {
    googleSignIn,
    createUser,
    userLogin,
    userLogOut,
    user
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
