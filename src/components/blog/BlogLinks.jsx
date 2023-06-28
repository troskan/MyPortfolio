import React, { useState, useEffect } from "react";
import "../../css/Blog/blog_links.css";

const BlogLinks = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch("https://blogweb.azurewebsites.net/api/Post")
      .then((response) => response.json())
      .then((data) => setBlogPosts(data));
  }, []);

  return (
    <ul className="blog-links">
      <h3>Latest Posts</h3>
      {blogPosts.map((post) => (
        <li>
          <a key={post.postID} href={`#${post.postID}`}>
            {`#${post.postID}: ${post.title}`}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default BlogLinks;
