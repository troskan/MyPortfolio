import { CheckBox } from "@mui/icons-material";
import React, { useState, useEffect } from "react";

import "../../css/Blog/postcreator.css";

function PostCreator() {
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch("https://blogweb.azurewebsites.net/api/Post");
    const data = await response.json();
    setPosts(data);
  };

  const handleClick = () => {
    setShowPosts(!showPosts);
  };
  function formatDate(dateString) {
    let date = new Date(dateString);
    return `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }
  return (
    <div>
      <div className="creator-container">
        <div className="button-container">
          <button>Create New Post</button>
          <button onClick={handleClick}>Select Existing Post</button>
        </div>
        {showPosts && (
          <table>
            <thead>
              <tr>
                <th>Select</th>
                <th>Post ID</th>
                <th>Title</th>
                <th>Date Posted</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={post.postID}>
                  <td>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                  </td>
                  <td>{post.postID}</td>
                  <td>{post.title}</td>
                  <td>{formatDate(post.datePosted)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default PostCreator;
