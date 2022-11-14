import React from "react";
import classes from "./Header.module.css";
import { useHistory } from "react-router-dom";
import AuthContext from "./store/auth-context";
import { useContext } from "react";

const Header = () => {
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
                history.push("/table2");
              }}
            >
              Table 2
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                history.push("/table");
              }}
            >
              Table
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                history.push("/start");
              }}
            >
              StartPage
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                AuthCtx.logout();
                history.push("/");
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
