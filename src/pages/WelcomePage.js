import React, { Fragment, useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import Background from "../components/Background";
import "./WelcomePage.module.css";

const WelcomePage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(true);
  console.log(width);
  const handleResize = () => {
    setWidth(window.innerWidth);
    if (width > 800) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [width]);
  return (
    <Fragment>
      {show && <Background />}
      <LoginForm />
    </Fragment>
  );
};

export default WelcomePage;
