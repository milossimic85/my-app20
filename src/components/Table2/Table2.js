import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TableData2 from "./TableData2";
import Pagination from "../Pagination";
import classes from "./Table2.module.css";
const Table2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response);
    setDataTable(response.data);
    console.log(dataTable);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(indexOfFirstPost, indexOfLastPost);

  const column = [
    { heading: "Id", value: "id", sort: true },
    { heading: "Title", value: "title" },
    { heading: "Price", value: "price" },
    { heading: "Description", value: "description" },
    { heading: "Category", value: "category" },
    { heading: "Rate", value: "rating.rate" },
    { heading: "Count", value: "rating.count" },
    { heading: "Image", value: "image" },
  ];

  const filteredData = dataTable.filter((item, column) => {
    return search.toLowerCase() === ""
      ? item
      : item.title.toLowerCase().includes(search) ||
          item.description.toLowerCase().includes(search) ||
          item.category.toLowerCase().includes(search);
  });
  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div>
      <form className={classes.form}>
        <input
          className={classes.field}
          placeholder="Search"
          onChange={(event) => {
            setSearch(event.target.value);
            console.log(search);
          }}
        ></input>
      </form>
      <div>
        <TableData2
          className={classes.table}
          data={currentPosts}
          column={column}
        />
      </div>
      <div className={classes.pagination}>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={dataTable.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Table2;
