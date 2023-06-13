import React, { useState, useEffect } from "react";
import "../../css/Blog/postcreator.css";

function PostCreator() {
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const jwt = "your_jwt_token_here";

  // State for form inputs
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userID, setUserID] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [imageUrls, setImageUrls] = useState([""]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch("https://blogweb.azurewebsites.net/api/Post");
    const data = await response.json();
    setPosts(data);
  };

  const handleCreatePost = async () => {
    const url = "http://localhost:5291/api/Post/test";

    const newPostData = {
      title,
      content,
      userID: Number(userID),
      categoryID: Number(categoryID),
      imageUrls: imageUrls.filter((url) => url),
      datePosted: new Date().toISOString(),
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(newPostData),
    };

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Validation errors:", errorData.errors);
        return;
      }
      const data = await response.json();
      console.log("HERE IS THE DATA", data);
      fetchPosts();
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleImageUrlChange = (index, value) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = value;
    setImageUrls(newImageUrls);
  };

  const addImageUrlField = () => {
    setImageUrls([...imageUrls, ""]);
  };

  const formatDate = (dateString) => {
    let date = new Date(dateString);
    return `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <div className="creator-container">
      <div className="button-container">
        <button onClick={() => setShowForm(true)}>Create New Post</button>
        <button onClick={() => setShowPosts(!showPosts)}>
          Select Existing Post
        </button>
      </div>

      {showForm && (
        <div className="form-container">
          <form className="input-container">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <input
              type="text"
              placeholder="User ID"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
            <input
              type="text"
              placeholder="Category ID"
              value={categoryID}
              onChange={(e) => setCategoryID(e.target.value)}
            />
            <p>1: Programming, 2: Hobby, 3: News</p>

            {imageUrls.map((imageUrl, index) => (
              <input
                key={index}
                type="text"
                placeholder="Image URL"
                value={imageUrl}
                onChange={(e) => handleImageUrlChange(index, e.target.value)}
              />
            ))}

            <button onClick={addImageUrlField}>Add another image URL</button>

            <button onClick={handleCreatePost}>Submit Post</button>
          </form>
        </div>
      )}

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
                  <input type="checkbox" id="selectPost" name="selectPost" />
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
  );
}

export default PostCreator;
