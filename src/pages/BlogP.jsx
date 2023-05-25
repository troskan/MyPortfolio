import BlogItems from "../components/BlogItems";
import BlogPosts from "../components/blog/BlogPosts";
import LoginBox from "../components/blog/LoginBox";

function BlogP() {
  return (
    <div id="blog-warning">
      <h1>Blog</h1>

      <h2 className="wip">
        ⚠️ This blog is a work in progress.
        <br />
        Follow progress here:{" "}
        <a href="https://github.com/troskan/BlogManagementAPI" target="_blank">
          Github
        </a>
      </h2>
      <LoginBox />

      {/* <BlogItems /> */}
      <BlogPosts />
    </div>
  );
}

export default BlogP;
