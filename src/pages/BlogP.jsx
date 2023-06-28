import BlogPosts from "../components/blog/BlogPosts";
import FilterPosts from "../components/blog/FilterPosts";
import "../css/Blog/blog_structure.css";
import BlogLinks from "../components/blog/BlogLinks";
import { Filter } from "@mui/icons-material";

function BlogP() {
  return (
    <div className="blog-holder">
      <h1>Blog</h1> <a href="/login">Login</a>
      <div className="blog-content">
        <aside></aside>
        <BlogPosts />
        <aside id="blog-aside-right">
          <BlogLinks />
        </aside>
      </div>
    </div>
  );
}

export default BlogP;
