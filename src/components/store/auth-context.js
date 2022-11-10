import React, { createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/FirebaseInit";
import { useState } from "react";

const AuthContext = createContext({
  isLogged: false,
  login: (email, password) => {},
  logout: () => {},
  signup: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);

  //useEffect(() => {
  // const storagedInformation = localStorage.getItem("email");
  // console.log(storagedInformation);

  // if (storagedInformation === "1") {
  //  setIsLogged(true);
  //   console.log(isLogged);
  //  }
  // }, [isLogged]);

  const loginHandler = (email, password) => {
    // localStorage.setItem("email", "1");
    // localStorage.setItem("password", password);
    setIsLogged(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutHandler = () => {
    //localStorage.removeItem("email");
    //localStorage.removeItem("password");
  };

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
