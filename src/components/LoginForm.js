import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./LoginForm.module.css";
import { FaStepForward } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { auth } from "./firebase/FirebaseInit";
import AuthContext from "./store/auth-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const history = useHistory();
  const [message, setMessage] = useState();
  const [message1, setMessage1] = useState();
  const [show, setShow] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setEmailIsValid(true);
      setPasswordIsValid(true);
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
      console.log(formIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);
  const closeHandler = () => {
    setShow(false);
  };
  const closeHandler1 = () => {
    setShow(true);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const authCtx = useContext(AuthContext);
  const submitHandler = async (event) => {
    event.preventDefault();
    const email = enteredEmail;
    const password = enteredPassword;
    console.log({ email, password });
    try {
      await authCtx.login(email, password);
      history.push("/login");
    } catch (error) {
      toast.error("Please, insert email and password correctly!");
    }
    //inputEmailRef.current.value = "";
    //inputPasswordRef.current.value = "";
  };
  const submitHandler1 = async (event) => {
    event.preventDefault();
    //const username = inputUserNameRef.current.value;
    const password = enteredPassword;
    const email = enteredEmail;
    console.log({ password, email });
    try {
      await authCtx.signup(email, password);
    } catch (error) {
      toast.error(error.message);
    }
    setEnteredEmail("");
    setEnteredPassword("");
  };

  return (
    <div className={classes.container}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form className="form" onSubmit={show ? submitHandler : submitHandler1}>
        <h1>{show ? "Sign In" : "Sign Up"}</h1>
        {show && (
          <p>
            Welcome, please login or{" "}
            <a href="#" onClick={closeHandler}>
              sign up
            </a>{" "}
            for a new account.
          </p>
        )}
        <div className={classes.inputs}>
          <input
            type="email"
            className={
              emailIsValid ? `${classes.input}` : `${classes.emailIsInvalid}`
            }
            placeholder="Email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          ></input>
          {!emailIsValid && (
            <p className={classes.error}>
              <i>*Email must contain @*</i>
            </p>
          )}
          <input
            type="password"
            className={
              passwordIsValid
                ? `${classes.input}`
                : `${classes.passwordIsInvalid}`
            }
            placeholder="Password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          ></input>
        </div>
        {!passwordIsValid && (
          <p className={classes.error}>
            <i>*Password must contain 6 characters*</i>
          </p>
        )}
        <div className={show ? `${classes.actions}` : `${classes.text1}`}>
          {show && <p className={classes.text}>Forgot Password?</p>}
          {!show && (
            <a href="#" onClick={closeHandler1}>
              Back to login
            </a>
          )}
          <button disabled={!formIsValid}>
            <span>
              <FaStepForward />
            </span>
            <p>{show ? "Sign In" : "Sign Up"}</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
