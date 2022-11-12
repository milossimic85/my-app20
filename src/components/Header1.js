import React from "react";
import classes from "./Header.module.css";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

const Header1 = () => {
  const AuthCtx = useContext(AuthContext);
  const history = useHistory();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Header</div>
      <nav>
        <ul className={classes.actions}>
          <li>
            <button
              onClick={() => {
                history.push("/login");
              }}
            >
              Back to start!
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header1;
