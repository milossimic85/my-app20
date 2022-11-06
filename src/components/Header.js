import React from "react";
import classes from "./Header.module.css";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Header</div>
      <nav>
        <ul className={classes.actions}>
          <li>
            <button>InstaPage</button>
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
