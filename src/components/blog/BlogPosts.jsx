import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    // fetch("https://blogweb.azurewebsites.net/api/Post")
    fetch("http://localhost:5291/api/Post")
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
      {posts.map((post) => (
        <div className="blog-container">
          <div className="blog-item" key={post.postID}>
            <p>
              Posted by: {post.userName}, Posted on: {post.datePostedFormatted}
            </p>
            <p>Category: {post.categoryName}</p>
            <h2>{post.title}</h2>
            <p>{post.content}</p>

            <div>
              {post.imageUrls.map((url, index) => (
                <img key={index} src={url} alt={`Blog image ${index}`} />
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
