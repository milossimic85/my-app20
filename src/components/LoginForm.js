import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./LoginForm.module.css";
import { FaStepForward } from "react-icons/fa";
import { Container } from "react-bootstrap";

const LoginForm = () => {
  const history = useHistory();
  const [login, setLogin] = useState(false);
  const inputUserNameRef = useRef();
  const inputPasswordRef = useRef();
  const [message, setMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const username = inputUserNameRef.current.value;
    const password = inputPasswordRef.current.value;

    if (!username) {
      setMessage("Required point");
    }

    console.log({ username, password });

    history.push("/start");

    //const response = fetch("http://localhost:3003/login", {
    // method: "POST",
    // body: JSON.stringify({
    //  username: username,
    //  password: password,
    // }),
    // headers: {
    //  "Content-Type": "aplication/json",
    // },
    //});
    // const userData = response.json();
    // console.log(userData);
  };

  return (
    <div className={classes.container}>
      <form className="form" onSubmit={submitHandler}>
        <h1>Sign In</h1>
        <p>
          Welcome, please login or <a href="#">sign up</a> for a new account.
        </p>
        <div className={classes.inputs}>
          <input
            type="username"
            placeholder="Username"
            ref={inputUserNameRef}
          ></input>
          {message}
          <input
            type="password"
            placeholder="Password"
            ref={inputPasswordRef}
          ></input>
        </div>
        <div className={classes.actions}>
          <p>Forgot Password?</p>
          <button>
            <span>
              <FaStepForward />
            </span>
            <p>Sign In</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
