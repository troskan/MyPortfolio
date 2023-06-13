import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import "../../css/Blog/blog.css";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);
  //Modal States
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  useEffect(() => {
    fetch("https://blogweb.azurewebsites.net/api/Post")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
        setIsLoading = false;
        console.error("Error:", error);
      });
  }, []);
  //Modal
  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  if (isError) {
    return (
      <div className="center">
        <br />
        <h2 className="gradient-text">
          Blog posts could not be loaded, please try again soon.
        </h2>
      </div>
    );
  } else if (isLoading) {
    return (
      <div className="center">
        <Stack sx={{ width: "30%", color: "grey.500" }} spacing={1}>
          <h2>Loading posts..</h2>
          <LinearProgress color="success" />
        </Stack>
      </div>
    );
  }

  return (
    <div>
      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img className="modal-content" src={modalImage} alt="Enlarged" />
        </div>
      )}

      {[...posts].reverse().map((post) => (
        <div className="blog-container" key={post.postID}>
          <div className="blog-item" key={post.postID}>
            <p>
              Posted by: {post.userName}, Posted on: {post.datePostedFormatted}
            </p>
            <p>Category: {post.categoryName}</p>
            <h2>{post.title}</h2>
            <p>{post.content}</p>

            <div>
              {post.imageUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Blog image ${index}`}
                  onClick={() => openModal(url)}
                  id="blog-pic"
                />
              ))}
            </div>

            <div>
              <button className="blog-button">
                <ThumbUpIcon />
              </button>
            </div>

            <div className="comment-container">
              <label htmlFor="comments">comments</label>

              <textarea
                id="comment"
                name="comment"
                className="comment-textarea"
                label="comments"
                placeholder=" Write your comment here!"
              ></textarea>
              <button className="submit-button">Submit</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
