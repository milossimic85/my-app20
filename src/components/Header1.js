import React from "react";
import classes from "./Header.module.css";
import { useHistory } from "react-router-dom";

const Header1 = () => {
  const history = useHistory();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Header</div>
      <nav>
        <ul className={classes.actions}>
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

export default Header1;
