import React from "react";
import classes from "./Background.module.css";
import backgroundImage from "../assets/Ra.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Background = () => {
  return (
    <div className={classes.img}>
      <figure className="position-relative">
        <img
          className={classes.image1}
          src={backgroundImage}
          alt="background"
        ></img>
        <figcaption>
          <h1>My project</h1>
          Welcome to your amazing app. Feel free to login and start managing
          your projects and clients.
        </figcaption>
      </figure>
    </div>
  );
};
export default Background;
