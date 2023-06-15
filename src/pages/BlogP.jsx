import BlogPosts from "../components/blog/BlogPosts";
import FilterPosts from "../components/blog/FilterPosts";

function BlogP() {
  return (
    <div id="blog-warning">
      <h1>Blog</h1>{" "}
      <div className="login-test">
        {" "}
        <h2 className="wip">
          ⚠️ This blog is a work in progress.
          <br />
          Follow progress here:{" "}
          <a
            href="https://github.com/troskan/BlogManagementAPI"
            target="_blank"
          >
            Github
          </a>
        </h2>
      </div>
      <h4>
        <a href="/login">Login</a>
      </h4>
      {/* <BlogItems /> */}
      <FilterPosts />
      <BlogPosts />
    </div>
  );
}

export default BlogP;
