import Table2 from "../components/Table2/Table2";
import classes from "./TablePage2.module.css";
import Header1 from "../components/Header1";
import React, { useState } from "react";

const TablePage2 = () => {
  return (
    <div className="place">
      <div className={classes.header}>
        <Header1 />
      </div>
      <div className="container mt-5">
        <div className={classes.table}>
          <Table2 />
        </div>
      </div>
      <div className={classes.footer}>
        <p>Design by Milos</p>
      </div>
    </div>
  );
};

export default TablePage2;
