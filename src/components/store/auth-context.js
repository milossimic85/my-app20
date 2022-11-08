import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/FirebaseInit";

const AuthContext = createContext({
  login: (email, password) => {},
  logout: () => {},
  signup: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const loginHandler = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutHandler = () => {};

  const signupHandler = ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthContext.Provider
      value={{
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
