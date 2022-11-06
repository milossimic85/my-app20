import React from "react";
import Header from "../components/Header";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div className={classes.welcome}>
        <h1>Welcome!!!</h1>
      </div>
    </div>
  );
};

export default LoginPage;
