import BlogPosts from "../components/blog/BlogPosts";
import FilterPosts from "../components/blog/FilterPosts";
import "../css/Blog/blog_structure.css";
import BlogLinks from "../components/blog/BlogLinks";
import { Filter } from "@mui/icons-material";

function BlogP() {
  return (
    <div className="blog-holder">
      <h1>Blog</h1>{" "}
      <div className="blog-content">
        <aside> </aside>

        <BlogPosts />
        <aside id="blog-aside-right">
          <button id="login-button">
            <a href="/login">Login</a>
          </button>
          <BlogLinks />
        </aside>
      </div>
      <footer>
        <button id="top-button">
          <a href="#">Top of page</a>
        </button>
      </footer>
      <button id="login-button-bottom">
        <a href="/login">Login</a>
      </button>
    </div>
  );
}

export default BlogP;
