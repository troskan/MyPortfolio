import React from "react";
import "../../css/Blog/filterposts.css";
const FilterPosts = () => {
  return (
    <div>
      <div className="search-container">
        <div className="search-bar">
          <input placeholder="Search blog"></input>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default FilterPosts;
