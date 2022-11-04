import React, { Fragment } from "react";
import LoginForm from "../components/LoginForm";
import Background from "../components/Background";

const WelcomePage = () => {
  return (
    <Fragment>
      <Background />
      <LoginForm />
    </Fragment>
  );
};

export default WelcomePage;
