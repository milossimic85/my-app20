import React, { createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/FirebaseInit";
import { useState } from "react";

const AuthContext = createContext({
  isLogged: "",
  login: (email, password) => {},
  logout: () => {},
  signup: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const loginHandler = (email, password) => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    setIsLogged(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutHandler = () => {};

  const signupHandler = ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged: isLogged,
        login: loginHandler,
        logout: logoutHandler,
        signup: signupHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
