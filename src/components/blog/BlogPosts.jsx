import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5291/ahpi/Post")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (isLoading) {
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
        <div key={post.postID}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>Posted by: {post.userName}</p>
          <p>Posted on: {post.datePostedFormatted}</p>
          <p>Category: {post.categoryName}</p>
          <h2>Successfully fetched data from API.</h2>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
