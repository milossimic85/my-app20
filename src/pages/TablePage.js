import React, { Fragment } from "react";
import Header1 from "../components/Header1";
import Table from "../components/Table/Table";
import TableData from "../components/Table/TableData";
import classes from "./TablePage.module.css";
import Pagination from "../components/Pagination";

const TablePage = () => {
  return (
    <div className="place">
      <div className={classes.header}>
        <Header1 />
      </div>
      <div className="container mt-5">
        <div className={classes.table}>
          <Table />
        </div>
      </div>
      <div className={classes.footer}>
        <p>Design by Milos</p>
      </div>
    </div>
  );
};

export default TablePage;
