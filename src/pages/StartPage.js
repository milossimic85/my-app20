import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";
import classes from "./StartPage.module.css";
import Header1 from "../components/Header1";

const { REACT_APP_JSON_PLACEHOLDER } = process.env;

const StartPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setLoading(false);
      setPosts(res.data.slice(0, 100));
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(posts);
  return (
    <div>
      <div className={classes.header}>
        <Header1 />
      </div>
      <div className="container mt-5">
        <h1 className="text-primary mb-3">My Blog</h1>
        {loading && <p>Loading...</p>}
        <Posts posts={currentPosts}></Posts>
        <div className={classes.pagination}>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
      </div>
      <div className={classes.footer}>
        <p>Design by Milos</p>
      </div>
    </div>
  );
};

export default StartPage;
