import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaAddressBook } from "react-icons/fa";
import TableData from "./TableData";

const Table = () => {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
    console.log(dataTable);
  }, []);
  const column = [
    { heading: "Name", value: "name" },
    { heading: "Email", value: "email" },
    { heading: "Phone", value: "phone" },
    { heading: "City", value: "address.city" },
  ];
  return (
    <div>
      <TableData data={dataTable} column={column}></TableData>
    </div>
  );
};

export default Table;
