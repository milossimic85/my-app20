import React, { useContext, useRef, useState } from "react";
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
  const inputUserNameRef = useRef();
  const inputPasswordRef = useRef();
  const inputEmailRef = useRef();
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);

  const authCtx = useContext(AuthContext);

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = inputEmailRef.current.value;
    const password = inputPasswordRef.current.value;
    console.log({ email, password });
    try {
      await authCtx.login(email, password);

      history.push("/login");
    } catch (error) {
      toast.error("Please, insert email and password correctly!");
    }
    inputEmailRef.current.value = "";
    inputPasswordRef.current.value = "";
  };
  const submitHandler1 = async (event) => {
    event.preventDefault();
    //const username = inputUserNameRef.current.value;
    const password = inputPasswordRef.current.value;
    const email = inputEmailRef.current.value;
    console.log({ password, email });
    try {
      await authCtx.signup(email, password);
      toast.success("New user add!");
    } catch (error) {
      toast.error(error.message);
    }
    inputEmailRef.current.value = "";
    inputPasswordRef.current.value = "";
  };

  const closeHandler = () => {
    setShow(false);
  };
  const closeHandler1 = () => {
    setShow(true);
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
          <input type="email" placeholder="Email" ref={inputEmailRef}></input>

          <input
            type="password"
            placeholder="Password"
            ref={inputPasswordRef}
          ></input>
        </div>
        <div className={show ? `${classes.actions}` : `${classes.text1}`}>
          {show && <p className={classes.text}>Forgot Password?</p>}
          {!show && (
            <a href="#" onClick={closeHandler1}>
              Back to login
            </a>
          )}
          <button>
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
